"use client";
import Image from "next/image";
import { Tooltip } from "react-tooltip";

export default function ManageJobCard({ data }) {
  return (
    <>
      <tr>
        <th scope="row">
          <div className="freelancer-style1 p-0 mb-0 box-shadow-none">
            <div className="d-lg-flex align-items-lg-center">
              <div className="thumb w60 position-relative rounded-circle mb15-md">
                <Image
                  height={60}
                  width={60}
                  className="rounded-circle mx-auto"
                  src={data.img}
                  alt="rounded"
                />
                <span className="online-badge2" />
              </div>
              <div className="details ml15 ml0-md mb15-md">
                <h5 className="title mb-2">{data.title}</h5>
                <h6 className="mb-0 text-thm">{data.server}</h6>
              </div>
            </div>
          </div>
        </th>
        <td className="vam">
          <span className="fz15 fw400">{data.application}+ Applied</span>
        </td>
        <td className="vam">
          <span>{data.created}</span>
          <br />
          <span className="fz14 fw400">{data.expired}</span>
        </td>
        <td className="vam">
          <span className="pending-style style6">Active</span>
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
                Edit
              </Tooltip>
              <span className="flaticon-delete" />
            </a>
          </div>
        </td>
      </tr>
    </>
  );
}
