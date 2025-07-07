"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function PopularServiceCard1({
  data,
  style = "",
  isContentExpanded = false,
}) {
  const [isFavActive, setFavActive] = useState(false);
  const path = usePathname();

  return (
    <>
      <div
        className={`listing-style1 ${
          path === "/home-2" ||
          path === "/home-9" ||
          path === "/home-16" ||
          path === "/home-14"
            ? "bdrs16"
            : ""
        } ${path === "/home-7" ? "style5" : ""} ${style}`}
        style={path === "/home-20" ? { border: "none", boxShadow: "none" } : {}}
      >
        <div className="list-thumb">
          <Image
            height={247}
            width={331}
            className="w-100"
            src={data.img}
            alt="thumbnail"
          />
          <a
            onClick={() => setFavActive(!isFavActive)}
            className={`listing-fav fz12 ${isFavActive ? "ui-fav-active" : ""}`}
          >
            <span className="far fa-heart" />
          </a>
        </div>
        <div className={`list-content ${isContentExpanded ? "px-0" : ""}`}>
          <p className="list-text body-color fz14 mb-1">{data.category}</p>
          <h5 className="list-title">
            <Link href={`/service-single/${data.id}`}>
              {data.title.slice(0, 40) + "..."}
            </Link>
          </h5>
          <div className="review-meta d-flex align-items-center">
            <i className="fas fa-star fz10 review-color me-2" />
            <p className="mb-0 body-color fz14">
              <span className="dark-color me-2">{data.rating}</span>
              {data.review} reviews
            </p>
          </div>
          <hr className="my-2" />
          <div className="list-meta d-flex justify-content-between align-items-center mt15">
            <Link className="d-flex" href="/">
              <span className="position-relative mr10">
                <Image
                  height={30}
                  width={30}
                  className="rounded-circle wa"
                  src={data.author.img}
                  alt="Freelancer Photo"
                />
                <span className="online-badges" />
              </span>
              <span className="fz14">{data.author.name}</span>
            </Link>
            <div className="budget">
              <p className="mb-0 body-color">
                Starting at
                <span className="fz17 fw500 dark-color ms-1">
                  ${data.price}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
