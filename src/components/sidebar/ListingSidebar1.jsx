import ClearButton from "../button/ClearButton";
import BudgetOption2 from "../option/BudgetOption2";
import DeliveryTimeOption1 from "../option/DeliveryTimeOption1";
import DesignToolOption1 from "../option/DesignToolOption1";
import LevelOption1 from "../option/LevelOption1";
import LocationOption1 from "../option/LocationOption1";
import SpeakOption1 from "../option/SpeakOption1";

export default function ListingSidebar1() {
  return (
    <>
      <div className="list-sidebar-style1 d-none d-lg-block">
        <div className="accordion" id="accordionExample">
          <div className="card mb20 pb10 mt-0">
            <div className="card-header" id="heading0">
              <h4>
                <button
                  className="btn btn-link ps-0 pt-0 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse0"
                  aria-expanded="false"
                  aria-controls="collapse0"
                >
                  Delivery Time
                </button>
              </h4>
            </div>
            <div
              id="collapse0"
              className="collapse show"
              aria-labelledby="heading0"
              data-parent="#accordionExample"
            >
              <DeliveryTimeOption1 />
            </div>
          </div>
          <div className="card mb20 pb0">
            <div className="card-header" id="heading1">
              <h4>
                <button
                  className="btn btn-link ps-0 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse1"
                  aria-expanded="false"
                  aria-controls="collapse1"
                >
                  Budget
                </button>
              </h4>
            </div>
            <div
              id="collapse1"
              className="collapse"
              aria-labelledby="heading1"
              data-parent="#accordionExample"
            >
              <BudgetOption2 />
            </div>
          </div>
          <div className="card mb20 pb5">
            <div className="card-header" id="heading2">
              <h4>
                <button
                  className="btn btn-link ps-0 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse2"
                  aria-expanded="false"
                  aria-controls="collapse2"
                >
                  Design Tool
                </button>
              </h4>
            </div>
            <div
              id="collapse2"
              className="collapse"
              aria-labelledby="heading2"
              data-parent="#accordionExample"
            >
              <DesignToolOption1 />
            </div>
          </div>
          <div className="card mb20 pb5">
            <div className="card-header" id="heading3">
              <h4>
                <button
                  className="btn btn-link ps-0 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse3"
                  aria-expanded="false"
                  aria-controls="collapse3"
                >
                  Location
                </button>
              </h4>
            </div>
            <div
              id="collapse3"
              className="collapse"
              aria-labelledby="heading3"
              data-parent="#accordionExample"
            >
              <LocationOption1 />
            </div>
          </div>
          <div className="card mb20 pb5">
            <div className="card-header" id="heading4">
              <h4>
                <button
                  className="btn btn-link ps-0 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse4"
                  aria-expanded="false"
                  aria-controls="collapse4"
                >
                  Speaks
                </button>
              </h4>
            </div>
            <div
              id="collapse4"
              className="collapse"
              aria-labelledby="heading4"
              data-parent="#accordionExample"
            >
              <SpeakOption1 />
            </div>
          </div>
          <div className="card mb20 pb0">
            <div className="card-header" id="heading5">
              <h4>
                <button
                  className="btn btn-link ps-0 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse5"
                  aria-expanded="false"
                  aria-controls="collapse5"
                >
                  Level
                </button>
              </h4>
            </div>
            <div
              id="collapse5"
              className="collapse"
              aria-labelledby="heading5"
              data-parent="#accordionExample"
            >
              <LevelOption1 />
            </div>
          </div>
        </div>
        <ClearButton />
      </div>
    </>
  );
}
