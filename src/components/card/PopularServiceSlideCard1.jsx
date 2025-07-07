"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PopularServiceSlideCard1({
  data,
  style = "",
  isContentExpanded,
}) {
  const [isFavActive, setFavActive] = useState(false);
  const path = usePathname();
  const [showSwiper, setShowSwiper] = useState(false);
  useEffect(() => {
    setShowSwiper(true);
  }, []);

  return (
    <>
      <div
        className={`listing-style1 ${path === "/home-7" ? "style5" : ""} 
                ${
                  path === "/home-2" ||
                  path === "/home-9" ||
                  path === "/home-16" ||
                  path === "/home-14"
                    ? "default-box-shadow1 bdrs16"
                    : ""
                } 
                ${style}`}
        style={path === "/home-20" ? { border: "none", boxShadow: "none" } : {}}
      >
        <div className="list-thumb">
          <div className="listing-thumbIn-slider position-relative navi_pagi_bottom_center slider-1-grid">
            <div className="item">
              {showSwiper && (
                <Swiper
                  navigation={{
                    prevEl: ".btn__prev__005",
                    nextEl: ".btn__next__005",
                  }}
                  modules={[Navigation, Pagination]}
                  className="mySwiper"
                  loop={true}
                  pagination={{
                    el: ".swiper__pagination__005",
                    clickable: true,
                  }}
                >
                  {data?.gallery?.map((item, index) => (
                    <SwiperSlide key={index}>
                      <Image
                        height={247}
                        width={331}
                        className="w-100 object-fit-cover"
                        src={item}
                        alt="thumbnail"
                      />
                    </SwiperSlide>
                  ))}
                  <div className="swiper__parent">
                    <div className="row justify-content-center">
                      <div className="col-auto">
                        <button className="swiper__btn swiper__btn-2 btn__prev__005">
                          <i className="far fa-arrow-left-long" />
                        </button>
                      </div>
                      <div className="col-auto">
                        <div className="swiper__pagination swiper__pagination-2 swiper__pagination__005"></div>
                      </div>
                      <div className="col-auto">
                        <button className="swiper__btn swiper__btn-2 btn__next__005">
                          <i className="far fa-arrow-right-long" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Swiper>
              )}
              <a
                onClick={() => setFavActive(!isFavActive)}
                className={`listing-fav fz12 z-1 ${
                  isFavActive ? "ui-fav-active" : ""
                }`}
              >
                <span className="far fa-heart" />
              </a>
            </div>
          </div>
        </div>
        <div className={`list-content ${isContentExpanded ? "px-0" : ""}`}>
          <p className="list-text body-color fz14 mb-1">{data.category}</p>
          <h5 className="list-title">
            <Link href={`/service-single/${data.id}`}>{data.title}</Link>
          </h5>
          <div className="review-meta d-flex align-items-center">
            <i className="fas fa-star fz10 review-color me-2" />
            <p className="mb-0 body-color fz14">
              <span className="dark-color me-2">{data.rating}</span>
              {data.review}
              reviews
            </p>
          </div>
          <hr className="my-2" />
          <div className="list-meta d-flex justify-content-between align-items-center mt15">
            <a>
              <span className="position-relative mr10">
                <Image
                  height={30}
                  width={30}
                  className="rounded-circle object-fit-contain"
                  src={data.author.img}
                  alt="Freelancer Photo"
                />
                <span className="online-badge" />
              </span>
              <span className="fz14">{data.author.name}</span>
            </a>
            <div className="budget">
              <p className="mb-0 body-color">
                Starting at
                <span className="fz17 fw500 dark-color ms-1">
                  ${data.price}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
