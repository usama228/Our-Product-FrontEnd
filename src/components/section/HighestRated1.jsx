"use client";
import HeighestRetedCard1 from "../card/HighestRatedCard1";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import { freelancer1, hightedRated1 } from "@/data/product";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HighestRated1() {
  const [showSwiper, setShowSwiper] = useState(false);
  useEffect(() => {
    setShowSwiper(true);
  }, []);

  return (
    <>
      <section className="pt90 pt60-md pb130 pb60-md">
        <div className="container">
          <div className="row align-items-center wow fadeInUp">
            <div className="col-lg-9">
              <div className="main-title">
                <h2 className="title">Highest Rated Freelancers</h2>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet, consectetur.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="text-start text-lg-end mb-4">
                <Link
                  className="ud-btn btn-light-thm bdrs90"
                  href="/freelancer-1"
                >
                  All Freelancers
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="ui-hightest-rated">
                {showSwiper && (
                  <Swiper
                    spaceBetween={30}
                    navigation={{
                      prevEl: ".btn__prev__002",
                      nextEl: ".btn__next__002",
                    }}
                    modules={[Navigation, Pagination]}
                    className="mySwiper"
                    loop={true}
                    pagination={{
                      el: ".swiper__pagination__002",
                      clickable: true,
                    }}
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
                    {freelancer1.map((item, index) => (
                      <SwiperSlide key={index}>
                        <HeighestRetedCard1 data={item} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-auto">
                <button className="swiper__btn btn__prev__002">
                  <i className="far fa-arrow-left-long" />
                </button>
              </div>
              <div className="col-auto">
                <div className="swiper__pagination swiper__pagination__002"></div>
              </div>
              <div className="col-auto">
                <button className="swiper__btn btn__next__002">
                  <i className="far fa-arrow-right-long" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
