import React from "react";
import "./index.css";
import { NavLink } from "react-router-dom";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <section id="header" className="d-flex align-items-center">
          <div className="container-fluid nav_bg">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row">
                  <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <h1>
                      Grow your business with
                      <strong className="brand-name"> MyProject</strong>
                    </h1>
                    <h5 className="my-3">
                      we are the team of talanted developer making websites
                    </h5>
                    <div className="mt-3">
                      <NavLink to="/login" className="btn-get-started">
                        Get Started
                      </NavLink>
                    </div>
                  </div>

                  <div className="col-lg-6 order-1 order-lg-2 header-img">
                    <img
                      src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                      className="img-fluid animated"
                      alt="home img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
