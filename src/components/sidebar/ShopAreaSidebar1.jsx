"use client";
import Search1 from "../element/Search1";
import CategoryOption1 from "../option/CategoryOption1";
import BudgetOption1 from "../option/BudgetOption1";
import ClearButton from "../button/ClearButton";
import CategoryOption2 from "../option/CategoryOption2";

export default function ShopAreaSidebar1() {
  return (
    <>
      <div className="shop-sidebar">
        <Search1 />
        <div className="sidebar-accordion">
          <div className="accordion" id="accordionExample2">
            <div className="card mb20 pb0">
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
                    Category
                  </button>
                </h4>
              </div>
              <div
                id="collapseTwos"
                className="collapse show"
                aria-labelledby="headingTwos"
                data-parent="#accordionExample"
              >
                <CategoryOption2 />
              </div>
            </div>
            <div className="card mb20 pb5">
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
          </div>
          <ClearButton />
        </div>
      </div>
    </>
  );
}
