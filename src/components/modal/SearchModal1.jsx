"use client";

import { useRouter } from "next/navigation";

export default function SearchModal1() {
  const router = useRouter();
  return (
    <>
      <div className="search-modal">
        <div
          className="modal fade"
          id="exampleModalToggle"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalToggleLabel" />
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="fal fa-xmark" />
                </button>
              </div>
              <div className="modal-body">
                <div className="popup-search-field search_area">
                  <input
                    type="text"
                    className="form-control border-0"
                    placeholder="What service are you looking for today?"
                  />
                  <label>
                    <span className="far fa-magnifying-glass" />
                  </label>
                  <button
                    onClick={() => router.push("/service-1")}
                    className="ud-btn btn-thm"
                    type="submit"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
