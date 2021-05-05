import React from "react";
import "./About.scss";
import Aboutus from "./Aboutus";
import Experience from "./Experience";
import Skills from "./Skills";

function About() {
  return (
    <div className="About">
       <Aboutus/>
       <Skills />
       <Experience />
    </div>
  
  );
}

export default About;
