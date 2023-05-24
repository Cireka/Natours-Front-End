import style from "./AccountSettings.module.css";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ErrorMessage from "../UI/ErrorMessage";

export default function AccountSettings(props) {
  const route = useRouter();
  const token = Cookies.get("jwt");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });
  const [error, setError] = useState(undefined);

  useEffect(() => {
    const name = props.topInputPlaceValue;
    const email = props.bottomInputPlaceValue;
    setUserData({ name: name, email: email });
  }, [props.bottomInputPlaceValue, props.topInputPlaceValue]);

  console.log(userData);
  const nameChangeHandler = (event) => {
    const name = event.target.value;
    setUserData({ ...userData, name: name });
  };
  const emailChangeHandler = (event) => {
    const email = event.target.value;
    setUserData({ ...userData, email: email });
  };
  const updateProfileHandler = (event) => {
    event.preventDefault();
    if (token) {
      fetch("https://natours-app-xp62.onrender.com/api/v1/users/updateMe", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...userData,
        }),
      })
        .then((res) => res.json()) // Parse response as JSON
        .then((data) => {
          if (data.message === "Not Valid Email") {
            setError(data.message);
          } else if (data.message === "success") {
            setError(undefined);
          }
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className={style.FormParrent}>
      <form onSubmit={updateProfileHandler} className={style.Form}>
        <h2>{props.title}</h2>
        <div className={style.InputParrent}>
          <label>{props.topLabel}</label>
          <input
            onChange={nameChangeHandler}
            defaultValue={props.topInputPlaceValue}
            className={style.Input}
          ></input>
        </div>
        <div className={style.InputParrent}>
          <label>{props.bottomLabel}</label>
          <input
            onChange={emailChangeHandler}
            defaultValue={props.bottomInputPlaceValue}
            className={style.Input}
          ></input>
        </div>
        {error && <ErrorMessage message={error} />}
        <div className={style.ButtonParrent}>
          <button type="submit" className={style.Button}>
            Save Settings
          </button>
        </div>
      </form>
    </div>
  );
}
