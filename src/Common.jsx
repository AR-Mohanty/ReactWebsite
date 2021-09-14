import React from "react";
import { NavLink } from "react-router-dom";


const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 col-lg-0 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.name} <strong className="brand-name">NcertSolution4All</strong>
                  </h1>
                  <h2 className="my-3">
                    We are the team of telanted Scholar's
                  </h2>
                  <div className="mt-5 header-btn">
                    <NavLink to={props.visit} className="btn-get-started">
                      {props.btnname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 header-img order-1 order-lg-2">
                  <img src={props.imgsrc} alt="home gif" className="img-fluid animated" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Common;
