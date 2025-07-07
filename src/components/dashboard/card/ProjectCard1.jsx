"use client";
import Image from "next/image";
import { Tooltip } from "react-tooltip";

export default function ProjectCard1({ data }) {
  return (
    <>
      <div className="freelancer-style1 bdr1 box-shadow-none row ms-0 pr20 align-items-lg-end">
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
        <div className="col-lg-9 px-0">
          <div className="d-lg-flex">
            <div className="thumb w60 position-relative rounded-circle mb15-md">
              <Image
                height={60}
                width={60}
                className="rounded-circle mx-auto"
                src={data.img}
                alt="thumb"
              />
              <span className="online-badge2" />
            </div>
            <div className="details ml20 ml0-md mb15-md">
              <h5 className="title mb10">{data.title}</h5>
              <p className="mb-0 fz14 list-inline-item mb5-sm pe-1">
                <i className="flaticon-place fz16 vam text-thm2 me-1" />{" "}
                {data.location}
              </p>
              <p className="mb-0 fz14 list-inline-item mb5-sm pe-1">
                <i className="flaticon-30-days fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs" />{" "}
                2 hours ago
              </p>
              <p className="mb-0 fz14 list-inline-item mb5-sm">
                <i className="flaticon-contract fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs" />{" "}
                1 Received
              </p>
              <div className="skill-tags d-flex align-items-center justify-content-start mt-3">
                {data.tags.map((item, i) => (
                  <span key={i} className={`tag ${i === 1 ? "mx10" : ""}`}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 px-0">
          <div className="details">
            <div className="text-lg-end">
              <h4 className="mb-0">
                ${data.price.min} - ${data.price.max}
              </h4>
              <p className="text mb-0">Hourly Rate</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
