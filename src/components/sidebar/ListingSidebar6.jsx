import ClearButton from "../button/ClearButton";
import BudgetOption2 from "../option/BudgetOption2";
import CategoryOption1 from "../option/CategoryOption1";
import DesignToolOption1 from "../option/DesignToolOption1";
import EnglishLevelOption1 from "../option/EnglishLevelOption1";
import LocationOption1 from "../option/LocationOption1";
import ProjectTypeOption1 from "../option/ProjectTypeOption1";
import SpeakOption1 from "../option/SpeakOption1";

export default function ListingSidebar6() {
  return (
    <>
      <div className="list-sidebar-style1 d-none d-lg-block">
        <div className="accordion" id="accordionExample">
          <div className="card mb20 pb10 mt-0 bgc-thm3">
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
                <a className="text-thm">+20 more</a>
              </div>
            </div>
          </div>
          <div className="card mb20 pb10 bgc-thm3">
            <div className="card-header" id="heading01">
              <h4>
                <button
                  className="btn btn-link ps-0 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse01"
                  aria-expanded="false"
                  aria-controls="collapse01"
                >
                  Project type
                </button>
              </h4>
            </div>
            <div
              id="collapse01"
              className="collapse show"
              aria-labelledby="heading01"
              data-parent="#accordionExample"
            >
              <div className="card-body card-body px-0 pt-0">
                <ProjectTypeOption1 />
              </div>
            </div>
          </div>
          <div className="card mb20 pb0 bgc-thm3">
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
                  Price
                </button>
              </h4>
            </div>
            <div
              id="collapse1"
              className="collapse show"
              aria-labelledby="heading1"
              data-parent="#accordionExample"
            >
              <div className="card-body card-body px-0 pt-4">
                <BudgetOption2 />
              </div>
            </div>
          </div>
          <div className="card mb20 pb10 bgc-thm3">
            <div className="card-header" id="heading0">
              <h4>
                <button
                  className="btn btn-link ps-0 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse02"
                  aria-expanded="false"
                  aria-controls="collapse02"
                >
                  Skills
                </button>
              </h4>
            </div>
            <div
              id="collapse02"
              className="collapse show"
              aria-labelledby="heading0"
              data-parent="#accordionExample"
            >
              <div className="card-body card-body px-0 pt-0">
                <DesignToolOption1 />
              </div>
            </div>
          </div>
          <div className="card mb20 pb5 bgc-thm3">
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
                  Location
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
                <LocationOption1 />
              </div>
            </div>
          </div>
          <div className="card mb20 pb5 bgc-thm3">
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
                  Languange
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
                <SpeakOption1 />
              </div>
            </div>
          </div>
          <div className="card mb20 pb5 bgc-thm3">
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
                  English Level
                </button>
              </h4>
            </div>
            <div
              id="collapse4"
              className="collapse show"
              aria-labelledby="heading4"
              data-parent="#accordionExample"
            >
              <div className="card-body card-body px-0 pt-0">
                <EnglishLevelOption1 />
              </div>
            </div>
          </div>
        </div>
        <ClearButton />
      </div>
    </>
  );
}
