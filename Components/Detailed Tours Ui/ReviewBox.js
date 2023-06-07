import Image from "next/image";
import style from "./ReviewBox.module.css";
import ReviewStars from "./ReviewStars";

export default function ReviewBox(props) {
  const rating = props.rating;


  return (
    <div className={style.reviewBoxParrent}>
      <div className={style.userParrent}>
        <Image
          className={style.photo}
          alt="User Photo"
          width={50}
          height={50}
          src={`/users/${props.image}`}
        />
        <h2>{props.name}</h2>
      </div>
      <p>{props.review}</p>
      <div className={style.ratingsParrent}>
        <ReviewStars rating={rating} />
      </div>
    </div>
  );
}
