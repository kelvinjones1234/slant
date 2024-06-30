import React from "react";
import ButtonOne from "../components/ButtonOne";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="bg-white flex justify-center h-screen max-w-[550px] mx-auto">
      <div className="mt-[9vh] w-[90vw]">
        <h1 className="font-[500] text-[23px]">Hello there 👋</h1>
        <p className="text-[14px] font-[400] opacity-70">
          Please enter your email and password to sign in
        </p>
        <form action="">
          <div className="relative mt-[8vh] border-b-[1px] border-primary">
            <input
              type="text"
              className="text-[15px] font-[500] outline-none max-w-[550px] form__input"
              required="required"
            />
            <span className="absolute left-0 opacity-50 pointer-events-none transition-transform duration-500">
              Email
            </span>
          </div>
          <div className="relative my-[8vh] border-b-[1px] border-primary">
            <input
              type="password"
              className="text-[15px] font-[500] outline-none max-w-[550px] form__input"
              required="required"
            />
            <span className="absolute left-0 opacity-50 pointer-events-none transition-transform duration-500">
              Password
            </span>
          </div>
          <ButtonOne label="Sign in" />
          <p className="text-center text-primarys mt-[2.5vh]">
            Already have an account?{" "}
            <Link to={"/register"}>
              <span className="text-primary">Sign Up</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
