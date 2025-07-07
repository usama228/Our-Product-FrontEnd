import ClearButton from "../button/ClearButton";
import BudgetOption2 from "../option/BudgetOption2";
import CategoryOption1 from "../option/CategoryOption1";
import JobTypeOption1 from "../option/JobTypeOption1";
import LevelOption1 from "../option/LevelOption1";

export default function ListingSidebar3() {
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
                  Category
                </button>
              </h4>
            </div>
            <div
              id="collapse0"
              className="collapse show"
              aria-labelledby="heading0"
              data-parent="#accordionExample"
            >
              <div className="card-body card-body px-0 pt-0">
                <CategoryOption1 />
              </div>
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
                  Salary
                </button>
              </h4>
            </div>
            <div
              id="collapse1"
              className="collapse show"
              aria-labelledby="heading1"
              data-parent="#accordionExample"
            >
              <div className="card-body card-body px-0 pt-0">
                <div className="range-slider-style1">
                  <BudgetOption2 />
                </div>
              </div>
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
                  Job Type
                </button>
              </h4>
            </div>
            <div
              id="collapse2"
              className="collapse show"
              aria-labelledby="heading2"
              data-parent="#accordionExample"
            >
              <div className="card-body card-body px-0 pt-0">
                <JobTypeOption1 />
              </div>
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
                  Level
                </button>
              </h4>
            </div>
            <div
              id="collapse3"
              className="collapse show"
              aria-labelledby="heading3"
              data-parent="#accordionExample"
            >
              <div className="card-body card-body px-0 pt-0">
                <LevelOption1 />
              </div>
            </div>
          </div>
        </div>
        <ClearButton />
      </div>
    </>
  );
}
