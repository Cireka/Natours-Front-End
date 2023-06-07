"use client";
import style from "./MyBookings.module.css";
import { useState, useEffect, Fragment } from "react";
import TourBox from "../Reusabel Ui/TourBox/TourBox";
import Cookies from "js-cookie";

export default function MyBookings() {
  const jwt = Cookies.get("jwt");
  const [item, setItem] = useState();

  const dateConverter = (DateToConvert) => {
    const date = new Date(DateToConvert);

    const options = { year: "numeric", month: "long" };
    const formattedDate = date.toLocaleString("en-US", options);

    return formattedDate;
  };

  useEffect(() => {
    fetch(
      "https://natours-app-xp62.onrender.com/api/v1/bookings/GetBookingById",
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setItem(data.data);

      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Fragment>
      {item?.length === 0 && (
        <div className={style.EmptyBookedParrent}>
          <h1 className={style.NoBookedTours}>You Have No Booked Tours</h1>
        </div>
      )}
      <div className={style.BookingsParrent}>
        {item?.map((item) => {
          return (
            <TourBox
              key={item?._id}
              TourDifficulty={item?.tour?.difficulty}
              TourDurration={item?.tour?.duration}
              description={item?.tour?.summary}
              TourLocation={item?.tour?.startLocation?.description}
              TourGroupSize={item?.tour?.maxGroupSize}
              TourAmountOfStops={item?.tour?.locations?.length}
              TourStartDate={dateConverter(item?.tour?.startDates[0])}
              TourPrice={item?.tour?.price}
              TourAvrageRating={item?.tour?.ratingAvrage}
              TourRatings={item?.tour?.ratingsQuantity}
              TourName={item?.tour?.name}
              Image={item?.tour?.imageCover}
              id={item?.tour?._id}
            />
          );
        })}
      </div>
    </Fragment>
  );
}
