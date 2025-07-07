import Image from "next/image";
import Link from "next/link";

export default function PageNotFound() {
  return (
    <>
      <section className="our-error">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 wow fadeInRight" data-wow-delay="300ms">
              <div className="animate_content text-center text-xl-start">
                <div className="animate_thumb">
                  <Image
                    height={500}
                    width={500}
                    className="w-100"
                    src="/images/icon/error-page-img.svg"
                    alt="error-page-img"
                  />
                </div>
              </div>
            </div>
            <div
              className="col-xl-5 offset-xl-1 wow fadeInLeft"
              data-wow-delay="300ms"
            >
              <div className="error_page_content text-center text-xl-start">
                <div className="erro_code">
                  40<span className="text-thm">4</span>
                </div>
                <div className="h2 error_title">
                  Oops! It looks like you're lost.
                </div>
                <p className="text fz15 mb20">
                  The page you're looking for isn't available. Try to search
                  again or use the go <br className="d-none d-lg-block" /> to.
                </p>
                <Link href="/" className="ud-btn btn-thm">
                  Go back to home
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
