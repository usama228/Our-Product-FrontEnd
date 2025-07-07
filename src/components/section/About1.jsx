import Image from "next/image";
import Link from "next/link";

export default function About1() {
  return (
    <>
      <section className="our-about bgc-thm2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6">
              <div className="position-relative mb30-lg">
                <div className="iconbox-small1 at-home1 d-none d-md-block wow fadeInRight">
                  <span className="icon flaticon-review" />
                  <div className="details">
                    <h6>4.9/5</h6>
                    <p className="text fz13 mb-0">Clients rate professionals</p>
                  </div>
                </div>
                <div className="iconbox-small2 d-none d-md-block wow fadeInLeft">
                  <span className="icon flaticon-review" />
                  <div className="details">
                    <h6>+12M</h6>
                    <p className="text fz13 mb-0">Project Completed</p>
                  </div>
                </div>
                <div
                  className="about-img wow fadeInRight"
                  data-wow-delay="300ms"
                >
                  <Image
                    height={574}
                    width={691}
                    className="w100 object-fit-contain"
                    src="/images/about/about-1.png"
                    alt="object"
                  />
                </div>
                <div className="imgbox-1 default-box-shadow1 text-center wow fadeInUp">
                  <Image
                    height={68}
                    width={362}
                    className="img-1 bounce-y w-f"
                    src="/images/about/happy-client.png"
                    alt="object"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-5 offset-xl-1">
              <div
                className="position-relative wow fadeInLeft"
                data-wow-delay="300ms"
              >
                <h2 className="text-white mb35">
                  Join World's Best Marketplace{" "}
                  <br className="d-none d-lg-block" /> for Workers
                </h2>
                <p className="text text-white mb35">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
                <div className="list-style2 light-style">
                  <ul className="mb30">
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
                <Link href="/freelancer-1" className="ud-btn btn-thm">
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
