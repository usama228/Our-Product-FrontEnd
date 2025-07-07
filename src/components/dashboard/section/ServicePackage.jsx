export default function ServicePackage() {
  return (
    <>
      <div className="ps-widget bgc-white bdrs12 p30 mb30 overflow-hidden position-relative">
        <div className="bdrb1 pb15 mb30">
          <h5 className="list-title">Packages</h5>
        </div>
        <div className="col-xl-8">
          <div className="table-style2 table-responsive bdr1 mb30">
            <table className="table table-borderless mb-0">
              <thead className="t-head">
                <tr>
                  <th className="col" scope="col" />
                  <th className="col" scope="col">
                    <span className="h4 mb15">
                      Basic
                      <span className="text-thm2 flaticon-pencil fz16 float-end mt10 me-2" />
                    </span>
                    <br />
                    <span className="text">
                      I will redesign your current
                      <br className="d-none d-lg-block" />
                      landing page or create one for
                      <br className="d-none d-lg-block" />
                      you (upto 4 sections)
                    </span>
                  </th>
                  <th className="col" scope="col">
                    <span className="h4 mb15">
                      Standard
                      <span className="text-thm2 flaticon-pencil fz16 float-end mt10 me-2" />
                    </span>
                    <br />
                    <span className="text">
                      4 High Quality Desktop
                      <br className="d-none d-lg-block" />
                      Pages.
                    </span>
                  </th>
                  <th className="col" scope="col">
                    <span className="h4 mb15">
                      Premium
                      <span className="text-thm2 flaticon-pencil fz16 float-end mt10 me-2" />
                    </span>
                    <br />
                    <span className="text">
                      4 High Quality Desktop and
                      <br className="d-none d-lg-block" />
                      Mobile Pages.
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="t-body">
                <tr className="bgc-thm3">
                  <th scope="row">Source file</th>
                  <td>
                    <label className="custom_checkbox">
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                  </td>
                  <td>
                    <label className="custom_checkbox">
                      <input type="checkbox" defaultChecked />
                      <span className="checkmark" />
                    </label>
                  </td>
                  <td>
                    <label className="custom_checkbox">
                      <input type="checkbox" defaultChecked />
                      <span className="checkmark" />
                    </label>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Prototype</th>
                  <td>
                    <label className="custom_checkbox">
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                  </td>
                  <td>
                    <label className="custom_checkbox">
                      <input type="checkbox" defaultChecked />
                      <span className="checkmark" />
                    </label>
                  </td>
                  <td>
                    <label className="custom_checkbox">
                      <input type="checkbox" defaultChecked />
                      <span className="checkmark" />
                    </label>
                  </td>
                </tr>
                <tr className="bgc-thm3">
                  <th scope="row">Responsive design</th>
                  <td>
                    <label className="custom_checkbox">
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                  </td>
                  <td>
                    <label className="custom_checkbox">
                      <input type="checkbox" defaultChecked />
                      <span className="checkmark" />
                    </label>
                  </td>
                  <td>
                    <label className="custom_checkbox">
                      <input type="checkbox" defaultChecked />
                      <span className="checkmark" />
                    </label>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Number of pages</th>
                  <td>
                    2
                    <a>
                      <span className="text-thm2 flaticon-pencil fz16 float-end me-3" />
                    </a>
                  </td>
                  <td>
                    4
                    <a>
                      <span className="text-thm2 flaticon-pencil fz16 float-end me-3" />
                    </a>
                  </td>
                  <td>
                    6
                    <a>
                      <span className="text-thm2 flaticon-pencil fz16 float-end me-3" />
                    </a>
                  </td>
                </tr>
                <tr className="bgc-thm3">
                  <th scope="row">Revisions</th>
                  <td>
                    1
                    <a>
                      <span className="text-thm2 flaticon-pencil fz16 float-end me-3" />
                    </a>
                  </td>
                  <td>
                    3
                    <a>
                      <span className="text-thm2 flaticon-pencil fz16 float-end me-3" />
                    </a>
                  </td>
                  <td>
                    5
                    <a>
                      <span className="text-thm2 flaticon-pencil fz16 float-end me-3" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Delivery Time </th>
                  <td>
                    2 Days
                    <a>
                      <span className="text-thm2 flaticon-pencil fz16 float-end me-3" />
                    </a>
                  </td>
                  <td>
                    3 Days
                    <a>
                      <span className="text-thm2 flaticon-pencil fz16 float-end me-3" />
                    </a>
                  </td>
                  <td>
                    4 Days
                    <a>
                      <span className="text-thm2 flaticon-pencil fz16 float-end me-3" />
                    </a>
                  </td>
                </tr>
                <tr className="bgc-thm3">
                  <th scope="row">Total</th>
                  <td>
                    $29
                    <a>
                      <span className="text-thm2 flaticon-pencil fz16 float-end me-3" />
                    </a>
                  </td>
                  <td>
                    $49
                    <a>
                      <span className="text-thm2 flaticon-pencil fz16 float-end me-3" />
                    </a>
                  </td>
                  <td>
                    $89
                    <a>
                      <span className="text-thm2 flaticon-pencil fz16 float-end me-3" />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <a className="ud-btn btn-thm">
            Save
            <i className="fal fa-arrow-right-long" />
          </a>
        </div>
      </div>
    </>
  );
}
