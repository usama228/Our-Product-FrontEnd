"use client";
import { blog1 } from "@/data/blog";
import BlogCard1 from "../card/BlogCard1";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function OurBlog1() {
  const path = usePathname();

  return (
    <>
      <section
        className={`pb90 pb20-md ${
          path === "/home-4" || path === "/home-7" ? "pt0" : ""
        }`}
      >
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="00ms">
              <div className="main-title">
                <h2 className="title">Our Blog</h2>
                <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
            </div>
            {path === "/home-5" && (
              <div className="col-lg-3 align-self-center">
                <div className="text-start text-lg-end mb-4 mb-lg-2">
                  <Link className="ud-btn2" href="/blog-1">
                    All Categories
                    <i className="fal fa-arrow-right-long" />
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div className="row wow fadeInUp" data-wow-delay="300ms">
            {blog1.slice(0, 4).map((item,i) => (
              <div key={ i } className="col-sm-6 col-xl-3">
                <BlogCard1
                  data={item}
                  isContentExpanded={path === "/home-6" ? true : false}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
