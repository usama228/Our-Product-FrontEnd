"use client";
import { Tooltip } from "react-tooltip";

export default function WorkExperience() {
  return (
    <>
      <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
        <div className="bdrb1 pb15 mb30 d-sm-flex justify-content-between">
          <h5 className="list-title">Work &amp; Experience</h5>
          <a className="add-more-btn text-thm">
            <i className="icon far fa-plus mr10" />
            Add Experience
          </a>
        </div>
        <div className="position-relative">
          <div className="educational-quality">
            <div className="m-circle text-thm">M</div>
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
              <h5 className="mt15">UX Designer</h5>
              <h6 className="text-thm">Dropbox</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
                ipsum tellus. Interdum et malesuada fames ac ante ipsum{" "}
                <br className="d-none d-lg-block" /> primis in faucibus.
              </p>
            </div>
            <div className="m-circle before-none text-thm">M</div>
            <div className="wrapper mb30 position-relative">
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
              <h5 className="mt15">Art Director</h5>
              <h6 className="text-thm">amazon</h6>
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
                ipsum tellus. Interdum et malesuada fames ac ante ipsum{" "}
                <br className="d-none d-lg-block" /> primis in faucibus.
              </p>
            </div>
          </div>
          <div className="text-start">
            <a className="ud-btn btn-thm">
              Save
              <i className="fal fa-arrow-right-long" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
