"use client";
import NavBar from "@/Components/NavBar/NavBar";
import Tours from "../Components/Tours/Tours";
import Footer from "@/Components/Footer/Footer";
import { useState, useEffect } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);

  return (
    <main>
      <NavBar />
      <Tours />
      <Footer />
    </main>
  );
}
