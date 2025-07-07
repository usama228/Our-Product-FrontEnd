"use client";

import { usePathname } from "next/navigation";

export default function Pagination1() {
  const path = usePathname();
  return (
    <>
      <div
        className={`mbp_pagination text-center ${
          path === "/blog-2" || path === "/blog-3" ? "mb40-md" : ""
        } ${path === "/shop-list" ? "mt30" : ""}`}
      >
        <ul className="page_navigation">
          <li className="page-item">
            <a className="page-link">
              <span className="fas fa-angle-left" />
            </a>
          </li>
          <li className="page-item">
            <a className="page-link">1</a>
          </li>
          <li className="page-item active" aria-current="page">
            <a className="page-link">
              2 <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link">3</a>
          </li>
          <li className="page-item">
            <a className="page-link">4</a>
          </li>
          <li className="page-item">
            <a className="page-link">5</a>
          </li>
          <li className="page-item">
            <a className="page-link">...</a>
          </li>
          <li className="page-item">
            <a className="page-link">20</a>
          </li>
          <li className="page-item">
            <a className="page-link">
              <span className="fas fa-angle-right" />
            </a>
          </li>
        </ul>
        <p className="mt10 mb-0 pagination_page_count text-center">
          1 – 20 of 300+ property available
        </p>
      </div>
    </>
  );
}
