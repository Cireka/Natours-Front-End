import { NextResponse } from "next/server";
import Auth from "./Components/Auth/Auth";
import Cookies from "js-cookie";

export default async function middleware(req) {
  const jwt = req.cookies.get("jwt")?.value;

  if (jwt) {
    const valid = await Auth({ jwt });

    if (
      valid.status === "fail" &&
      req.url.includes(`https://natours-front-end.vercel.app/Account/`)
    ) {
      Cookies.remove("jwt");
      return NextResponse.redirect("https://natours-front-end.vercel.app");
    } else if (
      valid.status === "success" &&
      (req.url.includes("https://natours-front-end.vercel.app/SignUp") ||
        req.url.includes("https://natours-front-end.vercel.app/LogIn"))
    ) {
      return NextResponse.redirect("https://natours-front-end.vercel.app");
    }
  }
}
