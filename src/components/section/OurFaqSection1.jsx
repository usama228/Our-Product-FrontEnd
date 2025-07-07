import { browserCategory } from "@/data/project";
import BrowserCategoryCard1 from "../card/BrowserCategoryCard1";
import OurFaq1 from "./OurFaq1";

export default function OurFaqSection1() {
  return (
    <>
      <section className="our-faq pb50">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 m-auto wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="main-title text-center">
                <h2 className="title">How can we help you?</h2>
                <p className="paragraph mt10">
                  Give your visitor a smooth online experience with a solid UX
                  design
                </p>
                <div className="search_widgets mt30">
                  <form>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                      />
                    </div>
                    <div className="help_search_btn">
                      <button type="submit" className="btn search-btn">
                        <span className="far fa-magnifying-glass" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {browserCategory.slice(0, 8).map((item,i) => (
              <div key={ i } className="col-sm-6 col-lg-4 col-xl-3">
                <BrowserCategoryCard1 data={item} />
              </div>
            ))}
          </div>
          <OurFaq1 />
        </div>
      </section>
    </>
  );
}
