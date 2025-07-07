import { blog1 } from "@/data/blog";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Blog15() {
  return (
    <section className="pb90 pb20-md bgc-dark bdrs24 mx30">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-9 wow fadeInUp" data-wow-delay="00ms">
            <div className="main-title">
              <h2 className="title text-white">Our Blog</h2>
              <p className="paragraph text-white">
                Aliquam lacinia diam quis lacus euismod
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="text-start text-lg-end mb-4 mb-lg-2">
              <Link className="ud-btn2 text-white" href="/blog-1">
                Browse All<i className="fal fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="row wow fadeInUp" data-wow-delay="300ms">
          {blog1.slice(0, 4).map((elm, i) => (
            <div key={i} className="col-sm-6 col-xl-3">
              <div className="blog-style1 at-home6 bg-transparent">
                <div className="blog-img bdrs4 over-flowhidden">
                  <Image
                    width={330}
                    height={250}
                    style={{ objectFit: "cover" }}
                    className="w-100"
                    src={elm.img}
                    alt=" image "
                  />
                </div>
                <div className="blog-content px-0 pb-0">
                  <a className="date text-white" href="#">
                    {elm.date}
                  </a>
                  <h4 className="title mt-1">
                    <Link className="text-white" href="/blog-single">
                      {elm.title}
                    </Link>
                  </h4>
                  <p className="text-white mb-0">{elm.brief}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
