import Image from "next/image";
import Link from "next/link";

export default function JobCard2({ data }) {
  return (
    <>
      <div className="job-list-style1 at-home7 bdr1 mb60">
        <div className="icon d-flex align-items-center mb20">
          <Image
            height={60}
            width={60}
            className="wa object-fit-cover"
            src={data.img}
            alt="job-image"
          />
          <h6 className="mb-0 text-thm ml20">{data.server}</h6>
          <span className="fav-icon flaticon-star" />
        </div>
        <div className="details">
          <h5 className="mb20">
            <Link href={`/job-single/${data.id}`}>{data.title}</Link>
          </h5>
          {data.benefits.map((item, index) => (
            <p
              key={index}
              className={`list-inline-item mb-0  pl10 ${
                index !== 0 ? "bdrl1" : ""
              }`}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
