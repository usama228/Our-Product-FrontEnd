import Image from "next/image";
import Link from "next/link";

export default function About5() {
  return (
    <>
      <section className="our-about pb0 pt60-lg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-xl-6">
              <div
                className="about-img mb30-sm wow fadeInRight"
                data-wow-delay="300ms"
              >
                <Image
                  height={574}
                  width={691}
                  className="w100 h-100"
                  src="/images/about/about-1.png"
                  alt="about"
                />
              </div>
            </div>
            <div className="col-md-6 col-xl-5 offset-xl-1">
              <div
                className="position-relative wow fadeInLeft"
                data-wow-delay="300ms"
              >
                <h2 className="mb25">
                  Join World's Best Marketplace{" "}
                  <br className="d-none d-xl-block" /> for Workers
                </h2>
                <p className="text mb25">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
                <div className="list-style2">
                  <ul className="mb20">
                    <li>
                      <i className="far fa-check" />
                      Connect to freelancers with proven business experience
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Get matched with the perfect talent by a customer success
                      manager
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Unmatched quality of remote, hybrid, and flexible jobs
                    </li>
                  </ul>
                </div>
                <Link
                  href="/freelancer-single"
                  className="ud-btn btn-thm-border"
                >
                  Find Talent
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
