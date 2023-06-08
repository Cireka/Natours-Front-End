"use client";
import style from "./RegisterInput.module.css";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function RegisterInput() {
  const route = useRouter();
  const maxAge = 9;
  const [buttonText, setButtonText] = useState("Sign Up");
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [userToken, setUserToken] = useState(undefined);
  const [regError, setregError] = useState(false);

  function SubmitHanddler(event) {
    event.preventDefault();
    setButtonText("PROCESSING...");
    fetch("https://natours-app-xp62.onrender.com/api/v1/users/signup", {
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
        } else if (data.message.indexOf('Duplicate Key Value: "email:') === 0) {
          buttonText("Sign Up");
          setregError("Email Already Exists.");
        } else if (data.message.indexOf("Passwords Are Not The Same!") === 0) {
          buttonText("Sign Up");
          setregError(data.message);
        } else {
          setregError(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
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

  const nameHandller = (event) => {
    const input = event.target.value;
    setUserInfo({ ...userInfo, name: input });
  };
  const emailHandller = (event) => {
    const input = event.target.value;
    setUserInfo({ ...userInfo, email: input });
  };
  const passwordHandller = (event) => {
    const input = event.target.value;
    setUserInfo({ ...userInfo, password: input });
  };
  const passwordConfirmHandller = (event) => {
    const input = event.target.value;
    setUserInfo({ ...userInfo, passwordConfirm: input });
  };
  return (
    <form className={style.Form} onSubmit={SubmitHanddler}>
      <div className={style.InputParrent}>
        <div className={style.titleParrent}>
          <h2>Create Your Account!</h2>
        </div>
        <div className={style.fromContainer}>
          <div>
            <label>Your Name</label>
            <input
              onChange={nameHandller}
              required
              type={"text"}
              className={style.Input}
            ></input>
          </div>
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
          <div>
            <label>Confirm Password</label>
            <input
              onChange={passwordConfirmHandller}
              minLength="8"
              required
              placeholder="********"
              type={"password"}
              className={style.Input}
            ></input>
          </div>
          {regError && <ErrorMessage message={regError} />}
          <button type={"submit"} className={style.SubmitButton}>
            {buttonText}
          </button>
        </div>
      </div>
    </form>
  );
}
