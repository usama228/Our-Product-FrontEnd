import Image from "next/image";

export default function CtaBannerCard1() {
  return (
    <>
      <div className="item">
        <div className="testimonial-style4 position-relative ps-0">
          <h2 className="sub-title text-thm mb25">Envato</h2>
          <h4 className="title mb35 text-white mb60 mb30-md">
            “ I have used Freeio numerous times for several different companies.
            I have always had great experiences. I once tried using someone else
            and I ended up having to cancel the order and move back to Freeio. ”
          </h4>
          <div className="d-flex align-items-center mb30 mb0-sm">
            <Image
              height={70}
              width={70}
              className="wa h-100 w-100"
              src="/images/testimonials/testi-1.png"
              alt="testi"
            />
            <div className="d-details ml15">
              <h6 className="author fz14 text-white">Courtney Henry</h6>
              <p className="desig mb-0 text-white">Product Manager | Envato</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
