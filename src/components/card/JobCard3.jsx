import Image from "next/image";
import Link from "next/link";

export default function JobCard3({ data }) {
  return (
    <>
      <div className="job-list-style1 default-box-shadow1 bdrs16 bdr1">
        <div className="d-xl-flex align-items-start">
          <div className="icon d-flex align-items-center mb20">
            <Image
              height={60}
              width={60}
              className="wa object-fit-cover"
              src={data.img}
              alt="job-image"
            />
            <span className="fav-icon flaticon-star" />
          </div>
          <div className="details ml20 ml0-xl">
            <h5>
              <Link href={`/job-single/${data.id}`}>{data.title}</Link>
            </h5>
            <h6 className="mb-3 text-thm">{data.server}</h6>
          </div>
        </div>
        {data.benefits.map((item, index) => (
          <p
            key={index}
            className={`list-inline-item mb-3 ${
              index !== 0 ? "bdrl1 pl10" : ""
            }`}
          >
            {item}
          </p>
        ))}
      </div>
    </>
  );
}
