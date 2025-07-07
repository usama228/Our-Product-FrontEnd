"use client";
import Image from "next/image";
import SortOption1 from "../option/SortOption1";
import CategoryDropdown2 from "../dropdown/CategoryDropdown2";
import NotOfEmployee1 from "../dropdown/NotOfEmployee1";
import toggleStore from "@/store/toggleStore";
import ClearButton from "../button/ClearButton";

export default function ListingOption5() {
  const listingToggle = toggleStore((state) => state.listingToggleHandler);

  return (
    <>
      <div className="row align-items-center mb20">
        <div className="col-sm-6 col-lg-9">
          <div className="text-center text-sm-start">
            <div className="dropdown-lists">
              <ul className="p-0 mb-0 text-center text-sm-start">
                <li className="d-block d-xl-none mb-2">
                  <button
                    type="button"
                    className="open-btn filter-btn-left"
                    onClick={listingToggle}
                  >
                    <Image
                      height={18}
                      width={18}
                      className="me-2"
                      src="/images/icon/all-filter-icon.svg"
                      alt="icon"
                    />
                    All Filter
                  </button>
                </li>
                <li className="list-inline-item position-relative d-none d-xl-inline-block">
                  <button
                    className="open-btn mb10 dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                  >
                    Category
                    <i className="fa fa-angle-down ms-2" />
                  </button>
                  <div className="dropdown-menu dd4 pb20">
                    <CategoryDropdown2 />
                  </div>
                </li>
                <li className="list-inline-item position-relative d-none d-xl-inline-block">
                  <button
                    className="open-btn mb10 dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                  >
                    No of Employees
                    <i className="fa fa-angle-down ms-2" />
                  </button>
                  <div className="dropdown-menu">
                    <NotOfEmployee1 />
                  </div>
                </li>
                <li className="list-inline-item position-relative d-none d-xl-inline-block">
                  <ClearButton />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="page_control_shorting mb10 d-flex align-items-center justify-content-center justify-content-sm-end">
            <SortOption1 />
          </div>
        </div>
      </div>
    </>
  );
}
