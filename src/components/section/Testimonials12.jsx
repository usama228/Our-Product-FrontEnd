"use client";

import { testimonials } from "@/data/testimonials";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Testimonials12() {
  const [activeItem, setActiveItem] = useState(2);

  const handleClick = (i) => {
    // setIsFading(!isFading);
    document.getElementById("testimonialContainer").style.animationName = "";
    setActiveItem(i);
    setTimeout(() => {
      document.getElementById("testimonialContainer").style.animationName =
        "fade-in-testi";
    }, 1);
  };

  return (
    <section className="our-testimonial bdrb1">
      <div className="container">
        <div className="row wow fadeInUp">
          <div className="col-xl-3">
            <div className="testimonial-style2 at-home12 mb30-lg">
              <div className="tab-list position-relative">
                <ul
                  className="nav nav-pills justify-content-md-center"
                  id="pills-tab"
                  role="tablist"
                >
                  {testimonials.map((elm, i) => (
                    <li
                      onClick={() => handleClick(elm.id)}
                      className="nav-item"
                      role="presentation"
                      key={i}
                    >
                      <button
                        className={`nav-link ${
                          activeItem == elm.id ? "active" : ""
                        } ${!i ? "ps-0" : ""} `}
                        type="button"
                        role="tab"
                        aria-selected="true"
                      >
                        <Image
                          width={70}
                          height={71}
                          objectFit="cover"
                          src={elm.img}
                          alt=" image "
                        />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-8 offset-xl-1">
            <div className="testimonial-style2 at-home12 ">
              <div
                id="testimonialContainer"
                className={`animtesti testi-content`}
              >
                <span className="icon fas fa-quote-left"></span>
                <h4 className="testi-text">
                  "
                  {
                    testimonials.filter((elm) => elm.id == activeItem)[0]
                      .comment
                  }
                  "
                </h4>
                <h6 className="name">
                  {testimonials.filter((elm) => elm.id == activeItem)[0].name}
                </h6>
                <p className="design mb-0">
                  {testimonials.filter((elm) => elm.id == activeItem)[0].role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
