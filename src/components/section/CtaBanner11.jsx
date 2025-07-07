import Link from "next/link";
import React from "react";

export default function CtaBanner11() {
  return (
    <section className="home11-cta-2 bdrs12 mx-auto maxw1700 pb70 pb30-md">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-4 wow fadeInRight" data-wow-delay="300ms">
            <div className="cta-style mb30-md">
              <h2 className="cta-title mb35">
                Need something <br className="d-none d-xl-block" />
                done?
              </h2>
              <p className="text mb55 mb30-md">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <Link href="/contact" className="ud-btn btn-thm4 bdrs12">
                Get Started <i className="fal fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay="300ms">
            <div className="row">
              <div className="col-sm-6">
                <div className="iconbox-style1 at-home11 mb-xl-5 bg-transparent p-0">
                  <div className="icon before-none text-center">
                    <span className="flaticon-cv"></span>
                  </div>
                  <div className="details">
                    <h4 className="title mt10 mb-3">Post a job</h4>
                    <p className="text">
                      It’s free and easy to post a job. Simply fill{" "}
                      <br className="d-none d-xxl-block" /> in a title,
                      description.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="iconbox-style1 at-home11 mb-xl-5 bg-transparent p-0">
                  <div className="icon before-none text-center">
                    <span className="flaticon-web-design"></span>
                  </div>
                  <div className="details">
                    <h4 className="title mt10 mb-3">Choose freelancers</h4>
                    <p className="text">
                      It’s free and easy to post a job. Simply fill{" "}
                      <br className="d-none d-xxl-block" /> in a title,
                      description.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="iconbox-style1 at-home11 mb-xl-5 bg-transparent p-0">
                  <div className="icon before-none text-center">
                    <span className="flaticon-secure"></span>
                  </div>
                  <div className="details">
                    <h4 className="title mt10 mb-3">Pay safely</h4>
                    <p className="text">
                      It’s free and easy to post a job. Simply fill{" "}
                      <br className="d-none d-xxl-block" /> in a title,
                      description.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="iconbox-style1 at-home11 mb-xl-5 bg-transparent p-0">
                  <div className="icon before-none text-center">
                    <span className="flaticon-customer-service"></span>
                  </div>
                  <div className="details">
                    <h4 className="title mt10 mb-3">We’re here to help</h4>
                    <p className="text">
                      It’s free and easy to post a job. Simply fill{" "}
                      <br className="d-none d-xxl-block" /> in a title,
                      description.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
