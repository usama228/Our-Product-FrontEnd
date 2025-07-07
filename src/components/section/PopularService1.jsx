"use client";
import { product1 } from "@/data/product";
import PopularServiceCard1 from "../card/PopularServiceCard1";
import PopularServiceSlideCard1 from "../card/PopularServiceSlideCard1";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const categories = [
  "All",
  "Development & IT",
  "Design & Creative",
  "Digital Marketing",
  "Music & Audio",
  "Video & Animation",
];

export default function PopularService1() {
  const [getCurrentCategory, setCurrentCategory] = useState("All");

  // tab handler
  const tabHandler = (select) => {
    setCurrentCategory(select);
  };

  const path = usePathname();

  return (
    <>
      <section className={`pt-0 ${path === "/home-9" ? "pb0" : "pb100"}`}>
        <div className="container">
          <div className="row align-items-center wow fadeInUp">
            <div className="col-xl-3">
              <div className="main-title mb30-lg">
                <h2 className="title">Popular Services</h2>
                <p className="paragraph">
                  Most viewed and all-time top-selling services
                </p>
              </div>
            </div>
            <div className="col-xl-9">
              <div className="navpill-style2 at-home9 mb50-lg">
                <ul
                  className="nav nav-pills mb20 justify-content-xl-end"
                  id="pills-tab"
                >
                  {categories.map((item, index) => (
                    <li key={index} className="nav-item">
                      <button
                        onClick={() => tabHandler(item)}
                        className={`nav-link fw500 dark-color ${
                          getCurrentCategory === item ? "active" : ""
                        }`}
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                {product1
                  .slice(0, 8)
                  .filter((item) =>
                    getCurrentCategory === "All"
                      ? item
                      : item.tag === getCurrentCategory && item,
                  )
                  .map((item,i) => (
                    <div key={ i } className="col-sm-6 col-xl-3">
                      {item.gallery ? (
                        <PopularServiceSlideCard1 data={item} />
                      ) : (
                        <PopularServiceCard1 data={item} />
                      )}
                    </div>
                  ))}
                <div className="col-lg-12">
                  <div className="text-center mt30">
                    <Link
                      className={`ud-btn bdrs60 ${
                        path === "/home-9"
                          ? "btn-white2 double-border"
                          : "btn-light-thm"
                      }`}
                      href="/service-1"
                    >
                      All Services
                      <i className="fal fa-arrow-right-long" />
                    </Link>
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
