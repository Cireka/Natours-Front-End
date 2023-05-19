"use client";
import style from "./RegisterInput.module.css";
import { useState } from "react";

export default function RegisterInput() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  function SubmitHanddler(event) {
    event.preventDefault();
    fetch("https://natours-app-xp62.onrender.com/api/v1/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json()) // Parse response as JSON
      .then((data) => {
        console.log(data); // Handle the response data
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
    <form onSubmit={SubmitHanddler}>
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
          <button type={"submit"} className={style.SubmitButton}>
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
}
