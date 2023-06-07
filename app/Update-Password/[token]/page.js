"use client";
import { Fragment } from "react";
import style from "./UpdatePassword.module.css";
import NavBar from "@/Components/NavBar/NavBar";
import Footer from "@/Components/Footer/Footer";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function UpdatePassword({ params }) {
  const router = useRouter();
  const maxAge = 9;
  const [buttonText, setButtonText] = useState("UPDATE PASSWORD");
  const [error, setError] = useState(false);
  const [userPassword, setUserPassword] = useState({
    password: "",
    passwordConfirm: "",
  });
  const token = params.token;

  const SubmitHanddler = (event) => {
    setButtonText("PROCESSING...");
    event.preventDefault();
    fetch(
      `https://natours-app-xp62.onrender.com/api/v1/users/resetPassword/${token}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userPassword),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setButtonText("UPDATE PASSWORD");
        if (data.status === "success") {
          const jwt = data.message;
          Cookies.set("jwt", jwt, {
            expires: maxAge,
            path: "/", // Adjust the path based on your requirements
            secure: true,
          });
          router.push("/");
          // log in user
        } else {

          
        }
      })
      .catch((err) => {
        setButtonText("UPDATE PASSWORD");
        console.log(err);
      });
  };
  const newPasswordChangeHandller = (event) => {
    setUserPassword({ ...userPassword, password: event.target.value });
  };
  const confirmPasswordChangeHandller = (event) => {
    setUserPassword({ ...userPassword, passwordConfirm: event.target.value });
  };
  return (
    <Fragment>
      <NavBar />
      <form onSubmit={SubmitHanddler}>
        <div className={style.InputParrent}>
          <div className={style.titleParrent}>
            <h2>Enter Email Of your account</h2>
          </div>
          <div className={style.fromContainer}>
            <div>
              <label>New Password</label>
              <input
                onChange={newPasswordChangeHandller}
                required
                minLength="8"
                placeholder="********"
                type={"password"}
                className={style.Input}
              ></input>
            </div>
            <div>
              <label>Confrim Password</label>
              <input
                onChange={confirmPasswordChangeHandller}
                required
                minLength="8"
                placeholder="********"
                type={"password"}
                className={style.Input}
              ></input>
            </div>
            <button type={"submit"} className={style.SubmitButton}>
              {buttonText}
            </button>
          </div>
        </div>
      </form>
      <Footer />
    </Fragment>
  );
}
