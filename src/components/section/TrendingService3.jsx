"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import { Navigation, Pagination } from "swiper";

import TrendingServiceCard1 from "../card/TrendingServiceCard1";
import { product1 } from "@/data/product";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function TrendingService3() {
  const [showSwiper, setShowSwiper] = useState(false);
  useEffect(() => {
    setShowSwiper(true);
  }, []);
  return (
    <>
      <section className="pt-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9 wow fadeInUp">
              <div className="main-title">
                <h2 className="title">Trending Services</h2>
                <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="text-start text-lg-end mb-4 mb-lg-3">
                <Link className="ud-btn2" href="/service-1">
                  All Services
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-12">
              {showSwiper && (
                <Swiper
                  slidesPerView={4}
                  spaceBetween={30}
                  freeMode={true}
                  loop={true}
                  className="mySwiper"
                  navigation={{
                    prevEl: ".btn__prev__011",
                    nextEl: ".btn__next__011",
                  }}
                  pagination={{
                    el: ".swiper__pagination__011",
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
                  {product1.slice(0, 8).map((item,i) => (
                    <SwiperSlide key={ i }>
                      <TrendingServiceCard1 data={item} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-auto">
              <button className="swiper__btn btn__prev__011">
                <i className="far fa-arrow-left-long" />
              </button>
            </div>
            <div className="col-auto">
              <div className="swiper__pagination swiper__pagination__011"></div>
            </div>
            <div className="col-auto">
              <button className="swiper__btn btn__next__011">
                <i className="far fa-arrow-right-long" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
