import style from "./TourSpecifics.module.css";
import { AiOutlineCalendar, AiOutlineStar } from "react-icons/ai";
import { BiTrendingUp } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import Guides from "./Guides";

export default function TourSpecifics(props) {
  const dateConverter = (DateToConvert) => {
    const date = new Date(DateToConvert);

    const options = { year: "numeric", month: "long" };
    const formattedDate = date.toLocaleString("en-US", options);

    return formattedDate;
  };
  return (
    <section className={style.TourSpecificsSection}>
      <div className={style.TourSpecificsParrent}>
        <div className={style.SpecificsParrent}>
          <div className={style.DetailsParrent}>
            <h2>QUICK FACTS</h2>
            <div>
              <AiOutlineCalendar />
              <p>NEXT DATE</p>
              <span>{dateConverter(props.date)}</span>
            </div>
            <div>
              <BiTrendingUp />
              <p>DIFFICULTY</p>
              <span>{props.difficulty}</span>
            </div>
            <div>
              <FiUser />
              <p>PARTICIPANTS</p>
              <span>{props.participants}</span>
            </div>
            <div>
              <AiOutlineStar />
              <p>RATING</p>
              <span>
                {props.rating} / {props.ratingQuantity}
              </span>
            </div>
            <div className={style.GuidesParrent}>
              <h2>Your Tour Guides</h2>
              {props.guides?.map((item) => {
                return (
                  <Guides
                    key={item.id}
                    guideImg={item.photo}
                    guideRole={item.role}
                    guideName={item.name}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className={style.AboutBox}>
          <h2>ABOUT {props.name} TOUR</h2>
          <p>{props.description}</p>
        </div>
      </div>
    </section>
  );
}
