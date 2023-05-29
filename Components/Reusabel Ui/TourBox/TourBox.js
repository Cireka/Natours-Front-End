"use client";
import { Fragment } from "react";
import style from "./TourBox.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsFlag } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function TourBox(props) {
  const route = useRouter();
  const DetailedTourHanddler = () => {
    route.push(`/Tour/${props.id}`);
  };
  return (
    <Fragment>
      <div className={style.TourBox}>
        <div className={style.TourBoxContainer}>
          <div className={style.ImageParrent}>
            <h2 className={style.HeadingTertirary}>
              <span className={style.Title}>{props.TourName}</span>
            </h2>
            <span className={style.overlay} />
            <Image
              unoptimized={true}
              priority={1}
              alt="Cover Photo For The Tour"
              quality={100}
              className={style.image}
              src={`/tours/${props.Image}`} // Remove the "/public" prefix
              width={1200} // Set an appropriate value for the width
              height={1200} // Set an appropriate value for the height
            />
          </div>
          <div className={style.DescriptionParrent}>
            <h3>
              {props.TourDifficulty}-{props.TourDurration}-DAY-TOUR
            </h3>
            <p>{props.description}</p>
          </div>
          <div className={style.infoGrid}>
            <div className={style.InfoParrent}>
              <SlLocationPin className={style.icons} />
              <p>{props.TourLocation}</p>
            </div>
            <div className={style.InfoParrent}>
              <AiOutlineCalendar className={style.icons} />
              <p>{props.TourStartDate}</p>
            </div>
            <div className={style.InfoParrent}>
              <BsFlag className={style.icons} />
              <p>{props.TourAmountOfStops} Stops</p>
            </div>
            <div className={style.InfoParrent}>
              <BiUser className={style.icons} />
              <p>{props.TourGroupSize} People</p>
            </div>
          </div>
          <div className={style.DetailsParrent}>
            <div className={style.StatsParrent}>
              <p>
                <span>${props.TourPrice}</span> per person
              </p>
              <p>
                <span>{props.TourAvrageRating.toFixed(1)}</span> rating (
                {props.TourRatings})
              </p>
            </div>
            <button
              onClick={DetailedTourHanddler}
              className={style.DetailsButton}
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
