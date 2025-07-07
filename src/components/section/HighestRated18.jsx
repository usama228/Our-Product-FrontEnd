"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

import { teamData, teamDataThree } from "@/data/testimonials";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HighestRated18() {
  const [showSwiper, setShowSwiper] = useState(false);
  useEffect(() => {
    setShowSwiper(true);
  }, []);
  return (
    <section className="pb90 pb30-md bdrt1">
      <div className="container">
        <div className="row align-items-center wow fadeInUp">
          <div className="col-lg-9">
            <div className="main-title">
              <h2 className="title">Highest Rated Freelancers</h2>
              <p className="paragraph">
                Most viewed and all-time top-selling services
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="text-lg-end mb-2">
              <Link href="/freelancer-1" className="ud-btn2">
                All Services <i className="fal fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="position-relative">
              {showSwiper && (
                <Swiper
                  slidesPerView={4}
                  spaceBetween={30}
                  navigation={{
                    prevEl: ".unique-9-pre",
                    nextEl: ".unique-9-next",
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
                      slidesPerView: 4,
                    },
                  }}
                >
                  {teamDataThree.map((elm, i) => (
                    <SwiperSlide key={i}>
                      <div className="item">
                        <div className="feature-style2 mb30">
                          <div className="feature-img bdrs12">
                            <Image
                              style={{ height: "fit-content" }}
                              width={330}
                              height={466}
                              className="bdrs12 w-100"
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
              <button
                type="button"
                className="prev-btn pre-slide3 unique-9-pre"
              >
                <i className="far fa-chevron-left" />
              </button>
              <button
                type="button"
                className="next-btn next-slide3 unique-9-next"
              >
                <i className="far fa-chevron-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
