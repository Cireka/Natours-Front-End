import NavBar from "@/Components/NavBar/NavBar";
import RegisterInput from "@/Components/Form/RegisterInput";
import { Fragment } from "react";
import Footer from "@/Components/Footer/Footer";

export default function Signup() {
  return (
    <Fragment>
      <NavBar />
      <RegisterInput />
      <Footer/>
    </Fragment>
  );
}
