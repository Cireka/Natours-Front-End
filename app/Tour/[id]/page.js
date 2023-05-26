"use client";
import NavBar from "@/Components/NavBar/NavBar";
import { Fragment, useEffect } from "react";

export default function Tour({ params }) {
  const id = params.id;

  useEffect(() => {
    console.log(id);
    fetch(`https://natours-app-xp62.onrender.com/api/v1/tours/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Fragment>
      <NavBar />
    </Fragment>
  );
}
