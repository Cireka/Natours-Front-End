import Image from "next/image";
import style from "./Guides.module.css";

export default function Guides(props) {
  return (
    <div className={style.GuidesParrent}>
      <Image
        className={style.Image}
        width={50}
        height={50}
        src={`/users/${props.guideImg}`}
        alt="Guide"
      />
      <h2>{props.guideRole.replace(/-/g, " ")}</h2>
      <p>{props.guideName}</p>
    </div>
  );
}
