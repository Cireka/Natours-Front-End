import style from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <div className={style.FooterParrent}>
      <div className={style.FooterContainer}>
        <Image
          className={style.Image}
          alt="Company Logo"
          width={150}
          height={30}
          src={"/logo-green.png"}
        />
        <div className={style.LinksParrent}>
          <Link href={"/"}>About us</Link>
          <Link href={"/"}>Download apps</Link>
          <Link href={"/"}>Become a guide</Link>
          <Link href={"/"}>Careers</Link>
          <Link href={"/"}>Contact</Link>
        </div>
      </div>
    </div>
  );
}
