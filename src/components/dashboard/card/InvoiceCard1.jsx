"use client";
import { Tooltip } from "react-tooltip";

export default function InvoiceCard1({ data }) {
  return (
    <>
      <tr>
        <th scope="row">
          <div>
            #{data.invoiceId} <span className="ms-3">{data.invoiceName}</span>
          </div>
        </th>
        <td className="vam">{data.purchaseDate}</td>
        <td className="vam">${data.amount.toFixed(3)}</td>
        <td className="vam">
          <span
            className={`pending-style ${data.status === 1 ? "style1" : ""} ${
              data.status === 2 ? "style2" : ""
            } ${data.status === 3 ? "style3" : ""}`}
          >
            In Progress
          </span>
        </td>
        <td className="vam">
          <a className="table-action fz15 fw500 text-thm2" id="view">
            <Tooltip anchorSelect="#view" clickable className="ui-tooltip">
              View
            </Tooltip>
            <span className="flaticon-website me-2 vam" /> View
          </a>
        </td>
      </tr>
    </>
  );
}
