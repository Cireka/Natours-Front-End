"use client";
import TourDescription from "@/Components/Detailed Tours Ui/TourDescription";
import Footer from "@/Components/Footer/Footer";
import NavBar from "@/Components/NavBar/NavBar";
import { Fragment, useEffect, useState } from "react";
import getTour from "@/app/Data Fetching/getTour";
import TourSpecifics from "@/Components/Detailed Tours Ui/TourSpecifics";
import TourGallery from "@/Components/Detailed Tours Ui/TourGallery";

export default function Tour({ params }) {
  const [tourData, setTourData] = useState();
  const id = params.id;

  async function getTours() {
    const data = await getTour(
      `https://natours-app-xp62.onrender.com/api/v1/tours/${id}`
    );
    setTourData(data.data);
  }
  useEffect(() => {
    getTours();
  }, []);

  console.log(tourData);
  return (
    <Fragment>
      <NavBar />
      <TourDescription
        TourName={`${tourData?.name} Tour`}
        imageCover={tourData?.imageCover}
      />
      <TourSpecifics
        name={tourData?.name}
        description={tourData?.description}
        date={tourData?.startDates[0]}
        difficulty={tourData?.difficulty}
        participants={tourData?.maxGroupSize}
        rating={tourData?.ratingAvrage}
        ratingQuantity={tourData?.ratingsQuantity}
        guides={tourData?.guides}
      />
      <TourGallery
        imageOne={tourData?.images[0]}
        imageTwo={tourData?.images[1]}
        imageThree={tourData?.images[2]}
      />
      {/* <TourBooking /> */}
      <Footer />
    </Fragment>
  );
}
