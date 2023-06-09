"use client";
import style from "./LoginForm.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import ErrorMessage from "../UI/ErrorMessage";
import Link from "next/link";

export default function LoginForm() {
  const route = useRouter();
  const maxAge = 9;
  const [buttonText, setButtonText] = useState("Login");
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [regError, setregError] = useState(false);

  const [userToken, setUserToken] = useState(undefined);
  const SubmitHanddler = (event) => {
    event.preventDefault();
    setButtonText("PROCESSING...");
    fetch("https://natours-app-xp62.onrender.com/api/v1/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json()) // Parse response as JSON
      .then((data) => {
        if (data.status === "success") {
          setUserToken(data.message);
          setButtonText("Login");
        } else if (data.status === "fail") {
          setregError("Email or Password is incorrect");
          setButtonText("Login");
        } else {
          setregError(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (userToken) {
      Cookies.set("jwt", userToken, {
        expires: maxAge,
        path: "/", // Adjust the path based on your requirements
        secure: true,
      });
      route.push("/");
    }
  }, [userToken]);
  const emailHandller = (event) => {
    const input = event.target.value;
    setUserInfo({ ...userInfo, email: input });
  };
  const passwordHandller = (event) => {
    const input = event.target.value;
    setUserInfo({ ...userInfo, password: input });
  };
  return (
    <form className={style.Form} onSubmit={SubmitHanddler}>
      <div className={style.InputParrent}>
        <div className={style.titleParrent}>
          <h2>Log into your account</h2>
        </div>
        <div className={style.fromContainer}>
          <div>
            <label>E-Mail address</label>
            <input
              onChange={emailHandller}
              required
              placeholder="you@example.com"
              type={"email"}
              className={style.Input}
            ></input>
          </div>
          <div>
            <label>Password</label>
            <input
              onChange={passwordHandller}
              minLength="8"
              required
              placeholder="********"
              type={"password"}
              className={style.Input}
            ></input>
          </div>
          {regError && <ErrorMessage message={regError} />}
          <Link className={style.PasswordRecovery} href={"/Password-Recovery"}>
            Forgot Password?
          </Link>
          <button type={"submit"} className={style.SubmitButton}>
            {buttonText}
          </button>
        </div>
      </div>
    </form>
  );
}
