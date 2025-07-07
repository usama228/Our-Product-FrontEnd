"use client";
import toggleStore from "@/store/toggleStore";
import BudgetOption1 from "../option/BudgetOption1";
import DesignToolOption1 from "../option/DesignToolOption1";
import LocationOption1 from "../option/LocationOption1";
import SpeakOption1 from "../option/SpeakOption1";
import CategoryOption1 from "../option/CategoryOption1";
import ProjectTypeOption1 from "../option/ProjectTypeOption1";
import EnglishLevelOption1 from "../option/EnglishLevelOption1";
import ClearButton from "../button/ClearButton";

export default function ListingSidebarModal2() {
  const listingToggle = toggleStore((state) => state.listingToggleHandler);

  return (
    <>
      <div className="lefttside-hidden-bar">
        <div className="hsidebar-header bdrb1">
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
                      <a className="text-thm">+20 more</a>
                    </div>
                  </div>
                </div>
                <div className="card mb20 pb10">
                  <div className="card-header" id="heading011">
                    <h4>
                      <button
                        className="btn btn-link ps-0 collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse011"
                        aria-expanded="false"
                        aria-controls="collapse011"
                      >
                        Project type
                      </button>
                    </h4>
                  </div>
                  <div
                    id="collapse011"
                    className="collapse show"
                    aria-labelledby="heading011"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body card-body px-0 pt-0">
                      <ProjectTypeOption1 />
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
                        Price
                      </button>
                    </h4>
                  </div>
                  <div
                    id="collapseOnes"
                    className="collapse show"
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
                <div className="card mb20 pb10">
                  <div className="card-header" id="headingZero2">
                    <h4>
                      <button
                        className="btn btn-link ps-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseZero2"
                        aria-expanded="true"
                        aria-controls="collapseZero2"
                      >
                        Skills
                      </button>
                    </h4>
                  </div>
                  <div
                    id="collapseZero2"
                    className="collapse show"
                    aria-labelledby="headingZero2"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body card-body px-0 pt-0">
                      <DesignToolOption1 />
                    </div>
                  </div>
                </div>
                <div className="card mb20 pb5">
                  <div className="card-header" id="headingTwos">
                    <h4>
                      <button
                        className="btn btn-link ps-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwos"
                        aria-expanded="true"
                        aria-controls="collapseTwos"
                      >
                        Location
                      </button>
                    </h4>
                  </div>
                  <div
                    id="collapseTwos"
                    className="collapse show"
                    aria-labelledby="headingTwos"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body card-body px-0 pt-0">
                      <LocationOption1 />
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
                        Languange
                      </button>
                    </h4>
                  </div>
                  <div
                    id="collapseThrees"
                    className="collapse show"
                    aria-labelledby="headingThrees"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body card-body px-0 pt-0">
                      <SpeakOption1 />
                    </div>
                  </div>
                </div>
                <div className="card mb20 pb5">
                  <div className="card-header" id="headingFours">
                    <h4>
                      <button
                        className="btn btn-link ps-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFours"
                        aria-expanded="true"
                        aria-controls="collapseFours"
                      >
                        English Level
                      </button>
                    </h4>
                  </div>
                  <div
                    id="collapseFours"
                    className="collapse show"
                    aria-labelledby="headingFours"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body card-body px-0 pt-0">
                      <EnglishLevelOption1 />
                      <a className="text-thm">+20 more</a>
                    </div>
                  </div>
                </div>
              </div>
              <ClearButton />
            </div>
          </div>
        </div>
      </div>
      <div onClick={listingToggle} className="hiddenbar-body-ovelay" />
    </>
  );
}
