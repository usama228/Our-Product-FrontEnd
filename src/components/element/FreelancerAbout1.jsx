import Link from "next/link";

export default function FreelancerAbout1() {
  return (
    <>
      <div className="price-widget pt25 bdrs8">
        <h3 className="widget-title">
          $29
          <small className="fz15 fw500">/per hour</small>
        </h3>
        <div className="category-list mt20">
          <a className="d-flex align-items-center justify-content-between bdrb1 pb-2">
            <span className="text">
              <i className="flaticon-place text-thm2 pe-2 vam" />
              Location
            </span>
            <span>London, UK</span>
          </a>
          <a className="d-flex align-items-center justify-content-between bdrb1 pb-2">
            <span className="text">
              <i className="flaticon-30-days text-thm2 pe-2 vam" />
              Member since
            </span>
            <span>April 2022</span>
          </a>
          <a className="d-flex align-items-center justify-content-between bdrb1 pb-2">
            <span className="text">
              <i className="flaticon-calendar text-thm2 pe-2 vam" />
              Last Delivery
            </span>
            <span>5 days</span>
          </a>
          <a className="d-flex align-items-center justify-content-between bdrb1 pb-2">
            <span className="text">
              <i className="flaticon-mars text-thm2 pe-2 vam" />
              Gender
            </span>
            <span>Male</span>
          </a>
          <a className="d-flex align-items-center justify-content-between bdrb1 pb-2">
            <span className="text">
              <i className="flaticon-translator text-thm2 pe-2 vam" />
              Languages
            </span>
            <span>English</span>
          </a>
          <a className="d-flex align-items-center justify-content-between mb-3">
            <span className="text">
              <i className="flaticon-sliders text-thm2 pe-2 vam" />
              English Level
            </span>
            <span>Fluent</span>
          </a>
        </div>
        <div className="d-grid">
          <Link href="/contact" className="ud-btn btn-thm">
            Contact Me
            <i className="fal fa-arrow-right-long" />
          </Link>
        </div>
      </div>
    </>
  );
}
