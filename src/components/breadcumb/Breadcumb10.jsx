"use client";

import { useState } from "react";

export default function Breadcumb10({ path }) {
  const [shareToggle, setShareToggle] = useState(false);
  const [saveToggle, setSaveToggle] = useState(false);

  return (
    <>
      <section className="breadcumb-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-lg-10">
              <div className="breadcumb-style1 mb10-xs">
                <div className="breadcumb-list">
                  {path?.map((item, i) => (
                    <a key={i}>{item}</a>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-lg-2">
              <div className="d-flex align-items-center justify-content-sm-end">
                <a
                  onClick={() => setShareToggle(!shareToggle)}
                  className="position-relative ui-share-toggle"
                >
                  <div
                    className={`share-save-widget d-flex align-items-center ${
                      shareToggle ? "active" : ""
                    }`}
                  >
                    <span className="icon flaticon-share dark-color fz12 mr10" />
                    <div className="h6 mb-0">Share</div>
                  </div>
                  {shareToggle && (
                    <div className="ui-social-media">
                      <a>
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                      <a>
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                      <a>
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                      <a>
                        <i className="fa-brands fa-pinterest-p"></i>
                      </a>
                    </div>
                  )}
                </a>
                <a onClick={() => setSaveToggle(!saveToggle)}>
                  <div
                    className={`share-save-widget d-flex align-items-center ml15 ${
                      saveToggle ? "active" : ""
                    }`}
                  >
                    <span className="icon flaticon-like dark-color fz12 mr10" />
                    <div className="h6 mb-0">Save</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
