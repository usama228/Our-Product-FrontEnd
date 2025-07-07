import { blog1 } from "@/data/blog";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Blog16() {
  return (
    <section className="pb90 pb20-md">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-9 wow fadeInUp" data-wow-delay="00ms">
            <div className="main-title">
              <h2 className="title">Our Blog</h2>
              <p className="paragraph">
                Aliquam lacinia diam quis lacus euismod
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="text-start text-lg-end mb-4 mb-lg-2">
              <Link className="ud-btn2" href="/blog-1">
                All Categories<i className="fal fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="row wow fadeInUp" data-wow-delay="300ms">
          <div className="col-lg-6 col-xl-7">
            <div className="blog-style1 at-home6 bg-transparent">
              <div className="blog-img bdrs4 over-flowhidden">
                <Image
                  width={800}
                  height={800}
                  style={{ height: "100%", objectFit: "cover" }}
                  className="w-100"
                  src={blog1[19].img}
                  alt=" image "
                />
              </div>
              <div className="blog-content px-0 pb-0">
                <a className="date" href="#">
                  {blog1[19].date}
                </a>
                <h2 className="title mt-1">
                  <Link href="/blog-single">{blog1[19].title}</Link>
                </h2>
                <p className="mb-0 text">{blog1[19].brief}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-5">
            {blog1.slice(1, 4).map((elm, i) => (
              <div
                key={i}
                className="blog-style1 at-home6 bg-transparent d-flex align-items-center"
              >
                <div className="blog-img bdrs4 overflow-hidden mr30">
                  <Image
                    width={360}
                    height={380}
                    style={{ height: "100%", objectFit: "cover" }}
                    className="w-100"
                    src={elm.img}
                    alt=" image "
                  />
                </div>
                <div className="blog-content px-0 pt-0 pb-0">
                  <a className="date" href="#">
                    {elm.date}
                  </a>
                  <h4 className="title mt-1">
                    <Link href="/blog-single">{elm.title}</Link>
                  </h4>
                  <p className="mb-0">{elm.brief}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
