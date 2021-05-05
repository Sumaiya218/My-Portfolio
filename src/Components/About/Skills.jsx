import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const percentage1 = 98;
const percentage2 = 90;
const percentage3 = 95;
const percentage4 = 80;
const percentage5 = 85;
function Skills() {
  return (
    <sectio className="skills py-5 text-center">
      <div className="container">
        <div className="skills__header">
          <h3>MY SKILLS</h3>
        </div>
        <div className="row pt-5">
          <div className="col-lg-2 col-md-4 col-sm-6 p-4">
            <CircularProgressbar
              value={percentage1}
              text={`${percentage1}%`}
              styles={buildStyles({
                // Rotation of path and trail, in number of turns (0-1)
                rotation: 0.25,
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "butt",

                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,

                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',

                // Colors
                pathColor: `rgba(65, 105, 225,  ${percentage1 / 100})`,
                trailColor: "#d6d6d6",
                textColor: "#666",
              })}
            />
            ;<p>HTML</p>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 p-4">
            <CircularProgressbar
              value={percentage2}
              text={`${percentage2}%`}
              styles={buildStyles({
                // Rotation of path and trail, in number of turns (0-1)
                rotation: 0.25,
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "butt",

                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,

                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',

                // Colors
                pathColor: `rgba(65, 105, 225,  ${percentage2 / 100})`,
                trailColor: "#d6d6d6",
                textColor: "#666",
              })}
            />
            ;<p>JAVASCRIPT</p>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 p-4">
            <CircularProgressbar
              value={percentage1}
              text={`${percentage1}%`}
              styles={buildStyles({
                // Rotation of path and trail, in number of turns (0-1)
                rotation: 0.25,
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "butt",

                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,

                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',

                // Colors
                pathColor: `rgba(65, 105, 225,  ${percentage1 / 100})`,
                trailColor: "#d6d6d6",
                textColor: "#666",
              })}
            />
            ;<p>CSS</p>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 p-4">
            <CircularProgressbar
              value={percentage5}
              text={`${percentage5}%`}
              styles={buildStyles({
                // Rotation of path and trail, in number of turns (0-1)
                rotation: 0.25,
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "butt",

                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,

                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',

                // Colors
                pathColor: `rgba(65, 105, 225,  ${percentage5 / 100})`,
                trailColor: "#d6d6d6",
                textColor: "#666",
              })}
            />
            ;<p>TYPESCRIPT</p>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 p-4">
            <CircularProgressbar
              value={percentage3}
              text={`${percentage3}%`}
              styles={buildStyles({
                // Rotation of path and trail, in number of turns (0-1)
                rotation: 0.25,
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "butt",

                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,

                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',

                // Colors
                pathColor: `rgba(65, 105, 225,  ${percentage3 / 100})`,
                trailColor: "#d6d6d6",
                textColor: "#666",
              })}
            />
            ;<p>JQUERY</p>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 p-4">
            <CircularProgressbar
              value={percentage1}
              text={`${percentage1}%`}
              styles={buildStyles({
                // Rotation of path and trail, in number of turns (0-1)
                rotation: 0.25,
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "butt",

                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,

                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',

                // Colors
                pathColor: `rgba(65, 105, 225,  ${percentage1 / 100})`,
                trailColor: "#d6d6d6",
                textColor: "#666",
              })}
            />
            ;<p>BOOTSTRAP</p>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 p-4">
            <CircularProgressbar
              value={percentage5}
              text={`${percentage5}%`}
              styles={buildStyles({
                // Rotation of path and trail, in number of turns (0-1)
                rotation: 0.25,
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "butt",

                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,

                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',

                // Colors
                pathColor: `rgba(65, 105, 225,  ${percentage5 / 100})`,
                trailColor: "#d6d6d6",
                textColor: "#666",
              })}
            />
            ;<p>OOP</p>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 p-4">
            <CircularProgressbar
              value={percentage4}
              text={`${percentage4}%`}
              styles={buildStyles({
                // Rotation of path and trail, in number of turns (0-1)
                rotation: 0.25,
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "butt",

                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,

                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',

                // Colors
                pathColor: `rgba(65, 105, 225,  ${percentage4 / 100})`,
                trailColor: "#d6d6d6",
                textColor: "#666",
              })}
            />
            ;<p>REACT.JS</p>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 p-4">
            <CircularProgressbar
              value={percentage2}
              text={`${percentage2}%`}
              styles={buildStyles({
                // Rotation of path and trail, in number of turns (0-1)
                rotation: 0.25,
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "butt",

                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,

                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',

                // Colors
                pathColor: `rgba(65, 105, 225,  ${percentage2 / 100})`,
                trailColor: "#d6d6d6",
                textColor: "#666",
              })}
            />
            ;<p>ANGULAR.JS</p>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 p-4">
            <CircularProgressbar
              value={percentage5}
              text={`${percentage5}%`}
              styles={buildStyles({
                // Rotation of path and trail, in number of turns (0-1)
                rotation: 0.25,
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "butt",

                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,

                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',

                // Colors
                pathColor: `rgba(65, 105, 225,  ${percentage5 / 100})`,
                trailColor: "#d6d6d6",
                textColor: "#666",
              })}
            />
            ;<p>ECMASCRIPT</p>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 p-4">
            <CircularProgressbar
              value={percentage2}
              text={`${percentage2}%`}
              styles={buildStyles({
                // Rotation of path and trail, in number of turns (0-1)
                rotation: 0.25,
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "butt",

                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,

                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',

                // Colors
                pathColor: `rgba(65, 105, 225,  ${percentage2 / 100})`,
                trailColor: "#d6d6d6",
                textColor: "#666",
              })}
            />
            ;<p>GIT & GITHUB</p>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 p-4">
            <CircularProgressbar
              value={percentage5}
              text={`${percentage5}%`}
              styles={buildStyles({
                // Rotation of path and trail, in number of turns (0-1)
                rotation: 0.25,
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "butt",

                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,

                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',

                // Colors
                pathColor: `rgba(65, 105, 225,  ${percentage5 / 100})`,
                trailColor: "#d6d6d6",
                textColor: "#666",
              })}
            />
            ;<p>DATA STRUCTURE</p>
          </div>
        </div>
      </div>
    </sectio>
  );
}

export default Skills;
