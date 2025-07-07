import Pagination1 from "@/components/section/Pagination1";
import DashboardNavigation from "../header/DashboardNavigation";
import StatementCard1 from "../card/StatementCard1";
import { statement } from "@/data/dashboard";

export default function StatementInfo() {
  return (
    <>
      <div className="dashboard__content hover-bgc-color">
        <div className="row pb40">
          <div className="col-lg-12">
            <DashboardNavigation />
          </div>
          <div className="col-lg-12">
            <div className="dashboard_title_area">
              <h2>Statements</h2>
              <p className="text">Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-xxl-3">
            <div className="d-flex align-items-center justify-content-between statistics_funfact">
              <div className="details">
                <div className="fz15">Net Income</div>
                <div className="title">$1.928</div>
                <div className="text fz14">
                  <span className="text-thm">$99</span> New Earning
                </div>
              </div>
              <div className="icon text-center">
                <i className="flaticon-income" />
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xxl-3">
            <div className="d-flex align-items-center justify-content-between statistics_funfact">
              <div className="details">
                <div className="fz15">Withdrawn</div>
                <div className="title">$912</div>
                <div className="text fz14">
                  <span className="text-thm">80+</span> New Completed
                </div>
              </div>
              <div className="icon text-center">
                <i className="flaticon-withdraw" />
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xxl-3">
            <div className="d-flex align-items-center justify-content-between statistics_funfact">
              <div className="details">
                <div className="fz15">Pending Clearance</div>
                <div className="title">$820</div>
                <div className="text fz14">
                  <span className="text-thm">35+</span> New Queue
                </div>
              </div>
              <div className="icon text-center">
                <i className="flaticon-review" />
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xxl-3">
            <div className="d-flex align-items-center justify-content-between statistics_funfact">
              <div className="details">
                <div className="fz15">Available for Withdrawal</div>
                <div className="title">$8.000</div>
                <div className="text fz14">
                  <span className="text-thm">290+</span> New Review
                </div>
              </div>
              <div className="icon text-center">
                <i className="flaticon-review-1" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
              <div className="packages_table table-responsive">
                <table className="table-style3 table at-savesearch">
                  <thead className="t-head">
                    <tr>
                      <th scope="col">Date</th>
                      <th scope="col">Type</th>
                      <th scope="col">Detail</th>
                      <th scope="col">Price</th>
                      <th scope="col">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="t-body">
                    {statement.map((item,i) => (
                      <StatementCard1 key={ i } data={item} />
                    ))}
                  </tbody>
                </table>
                <div className="mt30">
                  <Pagination1 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
