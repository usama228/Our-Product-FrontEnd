import Link from "next/link";

export default function PayoutForm() {
  return (
    <>
      <form className="form-style1">
        <div className="row">
          <div className="col-sm-6">
            <div className="mb20">
              <label className="heading-color ff-heading fw500 mb-1">
                Bank Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="creativelayers088@gmail.com"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mb20">
              <label className="heading-color ff-heading fw500 mb-1">
                Bank Account Number
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="creativelayers088@gmail.com"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mb20">
              <label className="heading-color ff-heading fw500 mb-1">
                Bank Account Holder Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="creativelayers088@gmail.com"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mb20">
              <label className="heading-color ff-heading fw500 mb-1">
                Bank Routing Number
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="creativelayers088@gmail.com"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mb20">
              <label className="heading-color ff-heading fw500 mb-1">
                Bank IBAN
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="creativelayers088@gmail.com"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mb20">
              <label className="heading-color ff-heading fw500 mb-1">
                Swift Code
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="creativelayers088@gmail.com"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="text-start">
              <Link className="ud-btn btn-thm" href="/contact">
                Save Detail
                <i className="fal fa-arrow-right-long" />
              </Link>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
