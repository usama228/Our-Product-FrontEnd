"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import Image from "next/image";

const gigImages = [
  "/images/about/employee-single-1.jpg",
  "/images/about/employee-single-1.jpg",
  "/images/about/employee-single-1.jpg",
];

const gigImagesSmall = [
  "/images/about/employee-single-2.jpg",
  "/images/about/employee-single-3.jpg",
  "/images/about/employee-single-4.jpg",
];

export default function EmployeeDetailSlider1() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [showSwiper, setShowSwiper] = useState(false);
  useEffect(() => {
    setShowSwiper(true);
  }, []);

  return (
    <>
      <div className="employee-single-slider vam_nav_style slider-1-grid owl-carousel owl-theme mt55 mb60 owl-loaded owl-drag">
        <div className="thumb">
          {showSwiper && (
            <Swiper
              loop={true}
              spaceBetween={10}
              navigation={{
                prevEl: ".prev-btn",
                nextEl: ".next-btn",
              }}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              {gigImages.map((item, i) => (
                <SwiperSlide key={i}>
                  <Image
                    height={554}
                    width={929}
                    src={item}
                    alt="gallery"
                    className="w-100 h-auto"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
        <button type="button" className="prev-btn">
          <i className="far fa-arrow-left-long" />
        </button>
        <button type="button" className="next-btn">
          <i className="far fa-arrow-right-long" />
        </button>
        {showSwiper && (
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper ui-service-gig-slder-bottom"
          >
            {gigImagesSmall.map((item, i) => (
              <SwiperSlide key={i}>
                <Image
                  height={112}
                  width={150}
                  src={item}
                  alt="image"
                  className="w-100"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </>
  );
}
