import Image from "next/image";
import style from "./TourDescription.module.css";

export default function TourDescription(props) {
  return (
    <div className={style.TourDescriptionParrent}>
      <div className={style.PicParrent}>
        <h2 className={style.HeadingTertirary}>
          <span className={style.Title}>{props.TourName}</span>
        </h2>
        <span className={style.overlay} />
        <Image
          className={style.Image}
          alt="Tour Image Cover"
          width={1732}
          height={758}
          quality={100}
          src={`/tours/${props.imageCover}`}
        />
      </div>
      <div className={style.DetailsParrent}></div>
    </div>
  );
}
