"use client";
import TourBox from "../Reusabel Ui/TourBox/TourBox";
import style from "./Tours.module.css";
import getAllTours from "@/app/Data Fetching/All Tours/getAllTours";
import { useState, useEffect } from "react";

export default function Tours() {
  const dateConverter = (DateToConvert) => {
    const date = new Date(DateToConvert);

    const options = { year: "numeric", month: "long" };
    const formattedDate = date.toLocaleString("en-US", options);

    return formattedDate;
  };

  const [data, setData] = useState("");
  async function getTours() {
    const data = await getAllTours(
      "https://natours-app-xp62.onrender.com/api/v1/tours"
    );
    setData(data.data.doc);
  }
  useEffect(() => {
    getTours();
  }, []);

  return (
    <div className={style.ToursSectionParrent}>
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
            />
          );
        })}
    </div>
  );
}
