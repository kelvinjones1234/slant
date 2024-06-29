import React from "react";
import ButtonOne from "../components/ButtonOne";

const RegisterPage = () => {
  return (
    <div className="bg-white h-screen w-full mt-[55px] w-[330px] mx-auto">
      <h1 className="font-[500] text-[23px]">Create Account</h1>
      <p className="text-[14px] font-[400] opacity-70 mt-2">
        Enter your name and password
      </p>
      <form action="">
        <div className="relative mt-[2.2rem]">
          <input
            type="text"
            className="border-primary outline-0 border-b-[1px] w-[328px]"
          />
          <span className="absolute left-0 opacity-70">Full Name</span>
        </div>
        <div className="relative mt-[2.2rem]">
          <input
            type="text"
            className="border-primary outline-0 border-b-[1px] w-[328px]"
          />
          <span className="absolute left-0 opacity-70">Phone Number</span>
        </div>
        <div className="relative mt-[2.2rem]">
          <input
            type="password"
            className="border-primary outline-0 border-b-[1px] w-[328px]"
          />
          <span className="absolute left-0 opacity-70">Password</span>
        </div>
        <div className="flex gap-4 items-start w-[328px] text-[14px]">
          <input type="checkbox" className="mt-1" />
          <p>
            I have read and agreed to Qataloog’s{" "}
            <span className="text-primary">Terms & Condition</span>
          </p>
        </div>
        <ButtonOne />
        <p className="text-center text-primarys">
          Already have an account? Log in
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
