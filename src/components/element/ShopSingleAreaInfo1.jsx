import ReviewForm1 from "../element/ReviewForm1";
import Comment1 from "../element/Comment1";

export default function ShopSingleAreaInfo1() {
  return (
    <>
      <div className="row wow fadeInUp mt90" data-wow-delay="300ms">
        <div className="col-md-3 col-lg-4">
          <div className="vertical-tab">
            <div className="widget_list">
              <nav>
                <div
                  className="nav flex-column nav-tabs text-start"
                  id="nav-tab"
                >
                  <button
                    className="nav-link active text-start"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-accountpayment"
                    type="button"
                  >
                    <span>Description</span>
                  </button>
                  <button
                    className="nav-link text-start"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-manageother"
                    type="button"
                  >
                    <span>Review</span>
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="col-md-9 col-lg-8">
          <div className="terms_condition_grid text-start">
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-accountpayment"
              >
                <div className="grids">
                  <h4 className="title mb20">Details</h4>
                  <p className="mb25 text fz15">
                    Do you want to become a UI/UX designer but you don't know
                    where to start? This course will allow you to develop your
                    user interface design skills and you can add UI designer to
                    your CV and start getting clients for your skills.
                  </p>
                  <p className="mb25 text fz15">
                    Hi everyone. I'm Arash and I'm a UI/UX designer. In this
                    course, I will help you learn and master Figma app
                    comprehensively from scratch. Figma is an innovative and
                    brilliant tool for User Interface design. It's used by
                    everyone from entrepreneurs and start-ups to Apple, Airbnb,
                    Facebook, etc.
                  </p>
                  <h4 className="title">Material and care</h4>
                  <div className="custom_bsp_grid d-sm-flex align-items-center">
                    <ul className="list-style-type-bullet p-0 ml15 mb0-sm">
                      <li>Main: 100% Cotton</li>
                      <li>Soft twill.</li>
                      <li>Ribbed, diagonal pattern</li>
                    </ul>
                    <ul className="list-style-type-bullet p-0 ml80 ml15-sm">
                      <li>One size fits all</li>
                      <li>Imported</li>
                      <li>Product color: Dark greenish</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="nav-manageother">
                <div className="grids">
                  <Comment1 />
                  <ReviewForm1 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
