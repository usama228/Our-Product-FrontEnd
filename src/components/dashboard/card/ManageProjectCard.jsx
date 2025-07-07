"use client";
import { Tooltip } from "react-tooltip";

export default function ManageProjectCard() {
  return (
    <>
      <tr>
        <th scope="row">
          <div className="freelancer-style1 box-shadow-none row m-0 p-0 align-items-lg-end">
            <div className="d-lg-flex px-0">
              <div className="details mb15-md-md">
                <h5 className="title mb10">Food Delviery Mobile App</h5>
                <p className="mb-0 fz14 list-inline-item mb5-sm pe-1">
                  <i className="flaticon-place fz16 vam text-thm2 me-1" />{" "}
                  London, UK
                </p>
                <p className="mb-0 fz14 list-inline-item mb5-sm pe-1">
                  <i className="flaticon-30-days fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs" />{" "}
                  2 hours ago
                </p>
                <p className="mb-0 fz14 list-inline-item mb5-sm text-thm">
                  <i className="flaticon-contract fz16 vam me-1 bdrl1 pl15 pl0-xs bdrn-xs" />{" "}
                  1 Received
                </p>
              </div>
            </div>
          </div>
        </th>
        <td className="vam">
          <span className="fz15 fw400">Web &amp; App Design</span>
        </td>
        <td className="vam">
          <span className="fz14 fw400">$500.00/Fixed</span>
        </td>
        <td>
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
