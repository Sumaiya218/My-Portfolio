import React from "react";
import img from "../../assets/sumaiya.jpg";
import "./Home.scss";
import "../../App.scss";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-4 col-sm-12">
            <img className="img-fluid w-100" src={img} alt="" />
          </div>
          <div className="col-md-8 col-sm-12 Home__text p-5">
            <div className="Home__header">
              <h1 className="mt-2">
                I'M SUMAIYA YAHIA.
                <span className="d-block">FRONT-END DEVELOPER</span>
              </h1>
              <div className=" mt-3">
                <p className="text-muted mb-5">
                  I'm an Egyptian-based web designer & front‑end developer
                  focused on crafting clean & user‑friendly experiences, I am
                  passionate about building excellent software that improves the
                  lives of those around me.
                </p>
                <Link
                  to="/about"
                  className="link px-5 py-3 text-decoration-none text-muted font-weight-bold"
                >
                  MORE ABOUT ME
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
