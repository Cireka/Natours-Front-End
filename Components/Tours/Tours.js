"use client";
import TourBox from "../Reusabel Ui/TourBox/TourBox";
import style from "./Tours.module.css";
import getAllTours from "@/app/Data Fetching/getAllTours";
import { useState, useEffect, Fragment } from "react";
import { ScaleLoader } from "react-spinners";

export default function Tours() {
  const dateConverter = (DateToConvert) => {
    const date = new Date(DateToConvert);

    const options = { year: "numeric", month: "long" };
    const formattedDate = date.toLocaleString("en-US", options);

    return formattedDate;
  };
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");

  async function getTours() {
    const data = await getAllTours(
      "https://natours-app-xp62.onrender.com/api/v1/tours"
    );
    setLoading(false);
    setData(data.data.doc);
  }
  useEffect(() => {
    setLoading(true);
    getTours();
  }, []);

  return (
    <Fragment>
      {loading ? (
        <div className={style.LoadingParrent}>
          <ScaleLoader
            color={"#55c57a"}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <section className={style.ToursSectionParrent}>
          {data &&
            data.map((item) => {
              return (
                <TourBox
                  key={item.id}
                  TourDifficulty={item.difficulty}
                  TourDurration={item.duration}
                  description={item.summary}
                  TourLocation={item.startLocation.description}
                  TourGroupSize={item.maxGroupSize}
                  TourAmountOfStops={item.locations.length}
                  TourStartDate={dateConverter(item.startDates[0])}
                  TourPrice={item.price}
                  TourAvrageRating={item.ratingAvrage}
                  TourRatings={item.ratingsQuantity}
                  TourName={item.name}
                  Image={item.imageCover}
                  id={item._id}
                />
              );
            })}
        </section>
      )}
    </Fragment>
  );
}
