import { NextResponse } from "next/server";
import Auth from "./Components/Auth/Auth";
import Cookies from "js-cookie";

export default async function middleware(req) {
  const jwt = req.cookies.get("jwt")?.value;

  const valid = await Auth({ jwt });

  if (
    valid.status === "fail" &&
    req.url.includes(`http://localhost:3000/Account/`)
  ) {
    Cookies.remove("jwt");
    return NextResponse.redirect("http://localhost:3000");
  } else if (
    valid.status === "success" &&
    (req.url.includes("http://localhost:3000/SignUp") ||
      req.url.includes("http://localhost:3000/LogIn"))
  ) {
    return NextResponse.redirect("http://localhost:3000");
  }
}
