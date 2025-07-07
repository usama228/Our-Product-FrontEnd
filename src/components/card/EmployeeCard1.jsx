import Image from "next/image";
import Link from "next/link";

export default function EmployeeCard1({ data }) {
  return (
    <>
      <div className="job-list-style1 bdr1 pb10">
        <div className="icon d-flex align-items-center mb20">
          <Image
            height={60}
            width={60}
            className="wa"
            src={data.img}
            alt="icon"
          />
          <h6 className="mb-0 ml20">
            <Link href={`/employee-single/${data.id}`}>{data.server}</Link>
          </h6>
          <span className="fav-icon flaticon-star" />
        </div>
        <div className="details">
          <p>
            <i className="fas fa-star fz10 review-color pr10" />
            <span className="dark-color">{data.rating}</span> ({data.review}
            reviews)
          </p>
          <p className="list-inline-item mb-3">{data.location}</p>
          <p className="list-inline-item mb-3 bdrl1 pl15">Open 29 Jobs</p>
        </div>
      </div>
    </>
  );
}
