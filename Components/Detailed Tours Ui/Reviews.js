import ReviewBox from "./ReviewBox";
import style from "./Reviews.module.css";

export default function Reviews(props) {
  const reviews = props.reviews;
  console.log(reviews);

  return (
    <section className={style.ReviewsSection}>
      <div className={style.ReviewsParrent}>
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
      </div>
    </section>
  );
}
