import { product1 } from "@/data/product";
import React from "react";
import PopularServiceSlideCard1 from "../card/PopularServiceSlideCard1";
import PopularServiceCard1 from "../card/PopularServiceCard1";
import Link from "next/link";

export default function PopulerService11() {
  return (
    <section className="pb90 pb30-md">
      <div className="container">
        <div
          className="row align-items-center wow fadeInUp"
          data-wow-delay="00ms"
        >
          <div className="col-lg-9">
            <div className="main-title2">
              <h2 className="title">Popular Services</h2>
              <p className="paragraph">
                Most viewed and all-time top-selling services
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="text-start text-lg-end mb-4 mb-lg-2">
              <Link className="ud-btn2" href="/service-1">
                All Services<i className="fal fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="row wow fadeInUp" data-wow-delay="300ms">
          {product1
            .slice(0, 8)

            .map((item,i) => (
              <div key={ i } className="col-sm-6 col-xl-3 ">
                {item.gallery ? (
                  <PopularServiceSlideCard1
                    style="listing-style1 bdrs16"
                    data={item}
                  />
                ) : (
                  <PopularServiceCard1
                    style="listing-style1 bdrs16"
                    data={item}
                  />
                )}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
