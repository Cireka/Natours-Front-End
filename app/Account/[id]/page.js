"use client";
import { Fragment } from "react";
import style from "./Account.module.css";
import NavBar from "@/Components/NavBar/NavBar";
import { useState, useEffect } from "react";
import AccountSettings from "@/Components/Account/AccountSettings";
import AccountPassword from "@/Components/Account/AccountPassword";
import Footer from "@/Components/Footer/Footer";
import MyBookings from "@/Components/Account/MyBookings";
import MyReviews from "@/Components/Account/MyReviews";

export default function Account({ params }) {
  const id = params.id;
  const [selectedSection, setSelectedSection] = useState(0);
  const [userData, setUserData] = useState(undefined);

  const handleSectionClick = (index) => {
    setSelectedSection(index);
  };

  useEffect(() => {
    fetch("https://natours-app-xp62.onrender.com/api/v1/users/me", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${id}`,
      },
    })
      .then((res) => res.json()) // Parse response as JSON
      .then((data) => {
        setUserData(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const userId = userData?._id;

  return (
    <Fragment>
      <NavBar />
      <section className={style.AccountSection}>
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
          </div>
          <div className={style.AccountConfigurationParrent}>
            {selectedSection === 0 && (
              <div className={style.AccoungConfigurationContainer}>
                <AccountSettings
                  title={"Your Account Settings"}
                  topLabel={"Name"}
                  topInputPlaceValue={userData?.name}
                  bottomLabel={"Email"}
                  bottomInputPlaceValue={userData?.email}
                />
                <AccountPassword
                  id={id}
                  title={"PASSWORD CHANGE"}
                  topLabel={"Current Password"}
                  bottomLabel={"New Password"}
                />
              </div>
            )}
            {selectedSection === 1 && <MyBookings />}
            {selectedSection === 2 && <MyReviews userId={userId} />}
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
}
