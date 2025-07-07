"use client";
import React from "react";
import CategoryOption1 from "../option/CategoryOption1";
import ProjectTypeOption1 from "../option/ProjectTypeOption1";
import BudgetOption2 from "../option/BudgetOption2";
import DesignToolOption1 from "../option/DesignToolOption1";
import LocationOption1 from "../option/LocationOption1";
import SpeakOption1 from "../option/SpeakOption1";
import EnglishLevelOption1 from "../option/EnglishLevelOption1";
import ProjectTypeOption2 from "../option/ProjectTypeOption2";
import SortOption2 from "../option/SortOptions2";
import Image from "next/image";

export default function ListingSideber7() {
  return (
    <div  className="row align-items-center mb20">
      <div  className="col-sm-6 col-lg-9">
        <div  className="text-center text-sm-start">
          <div  className="dropdown-lists project-list-v2">
            <ul  className="p-0 mb-0 text-center text-sm-start">
              <li  className="d-block d-xl-none mb-2">
                <button type="button"  className="open-btn bg-white filter-btn-left">
                  {" "}
                  <Image
                     className="me-2"
                     width="18" height="18"
                    src="/images/icon/all-filter-icon.svg"
                    alt=""
                  />{" "}
                  All Filter
                </button>
              </li>
              <li  className="list-inline-item position-relative d-none d-xl-inline-block">
                <button
                   className="open-btn bg-white mb10 dropdown-toggle bgc-white overflow-hidden"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  Category <i  className="fa fa-angle-down ms-2"></i>
                </button>
                <div  className="dropdown-menu price">
                  <div  className="widget-wrapper pb25 mb0">
                    <CategoryOption1 />
                  </div>
                  <button  className="done-btn ud-btn btn-thm dropdown-toggle">
                    Apply<i  className="fal fa-arrow-right-long"></i>
                  </button>
                </div>
              </li>
              <li  className="list-inline-item position-relative d-none d-xl-inline-block">
                <button
                   className="open-btn bg-white mb10 dropdown-toggle bgc-white overflow-hidden"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  Project Type <i  className="fa fa-angle-down ms-2"></i>
                </button>
                <div  className="dropdown-menu dd4 pb20">
                  <div  className="widget-wrapper pr20">
                    <ProjectTypeOption2 />
                  </div>
                  <button  className="done-btn ud-btn btn-thm drop_btn4">
                    Apply<i  className="fal fa-arrow-right-long"></i>
                  </button>
                </div>
              </li>
              <li  className="list-inline-item position-relative d-none d-xl-inline-block">
                <button
                   className="open-btn bg-white mb10 dropdown-toggle bgc-white overflow-hidden"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  Price <i  className="fa fa-angle-down ms-2"></i>
                </button>
                <div  className="dropdown-menu dd3">
                  <div  className="widget-wrapper pb25 mb0 pr20">
                    <BudgetOption2 />
                  </div>
                  <button  className="done-btn ud-btn btn-thm drop_btn3">
                    Apply<i  className="fal fa-arrow-right-long"></i>
                  </button>
                </div>
              </li>
              <li  className="list-inline-item position-relative d-none d-xl-inline-block">
                <button
                   className="open-btn bg-white mb10 dropdown-toggle bgc-white overflow-hidden"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  Skills <i  className="fa fa-angle-down ms-2"></i>
                </button>
                <div  className="dropdown-menu dd4 pb20">
                  <div  className="widget-wrapper pr20">
                    <DesignToolOption1 />
                  </div>
                  <button  className="done-btn ud-btn btn-thm drop_btn4">
                    Apply<i  className="fal fa-arrow-right-long"></i>
                  </button>
                </div>
              </li>
              <li  className="list-inline-item position-relative d-none d-xl-inline-block">
                <button
                   className="open-btn bg-white mb10 dropdown-toggle bgc-white overflow-hidden"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  Location <i  className="fa fa-angle-down ms-2"></i>
                </button>
                <div  className="dropdown-menu dd4 pb20">
                  <div  className="widget-wrapper pr20">
                    <LocationOption1 />
                  </div>
                  <button  className="done-btn ud-btn btn-thm drop_btn4">
                    Apply<i  className="fal fa-arrow-right-long"></i>
                  </button>
                </div>
              </li>
              <li  className="list-inline-item position-relative d-none d-xl-inline-block">
                <button
                   className="open-btn bg-white mb10 dropdown-toggle bgc-white overflow-hidden"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  Languages <i  className="fa fa-angle-down ms-2"></i>
                </button>
                <div  className="dropdown-menu dd4 pb20">
                  <div  className="widget-wrapper pr20">
                    <SpeakOption1 />
                  </div>
                  <button  className="done-btn ud-btn btn-thm drop_btn4">
                    Apply<i  className="fal fa-arrow-right-long"></i>
                  </button>
                </div>
              </li>
              <li  className="list-inline-item position-relative d-none d-xl-inline-block">
                <button
                   className="open-btn bg-white mb10 dropdown-toggle bgc-white bdrs12 overflow-hidden"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  Languange Level <i  className="fa fa-angle-down ms-2"></i>
                </button>
                <div  className="dropdown-menu dd4 pb20">
                  <div  className="widget-wrapper pr20">
                    <EnglishLevelOption1 />
                  </div>
                  <button  className="done-btn ud-btn btn-thm drop_btn4">
                    Apply<i  className="fal fa-arrow-right-long"></i>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div  className="col-sm-6 col-lg-3">
        <SortOption2 />
      </div>
    </div>
  );
}
