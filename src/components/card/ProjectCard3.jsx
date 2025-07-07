import Image from "next/image";
import Link from "next/link";

export default function ProjectCard3({ data }) {
  return (
    <>
      <div  className="freelancer-style1 bdr1 bdrs12 hover-box-shadow row ms-0 align-items-lg-center">
        <div  className="col-lg-8 ps-0 bdrr1 bdrn-xl">
          <div  className="d-lg-flex">
            <div  className="thumb w60 position-relative rounded-circle mb15-md">
              <Image
                height={60}
                width={60}
                className="rounded-circle mx-auto"
                src={data.img}
                alt="rounded-circle"
              />
              <span  className="online-badge2"></span>
            </div>
            <div  className="details ml15 ml0-md mb15-md">
              <h5  className="title mb-3">{data.title}</h5>
              <p  className="mb-0 fz14 list-inline-item mb5-sm pe-1">
                <i  className="flaticon-place fz16 vam text-thm2 me-1"></i>{" "}
                {data.location}
              </p>
              <p  className="mb-0 fz14 list-inline-item mb5-sm pe-1">
                <i  className="flaticon-30-days fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs"></i>{" "}
                2 hours ago
              </p>
              <p  className="mb-0 fz14 list-inline-item mb5-sm">
                <i  className="flaticon-contract fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs"></i>{" "}
                1 Received
              </p>
            </div>
          </div>
          <p  className="text mt10">
            {data.brief
              ? data.brief
              : "Many desktop publishing packages and web page editors now use Lorem Ipsum  as their default model text."}{" "}
          </p>
          <div  className="skill-tags d-flex align-items-center justify-content-start mb20-md">
            {data.tags.map((item, i) => (
              <span key={i} className={`tag ${i === 1 ? "mx10" : ""}`}>
                {item}
              </span>
            ))}
          </div>
        </div>
        <div  className="col-lg-4 ps-0 ps-xl-3 pe-0">
          <div  className="details">
            <div  className="text-lg-end">
              <h4>
                ${data.price.min} - ${data.price.max}
              </h4>
              <p  className="text">Hourly Rate</p>
            </div>
            <div  className="d-grid mt15">
              <Link
                href={`/project-single/${data.id}`}
                className="ud-btn btn-thm-border bdrs12 hover-default-box-shadow1"
              >
                Send Proposal
                <i className="fal fa-arrow-right-long" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
