import React from "react";
import image4 from "../assets/img/image4.png";
import SlideContent from "./SlideContent";

const SlideOne = () => {
  return (
    <>
      <SlideContent
        bg={image4}
        heading={"Welcome to SlantMenu 👋"}
        subheading={
          "Discover delicious dishes at your fingertips.Search, browse, and order with ease."
        }
      />
    </>
  );
};

export default SlideOne;
