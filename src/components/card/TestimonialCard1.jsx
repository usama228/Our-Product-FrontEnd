import Image from "next/image";

export default function TestimonialCard1() {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-lg-5 col-xl-4">
          <div className="testimonial-style4-img position-relative">
            <Image
              height={525}
              width={453}
              className="bdrs4 w-100 h-auto"
              src="/images/about/about-8.jpg"
              alt="testimonial"
            />
          </div>
        </div>
        <div className="col-lg-6 col-xl-8">
          <div className="testimonial-style4 position-relative">
            <h2 className="sub-title text-thm mb25">Envato</h2>
            <h4 className="title mb35">
              “ I have used Freeio numerous times for several different
              companies. I have always had great experiences. I once tried using
              someone else and I ended up having to cancel the order and move
              back to Freeio. ”
            </h4>
            <h6 className="author fz14">Courtney Henry</h6>
            <p className="desig mb-0">Product Manager | Envato</p>
          </div>
        </div>
      </div>
    </>
  );
}
