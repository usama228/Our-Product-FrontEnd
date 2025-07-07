import { inspiringProjects, product1 } from "@/data/product";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function InspiringService11() {
  return (
    <section className="pb90 pb20-md">
      <div className="container">
        <div
          className="row align-items-center wow fadeInUp"
          data-wow-delay="00ms"
        >
          <div className="col-lg-9">
            <div className="main-title">
              <h2 className="title">Inspiring work made on Freeio</h2>
              <p className="paragraph">
                Get some Inspirations from 1800+ skills
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="text-start text-lg-end mb-4 mb-lg-2">
              <Link className="ud-btn2" href="/blog-1">
                See more<i className="fal fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="row wow fadeInUp" data-wow-delay="300ms">
          {inspiringProjects.map((elm, i) => (
            <div key={i} className="col-sm-6 col-xl-3">
              <div className="listing-style1 bdrs12 default-box-shadow1">
                <div className="list-thumb">
                  <Image
                    width={330}
                    height={250}
                    style={{ height: "fit-content" }}
                    className="w-100"
                    src={elm.imageSrc}
                    alt=" image "
                  />
                </div>
                <div className="list-content">
                  <div className="list-meta">
                    <a className="d-flex align-items-center" href="#">
                      <span className="position-relative mr15">
                        <Image
                          width={60}
                          height={60}
                          className="rounded-circle"
                          src={elm.freelancerImageSrc}
                          alt="Freelancer Photo"
                        />
                      </span>
                      <span>
                        <h5 className="fz14 mb-1">{elm.title}</h5>
                        <p className="fz14 mb-0">by {elm.author}</p>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
