"use client";
import { Fragment, useEffect, useState } from "react";
import style from "./MyReviews.module.css";

export default function MyReviews(props) {
  const [userReview, setUserReview] = useState();

  const UserId = props.userId;

  useEffect(() => {
    fetch(
      `https://natours-app-xp62.onrender.com/api/v1/reviews/ReviewByUserID/${UserId}`
    )
      .then((response) => response.json())
      .then((data) => {

        setUserReview(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Fragment>
      {userReview?.length === 0 && (
        <div className={style.EmptyReviewsParrent}>
          <h1 className={style.EmptyBookingTitle}>You have no reviews</h1>
        </div>
      )}
      <div className={style.RviewsParrent}>
        {userReview?.length > 0 &&
          userReview?.Review.map((item) => {
            return <h1>wew</h1>;
          })}
      </div>
    </Fragment>
  );
}
