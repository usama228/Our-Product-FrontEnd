"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import FsLightbox from "fslightbox-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import { useEffect, useState } from "react";
import { testimonialsTwo } from "@/data/testimonials";
import React from "react";
import Image from "next/image";

export default function Testimonials13() {
  const [toggler, settoggler] = useState(false);
  const [showSwiper, setShowSwiper] = useState(false);
  useEffect(() => {
    setShowSwiper(true);
  }, []);

  return (
    <>
      <section className="bgc-light-yellow maxw1700 mx-auto bdrs24">
        <div className="container">
          <div className="row wow fadeInUp">
            <div className="col-lg-12">
              <div className="testimonial-slider-home13 position-relative ">
                {showSwiper && (
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    navigation={{
                      prevEl: ".unique-1-pre",
                      nextEl: ".unique-1-next",
                    }}
                    modules={[Navigation, Pagination]}
                    className="mySwiper"
                    loop={true}
                  >
                    {testimonialsTwo.map((elm, i) => (
                      <SwiperSlide key={i}>
                        <div className="item">
                          <div className="row align-items-center">
                            <div className="col-lg-5 col-xl-5">
                              <div className="testimonial-style4-img position-relative">
                                <Image
                                  width={570}
                                  height={500}
                                  style={{
                                    width: "100%",
                                    height: "fit-content",
                                  }}
                                  className="bdrs12"
                                  src={elm.img}
                                  alt=" image "
                                />
                                <div
                                  className="video-button-home11 at-home13 popup-iframe popup-youtube"
                                  onClick={() => settoggler((pre) => !pre)}
                                  style={{ cursor: "pointer" }}
                                >
                                  <i className="far fa-play"></i>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 col-xl-6 offset-xl-1">
                              <div className="testimonial-style4 position-relative ps-0">
                                <h2 className="sub-title text-thm mb25">
                                  {elm.client}
                                </h2>
                                <h4 className="title mb35">
                                  “ {elm.comment} ”
                                </h4>
                                <h6 className="author fz14">{elm.name}</h6>
                                <p className="desig mb-0">{elm.role}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
                <div className="testimonialSliderButtons">
                  <button type="button" className="unique-1-pre">
                    <i className="far fa-chevron-left" />
                  </button>
                  <button type="button" className="unique-1-next">
                    <i className="far fa-chevron-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=1WdiUn9JaX0"]}
      />
    </>
  );
}
