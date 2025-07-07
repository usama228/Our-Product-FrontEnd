import Link from "next/link";

export default function AboutMe1() {
  return (
    <>
      <div className="blog-sidebar ms-lg-auto">
        <div className="price-widget pt25 widget-mt-minus bdrs8">
          <h4 className="widget-title">About Me</h4>
          <div className="category-list mt20">
            <a className="d-flex align-items-center justify-content-between bdrb1 pb-2">
              <span className="text">
                <i className="flaticon-menu text-thm2 pe-2 vam" />
                Primary industry
              </span>
              <span>Software</span>
            </a>
            <a className="d-flex align-items-center justify-content-between bdrb1 pb-2">
              <span className="text">
                <i className="flaticon-factory text-thm2 pe-2 vam" />
                Company size
              </span>
              <span>501-1.000</span>
            </a>
            <a className="d-flex align-items-center justify-content-between bdrb1 pb-2">
              <span className="text">
                <i className="flaticon-calendar text-thm2 pe-2 vam" />
                Founded in
              </span>
              <span>April 2022</span>
            </a>
            <a className="d-flex align-items-center justify-content-between bdrb1 pb-2">
              <span className="text">
                <i className="flaticon-call text-thm2 pe-2 vam" />
                Phone
              </span>
              <span>382 4632 01 03</span>
            </a>
            <a className="d-flex align-items-center justify-content-between bdrb1 pb-2">
              <span className="text">
                <i className="flaticon-mail text-thm2 pe-2 vam" />
                Email
              </span>
              <span>info@freeio.com</span>
            </a>
            <a className="d-flex align-items-center justify-content-between mb-3">
              <span className="text">
                <i className="flaticon-place text-thm2 pe-2 vam" />
                Location
              </span>
              <span>London, IK</span>
            </a>
          </div>
          <div className="d-grid">
            <Link href="/contact" className="ud-btn btn-thm">
              Contact Me
              <i className="fal fa-arrow-right-long" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
