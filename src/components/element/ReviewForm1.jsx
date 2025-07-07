export default function ReviewForm1() {
  return (
    <>
      <div className="bsp_reveiw_wrt">
        <h6 className="fz17">Add a Review</h6>
        <p className="text">
          Your email address will not be published. Required fields are marked *
        </p>
        <form className="comments_form mt30">
          <div className="row">
            <div className="col-md-12">
              <div className="mb-4">
                <label className="fw500 ff-heading dark-color mb-2">
                  Comment
                </label>
                <textarea
                  className="pt15"
                  rows={6}
                  placeholder="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb20">
                <label className="fw500 ff-heading dark-color mb-2">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ali Tufan"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb20">
                <label className="fw500 ff-heading dark-color mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="creativelayers088"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="checkbox-style1 d-block d-sm-flex align-items-center justify-content-between mb20">
                <label className="custom_checkbox fz15 ff-heading">
                  Save my name, email, and website in this browser for the next
                  time I comment.
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </div>
              <a className="ud-btn btn-thm">
                Send
                <i className="fal fa-arrow-right-long" />
              </a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
