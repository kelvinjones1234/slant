import React from "react";

const ButtonOne = ({label}) => {
  return (
    <div className="flex justify-center">
      <button className="text-white bg-primary font-[500] w-[87.5vw] max-w-[328px] h-[55px] rounded-[15px]">
        {label}
      </button>
    </div>
  );
};

export default ButtonOne;
