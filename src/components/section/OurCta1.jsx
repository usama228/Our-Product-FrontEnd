"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function OurCta1() {
  const path = usePathname();

  return (
    <>
      <section
        className={`our-cta pt90 pb90 pt60-md pb60-md mt100 mt0-lg ${
          path === "/" || path === "/about-1"
            ? "bgc-thm4"
            : path === "/home-3"
            ? "cta-home3-last"
            : path === "/home-10"
            ? "cta-home3-last mt150 bdrs24"
            : ""
        }`}
      >
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6 col-lg-7 col-xl-5 wow fadeInLeft">
              <div className="cta-style3">
                <h2 className="cta-title">
                  Find the talent needed to get your business growing.
                </h2>
                <p className="cta-text">
                  Advertise your jobs to millions of monthly users and search
                  15.8 million CVs
                </p>
                <Link href="/contact" className="ud-btn btn-thm2">
                  Get Started <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 col-xl-5 position-relative wow zoomIn">
              <div className="cta-img">
                <Image
                  height={489}
                  width={596}
                  className="w-100 h-100 object-fit-contain"
                  src={
                    path === "/" || path === "/about-1"
                      ? "/images/about/about-3.png"
                      : path === "/home-3" || path === "/home-10"
                      ? "/images/about/about-5.png"
                      : ""
                  }
                  alt="woman"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
