import React from "react";
import "./Portfolio.scss";
import dynamic from "../../assets/dynamic.jpg";
import has from "../../assets/home.jpg";
import mogo from "../../assets/mogo.jpg";
import trafalgar from "../../assets/trafalgar.png";
import personal from "../../assets/personal.png";
import add from "../../assets/add.jpg";
import demo from "../../assets/demo.jpg";
import bit from "../../assets/bit.jpg";
import deco from "../../assets/deco.jpg";

function Portfolio() {
  return (
    <section className="portfolio py-5">
      <div className="container">
        <div className="portfolio__header mb-3 text-center">
          <h2>
            MY <span>PORTFOLIO</span>{" "}
          </h2>
        </div>
        <div className="row portfolio__items pt-5">

          <div className="col-md-4 col-sm-12 pt-3 ">
            <div className="portfolio__items__item position-relative">
              <img src={has} className="w-100 img-fluid" alt="" />
              <div className="position-absolute w-100 h-100 portfolio__items__item__caption d-flex align-items-center justify-content-center p-3">
                <a className="text-white px-4 py-2" href="https://lnkd.in/erqUYra" target="_blank">
                  View Website
                </a>
              </div>
            </div>
            <div className="p-3">
               <h6>Has-Health / React & Firebase Website</h6>
            </div>
          </div>
       
          <div className="col-md-4 col-sm-12 pt-3 ">
            <div className="portfolio__items__item position-relative">
              <img src={dynamic} className="w-100 img-fluid" alt="" />
              <div className="position-absolute w-100 h-100 portfolio__items__item__caption d-flex align-items-center justify-content-center p-3">
                <a className="text-white px-4 py-2" href="https://dyna98.netlify.app" target="_blank">
                  View Website
                </a>
              </div>
            </div>
            <div className="p-3">
               <h6>Dynamic++ / Design with Angular.</h6>
            </div>
          </div>
       
          <div className="col-md-4 col-sm-12 pt-3 ">
            <div className="portfolio__items__item position-relative">
              <img src={mogo} className="w-100 img-fluid" alt="" />
              <div className="position-absolute w-100 h-100 portfolio__items__item__caption d-flex align-items-center justify-content-center p-3">
                <a className="text-white px-4 py-2" href="https://sumaiya218.github.io/MOGO/" target="_blank">
                  View Website
                </a>
              </div>
            </div>
            <div className="p-3">
               <h6>MOGO / Design with Bootstrap & Sass.</h6>
            </div>
          </div>

          <div className="col-md-4 col-sm-12 pt-3 ">
            <div className="portfolio__items__item position-relative">
              <img src={deco} className="w-100 img-fluid" alt="" />
              <div className="position-absolute w-100 h-100 portfolio__items__item__caption d-flex align-items-center justify-content-center p-3">
                <a className="text-white px-4 py-2" href="https://sumaiya218.github.io/Decoration/" target="_blank">
                  View Website
                </a>
              </div>
            </div>
            <div className="p-3">
               <h6>Decoration/ Responsive Native Website.</h6>
            </div>
          </div>

          <div className="col-md-4 col-sm-12 pt-3 ">
            <div className="portfolio__items__item position-relative">
              <img src={trafalgar} className="w-100 img-fluid" alt="" />
              <div className="position-absolute w-100 h-100 portfolio__items__item__caption d-flex align-items-center justify-content-center p-3">
                <a className="text-white px-4 py-2" href="https://sumaiya218.github.io/Trafalgar/" target="_blank">
                  View Website
                </a>
              </div>
            </div>
            <div className="p-3">
               <h6>Trafalgar Portfolio with HTML, CSS & CSS3.</h6>
            </div>
          </div>
       
          <div className="col-md-4 col-sm-12 pt-3 ">
            <div className="portfolio__items__item position-relative">
              <img src={add} className="w-100 img-fluid" alt="" />
              <div className="position-absolute w-100 h-100 portfolio__items__item__caption d-flex align-items-center justify-content-center p-3">
                <a className="text-white px-4 py-2" href="https://sumaiya218.github.io/Add-Product-/" target="_blank">
                  View Website
                </a>
              </div>
            </div>
            <div className="p-3">
               <h6>Add Product / JavaScript Code(Local Storage).</h6>
            </div>
          </div>

          <div className="col-md-4 col-sm-12 pt-3 ">
            <div className="portfolio__items__item position-relative">
              <img src={personal} className="w-100 img-fluid" alt="" />
              <div className="position-absolute w-100 h-100 portfolio__items__item__caption d-flex align-items-center justify-content-center p-3">
                <a className="text-white px-4 py-2" href="https://sumaiya218.github.io/Personal/" target="_blank">
                  View Website
                </a>
              </div>
            </div>
            <div className="p-3">
               <h6>T Personal Portfolio with HTML, CSS & CSS3.</h6>
            </div>
          </div>
       
          <div className="col-md-4 col-sm-12 pt-3 ">
            <div className="portfolio__items__item position-relative">
              <img src={demo} className="w-100 img-fluid" alt="" />
              <div className="position-absolute w-100 h-100 portfolio__items__item__caption d-flex align-items-center justify-content-center p-3">
                <a className="text-white px-4 py-2" href="https://sumaiya218.github.io/Demo/" target="_blank">
                  View Website
                </a>
              </div>
            </div>
            <div className="p-3">
               <h6>Demo Slider / JS Code.</h6>
            </div>
          </div>
       
          <div className="col-md-4 col-sm-12 pt-3 ">
            <div className="portfolio__items__item position-relative">
              <img src={bit} className="w-100 img-fluid" alt="" />
              <div className="position-absolute w-100 h-100 portfolio__items__item__caption d-flex align-items-center justify-content-center p-3">
                <a className="text-white px-4 py-2" href="https://sumaiya218.github.io/CoderBits/" target="_blank">
                  View Website
                </a>
              </div>
            </div>
            <div className="p-3">
               <h6>CoderBits Portfolio  HTML, CSS & Bootstrap.</h6>
            </div>
          </div>
       
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
