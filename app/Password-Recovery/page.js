"use client";
import { Fragment } from "react";
import style from "./PasswordRecovery.module.css";
import NavBar from "@/Components/NavBar/NavBar";
import Footer from "@/Components/Footer/Footer";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function PasswordRecovery() {
  const [email, setEmail] = useState();
  const [buttonText, setButtonText] = useState("Reset Password");
  const [status, setStatus] = useState(false);
  const [error, setError] = useState(false);

  const router = useRouter();

  const SubmitHanddler = (event) => {
    event.preventDefault();
    setButtonText("PROCESSING...");
    fetch("https://natours-app-xp62.onrender.com/api/v1/users/forgetPassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: `${email}`,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setButtonText("Reset Password");
        if (data.status === "success") {
          setStatus(true);
          setError(false);
          setTimeout(() => {
            router.push("/");
          }, [3000]);
        } else if (data.status === "fail") {
          setStatus(false);
          setError(true);
        }
      })
      .catch((err) => {
        setButtonText("Reset Password");
        console.log(err);
      });
  };
  const emailHandller = (event) => {
    setEmail(event.target.value);
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
              <label>E-Mail address</label>
              <input
                onChange={emailHandller}
                required
                placeholder="you@example.com"
                type={"email"}
                className={style.Input}
              ></input>
            </div>
            {error && <p className={style.Error}>Email Not Found</p>}
            {status && (
              <p className={style.EmailStatus}>Please Check Your Email</p>
            )}
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
