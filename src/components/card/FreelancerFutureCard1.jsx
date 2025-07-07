"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function FreelancerFutureCard1({ data }) {
  const [isFavActive, setFavActive] = useState(false);
  return (
    <>
      <div className="listing-style1">
        <div className="list-thumb">
          <Image
            height={190}
            width={255}
            className="w-100 h-100 object-fit-cover"
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
        <div className="list-content">
          <p className="list-text body-color fz14 mb-1">{data.category}</p>
          <h6 className="list-title">
            <Link href="/services-single">
              {data.title.slice(0, 40) + "..."}
            </Link>
          </h6>
          <div className="review-meta d-flex align-items-center">
            <i className="fas fa-star fz10 review-color me-2" />
            <p className="mb-0 body-color fz14">
              <span className="dark-color me-2">{data.rating}</span>
              {data.review} reviews
            </p>
          </div>
          <hr className="my-2" />
          <div className="list-meta mt15">
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
