import Image from "next/image";

export default function LearnFreeIoCard2() {
  return (
    <>
      <div className="testimonial-style1 default-box-shadow1 position-relative mb60 bdrs8">
        <div className="testimonial-content">
          <h4 className="title text-thm">Great Work</h4>
          <span className="icon fas fa-quote-left" />
          <h4 className="t_content">
            “I found the course material to be highly engaging, and the
            instructors to be helpful and communicative.”
          </h4>
        </div>
        <div className="thumb d-flex align-items-center">
          <div className="flex-shrink-0">
            <Image
              height={60}
              width={60}
              className="wa object-fit-contain"
              src="/images/testimonials/testimonial-1.png"
              alt="testimonial"
            />
          </div>
          <div className="flex-grow-1 ms-3">
            <h6 className="mb-0">Courtney Henry</h6>
            <p className="fz14 mb-0">Web Designer</p>
          </div>
        </div>
      </div>
    </>
  );
}
