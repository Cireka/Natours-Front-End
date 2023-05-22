import Image from "next/image";
import style from "./AccountSettings.module.css";
export default function AccountSettings(props) {
  return (
    <div className={style.FormParrent}>
      <form className={style.Form}>
        <h2>{props.title}</h2>
        <label>{props.topLabel}</label>
        <input
          defaultValue={props.topInputPlaceValue}
          className={style.Input}
        ></input>
        <label>{props.bottomLabel}</label>
        <input
          defaultValue={props.bottomInputPlaceValue}
          className={style.Input}
        ></input>
        {/* <Image width={100} height={100} src={`/users/${props.image}`} /> */}
        <div className={style.ButtonParrent}>
          <button className={style.Button}>Save Settings</button>
        </div>
      </form>
    </div>
  );
}
