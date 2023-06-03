import Image from "next/image";
import style from "./TourBook.module.css";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function TourBook(props) {
  const router = useRouter();
  const token = Cookies.get("jwt");
  const BookTourHandller = () => {
    if (token) {
      // book Tour
    } else {
      router.push("/LogIn");
    }
  };
  return (
    <section className={style.BookTourSection}>
      <div className={style.BookTourBox}>
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

        <div className={style.title}>
          <h2>WHAT ARE YOU WAITING FOR?</h2>
          <p>9 days. 1 adventure. Infinite memories. Make it yours today!</p>
        </div>
        <button onClick={BookTourHandller} className={style.Button}>
          {token ? "Book a Tour" : "Log In To Book Tour"}
        </button>
      </div>
    </section>
  );
}
