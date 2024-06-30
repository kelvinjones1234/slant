import React from "react";
import image2 from "../assets/img/image2c.png";
import SlideContent from "./SlideContent";

const SlideThree = () => {
  return (
    <div>
      <SlideContent
        bg={image2}
        heading={"Detailed Menus"}
        subheading={
          "See it before you taste it. Explore detailed descriptions, prices, and mouthwatering images of each dish"
        }
      />
    </div>
  );
};

export default SlideThree;
