"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import FsLightbox from "fslightbox-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import { useEffect, useState } from "react";
import { testimonialsThree } from "@/data/testimonials";
import Image from "next/image";

export default function Testimonials11() {
  const [toggler, settoggler] = useState(false);

  const [showSwiper, setShowSwiper] = useState(false);
  useEffect(() => {
    setShowSwiper(true);
  }, []);

  return (
    <>
      <section className="pb-0">
        <div className="container">
          <div className="row wow fadeInUp">
            <div className="col-lg-12">
              <div className="position-relative">
                {showSwiper && (
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    navigation={{
                      prevEl: ".pre-slide3",
                      nextEl: ".next-slide3",
                    }}
                    modules={[Navigation, Pagination]}
                    className="mySwiper"
                    loop={true}
                  >
                    {testimonialsThree.map((elm, i) => (
                      <SwiperSlide key={i}>
                        <div className="item">
                          <div className="row align-items-center">
                            <div className="col-lg-5 col-xl-4">
                              <div className="testimonial-style4-img position-relative">
                                <Image
                                  width={470}
                                  height={500}
                                  className="bdrs12"
                                  style={{
                                    width: "100%",
                                    height: "fit-content",
                                  }}
                                  src={elm.img}
                                  alt=" image "
                                />
                                <div
                                  className="video-button-home11 popup-iframe popup-youtube"
                                  onClick={() => settoggler((pre) => !pre)}
                                >
                                  <i className="far fa-play"></i>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 col-xl-8">
                              <div className="testimonial-style4 position-relative">
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
                <button type="button" className="prev-btn pre-slide3">
                  <i className="far fa-chevron-left" />
                </button>
                <button type="button" className="next-btn next-slide3">
                  <i className="far fa-chevron-right" />
                </button>
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
