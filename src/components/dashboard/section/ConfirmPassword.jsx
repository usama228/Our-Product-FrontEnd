import Link from "next/link";

export default function ConfirmPassword() {
  return (
    <>
      <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
        <div className="col-lg-7">
          <div className="row">
            <div className="bdrb1 pb15 mb25">
              <h5 className="list-title">Change password</h5>
            </div>
            <form className="form-style1">
              <div className="row">
                <div className="col-sm-12">
                  <h6>Close account</h6>
                  <p className="text">
                    Warning: If you close your account, you will be unsubscribed
                    from all your 5 courses, and will lose access forever.
                  </p>
                </div>
                <div className="col-sm-6">
                  <div className="mb20">
                    <label className="heading-color ff-heading fw500 mb10">
                      Enter Password
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="********"
                    />
                  </div>
                  <div className="text-start">
                    <Link className="ud-btn btn-thm" href="/contact">
                      Change Password
                      <i className="fal fa-arrow-right-long" />
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
