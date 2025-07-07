"use client";
import { useState } from "react";
import DashboardNavigation from "../header/DashboardNavigation";
import ReviewComment from "../element/ReviewComment";

const tab = ["Services", "Project", "Jobs"];

export default function ReviewsInfo() {
  const [getCurrentTab, setCurrentTab] = useState(0);

  return (
    <>
      <div className="dashboard__content hover-bgc-color">
        <div className="row pb40">
          <div className="col-lg-12">
            <DashboardNavigation />
          </div>
          <div className="col-lg-12">
            <div className="dashboard_title_area">
              <h2>Reviews</h2>
              <p className="text">Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
              <div className="packages_table table-responsive">
                <div className="navtab-style1">
                  <nav>
                    <div className="nav nav-tabs mb30">
                      {tab.map((item, i) => (
                        <button
                          onClick={() => setCurrentTab(i)}
                          key={i}
                          className={`nav-link fw500 ps-0 ${
                            getCurrentTab === i ? "active" : ""
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </nav>
                  {getCurrentTab === 0 &&
                    Array(3)
                      .fill(3)
                      .map((_, i) => (
                        <div key={i} className="col-md-12">
                          <ReviewComment
                            i={i}
                            lenght={Array(3).fill(3).length}
                          />
                        </div>
                      ))}
                  {getCurrentTab === 1 &&
                    Array(4)
                      .fill(4)
                      .map((_, i) => (
                        <div key={i} className="col-md-12">
                          <ReviewComment
                            i={i}
                            lenght={Array(4).fill(4).length}
                          />
                        </div>
                      ))}
                  {getCurrentTab === 2 &&
                    Array(3)
                      .fill(3)
                      .map((_, i) => (
                        <div key={i} className="col-md-12">
                          <ReviewComment
                            i={i}
                            lenght={Array(3).fill(3).length}
                          />
                        </div>
                      ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
