import Image from "next/image";
import style from "./TourDescription.module.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineClockCircle } from "react-icons/ai";

export default function TourDescription(props) {
  return (
    <div className={style.TourDescriptionParrent}>
      <div className={style.PicParrent}>
        <h2 className={style.HeadingTertirary}>
          <span className={style.Title}>{props.TourName}</span>
          <div className={style.SmallinfoParrent}>
            <div>
              <AiOutlineClockCircle className={style.icon} />

              <p>{props.duration} days</p>
            </div>
            <div>
              <HiOutlineLocationMarker className={style.icon} />
              <p>{props.location}</p>
            </div>
          </div>
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
