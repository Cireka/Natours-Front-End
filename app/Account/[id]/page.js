"use client";
import { Fragment } from "react";
import style from "./Account.module.css";
import NavBar from "@/Components/NavBar/NavBar";
import { useState, useEffect } from "react";
import AccountSettings from "@/Components/Account/AccountSettings";

export default function Account({ params }) {
  const id = params.id;
  const [selectedSection, setSelectedSection] = useState(0);
  const [userData, setUserData] = useState(undefined);

  const handleSectionClick = (index) => {
    setSelectedSection(index);
  };

  useEffect(() => {
    console.log(id);
    fetch("https://natours-app-xp62.onrender.com/api/v1/users/me", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${id}`,
      },
    })
      .then((res) => res.json()) // Parse response as JSON
      .then((data) => {
        console.log(data);
        setUserData(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Fragment>
      <NavBar />
      <div className={style.AccountParrent}>
        <div className={style.AccountSectionsParrent}>
          <h2
            onClick={() => handleSectionClick(0)}
            className={selectedSection === 0 ? style.SelectedSection : ""}
          >
            Settings
          </h2>
          <h2
            onClick={() => handleSectionClick(1)}
            className={selectedSection === 1 ? style.SelectedSection : ""}
          >
            My Bookings
          </h2>
          <h2
            onClick={() => handleSectionClick(2)}
            className={selectedSection === 2 ? style.SelectedSection : ""}
          >
            My Reviews
          </h2>
          <h2
            onClick={() => handleSectionClick(3)}
            className={selectedSection === 3 ? style.SelectedSection : ""}
          >
            Billing
          </h2>
        </div>
        <div className={style.AccountConfigurationParrent}>
          <div>
            <AccountSettings
              title={"Your Account Settings"}
              topLabel={"Name"}
              topInputPlaceValue={userData?.name}
              bottomLabel={"Email"}
              bottomInputPlaceValue={userData?.email}
            />
            <AccountSettings
              title={"PASSWORD CHANGE"}
              topLabel={"Current Password"}
              bottomLabel={"New Password"}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
