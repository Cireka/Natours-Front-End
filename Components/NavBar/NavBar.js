"use client";
import { Fragment, useEffect } from "react";
import style from "./NavBar.module.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo-white.png";
import Cookies from "js-cookie";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NavBar() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    setToken(Cookies.get("jwt"));
  }, [Cookies.get("jwt")]);

  const LogOutHandler = () => {
    window.location.reload();
    Cookies.remove("jwt");
    router.push("/");
  };
  const router = useRouter();
  const ProfileHandler = () => {
    if (Cookies.get("jwt")) {
      router.push(`/Account/${token}`);
    } else {
      router.refresh();
    }
  };

  return (
    <Fragment>
      <div className={style.NavBar}>
        <div className={style.NavBarParrent}>
          <div className={style.HomeLinkParrent}>
            <CgProfile
              onClick={ProfileHandler}
              className={token ? style.ProfileIcon : style.DissabledProfileIcon}
            />
            <Link href={"/"}>
              <h1 className={style.AllTours}>All Tours</h1>
            </Link>
          </div>
          <Image alt="Natours Logo" className={style.Image} src={Logo} />
          <div className={style.NavButtonsParrent}>
            {!token && (
              <Link href={"/LogIn"} className={style.logButton}>
                LOG IN
              </Link>
            )}
            {!token && (
              <Link href={"/SignUp"} className={style.regButton}>
                SIGN UP
              </Link>
            )}
            {token && (
              <Link
                onClick={LogOutHandler}
                href={"/"}
                className={style.logButton}
              >
                LOG OUT
              </Link>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
