import style from "./AccountSettings.module.css";

export default function AccountPassword(props) {
    const SubmitHandler = () =>{

    }
  return (
    <div className={style.FormParrent}>
      <form onSubmit={SubmitHandler} className={style.Form}>
        <h2>{props.title}</h2>
        <div className={style.InputParrent}>
          <label>{props.topLabel}</label>
          <input className={style.Input}></input>
        </div>
        <div className={style.InputParrent}>
          <label>{props.bottomLabel}</label>
          <input className={style.Input}></input>
        </div>
        <div className={style.ButtonParrent}>
          <button type="submit" className={style.Button}>
            Save Settings
          </button>
        </div>
      </form>
    </div>
  );
}
