import style from "./AccountSettings.module.css";
import Cookies from "js-cookie";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AccountPassword(props) {
  const route = useRouter();
  const maxAge = 9;
  const id = Cookies.get("jwt");
  const [userData, setUserData] = useState({
    oldPassword: "",
    newPassword: "",
    passwordConfirm: "",
  });
  const currentPasswordHandler = (event) => {
    const oldPassword = event.target.value;
    setUserData({ ...userData, oldPassword: oldPassword });
  };
  const newPasswordHandler = (event) => {
    const newPassword = event.target.value;
    setUserData({
      ...userData,
      newPassword: newPassword,
      passwordConfirm: newPassword,
    });
  };
  const SubmitHandler = (event) => {
    event.preventDefault();
    fetch("https://natours-app-xp62.onrender.com/api/v1/users/updatePassword", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${id}`,
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json()) // Parse response as JSON
      .then((data) => {
        console.log(data);
        if (data.status === "success") {
          const jwt = data.message;
          Cookies.set("jwt", jwt, {
            expires: maxAge,
            path: "/", // Adjust the path based on your requirements
            secure: true,
          });
          route.push(`/Account/${jwt}`);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={style.FormParrent}>
      <form onSubmit={SubmitHandler} className={style.Form}>
        <h2>{props.title}</h2>
        <div className={style.InputParrent}>
          <label>{props.topLabel}</label>
          <input
            onChange={currentPasswordHandler}
            className={style.Input}
          ></input>
        </div>
        <div className={style.InputParrent}>
          <label>{props.bottomLabel}</label>
          <input onChange={newPasswordHandler} className={style.Input}></input>
        </div>
        <div className={style.ButtonParrent}>
          <button type="submit" className={style.Button}>
            Save Password
          </button>
        </div>
      </form>
    </div>
  );
}
