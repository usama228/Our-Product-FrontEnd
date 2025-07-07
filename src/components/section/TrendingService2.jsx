"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import { Navigation, Pagination } from "swiper";

import TrendingServiceCard1 from "../card/TrendingServiceCard1";
import { product1 } from "@/data/product";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function TrendingService2({ bgColor }) {
  const path = usePathname();

  const [showSwiper, setShowSwiper] = useState(false);
  useEffect(() => {
    setShowSwiper(true);
  }, []);

  return (
    <>
      <section
        className={`${path === "/home-8" ? "pt0" : ""} ${
          path === "/home-10" ? "pb30-md" : ""
        } ${bgColor ? bgColor : ""}`}
      >
        <div className="container">
          <div className="row align-items-center wow fadeInUp">
            <div className="col-lg-9">
              <div className="main-title">
                <h2 className="title">Trending Services</h2>
                <p className="paragraph">
                  Most viewed and all-time top-selling services
                </p>
              </div>
            </div>
            <div className="col-lg-3 d-none d-lg-block">
              <div className="row justify-content-end">
                <div className="col-auto">
                  <button className="swiper__btn btn__prev__009">
                    <i className="far fa-arrow-left-long" />
                  </button>
                </div>
                <div className="col-auto">
                  <div className="swiper__pagination swiper__pagination__009"></div>
                </div>
                <div className="col-auto">
                  <button className="swiper__btn btn__next__009">
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
                    prevEl: ".btn__prev__009",
                    nextEl: ".btn__next__009",
                  }}
                  pagination={{
                    el: ".swiper__pagination__009",
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
              <div className="text-center mt20">
                <Link className="ud-btn2" href="/service-single">
                  All Categories
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
