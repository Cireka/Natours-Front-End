"use client";
import NavBar from "@/Components/NavBar/NavBar";
import Tours from "../Components/Tours/Tours";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
export default function Home() {
  const router = useRouter();

  useEffect(() => {
    console.log("useEffect Triggered");
    const handleUnload = () => {
      console.log("Checking for cookie ");
      // Check if the login cookie is present
      const token = Cookies.get("jwt");
      if (!token) {
        // Redirect to the home page
        router.push("/");
      }
    };

    // Attach the event listener for the unload event
    window.addEventListener("unload", handleUnload);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("unload", handleUnload);
    };
  }, []);
  return (
    <main>
      <NavBar />
      <Tours />
    </main>
  );
}
