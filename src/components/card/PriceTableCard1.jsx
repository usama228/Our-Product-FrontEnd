"use client";
import priceStore from "@/store/priceStore";
import { usePathname } from "next/navigation";

export default function PriceTableCard1({ data }) {
  const price = priceStore((state) => state.plan);

  const path = usePathname();

  return (
    <>
      <div
        className={`pricing_packages text-center bdrs16 ${
          data.isActive ? "active" : ""
        } ${path === "/home-10" ? "overflow-hidden" : "at-home2"}`}
      >
        <div className="heading mb10">
          {price === "1m" && (
            <h1 className="text2">
              ${data.monthlyPrice} <small>/ monthly</small>
            </h1>
          )}

          {price === "1y" && (
            <h1 className="text1">
              ${data.yearlyPrice} <small>/ yearly</small>
            </h1>
          )}

          <h4 className="package_title mt-2">{data.plan}</h4>
        </div>
        <div className="details">
          <p className="text mb30">
            One time fee for one listing or task highlighted in search results.
          </p>
          <div className="pricing-list mb40">
            <ul className="px-0">
              <li>1 Listing</li>
              <li>30 Days Visibility</li>
              <li>Highlighted in Search Results</li>
              <li>4 Revisions</li>
              <li>9 days Delivery Time</li>
              <li>Products Support</li>
            </ul>
          </div>
          <div className="d-grid">
            <a
              className={`ud-btn ${
                path === "/home-10" ? "btn-dark-border" : "btn-light-thm"
              }`}
            >
              Buy Now
              <i className="fal fa-arrow-right-long" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
