"use client";
import OurTeamCard1 from "../card/OurTeamCard1";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import { ourTeam1 } from "@/data/project";
import { useEffect, useState } from "react";

export default function OurTeam1() {
  const [showSwiper, setShowSwiper] = useState(false);
  useEffect(() => {
    setShowSwiper(true);
  }, []);

  return (
    <>
      <section className="pb80 pb50-md">
        <div className="container">
          <div className="row wow fadeInUp">
            <div className="col-lg-9">
              <div className="main-title2">
                <h2 className="title">Our Team</h2>
                <p className="paragraph">Lorem ipsum dolor sit amet</p>
              </div>
            </div>
            <div className="col-lg-3 mt50 d-none d-lg-block">
              <div className="row justify-content-end">
                <div className="col-auto">
                  <button className="swiper__btn btn__prev__004">
                    <i className="far fa-arrow-left-long" />
                  </button>
                </div>
                <div className="col-auto">
                  <div className="swiper__pagination swiper__pagination__004"></div>
                </div>
                <div className="col-auto">
                  <button className="swiper__btn btn__next__004">
                    <i className="far fa-arrow-right-long" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row wow fadeInUp" data-wow-delay="300ms">
            <div className="col-lg-12">
              <div className="ui-slider-1">
                {showSwiper && (
                  <Swiper
                    spaceBetween={30}
                    navigation={{
                      prevEl: ".btn__prev__004",
                      nextEl: ".btn__next__004",
                    }}
                    modules={[Navigation, Pagination]}
                    className="mySwiper"
                    loop={true}
                    pagination={{
                      el: ".swiper__pagination__004",
                      clickable: true,
                    }}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                      },
                      768: {
                        slidesPerView: 3,
                        slidesPerGroup: 2,
                      },
                      992: {
                        slidesPerView: 4,
                        slidesPerGroup: 2,
                      },
                      1200: {
                        slidesPerView: 5,
                        slidesPerGroup: 6,
                      },
                    }}
                  >
                    {ourTeam1.map((item, index) => (
                      <SwiperSlide key={index}>
                        <OurTeamCard1 data={item} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
