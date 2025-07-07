"use client";
import { funfactsData } from "@/data/fanfact";
import React from "react";
import CountUp from "react-countup";

export default function FunFact13() {
  return (
    <section className="pb0 pt60">
      <div className="container maxw1600 bdrb1 pb60">
        <div
          className="row justify-content-center wow fadeInUp"
          data-wow-delay="300ms"
        >
          {funfactsData.map((elm, i) => (
            <div key={i} className="col-6 col-md-3">
              <div className="funfact_one mb20-sm text-center">
                <div className="details">
                  <ul className="ps-0 mb-0 d-flex justify-content-center">
                    <li>
                      <div className="timer">
                        <CountUp end={elm.value} duration={4.75} />
                      </div>
                    </li>
                    <li>
                      <span>M</span>
                    </li>
                  </ul>
                  <p className="text mb-0">{elm.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
