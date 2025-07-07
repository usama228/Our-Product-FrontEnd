import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ForClient() {
  return (
    <section className="pb120 pb60-sm">
      <div className="container">
        <div className="row align-items-center wow fadeInUp mb100 mb0-md">
          <div className="col-md-6 col-xl-6">
            <div className="text-center mb30-sm">
              <Image
                width={686}
                height={600}
                style={{ height: "fit-content" }}
                className="w-100 bdrs12"
                src="/images/about/about-14.jpg"
                alt=" image "
              />
            </div>
          </div>
          <div className="col-md-6 col-xl-4 offset-xl-1">
            <div className="main-title">
              <h5 className="text-thm">For clients</h5>
              <h2 className="title">
                Find talent <br className="d-none d-lg-block" />
                your way
              </h2>
              <p className="paragraph">
                Work with the largest network of independent professionals and
                get things done—from quick turnarounds to big transformations.
              </p>
            </div>
            <Link href="/contact" className="ud-btn btn-white2 bdrs60">
              Get Started <i className="fal fa-arrow-right-long"></i>
            </Link>
          </div>
        </div>
        <div className="row align-items-center wow fadeInUp mt20">
          <div className="col-md-6 col-xl-4">
            <div className="main-title">
              <h5 className="text-thm">For clients</h5>
              <h2 className="title">
                Find great <br className="d-none d-lg-block" />
                work
              </h2>
              <p className="paragraph">
                Work with the largest network of independent professionals and
                get things done—from quick turnarounds to big transformations.
              </p>
            </div>
            <Link href="/contact" className="ud-btn btn-white2 bdrs60">
              Contact Us <i className="fal fa-arrow-right-long"></i>
            </Link>
          </div>
          <div className="col-md-6 col-xl-6 offset-xl-1">
            <div className="text-center mt30-sm">
              <Image
                width={686}
                height={600}
                style={{ height: "fit-content" }}
                className="w-100 bdrs12"
                src="/images/about/about-15.jpg"
                alt=" image "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
