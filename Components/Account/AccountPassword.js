import style from "./AccountSettings.module.css";
import { useState } from "react";

export default function AccountPassword(props) {
  const [userData, setUserData] = useState({
    id: "",
    oldPassword: "",
    newPassword: "",
    passwordConfirm: "",
  });
  const currentPasswordHandler = (event) => {
    const currentPassword = event.target.value;
  };
  const newPasswordHandler = (event) => {
    const oldPassword = event.target.value;
  };
  const SubmitHandler = () => {};
  return (
    <div className={style.FormParrent}>
      <form onSubmit={SubmitHandler} className={style.Form}>
        <h2>{props.title}</h2>
        <div className={style.InputParrent}>
          <label>{props.topLabel}</label>
          <input
            onClick={currentPasswordHandler}
            className={style.Input}
          ></input>
        </div>
        <div className={style.InputParrent}>
          <label>{props.bottomLabel}</label>
          <input onClick={newPasswordHandler} className={style.Input}></input>
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
