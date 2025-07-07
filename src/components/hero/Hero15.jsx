"use client";

import { partners } from "@/data/partners";
import { useRouter } from "next/navigation";
import React from "react";
import HeroSearch1 from "../element/HeroSearch1";
import Image from "next/image";

export default function Hero15() {
  const router = useRouter();
  const searchHandler = () => {
    router.push("/project-1");
  };
  return (
    <section className="hero-home15 bgc-light-yellow pt60 pb60 mx30">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-6">
            <div className="home14-hero-content">
              <h1 className="title animate-up-1 mb25">
                Hire the Top 3% of <br className="d-none d-xl-block" />
                Freelance Talent
              </h1>
              <p className="text animate-up-2">
                Work with talented people at the most affordable price to get
                the most <br className="d-none d-lg-block" />
                out of your time and cost
              </p>
              <div className="advance-search-tab at-home6 bgc-white bdrs120 bdrs4-sm p10 position-relative zi2 animate-up-3">
                <div className="row">
                  <div className="col-md-9 col-lg-8 col-xl-9">
                    <div className="advance-search-field mb10-sm">
                      <HeroSearch1 />
                    </div>
                  </div>
                  <div className="col-md-3 col-lg-4 col-xl-3">
                    <div className="text-center">
                      <button
                        className="ud-btn btn-dark bdrs120 w-100"
                        type="button"
                        onClick={searchHandler}
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text fz15 me-2 mb-0 mt30 mt30-md animate-up-4">
                Trusted by
              </p>
              <div className="mt20 animate-up-4">
                {partners.map((elm, i) => (
                  <li
                    key={i}
                    className={`d-inline-block ${
                      i + 1 != partners.length
                        ? "me-3 me-sm-5 mb-3 mb-md-0"
                        : ""
                    } `}
                  >
                    <Image
                      width={71}
                      height={21}
                      style={{ height: "fit-content" }}
                      src={elm}
                      alt=" image "
                    />
                  </li>
                ))}
              </div>
            </div>
          </div>
          <div className="col-xl-5 d-none d-xl-block">
            <div className="home15-hero-img position-relative">
              <div className="position-relative">
                <div className="d-flex align-items-center justify-content-end">
                  <div>
                    <Image
                      width={369}
                      height={450}
                      style={{ height: "fit-content" }}
                      className="mb10 wow fadeInLeft"
                      src="/images/about/home15-hero-img-1.png"
                      alt=" image "
                    />
                    <div className="iconbox-small1 text-start d-flex wow fadeInRight default-box-shadow4 bounce-y animate-up-1">
                      <span className="icon flaticon-review"></span>
                      <div className="details pl10">
                        <h6 className="mb-1">Jane Cooper</h6>
                        <p className="text fz13 mb-0">UX / UI Designer</p>
                      </div>
                      <div className="review-meta d-flex align-items-center">
                        <i className="fas fa-star fz10 review-color me-2"></i>
                        <p className="mb-0 body-color fz14">
                          <span className="dark-color me-2">4.82</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="ml10">
                    <Image
                      width={300}
                      height={368}
                      style={{ height: "fit-content" }}
                      className="wow fadeInRight"
                      src="/images/about/home15-hero-img-2.png"
                      alt=" image "
                    />
                    <div className="iconbox-small2 text-start d-flex wow fadeInLeft default-box-shadow4 bounce-y animate-up-2">
                      <span className="icon flaticon-rocket"></span>
                      <div className="details pl10">
                        <h6 className="mb-1">Arlene McCoy</h6>
                        <p className="text fz13 mb-0">UX / UI Designer</p>
                      </div>
                      <div className="review-meta d-flex align-items-center">
                        <i className="fas fa-star fz10 review-color me-2"></i>
                        <p className="mb-0 body-color fz14">
                          <span className="dark-color me-2">4.82</span>
                        </p>
                      </div>
                    </div>
                    <div className="funfact_one at-home15-hero-1 mt10 mb20 pt30 pb30 pl30 wow fadeInLeft">
                      <span className="icon text-white flaticon-working"></span>
                      <div className="details">
                        <ul className="ps-0 mb-0 d-flex justify-content-start">
                          <li>
                            <div className="timer text-white">58</div>
                          </li>
                          <li>
                            <span className="text-white">M</span>
                          </li>
                          <li>
                            <span className="text-white">+</span>
                          </li>
                        </ul>
                        <p className="text mb-0 text-white">
                          Project Completed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
