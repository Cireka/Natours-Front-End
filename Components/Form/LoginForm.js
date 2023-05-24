"use client";
import style from "./LoginForm.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import ErrorMessage from "../UI/ErrorMessage";

export default function LoginForm() {
  const route = useRouter();
  const maxAge = 9;
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [regError, setregError] = useState(false);

  const [userToken, setUserToken] = useState(undefined);
  const SubmitHanddler = (event) => {
    event.preventDefault();
    fetch("https://natours-app-xp62.onrender.com/api/v1/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json()) // Parse response as JSON
      .then((data) => {
        console.log(data);
        if (data.status === "success") {
          setUserToken(data.message);
        } else if (data.status === "fail") {
          setregError("Email or Password is incorrect");
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
      // send token to backend and see if it is valid
      // if it is we set it inside the cookie and than go to page
      // on that page we can already render personal information because user was validated by our backend
      // but we keep token in storage just in case we need to make post request with it to secure api
      console.log("cookie set");
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
    <form onSubmit={SubmitHanddler}>
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
          <button type={"submit"} className={style.SubmitButton}>
            Login
          </button>
        </div>
      </div>
    </form>
  );
}
