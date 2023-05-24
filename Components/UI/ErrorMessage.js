import style from "./ErrosMessage.module.css";
export default function ErrorMessage(props) {
  return <h1 className={style.ErrorMessage}>{props.message}</h1>;
}
