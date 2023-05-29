import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./Reviews.module.css";
import ReviewBox from "./ReviewBox";

export default function Reviews(props) {
  const reviews = props.reviews;

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "120px", // Increase the padding for more spacing
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 500,
  };

  return (
    <section className={style.ReviewsSection}>
      <div className={style.ReviewsParrent}>
        <Slider className={style.slider} {...settings}>
          {reviews &&
            reviews.map((item) => {
              return (
                <ReviewBox
                  key={item.id}
                  image={item?.User[0].photo}
                  name={item?.User[0].name}
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
