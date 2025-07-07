export default function AboutArea1() {
  return (
    <>
      <section className="our-faq pb90 pt100">
        <div className="container">
          <div className="row wow fadeInUp">
            <div className="col-lg-4">
              <div className="vertical-tab">
                <div className="widget_list">
                  <nav>
                    <div className="nav flex-column nav-tabs text-start">
                      <button
                        className="nav-link active text-start"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-accountpayment"
                      >
                        <span>For Hiring</span>
                      </button>
                      <button
                        className="nav-link text-start"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-manageother"
                      >
                        <span>For Freelancing</span>
                      </button>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-accountpayment"
                  aria-labelledby="nav-accountpayment-tab"
                >
                  <div className="for-hire">
                    <h4>For Hiring</h4>
                    <p className="text mb30">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English.
                    </p>
                    <p className="text mb40">
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text, and a search
                      for 'lorem ipsum' will uncover many web sites still in
                      their infancy. Various versions have evolved over the
                      years, sometimes by accident, sometimes on purpose
                      (injected humour and the like).
                    </p>
                    <a className="ud-btn btn-thm-border mb25 me-4">
                      Get Started
                      <i className="fal fa-arrow-right-long" />
                    </a>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-manageother"
                  aria-labelledby="nav-manageother-tab"
                >
                  <div className="for-hire">
                    <h4>For Freelancing</h4>
                    <p className="text mb30">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English.
                    </p>
                    <p className="text mb40">
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text, and a search
                      for 'lorem ipsum' will uncover many web sites still in
                      their infancy. Various versions have evolved over the
                      years, sometimes by accident, sometimes on purpose
                      (injected humour and the like).
                    </p>
                    <a className="ud-btn btn-thm-border mb25 me-4">
                      Get Started
                      <i className="fal fa-arrow-right-long" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
