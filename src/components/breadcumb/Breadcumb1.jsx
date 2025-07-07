"use client";
import Image from "next/image";
import Link from "next/link";

export default function Breadcumb1({ title, brief, isBtnActive }) {
  return (
    <>
      <section className="breadcumb-section wow fadeInUp mt40">
        <div className="cta-commmon-v1 cta-banner bgc-thm2 mx-auto maxw1700 pt120 pb120 bdrs16 position-relative overflow-hidden d-flex align-items-center mx20-lg">
          <Image
            height={226}
            width={198}
            className="left-top-img wow zoomIn"
            src="/images/vector-img/left-top.png"
            alt="object 1"
          />
          <Image
            height={181}
            width={255}
            className="right-bottom-img wow zoomIn"
            src="/images/vector-img/right-bottom.png"
            alt="object 2"
          />
          <div className="container">
            <div className="row">
              <div className="col-xl-5">
                <div
                  className="position-relative wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <h2 className="text-white">{title}</h2>
                  <p className="text mb30 text-white">{brief}</p>
                  {isBtnActive && (
                    <Link className="ud-btn btn-thm" href="/contact">
                      Become Seller
                      <i className="fal fa-arrow-right-long" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
