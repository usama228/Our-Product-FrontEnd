"use client";
import Image from "next/image";
import { Tooltip } from "react-tooltip";

export default function ProposalCard1({ data }) {
  return (
    <>
      <tr>
        <th className="ps-0" scope="row">
          <div className="freelancer-style1 p-0 mb-0 box-shadow-none">
            <div className="d-lg-flex align-items-lg-center">
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
              <div className="details ml15 ml0-md mb15-md">
                <h5 className="title mb-2">{data.title}</h5>
                <p className="mb-0 fz14 list-inline-item mb5-sm pe-1">
                  <i className="flaticon-place fz16 vam text-thm2 me-1" />{" "}
                  London, UK
                </p>
                <p className="mb-0 fz14 list-inline-item mb5-sm pe-1">
                  <i className="flaticon-30-days fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs" />{" "}
                  April 01, 2023
                </p>
                <p className="mb-0 fz14 list-inline-item mb5-sm">
                  <i className="flaticon-contract fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs" />{" "}
                  1 Received
                </p>
              </div>
            </div>
          </div>
        </th>
        <td className="vam">
          <h5 className="mb-0">
            ${data.price.min} - ${data.price.max}{" "}
            <span className="fz14 fw400">Hourly Rate</span>
          </h5>
        </td>
        <td>
          <div className="d-flex">
            <a
              className="icon me-2"
              id="edit"
              data-bs-toggle="modal"
              data-bs-target="#proposalModal"
            >
              <Tooltip anchorSelect="#edit" className="ui-tooltip">
                Edit
              </Tooltip>
              <span className="flaticon-pencil" />
            </a>
            <a
              className="icon"
              id="delete"
              data-bs-toggle="modal"
              data-bs-target="#deleteModal"
            >
              <Tooltip anchorSelect="#delete" className="ui-tooltip">
                Delete
              </Tooltip>
              <span className="flaticon-delete" />
            </a>
          </div>
        </td>
      </tr>
    </>
  );
}
