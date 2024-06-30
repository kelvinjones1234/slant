import React from "react";
import SlideContent from "./SlideContent";
import image3 from "../assets/img/image3c.png";

const SlideTwo = () => {
  return (
    <div>
      <SlideContent
        bg={image3}
        heading={"Personalize Your Order"}
        subheading={
          "Have it your way. Customize your order, save favorites, and track your meal in real-time"
        }
      />
    </div>
  );
};

export default SlideTwo;
