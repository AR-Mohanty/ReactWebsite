import React from "react";
import Common from "./Common";
import aboutus from "../src/images/About us page.gif";

const About = () => {
  return (
    <>
      <Common name='Welcome to About Page' visit ='/contact' imgsrc={aboutus} btnname='Contact Now'/>
    </>
  );
};
export default About;
