import Image from "next/image";

export default function JobCard5({ data }) {
  return (
    <>
      <div className="job-list-style1 bdr1 d-xl-flex align-items-start">
        <div className="icon d-flex align-items-center mb20">
          <Image
            height={60}
            width={60}
            className="wa"
            src={data.img}
            alt="icon"
          />
          <span className="fav-icon flaticon-star" />
        </div>
        <div className="details ml20 ml0-xl">
          <h5>{data.title}</h5>
          <h6 className="mb-3 text-thm">{data.server}</h6>
          <p className="list-inline-item mb-0">$125k-$135k Hourly</p>
          <p className="list-inline-item mb-0 bdrl1 pl15">1-5 Days</p>
          <p className="list-inline-item mb-0 bdrl1 pl15">Expensive</p>
          <p className="list-inline-item mb-0 bdrl1 pl15">Remote</p>
        </div>
      </div>
    </>
  );
}
