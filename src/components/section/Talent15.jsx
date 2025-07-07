import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Talent15() {
  return (
    <section className="home11-cta-3 at-home15 bgc-thm4 bdrs24 mx30">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-6 col-lg-8 wow fadeInLeft">
            <div className="cta-style3">
              <h2 className="cta-title">
                Find the talent needed to get your{" "}
                <br className="d-none d-xl-block" />
                business growing.
              </h2>
              <p className="cta-text">
                Advertise your jobs to millions of monthly users and search 15.8
                million CVs
              </p>
              <Link
                href="/job-1"
                className="ud-btn btn-dark default-box-shadow1 bdrs16 mr20"
              >
                Find Work <i className="fal fa-arrow-right-long"></i>
              </Link>
              <Link
                href="/freelancer-1"
                className="ud-btn btn-transparent bdrs16"
              >
                Find Talent <i className="fal fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow fadeIn">
            <Image
              width={433}
              height={550}
              style={{ height: "fit-content" }}
              className="home11-ctaimg-v3 at-home15 d-none d-md-block"
              src="/images/about/about-16.png"
              alt=" image "
            />
            <Image
              width={270}
              height={431}
              style={{ height: "fit-content" }}
              className="home15-ctaimg-v2 d-none d-md-block"
              src="/images/about/element-14.png"
              alt=" image "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
