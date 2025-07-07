"use client";
import Image from "next/image";
import Link from "next/link";
import { Tooltip } from "react-tooltip";

export default function ServiceCard1({ data }) {
  return (
    <>
      <div className="listing-style1">
        <div className="list-thumb">
          <Image
            height={204}
            width={274}
            className="w-100 h-auto"
            src={data.img}
            alt="img"
          />
          <a className="tag-del" id={`delete${data.id}`}>
            <Tooltip
              anchorSelect={`#delete${data.id}`}
              events={["click"]}
              place={"left-start"}
              className="ui-tooltip"
            >
              Delete Item
            </Tooltip>
            <span className="flaticon-delete" />
          </a>
        </div>

        <div className="list-content">
          <p className="list-text body-color fz14 mb-1">{data.category}</p>
          <h5 className="list-title">
            <Link href="/service-single">{data.title}</Link>
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
            <a className="d-flex">
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
            </a>
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
