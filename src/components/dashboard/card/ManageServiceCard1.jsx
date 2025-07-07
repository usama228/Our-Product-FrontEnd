"use client";
import Image from "next/image";
import Link from "next/link";
import { Tooltip } from "react-tooltip";

export default function ManageServiceCard1({ data }) {
  return (
    <>
      <tr>
        <th className="dashboard-img-service" scope="row">
          <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
            <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
              <Image
                height={91}
                width={122}
                className="w-100"
                src={data.img}
                alt="thumb"
              />
            </div>
            <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
              <h6 className="list-title mb-0">
                <Link href="/service-single">{data.title}</Link>
              </h6>
              <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                {data.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </th>
        <td className="align-top">
          <span className="fz15 fw400">{data.category}</span>
        </td>
        <td className="align-top">
          <span className="fz14 fw400">${data.cost.toFixed(2)}/Fixed</span>
        </td>
        <td className="align-top">
          <div className="d-flex">
            <a
              className="icon me-2"
              id="edit"
              data-bs-toggle="modal"
              data-bs-target="#proposalModal"
            >
              <Tooltip anchorSelect="#edit" className="ui-tooltip" place="top">
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
              <Tooltip
                anchorSelect="#delete"
                place="top"
                className="ui-tooltip"
              >
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
