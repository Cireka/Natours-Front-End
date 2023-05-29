import style from "./ReviewStars.module.css";
import { AiOutlineStar } from "react-icons/ai";

export default function ReviewStars({ rating }) {
  const totalStars = 5;
  const greenStars = rating;
  const grayStars = totalStars - greenStars;

  return (
    <div>
      {[...Array(greenStars)].map((_, index) => (
        <AiOutlineStar key={index} className={style.greenStar} />
      ))}
      {[...Array(grayStars)].map((_, index) => (
        <AiOutlineStar key={index} className={style.grayStar} />
      ))}
    </div>
  );
}
