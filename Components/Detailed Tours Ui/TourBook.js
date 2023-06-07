import Image from "next/image";
import style from "./TourBook.module.css";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { Fragment } from "react";

export default function TourBook(props) {
  const tourId = props.tourId;
  const router = useRouter();
  const token = Cookies.get("jwt");

  const BookTourHandller = () => {
    if (token) {
      fetch(
        `https://natours-app-xp62.onrender.com/api/v1/bookings/checkout-session/${tourId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          const url = data.session.url;
          router.push(url);
        })
        .catch((err) => console.log(err));
    } else {
      router.push("/LogIn");
    }
  };
  return (
    <section className={style.BookTourSection}>
      <div className={style.BookTourBox}>
        <Fragment>
          <Image
            quality={100}
            className={style.image1}
            width={150}
            height={150}
            alt="Natours Logo"
            src={"/logo-green-round.png"}
          />
          <Image
            quality={100}
            className={style.image2}
            width={150}
            height={150}
            alt="Natours Logo"
            src={`/tours/${props.imageTwo}`}
          />
          <Image
            quality={100}
            className={style.image3}
            width={150}
            height={150}
            alt="Natours Logo"
            src={`/tours/${props.imageThree}`}
          />
        </Fragment>
        <div className={style.title}>
          <h2>WHAT ARE YOU WAITING FOR?</h2>
          <p>9 days. 1 adventure. Infinite memories. Make it yours today!</p>
        </div>
        <div className={style.ButtonParrent}>
          <button onClick={BookTourHandller} className={style.Button}>
            {token ? "Book a Tour" : "Log In To Book Tour"}
          </button>
        </div>
      </div>
    </section>
  );
}
