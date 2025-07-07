export default function ProposalModal1() {
  return (
    <>
      <div
        className="modal fade"
        id="proposalModal"
        tabIndex={-1}
        aria-labelledby="proposalModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content position-relative">
            <button
              type="button"
              className="btn-close position-absolute"
              data-bs-dismiss="modal"
              aria-label="Close"
              style={{ top: "10px", right: "10px", zIndex: "9" }}
            />
            <div className="modal-body p-4">
              <form>
                <div className="row">
                  <div className="col">
                    <div className="mb-3">
                      <label className="form-label">Your hourly price</label>
                      <input type="number" className="form-control" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="mb-3">
                      <label className="form-label">Your hourly price</label>
                      <input type="number" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Cover letter</label>
                  <textarea
                    name="text"
                    cols={30}
                    rows={2}
                    defaultValue={"This is what i want"}
                  />
                </div>
                <button
                  type="button"
                  className="ud-btn btn-thm"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Update
                  <i className="fal fa-arrow-right-long" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
