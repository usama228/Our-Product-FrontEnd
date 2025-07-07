"use client";
import { useState } from "react";

const tab = ["Item 1", "Item 2", "Item 3"];

export default function Tab2() {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <>
      <div className="ui-content">
        <div className="navtab-style1 mb-4 mb-lg-5 mt50">
          <nav>
            <div className="nav nav-tabs mb20">
              {tab.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTab(i)}
                  className={`nav-link fw600 ${
                    currentTab === i ? "active" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </nav>
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
