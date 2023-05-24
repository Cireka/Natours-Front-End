"use client";
import NavBar from "@/Components/NavBar/NavBar";
import Tours from "../Components/Tours/Tours";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();

  return (
    <main>
      <NavBar />
      <Tours />
    </main>
  );
}
