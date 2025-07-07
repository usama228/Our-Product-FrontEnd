import Image from "next/image";
import Link from "next/link";

export default function FreelancerCard1({ data }) {
  return (
    <>
      <div className="freelancer-style1 text-center bdr1 hover-box-shadow">
        <div className="thumb w90 mb25 mx-auto position-relative rounded-circle">
          <Image
            height={90}
            width={90}
            className="rounded-circle mx-auto"
            src={data.img}
            alt="thumb"
          />
          <span className="online" />
        </div>
        <div className="details">
          <h5 className="title mb-1">{data.name}</h5>
          <p className="mb-0">{data.profession}</p>
          <div className="review">
            <p>
              <i className="fas fa-star fz10 review-color pr10" />
              <span className="dark-color fw500">{data.rating}</span>(
              {data.reviews} reviews)
            </p>
          </div>
          <div className="skill-tags d-flex align-items-center justify-content-center mb5">
            <span className="tag">Figma</span>
            <span className="tag mx10">Sketch</span>
            <span className="tag">HTML5</span>
          </div>
          <hr className="opacity-100 mt20 mb15" />
          <div className="fl-meta d-flex align-items-center justify-content-between">
            <a className="meta fw500 text-start">
              Location
              <br />
              <span className="fz14 fw400">London</span>
            </a>
            <a className="meta fw500 text-start">
              Rate
              <br />
              <span className="fz14 fw400">$90 / hr</span>
            </a>
            <a className="meta fw500 text-start">
              Job Success
              <br />
              <span className="fz14 fw400">%98</span>
            </a>
          </div>
          <div className="d-grid mt15">
            <Link
              href={`/freelancer-single/${data.id}`}
              className="ud-btn btn-light-thm"
            >
              View Profile
              <i className="fal fa-arrow-right-long" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
