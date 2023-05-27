import Footer from "@/Components/Footer/Footer";
import LoginForm from "@/Components/Form/LoginForm";
import NavBar from "@/Components/NavBar/NavBar";
import { Fragment } from "react";

export default function Login() {
  return (
    <Fragment>
      <NavBar />
      <LoginForm />
      <Footer/>
    </Fragment>
  );
}
