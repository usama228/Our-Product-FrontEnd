"use client";
import { browserCategory } from "@/data/project";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BrowserCategory11() {
  const [showSwiper, setShowSwiper] = useState(false);
  useEffect(() => {
    setShowSwiper(true);
  }, []);
  return (
    <section className="pb90 pb30-md pt-0">
      <div className="container">
        <div
          className="row align-items-center wow fadeInUp"
          data-wow-delay="00ms"
        >
          <div className="col-lg-9">
            <div className="main-title2">
              <h2 className="title">Browse talent by category</h2>
              <p className="paragraph">
                Get some Inspirations from 1800+ skills
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="text-start text-lg-end mb-4 mb-lg-2">
              <Link className="ud-btn2" href="/service-single">
                All Categories<i className="fal fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="row wow fadeInUp">
          <div className="col-lg-12">
            <div className="">
              {showSwiper && (
                <Swiper
                  slidesPerView={5}
                  spaceBetween={30}
                  modules={[Navigation, Pagination]}
                  className="mySwiper"
                  loop={true}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    540: {
                      slidesPerView: 2,
                    },
                    768: {
                      slidesPerView: 3,
                    },
                    992: {
                      slidesPerView: 4,
                    },
                    1200: {
                      slidesPerView: 5,
                    },
                    1500: {
                      slidesPerView: 6,
                    },
                    1800: {
                      slidesPerView: 7,
                    },
                  }}
                >
                  {browserCategory.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="item">
                        <div className="iconbox-style1 at-home11-v2 bdr1 bdrs12">
                          <div className="icon">
                            <span className={item.icon}></span>
                          </div>
                          <div className="details mt20">
                            <p className="text mb5">{item.skill} skills</p>
                            <h5 className="title"><Link href="/service-1">{item.title}</Link></h5>
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
      </div>
    </section>
  );
}
