import AllTimeSelling from "../element/AllTimeSelling";

export default function OurFeature1() {
  return (
    <>
      <section className="our-features pt-0 pb90">
        <div className="container">
          <div className="row wow fadeInUp">
            <div className="col-lg-12">
              <div className="main-title">
                <h2>How It Works</h2>
                <p className="text">
                  Most viewed and all-time top-selling services
                </p>
              </div>
            </div>
          </div>
          <AllTimeSelling />
        </div>
      </section>
    </>
  );
}
