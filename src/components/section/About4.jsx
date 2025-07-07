"use client";
import { funfactsData2 } from "@/data/fanfact";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function About4() {
  const path = usePathname();

  return (
    <>
      <section className="pt0 pb40-md">
        <div
          className={`cta-banner mx-auto maxw1700 pt110 pb80 pb30-md bdrs12 position-relative ${
            path === "/home-3" ? "bgc-light-yellow" : ""
          } ${path === "/about-1" ? "bgc-thm3" : ""} ${
            path === "/home-8" ? "hover-bgc-color" : ""
          }`}
        >
          <div className="container">
            <div className="row align-items-start align-items-xl-center">
              <div className="col-md-6 col-lg-7 col-xl-6">
                <div
                  className="position-relative mb35 mb0-sm wow fadeInRight"
                  data-wow-delay="300ms"
                >
                  <div className="freelancer-widget d-none d-lg-block">
                    <h5 className="title mb20">
                      <span className="text-thm">200+</span>
                      Verified Freelancer
                    </h5>
                    <div className="thumb d-flex align-items-center mb20">
                      <div className="flex-shrink-0">
                        <Image
                          height={55}
                          width={55}
                          className="wa"
                          src="/images/team/ea-1.png"
                          alt="object"
                        />
                      </div>
                      <div className="flex-grow-1 ml20">
                        <h6 className="title mb-0">Marvin McKinney</h6>
                        <p className="fz14 mb-0">Designer</p>
                      </div>
                    </div>
                    <div className="thumb d-flex align-items-center mb20">
                      <div className="flex-shrink-0">
                        <Image
                          height={55}
                          width={55}
                          className="wa"
                          src="/images/team/ea-2.png"
                          alt="object"
                        />
                      </div>
                      <div className="flex-grow-1 ml20">
                        <h6 className="title mb-0">Ralph Edwards</h6>
                        <p className="fz14 mb-0">Designer</p>
                      </div>
                    </div>
                    <div className="thumb d-flex align-items-center mb20">
                      <div className="flex-shrink-0">
                        <Image
                          height={55}
                          width={55}
                          className="wa"
                          src="/images/team/ea-3.png"
                          alt="object"
                        />
                      </div>
                      <div className="flex-grow-1 ml20">
                        <h6 className="title mb-0">Annette Black</h6>
                        <p className="fz14 mb-0">Designer</p>
                      </div>
                    </div>
                    <div className="thumb d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <Image
                          height={55}
                          width={55}
                          className="wa"
                          src="/images/team/ea-4.png"
                          alt="object"
                        />
                      </div>
                      <div className="flex-grow-1 ml20">
                        <h6 className="title mb-0">Jane Cooper</h6>
                        <p className="fz14 mb-0">Designer</p>
                      </div>
                    </div>
                  </div>
                  <div className="freelancer-style1 about-page-style text-center d-none d-lg-block">
                    <div className="thumb w90 mb25 mx-auto position-relative rounded-circle">
                      <Image
                        height={90}
                        width={90}
                        className="rounded-circle mx-auto"
                        src="/images/team/fl-2.png"
                        alt="object"
                      />
                      <span className="online" />
                    </div>
                    <div className="details">
                      <h5 className="title mb-1">Kristin Watson</h5>
                      <p className="mb-0">Dog Trainer</p>
                      <div className="review">
                        <p>
                          <i className="fas fa-star fz10 review-color pr10" />
                          <span className="dark-color">4.9</span>
                          (595 reviews)
                        </p>
                      </div>
                      <div className="skill-tags d-flex align-items-center justify-content-center mb20">
                        <span className="tag">Figma</span>
                        <span className="tag mx10">Sketch</span>
                        <span className="tag">HTML5</span>
                      </div>
                      <hr className="opacity-100" />
                      <div className="fl-meta d-flex align-items-center justify-content-between">
                        <a className="meta fw500 text-start">
                          Location
                          <br />
                          <span className="fz14 fw400">London</span>
                        </a>
                        <a className="meta fw500 text-start">
                          Rate
                          <br />
                          <span className="fz14 fw400">$90 / hr</span>
                        </a>
                        <a className="meta fw500 text-start">
                          Job Success
                          <br />
                          <span className="fz14 fw400">%98</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <Image
                    height={561}
                    width={633}
                    className="d-block d-lg-none w-100 h-100 object-fit-contain"
                    src="/images/about/verified-freelancer.png"
                    alt="object"
                  />
                  <div className="imgbox-about-page position-relative d-none d-xl-block">
                    <Image
                      height={129}
                      width={129}
                      className="img-1 spin-right"
                      src="/images/about/element-1.png"
                      alt="object"
                    />
                    <Image
                      height={11}
                      width={41}
                      className="img-2 bounce-x"
                      src="/images/about/element-2.png"
                      alt="object"
                    />
                    <Image
                      height={34}
                      width={8}
                      className="img-3 bounce-y"
                      src="/images/about/element-3.png"
                      alt="object"
                    />
                    <Image
                      height={49}
                      width={57}
                      className="img-4 bounce-y"
                      src="/images/about/element-4.png"
                      alt="object"
                    />
                    <Image
                      height={71}
                      width={71}
                      className="img-5 spin-right"
                      src="/images/about/element-5.png"
                      alt="object"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-5 col-xl-5 offset-xl-1">
                <div
                  className="about-box-1 pe-4 mt100 mt0-lg mb30-lg wow fadeInLeft"
                  data-wow-delay="300ms"
                >
                  <h2 className="title mb10">
                    Truested By Best <br />
                    Freelancer
                  </h2>
                  <p className="text mb25 mb30-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod <br />
                    tempor incididunt.
                  </p>
                  <div className="list-style3 mb40 mb30-md">
                    <ul>
                      {funfactsData2.map((item, index) => (
                        <li key={index}>
                          <i
                            className={`far fa-check text-white ${
                              path === "/home-8"
                                ? "bgc-thm"
                                : "bgc-review-color2"
                            }`}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a href="/service-single" className="ud-btn btn-thm2">
                    See More
                    <i className="fal fa-arrow-right-long" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
