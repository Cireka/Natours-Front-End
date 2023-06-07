import Image from "next/image";
import style from "./TourGallery.module.css";

export default function TourGallery(props) {
  return (
    <section className={style.TourGallerySection}>
      <div className={style.TourGalleryParrent}>
        <Image
          unoptimized={true}
          className={style.Image}
          alt="Tour Images"
          quality={100}
          width={600}
          height={453}
          src={`/tours/${props.imageOne}`}
        />
        <Image
          unoptimized={true}
          className={style.Image}
          alt="Tour Images"
          quality={100}
          width={600}
          height={453}
          src={`/tours/${props.imageTwo}`}
        />
        <Image
          unoptimized={true}
          className={style.Image}
          alt="Tour Images"
          quality={100}
          width={600}
          height={453}
          src={`/tours/${props.imageThree}`}
        />
      </div>
    </section>
  );
}
