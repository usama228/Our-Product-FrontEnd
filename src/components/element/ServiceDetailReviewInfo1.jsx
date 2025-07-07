import Image from "next/image";
import Link from "next/link";

export default function ServiceDetailReviewInfo1() {
  return (
    <>
      <div className="product_single_content mb50">
        <div className="mbp_pagination_comments">
          <div className="row">
            <div className="col-lg-12">
              <div className="total_review mb30 mt45">
                <h4>80 Reviews</h4>
              </div>
              <div className="d-md-flex align-items-center mb30">
                <div className="total-review-box d-flex align-items-center text-center mb30-sm">
                  <div className="wrapper mx-auto">
                    <div className="t-review mb15">4.96</div>
                    <h5>Exceptional</h5>
                    <p className="text mb-0">3,014 reviews</p>
                  </div>
                </div>
                <div className="wrapper ml60 ml0-sm">
                  <div className="review-list d-flex align-items-center mb10">
                    <div className="list-number">5 Star</div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{
                          width: "90%",
                        }}
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <div className="value text-end">58</div>
                  </div>
                  <div className="review-list d-flex align-items-center mb10">
                    <div className="list-number">4 Star</div>
                    <div className="progress">
                      <div
                        className="progress-bar w-75"
                        aria-valuenow={75}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <div className="value text-end">20</div>
                  </div>
                  <div className="review-list d-flex align-items-center mb10">
                    <div className="list-number">3 Star</div>
                    <div className="progress">
                      <div
                        className="progress-bar w-50"
                        aria-valuenow={50}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <div className="value text-end">15</div>
                  </div>
                  <div className="review-list d-flex align-items-center mb10">
                    <div className="list-number">2 Star</div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{
                          width: "30%",
                        }}
                        aria-valuenow={30}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <div className="value text-end">2</div>
                  </div>
                  <div className="review-list d-flex align-items-center mb10">
                    <div className="list-number">1 Star</div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{
                          width: "20%",
                        }}
                        aria-valuenow={10}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <div className="value text-end">1</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="mbp_first position-relative d-flex align-items-center justify-content-start mb30-sm">
                <Image
                  height={60}
                  width={60}
                  src="/images/blog/comments-2.png"
                  className="mr-3"
                  alt="comments-2.png"
                />
                <div className="ml20">
                  <h6 className="mt-0 mb-0">Bessie Cooper</h6>
                  <div>
                    <span className="fz14">12 March 2022</span>
                  </div>
                </div>
              </div>
              <p className="text mt20 mb20">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
              </p>
              <div className="review_cansel_btns d-flex">
                <a>
                  <i className="fas fa-thumbs-up" />
                  Helpful
                </a>
                <a>
                  <i className="fas fa-thumbs-down" />
                  Not helpful
                </a>
              </div>
            </div>
            <div className="col-md-12">
              <div className="mbp_first position-relative d-flex align-items-center justify-content-start mt30 mb30-sm">
                <Image
                  height={60}
                  width={60}
                  src="/images/blog/comments-2.png"
                  className="mr-3"
                  alt="comments-2.png"
                />
                <div className="ml20">
                  <h6 className="mt-0 mb-0">Darrell Steward</h6>
                  <div>
                    <span className="fz14">12 March 2022</span>
                  </div>
                </div>
              </div>
              <p className="text mt20 mb20">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
              </p>
              <div className="review_cansel_btns d-flex pb30">
                <a>
                  <i className="fas fa-thumbs-up" />
                  Helpful
                </a>
                <a>
                  <i className="fas fa-thumbs-down" />
                  Not helpful
                </a>
              </div>
            </div>
            <div className="col-md-12">
              <div className="position-relative bdrb1 pb50">
                <Link href="/service-single" className="ud-btn btn-light-thm">
                  See More
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
