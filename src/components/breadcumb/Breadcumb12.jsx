"use client";
import Image from "next/image";
import HeroSearch1 from "../element/HeroSearch1";
import { useState } from "react";

const role = [
  "Graphics & Design",
  "Digital Marketing",
  "Writing & Translation",
  "Video & Animation",
  "Music & Audio",
  "Programming & Tech",
];

export default function Breadcumb12() {
  const [getSelectedRole, setSelectedRole] = useState(null);

  // role handler
  const roleHandler = (select) => {
    setSelectedRole(select);
  };

  return (
    <>
      <section className="breadcumb-section pt-0">
        <div className="cta-job-v1 cta-banner mx-auto maxw1700 pt120 pb120 bdrs16 position-relative overflow-hidden d-flex align-items-center mx20-lg px30-lg">
          <Image
            height={226}
            width={198}
            className="left-top-img wow zoomIn"
            src="/images/vector-img/left-top.png"
            alt="left-top"
          />
          <Image
            height={181}
            width={255}
            className="right-bottom-img wow zoomIn"
            src="/images/vector-img/right-bottom.png"
            alt="right-bottom"
          />
          <Image
            height={300}
            width={532}
            className="service-v1-vector bounce-y d-none d-xl-block"
            src="/images/vector-img/vector-service-v1.png"
            alt="vector-service"
          />
          <div className="container">
            <div className="row wow fadeInUp">
              <div className="col-xl-7">
                <div className="position-relative">
                  <h2>Job List</h2>
                  <p className="text">
                    All the Lorem Ipsum generators on the Internet tend to
                    repeat.
                  </p>
                </div>
                <div className="advance-search-tab bgc-white p10 bdrs4 mt30">
                  <div className="row">
                    <div className="col-md-5 col-lg-6 col-xl-6">
                      <div className="advance-search-field bdrr1 bdrn-sm">
                        <HeroSearch1 />
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-4 col-xl-3">
                      <div className="bselect-style1">
                        <div className="dropdown bootstrap-select">
                          <button
                            type="button"
                            className="btn dropdown-toggle btn-light"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <div className="filter-option">
                              <div className="filter-option-inner">
                                <div className="filter-option-inner-inner">
                                  {getSelectedRole !== null
                                    ? getSelectedRole
                                    : "City, state, or zip"}
                                </div>
                              </div>
                            </div>
                          </button>
                          <div className="dropdown-menu">
                            <div className="inner show">
                              <ul className="dropdown-menu inner show">
                                {role.map((item, index) => (
                                  <li
                                    onClick={() => roleHandler(item)}
                                    key={index}
                                    className="selected active"
                                  >
                                    <a
                                      className={`dropdown-item selected ${
                                        getSelectedRole === item ? "active" : ""
                                      }`}
                                    >
                                      <span className="text">{item}</span>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-3">
                      <div className="text-center text-xl-start">
                        <a className="ud-btn btn-thm2 w-100 vam">Search</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
