"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Navigation } from "swiper";
import HeroSearch1 from "../element/HeroSearch1";
import { useRouter } from "next/navigation";

const role = [
  "Select Role",
  "Graphics & Design",
  "Digital Marketing",
  "Writing & Translation",
  "Video & Animation",
  "Music & Audio",
  "Programming & Tech",
];

const popular = [
  "Designer",
  "Developer",
  "Web",
  "IOS",
  "PHP",
  "Senior",
  "Engineer",
];

const hero = ["/images/home/home-1.jpg", "/images/home/home-2.jpg"];

export default function Hero1() {
  const [getSelectedRole, setSelectedRole] = useState(null);

  // role handler
  const roleHandler = (select) => {
    setSelectedRole(select);
  };

  const router = useRouter();
  // search handler
  const searchHandler = () => {
    router.push("/freelancer-1");
  };
  const [showSwiper, setShowSwiper] = useState(false);
  useEffect(() => {
    setShowSwiper(true);
  }, []);

  return (
    <>
      <section className="home-one p-0 space-maintain-1">
        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-banner-wrapper home1_style">
                <div className="ui-hero-slide">
                  {showSwiper && (
                    <Swiper
                      className="mySwiper"
                      loop={true}
                      effect={"fade"}
                      pagination={{
                        clickable: true,
                      }}
                      modules={[EffectFade, Navigation]}
                      navigation={{
                        nextEl: ".right-btn",
                        prevEl: ".left-btn",
                      }}
                    >
                      {hero.map((item, index) => (
                        <SwiperSlide key={index}>
                          <Image
                            height={4000}
                            width={4000}
                            src={item}
                            className="ui-hero-slide__img"
                            alt="Hero Banner"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  )}
                  <div className="carousel-btn-block banner-carousel-btn">
                    <span className="carousel-btn left-btn">
                      <i className="fas fa-chevron-left left" />
                    </span>
                    <span className="carousel-btn right-btn">
                      <i className="fas fa-chevron-right right" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home1-banner-content">
          <div className="container">
            <div className="row">
              <div className="col-xl-10 col-xxl-7">
                <div className="position-relative">
                  <h3 className="banner-title animate-up-2">
                    Hire the best freelancers for{" "}
                    <br className="d-none d-lg-block" />
                    any job, online.
                  </h3>
                  <p className="banner-text text-white ff-heading mb25 animate-up-3">
                    Millions of people use freeio.com to turn their ideas into
                    reality.
                  </p>
                  <div className="advance-search-tab bgc-white bgct-sm p10 p0-md bdrs4 banner-btn position-relative zi9 animate-up-4">
                    <div className="row">
                      <div className="col-md-5 col-lg-6 col-xl-6">
                        <div className="advance-search-field mb10-sm bdrr1 bdrn-sm">
                          <HeroSearch1 />
                        </div>
                      </div>
                      <div className="col-md-4 col-lg-4 col-xl-4 d-none d-md-block">
                        <div className="bselect-style1">
                          <div className="dropdown bootstrap-select">
                            <button
                              type="button"
                              className="btn dropdown-toggle btn-light"
                              data-bs-toggle="dropdown"
                            >
                              <div className="filter-option">
                                <div className="filter-option-inner">
                                  <div className="filter-option-inner-inner">
                                    {getSelectedRole !== null
                                      ? getSelectedRole
                                      : "Select Role"}
                                  </div>
                                </div>
                              </div>
                            </button>
                            <div className="dropdown-menu">
                              <div className="inner show">
                                <ul className="dropdown-menu inner show">
                                  {role.map((item, index) => (
                                    <li
                                      onClick={() => roleHandler(item)}
                                      key={index}
                                      className="selected active"
                                    >
                                      <a
                                        className={`dropdown-item selected ${
                                          getSelectedRole === item
                                            ? "active"
                                            : ""
                                        }`}
                                      >
                                        <span className="text">{item}</span>
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-lg-2 col-xl-2 ps-md-0">
                        <div className="text-center text-xl-end">
                          <button
                            onClick={searchHandler}
                            className="ud-btn btn-thm w-100 px-4"
                            type="button"
                          >
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-none d-md-flex mt30 banner-text animate-up-5">
                    <p className="hero-text fz15 me-2 text-white mb-0">
                      Popular Searches
                    </p>
                    {popular.map((elm,i)=><a key={i} className="text-white" style={{marginRight:'5px'}} >
                          {`${elm}${(i != (popular.length -1)) ? ',':' '}`}
                        </a>)}
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
