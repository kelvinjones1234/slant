import React from "react";
import ButtonOne from "../components/ButtonOne";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="bg-white flex justify-center h-screen max-w-[550px] mx-auto">
      <div className="mt-[9vh]">
        <h1 className="font-[500] text-[23px]">Create Account</h1>
        <p className="text-[14px] font-[400] opacity-70">
          Enter your name and password
        </p>
        <form action="">
          <div className="relative my-[8vh] border-b-[1px] border-primary">
            <input
              type="password"
              className="text-[15px] font-[500] outline-none w-[70vw] max-w-[550px] form__input"
              required="required"
            />
            <span className="absolute left-0 opacity-50 pointer-events-none transition-transform duration-500">
              Full Name
            </span>
          </div>
          <div className="relative my-[8vh] border-b-[1px] border-primary">
            <input
              type="password"
              className="text-[15px] font-[500] outline-none w-[70vw] max-w-[550px] form__input"
              required="required"
            />
            <span className="absolute left-0 opacity-50 pointer-events-none transition-transform duration-500">
              Phone Number
            </span>
          </div>
          <div className="relative my-[8vh] border-b-[1px] border-primary">
            <input
              type="password"
              className="text-[15px] font-[500] outline-none w-[70vw] max-w-[550px] form__input"
              required="required"
            />
            <span className="absolute left-0 opacity-50 pointer-events-none transition-transform duration-500">
              Password
            </span>
          </div>
          <div className="flex gap-4 mt-[2.5vh] mb-[5vh] items-start w-[70vw] max-w-[550px] text-[14px]">
            <input type="checkbox" className="custom-checkbox mt-1" />
            <p className="">
              I have read and agreed to Slant Menu{" "}
              <span className="text-primary">Terms & Condition</span>
            </p>
          </div>
          <ButtonOne label="Sign Up" />
          <p className="text-center text-primarys mt-[2.5vh]">
            Already have an account?{" "}
            <Link to={"/login"}>
              <span className="text-primary">Log in</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
