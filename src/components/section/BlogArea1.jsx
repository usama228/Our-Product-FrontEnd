"use client";
import { useState } from "react";
import Pagination1 from "./Pagination1";
import BlogCard2 from "../card/BlogCard2";
import { blog1 } from "@/data/blog";

const tabs = [
  "All",
  "Freelancer",
  "Graphics Design",
  "App Developer",
  "Digital Marketing",
  "Music & Audio",
  "Video & Audio",
];

export default function BlogArea1() {
  const [getCurrentTab, setCurrentTab] = useState("All");

  // tab handler
  const tabHandler = (select) => {
    setCurrentTab(select);
  };

  return (
    <>
      <section className="pt40 pb0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-title mb50">
                <h2 className="title">Freeio Blog</h2>
                <p className="text mb-0">
                  Give your visitor a smooth online experience with a solid UX
                  design
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-blog pt-0">
        <div className="container">
          <div className="row wow fadeInUp" data-wow-delay="300ms">
            <div className="col-xl-12">
              <div className="navtab-style1 blog-page-style">
                <nav>
                  <div className="nav nav-tabs mb30" id="nav-tab2">
                    {tabs.map((item, index) => (
                      <button
                        onClick={() => tabHandler(item)}
                        key={index}
                        className={`nav-link fw600 ${
                          getCurrentTab === item ? "active" : ""
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </nav>
              </div>
              <div className="navtab-style1">
                <div className="row">
                  {blog1
                    .slice(0, 12)
                    .filter((item) =>
                      getCurrentTab === "All"
                        ? item
                        : item.category === getCurrentTab
                        ? true
                        : false,
                    )
                    .map((item,i) => (
                      <div key={ i } className="col-sm-6 col-xl-3">
                        <BlogCard2 data={item} />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <Pagination1 />
        </div>
      </section>
    </>
  );
}
