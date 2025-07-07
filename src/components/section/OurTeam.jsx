"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

import { teamDataTwo } from "@/data/testimonials";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function OurTeam() {
  const [showSwiper, setShowSwiper] = useState(false);
  useEffect(() => {
    setShowSwiper(true);
  }, []);
  return (
    <section className="pb90 pb30-md bdrt1">
      <div className="container">
        <div className="row align-items-center wow fadeInUp">
          <div className="col-lg-12">
            <div className="main-title">
              <h2 className="title">Our Team</h2>
              <p className="paragraph">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="position-relative">
              {showSwiper && (
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  navigation={{
                    prevEl: ".pre-slide3",
                    nextEl: ".next-slide3",
                  }}
                  modules={[Navigation, Pagination]}
                  className="mySwiper"
                  loop={true}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    992: {
                      slidesPerView: 3,
                    },
                    1200: {
                      slidesPerView: 3,
                    },
                    1500: {
                      slidesPerView: 4,
                    },
                    1800: {
                      slidesPerView: 5,
                    },
                  }}
                >
                  {teamDataTwo.map((elm, i) => (
                    <SwiperSlide key={i}>
                      <div className="item">
                        <div className="feature-style2 mb30">
                          <div className="feature-img bdrs16">
                            <Image
                              width={260}
                              height={350}
                              style={{ height: "fit-content" }}
                              className="w-100"
                              src={elm.imageSrc}
                              alt=" image "
                            />
                          </div>
                          <div className="feature-content pt15">
                            <h5 className="title mb-2">
                              {elm.name}{" "}
                              <span className="float-end fz15">
                                <i className="fas fa-star fz10 pr10"></i>
                                {elm.rating}
                              </span>
                            </h5>
                            <p className="text fz15">{elm.role}</p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
              <button type="button" className="prev-btn pre-slide3">
                <i className="far fa-arrow-left-long" />
              </button>
              <button type="button" className="next-btn next-slide3">
                <i className="far fa-arrow-right-long" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
