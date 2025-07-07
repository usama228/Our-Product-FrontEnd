"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import { Navigation, Pagination } from "swiper";

import { browserCategory } from "@/data/project";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function BrowserCategory15() {
  const [showSwiper, setShowSwiper] = useState(false);
  useEffect(() => {
    setShowSwiper(true);
  }, []);

  return (
    <>
      <section className={"pt0"}>
        <div className="container">
          <div className="row align-items-center wow fadeInUp">
            <div className="col-lg-9">
              <div className="main-title">
                <h2 className="title">Browse talent by category</h2>
                <p className="paragraph">
                  Get some Inspirations from 1800+ skills
                </p>
              </div>
            </div>
            <div className="col-lg-3 d-none d-lg-block">
              <div className="row justify-content-end">
                <div className="col-auto">
                  <button className="swiper__btn btn__prev__009 unique-4-pre">
                    <i className="far fa-arrow-left-long" />
                  </button>
                </div>
                <div className="col-auto">
                  <div className="swiper__pagination swiper__pagination__009 unique-4-pagi"></div>
                </div>
                <div className="col-auto">
                  <button className="swiper__btn btn__next__009 unique-4-next">
                    <i className="far fa-arrow-right-long" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {showSwiper && (
                <Swiper
                  slidesPerView={4}
                  spaceBetween={30}
                  freeMode={true}
                  loop={true}
                  className="mySwiper"
                  navigation={{
                    prevEl: ".unique-4-pre",
                    nextEl: ".unique-4-next",
                  }}
                  pagination={{
                    el: ".unique-4-pagi",
                    clickable: true,
                  }}
                  modules={[Navigation, Pagination]}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      slidesPerGroup: 1,
                    },
                    768: {
                      slidesPerView: 2,
                      slidesPerGroup: 2,
                    },
                    992: {
                      slidesPerView: 3,
                      slidesPerGroup: 3,
                    },
                    1200: {
                      slidesPerView: 4,
                      slidesPerGroup: 4,
                    },
                  }}
                >
                  {browserCategory.map((elm,i) => (
                    <SwiperSlide key={i}>
                      <div className="item">
                        <div className="iconbox-style1 at-home15 bgc-thm4 bdrs24">
                          <div className="icon">
                            <span className={elm.icon}></span>
                          </div>
                          <div className="details mt20">
                            <p className="text mb5">{elm.skill} skills</p>
                            <h4 className="title"><Link href="/service-1">{elm.title}</Link></h4>
                            <p className="mb-0">{elm.brif}</p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
