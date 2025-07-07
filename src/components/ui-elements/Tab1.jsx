"use client";

import { useState } from "react";

const tab = ["Development & IT", "Design & Creative", "Digital Marketing"];

export default function Tab1() {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <>
      <div className="ui-content">
        <h5 className="title">Tabs</h5>
        <div className="navpill-style1 mb70">
          <ul className="nav nav-pills mb30">
            {tab.map((item, i) => (
              <li key={i} className="nav-item">
                <button
                  onClick={() => setCurrentTab(i)}
                  className={`nav-link fw500 dark-color ${
                    currentTab === i ? "active" : ""
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
          <div className="tab-content">
            <div
              className={`tab-pane fade fz15 text ${
                currentTab === 0 ? "show active" : ""
              }`}
            >
              Pharetra nulla ullamcorper sit lectus. Fermentum mauris
              pellentesque nec nibh sed et, vel diam, massa. Placerat quis vel
              fames interdum urna lobortis sagittis sed pretium. Aliquam eget
              posuere sit enim elementum nulla vulputate magna. Morbi sed arcu
              proin quis tortor non risus.
            </div>
            <div
              className={`tab-pane fade fz15 text ${
                currentTab === 1 ? "show active" : ""
              }`}
            >
              Pharetra nulla ullamcorper sit lectus. Fermentum mauris
              pellentesque nec nibh sed et, vel diam, massa. Placerat quis vel
              fames interdum urna lobortis sagittis sed pretium. Aliquam eget
              posuere sit enim elementum nulla vulputate magna. Morbi sed arcu
              proin quis tortor non risus.
            </div>
            <div
              className={`tab-pane fade fz15 text ${
                currentTab === 2 ? "show active" : ""
              }`}
            >
              Pharetra nulla ullamcorper sit lectus. Fermentum mauris
              pellentesque nec nibh sed et, vel diam, massa. Placerat quis vel
              fames interdum urna lobortis sagittis sed pretium. Aliquam eget
              posuere sit enim elementum nulla vulputate magna. Morbi sed arcu
              proin quis tortor non risus.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
