"use client";

export default function Option2({ lebel, data, selected, handler }) {
  // content
  const content = data.map((item, i) => (
    <li key={i}>
      <a
        className={`dropdown-item ${selected.includes(item) ? "selected" : ""}`}
        onClick={() => {
          handler(item);
        }}
      >
        <span className=" bs-ok-default check-mark" />
        <span className="text">{item}</span>
      </a>
    </li>
  ));

  return (
    <>
      <div className="form-style1">
        <label className="form-label fw500 fz16 dark-color">{lebel}</label>
        <div className="bootselect-multiselect">
          <div className="dropdown bootstrap-select show-tick">
            <button
              className="btn dropdown-toggle btn-light"
              data-bs-toggle="dropdown"
            >
              <div className="filter-option">
                <div className="filter-option-inner">
                  <div className="filter-option-inner-inner">
                    {selected?.length !== 0 ? (
                      selected.join(",")
                    ) : (
                      <span style={{ color: "#999" }}>Nothing selected</span>
                    )}
                  </div>
                </div>
              </div>
            </button>
            <div className="dropdown-menu ">
              <div className="inner show">
                <ul
                  className="dropdown-menu inner show"
                  style={{
                    overflowY: "auto",
                    maxHeight: "250px",
                    minHeight: "auto",
                  }}
                >
                  {content}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
