import Image from "next/image";

export default function LearnFreeioCard({ data }) {
  return (
    <>
      <div className="testimonial-style1 default-box-shadow1 position-relative bdrs16">
        <div className="testimonial-content">
          <h4 className="title text-thm">{data.title}</h4>
          <span className="icon fas fa-quote-left" />
          <h4 className="t_content">{data.description}</h4>
        </div>
        <div className="thumb d-flex align-items-center">
          <div className="flex-shrink-0">
            <Image
              height={60}
              width={60}
              className="wa h-100 w-100 object-fit-cover"
              src={data.avatar}
              alt="avatar"
            />
          </div>
          <div className="flex-grow-1 ms-3">
            <h6 className="mb-0">{data.name}</h6>
            <p className="fz14 mb-0">{data.skill}</p>
          </div>
        </div>
      </div>
    </>
  );
}
