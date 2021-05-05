import React from 'react';
import './About.scss';

function Aboutus() {
    return (
        <section className="Aboutus py-5">
        <div className="container">
          <div className="Aboutus__header text-center">
            <h2>
              ABOUT <span>ME</span>{" "}
            </h2>
          </div>
          <div className="row Aboutus__items pt-5">
            <div className="col-md-6 col-sm-12 py-5">
              <h4 className="font-weight-bold">PERSONAL INFOS.</h4>
              <div className="row">
                <div className="col-lg-6 col-md-12 py-3">
                  <ul className="list-unstyled">
                    <li>
                      Name: <span> Sumaiya Yahia</span>
                    </li>
                    <li>
                      Email: <span>ssnjr14@gmail.com</span>{" "}
                    </li>
                    <li>
                      Freelance: <span>Available</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-12 py-3">
                  <ul className="list-unstyled">
                    <li>
                      Address: <span> Egypt</span>
                    </li>
                    <li>
                      Phone: <span>+02-01024523175</span>{" "}
                    </li>
                    <li>
                      {" "}
                      Languages: <span>English, German</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 py-5">
                <div className="row">
                    <div className="col-lg-6 col-md-12 my-2 ">
                        <div className="card py-5 pl-4">
                            <h2>
                                +1
                            </h2>
                            <p className="mt-2">YEARS OF EXPERIENCE</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 my-2 ">
                    <div className="card py-5 pl-4">
                            <h2>
                               +Jounior
                            </h2>
                            <p className="mt-2">FRONT-END DEVELOPER</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    
    )
}

export default Aboutus
