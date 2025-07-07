"use client";
import { Tooltip } from "react-tooltip";

export default function Award() {
  return (
    <>
      <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
        <div className="bdrb1 pb15 mb30 d-sm-flex justify-content-between">
          <h5 className="list-title">Awards</h5>
          <a className="add-more-btn text-thm">
            <i className="icon far fa-plus mr10" />
            Add Awards
          </a>
        </div>
        <div className="position-relative">
          <div className="educational-quality ps-0">
            <div className="wrapper mb40 position-relative">
              <div className="del-edit">
                <div className="d-flex">
                  <a className="icon me-2" id="edit">
                    <Tooltip anchorSelect="#edit" className="ui-tooltip">
                      Edit
                    </Tooltip>
                    <span className="flaticon-pencil" />
                  </a>
                  <a className="icon" id="delete">
                    <Tooltip anchorSelect="#delete" className="ui-tooltip">
                      Delete
                    </Tooltip>
                    <span className="flaticon-delete" />
                  </a>
                </div>
              </div>
              <span className="tag">2012 - 2014</span>
              <h5 className="mt15">UI UX Design</h5>
              <h6 className="text-thm">Udemy</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
                ipsum tellus. Interdum et malesuada fames ac ante ipsum{" "}
                <br className="d-none d-lg-block" /> primis in faucibus.
              </p>
            </div>
            <div className="wrapper mb40 position-relative">
              <div className="del-edit">
                <div className="d-flex">
                  <a className="icon me-2" id="edit">
                    <Tooltip anchorSelect="#edit" className="ui-tooltip">
                      Edit
                    </Tooltip>
                    <span className="flaticon-pencil" />
                  </a>
                  <a className="icon" id="delete">
                    <Tooltip anchorSelect="#delete" className="ui-tooltip">
                      Delete
                    </Tooltip>
                    <span className="flaticon-delete" />
                  </a>
                </div>
              </div>
              <span className="tag">2008 - 2012</span>
              <h5 className="mt15">App Design</h5>
              <h6 className="text-thm">Google</h6>
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
                ipsum tellus. Interdum et malesuada fames ac ante ipsum{" "}
                <br className="d-none d-lg-block" /> primis in faucibus.
              </p>
            </div>
          </div>
          <div className="text-start">
            <a className="ud-btn btn-thm" href="#">
              Save
              <i className="fal fa-arrow-right-long" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
