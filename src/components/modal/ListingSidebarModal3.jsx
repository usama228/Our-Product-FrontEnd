"use client";
import toggleStore from "@/store/toggleStore";
import CategoryOption1 from "../option/CategoryOption1";
import BudgetOption1 from "../option/BudgetOption1";
import ClearButton from "../button/ClearButton";
import JobTypeOption1 from "../option/JobTypeOption1";
import LevelOption1 from "../option/LevelOption1";

export default function ListingSidebarModal3() {
  const listingToggle = toggleStore((state) => state.listingToggleHandler);

  return (
    <>
      <div className="lefttside-hidden-bar">
        <div className="hsidebar-header bdrb1 ">
          <h4 className="list-title">All filters</h4>
          <div className="sidebar-close-icon" onClick={listingToggle}>
            <span className="far fa-times" />
          </div>
        </div>
        <div className="hsidebar-content">
          <div className="widget-wrapper">
            <div className="sidebar-accordion">
              <div className="accordion" id="accordionExample2">
                <div className="card mb20 pb10">
                  <div className="card-header" id="headingZero">
                    <h4>
                      <button
                        className="btn btn-link ps-0 collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseZero"
                        aria-expanded="false"
                        aria-controls="collapseZero"
                      >
                        Category
                      </button>
                    </h4>
                  </div>
                  <div
                    id="collapseZero"
                    className="collapse show"
                    aria-labelledby="headingZero"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body card-body px-0 pt-0">
                      <CategoryOption1 />
                    </div>
                  </div>
                </div>
                <div className="card mb20 pb0">
                  <div className="card-header" id="headingOnes">
                    <h4>
                      <button
                        className="btn btn-link ps-0 collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOnes"
                        aria-expanded="false"
                        aria-controls="collapseOnes"
                      >
                        Salary
                      </button>
                    </h4>
                  </div>
                  <div
                    id="collapseOnes"
                    className="collapse"
                    aria-labelledby="headingOnes"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body card-body px-0 pt-0">
                      <div className="range-slider-style2">
                        <BudgetOption1 />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb20 pb5">
                  <div className="card-header" id="headingTwos">
                    <h4>
                      <button
                        className="btn btn-link ps-0 collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwos"
                        aria-expanded="false"
                        aria-controls="collapseTwos"
                      >
                        Job Type
                      </button>
                    </h4>
                  </div>
                  <div
                    id="collapseTwos"
                    className="collapse"
                    aria-labelledby="headingTwos"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body card-body px-0 pt-0">
                      <JobTypeOption1 />
                    </div>
                  </div>
                </div>
                <div className="card mb20 pb5">
                  <div className="card-header" id="headingThrees">
                    <h4>
                      <button
                        className="btn btn-link ps-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThrees"
                        aria-expanded="true"
                        aria-controls="collapseThrees"
                      >
                        Level
                      </button>
                    </h4>
                  </div>
                  <div
                    id="collapseThrees"
                    className="collapse"
                    aria-labelledby="headingThrees"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body card-body px-0 pt-0">
                      <LevelOption1 />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ClearButton />
        </div>
      </div>

      <div onClick={listingToggle} className="hiddenbar-body-ovelay" />
    </>
  );
}
