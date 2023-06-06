import style from "./Reviews.module.css";
import ReviewBox from "./ReviewBox";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Reviews(props) {
  const reviews = props.reviews;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    className: "center",
    centerMode: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1469,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 579,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={style.ReviewsSection}>
      <div className={style.ReviewsParrent}>
        <Slider {...settings}>
          {reviews &&
            reviews.map((item) => {
              return (
                <ReviewBox
                  key={item.id}
                  image={item?.User[0]?.photo}
                  name={item?.User[0]?.name}
                  review={item?.review}
                  rating={item?.rating}
                />
              );
            })}
        </Slider>
      </div>
    </section>
  );
}
