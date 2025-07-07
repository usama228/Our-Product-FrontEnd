"use client";
import Image from "next/image";

export default function CtaBanner142() {
  return (
    <>
      <section className="p-0">
        <div
          className={`cta-banner3 mx-auto maxw1600 pt120 pt60-lg pb90 pb60-lg position-relative overflow-hidden bgc-thm4`}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-5 wow fadeInRight" data-wow-delay="300ms">
                <div className="mb30">
                  <div className="main-title">
                    <h2 className="title">
                      A whole world of freelance{" "}
                      <br className="d-none d-xl-block" /> talent at your
                      fingertips
                    </h2>
                  </div>
                </div>
                <div className="why-chose-list">
                  <div className="list-one d-flex align-items-start mb30">
                    <span className="list-icon flex-shrink-0 flaticon-badge" />
                    <div className="list-content flex-grow-1 ml20">
                      <h4 className="mb-1">Proof of quality</h4>
                      <p className="text mb-0 fz15">
                        Check any pro’s work samples, client reviews, and
                        identity <br className="d-none d-lg-block" />{" "}
                        verification.
                      </p>
                    </div>
                  </div>
                  <div className="list-one d-flex align-items-start mb30">
                    <span className="list-icon flex-shrink-0 flaticon-money" />
                    <div className="list-content flex-grow-1 ml20">
                      <h4 className="mb-1">No cost until you hire</h4>
                      <p className="text mb-0 fz15">
                        Interview potential fits for your job, negotiate rates,
                        and only pay <br className="d-none d-lg-block" /> for
                        work you approve.
                      </p>
                    </div>
                  </div>
                  <div className="list-one d-flex align-items-start mb30">
                    <span className="list-icon flex-shrink-0 flaticon-security" />
                    <div className="list-content flex-grow-1 ml20">
                      <h4 className="mb-1">Safe and secure</h4>
                      <p className="text mb-0 fz15">
                        Focus on your work knowing we help protect your data and
                        privacy. We’re here with 24/7 support if you need it.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image
            height={500}
            width={500}
            style={{ height: "fit-content" }}
            className="cta-banner3-img wow fadeInLeft h-100 object-fit-cover"
            src="/images/about/about-17.jpg"
            alt="cta banner 3"
            data-wow-delay="300ms"
          />
        </div>
      </section>
    </>
  );
}
