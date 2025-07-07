import AllTimeSelling from "../element/AllTimeSelling";

export default function NeedSomething1() {
  return (
    <>
      <section className="our-features pb90">
        <div className="container wow fadeInUp">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-title text-center">
                <h2>Need something done?</h2>
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
