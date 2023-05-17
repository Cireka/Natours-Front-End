"use client";
import { Fragment } from "react";
import style from "./TourBox.module.css";
import cover from "../../../public/tours/tour-1-cover.jpg";
import { SlLocationPin } from "react-icons/sl";
import { BsFlag } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import Image from "next/image";

export default function TourBox(props) {
  return (
    <Fragment>
      <div className={style.TourBox}>
        <div className={style.TourBoxContainer}>
          <div className={style.ImageParrent}>
            <span className={style.overlay} />
            <Image
              prefix={"true"}
              alt="Cover Photo For The Tour"
              quality={100}
              className={style.image}
              src={cover}
            />
          </div>
          <div className={style.DescriptionParrent}>
            <h3>MEDIUM 7-DAY TOUR </h3>
            <p>Exploring the jaw-dropping US east coast by foot and by boat</p>
          </div>
          <div className={style.infoGrid}>
            <div className={style.InfoParrent}>
              <SlLocationPin className={style.icons} />
              <p>Miami, USA</p>
            </div>
            <div className={style.InfoParrent}>
              <AiOutlineCalendar className={style.icons} />
              <p>June 2021</p>
            </div>
            <div className={style.InfoParrent}>
              <BsFlag className={style.icons} />
              <p>4 stops</p>
            </div>
            <div className={style.InfoParrent}>
              <BiUser className={style.icons} />
              <p>15 people</p>
            </div>
          </div>
          <div className={style.DetailsParrent}>
            <div className={style.StatsParrent}>
              <p>
                <span>$497</span> per person
              </p>
              <p>
                <span>4.3</span> rating (7)
              </p>
            </div>
            <button className={style.DetailsButton}>Details</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
