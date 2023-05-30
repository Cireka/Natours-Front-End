import Image from "next/image";
import style from "./TourBook.module.css";
export default function TourBook(props) {
  return (
    <section className={style.BookTourSection}>
      <div className={style.BookTourBox}>
        <Image
          className={style.image1}
          width={80}
          height={80}
          alt="Natours Logo"
          src={"/logo-green-round.png"}
        />
        <Image
          className={style.image2}
          width={80}
          height={80}
          alt="Natours Logo"
          src={`/tours/${props.imageTwo}`}
        />
        <Image
          className={style.image3}
          width={80}
          height={80}
          alt="Natours Logo"
          src={`/tours/${props.imageThree}`}
        />

        <div className={style.title}>
          <h2>WHAT ARE YOU WAITING FOR?</h2>
          <p>9 days. 1 adventure. Infinite memories. Make it yours today!</p>
        </div>
        <button className={style.Button}>Log In To Book Tour</button>
      </div>
    </section>
  );
}
