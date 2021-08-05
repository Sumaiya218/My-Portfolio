import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { GiGraduateCap } from "react-icons/gi";
import {RiHandbagFill} from "react-icons/ri";
function Experience() {
  return (
    <section className="Experience py-5">
      <div className="container">
        <div className="Experience__header text-center">
          <h3>EXPERIENCE & EDUCATION</h3>
        </div>
        <div className=" pt-5">
          <div className="row">
               <div className="col-lg-6 col-md-12 pt-4">
               <span className="py-2 px-4">FROM DEC. 2020 UNTIL APR. 2021</span>
              <h6 className="mt-4">FRONT-END DEVELOPER TRAINEE</h6>
                <p>
                    I was training at Information Technology Institute (ITI) for three months, Front-End Development track.
                </p>
               </div>
               <div className="col-lg-6 col-md-12 pt-4">
               <span className="py-2 px-4">FROM SEP. 2020 TO NOV. 2020</span>
              <h6 className="mt-4">ANGULAR FRONT-END DEVELOPER TRAINEE</h6>
                <p>
                I was trainee as Front-End Developer at CodeCaique Company for a month and a half.
                </p>
               </div>
               <div className="col-lg-6 col-md-12 pt-4">
               <span className="py-2 px-4">FROM 2016 TO 2020</span>
                
                <h6 className="mt-4">BACHELOR OF COMPUTER SCIENCE</h6>
                <p>
                  I was studying computer science at faculty of computers and information systems -  Beni-Swif university. <br/> 
                  Department: Information Technology (IT).
                </p>
               </div>
          </div>
          
        
        </div>
      </div>
    </section>
  );
}

export default Experience;
