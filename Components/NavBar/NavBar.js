"use client";
import { Fragment } from "react";
import style from "./NavBar.module.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo-white.png";

export default function NavBar() {
  return (
    <Fragment>
      <div className={style.NavBar}>
        <div className={style.NavBarParrent}>
          <div className={style.HomeLinkParrent}>
            <Link href={"/"}>
              <h1 className={style.AllTours}>All Tours</h1>
            </Link>
          </div>
          <Image alt="Natours Logo" className={style.Image} src={Logo} />
          <div className={style.NavButtonsParrent}>
            <Link href={"/"} className={style.logButton}>
              LOG IN
            </Link>
            <Link href={"/SignUp"} className={style.regButton}>
              SIGN UP
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
