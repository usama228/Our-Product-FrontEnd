export default function DeleteModal() {
  return (
    <>
      <div
        className="modal fade"
        id="deleteModal"
        tabIndex={-1}
        aria-labelledby="deleteModalLabel"
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
            <div className="modal-body px-4 pt-5">
              <div className="pb20">
                <h4 className="pb10 text-center text-black">
                  Are you sure you want to delete?
                </h4>
                <p className="text-center">
                  Do you really want to delete your these record ? This process
                  can't be undo.
                </p>
              </div>
              <div className="d-flex justify-content-center gap-3 ">
                <a
                  className="ud-btn bg-danger text-white mb25"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Delete
                  <i className="fal fa-arrow-right-long" />
                </a>
                <a
                  className="ud-btn btn-dark mb25"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Cancel
                  <i className="fal fa-arrow-right-long" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
