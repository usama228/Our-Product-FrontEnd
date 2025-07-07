import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero18() {
  return (
    <section className="hero-home13 at-home18 m30 overflow-hidden">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7">
            <div className="home18-hero-content">
              <h1 className="banner-title animate-up-1 mb25">
                Freelance Services For <br className="d-none d-xl-block" />
                Your Business
              </h1>
              <p className="text-white text animate-up-2">
                Work with talented people at the most affordable price to get
                the most <br className="d-none d-lg-block" />
                out of your time and cost
              </p>
              <div className="d-sm-flex align-items-center mt30 animate-up-3">
                <Link
                  href="/job-1"
                  className="ud-btn btn-thm4 me-3 bdrs120 btn-1"
                >
                  Find Work
                </Link>
                <Link
                  href="/freelancer-1"
                  className="ud-btn btn-white bdr1 bdrs120 btn-2"
                >
                  Find Talent
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-5 d-none d-xl-block">
            <div className="home18-hero-img text-end animate-up-1">
              <div className="thumb position-relative">
                <Image
                  width={476}
                  height={559}
                  style={{ height: "fit-content" }}
                  className="img"
                  src="/images/about/home18-hero-img1.png"
                  alt=" image "
                />
              </div>
              <div className="detail text-start">
                <h5 className="text-white">Leslie Alexander</h5>
                <p className="fz13 text-white mb-0">UX / UI Designer</p>
              </div>
              <div className="iconbox-small1 text-start d-flex wow fadeInRight default-box-shadow4 bounce-x">
                <span className="icon flaticon-badge"></span>
                <div className="details pl20">
                  <h6 className="mb-1">Proof of quality</h6>
                  <p className="text fz13 mb-0">Lorem Ipsum Dolar Amet</p>
                </div>
              </div>
              <Image
                width={362}
                height={68}
                className="img-1 bounce-y"
                src="/images/about/happy-client-1.png"
                alt=" image "
              />
              <Image
                width={91}
                height={43}
                className="img-2 bounce-y"
                src="/images/about/element-15.png"
                alt=" image "
              />
              <Image
                width={49}
                height={49}
                className="img-3 spin-right"
                src="/images/about/element-16.png"
                alt=" image "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
