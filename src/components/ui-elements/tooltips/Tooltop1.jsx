"use client";
import { Tooltip } from "react-tooltip";

export default function Tooltop1() {
  return (
    <>
      <div className="ui-content">
        <h5 className="title">Tooltips</h5>
        <div className="tooltip-list">
          <Tooltip anchorSelect="#top" className="ui-tooltip">
            Tooltop on top
          </Tooltip>
          <button type="button" className="ud-btn btn-gray me-2" id="top">
            Top
          </button>
          <Tooltip anchorSelect="#bottom" className="ui-tooltip" place="bottom">
            Tooltop on bottom
          </Tooltip>
          <button type="button" className="ud-btn btn-gray me-2" id="bottom">
            Bottom
          </button>
          <Tooltip anchorSelect="#right" className="ui-tooltip" place="right">
            Tooltop on top
          </Tooltip>
          <button type="button" className="ud-btn btn-gray me-2" id="right">
            Right
          </button>
          <Tooltip anchorSelect="#left" className="ui-tooltip" place="left">
            Tooltop on left
          </Tooltip>
          <button type="button" className="ud-btn btn-gray" id="left">
            Left
          </button>
        </div>
      </div>
    </>
  );
}
