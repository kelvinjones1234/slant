import React from "react";
import ButtonOne from "../components/ButtonOne";

const RegisterPage = () => {
  return (
    <div className="bg-white flex justify-center h-screen w-full w-[330px] mx-auto">
      <div className="mt-[9vh]">
        <h1 className="font-[500] text-[23px]">Create Account</h1>
        <p className="text-[14px] font-[400] opacity-70 mt-[]">
          Enter your name and password
        </p>
        <form action="">
          <div className="relative mt-[3rem] border-b-[1px] border-primary">
            <input
              type="text"
              className="text-[15px] font-[500] outline-none w-[328px]"
              value="Adelaja Benjamin"
            />
            <span className="absolute left-0 opacity-70">Full Name</span>
          </div>
          <div className="relative mt-[3rem] border-b-[1px] border-primary">
            <input
              type="text"
              className="text-[15px] font-[500] outline-none w-[328px]"
              value="08141772672"
            />
            <span className="absolute left-0 opacity-70">Phone Number</span>
          </div>
          <div className="relative mt-[3rem] border-b-[1px] border-primary">
            <input
              type="password"
              className="outline-none text-[15px] font-[500] w-[328px]"
              value="Adelaja Benjamin"
            />
            <span className="absolute left-0 opacity-70">Password</span>
          </div>
          <div className="flex gap-4 mt-[2.5vh] mb-[2.5vh] items-start w-[328px] text-[14px]">
            <input type="checkbox" className="custom-checkbox mt-1" />
            <p className="">
              I have read and agreed to Slant Menu{" "}
              <span className="text-primary">Terms & Condition</span>
            </p>
          </div>
          <ButtonOne label="Sign Up" />
          <p className="text-center text-primarys mt-[2.5vh]">
            Already have an account? Log in
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
