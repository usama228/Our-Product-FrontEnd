import Image from "next/image";

export default function ProjectProposalCard1({ data }) {
  return (
    <>
      <div className="freelancer-style1 bdr1 hover-box-shadow row ms-0 align-items-start">
        <div className="col-xl-10 px-0">
          <div className="d-lg-flex">
            <div className="thumb w90 position-relative rounded-circle mb15-md">
              <Image
                height={90}
                width={90}
                className="rounded-circle mx-auto"
                src={data.img}
                alt="rounded-circle"
              />
              <span className="online" />
            </div>
            <div className="details ml20 ml0-md mb15-md">
              <h5 className="title mb-1">{data.name}</h5>
              <div className="review mb20">
                <p className="mb-0 fz14 list-inline-item mb5-sm pe-1">
                  <i className="fas fa-star fz10 review-color pr10" />{" "}
                  <span className="dark-color">{data.rating}</span> (
                  {data.reviews} reviews)
                </p>
                <p className="mb-0 fz14 list-inline-item mb5-sm pe-1">
                  <i className="flaticon-30-days fz16 vam text-thm2 me-1 bdrl1 bdrn-md pl15 pl0-md bdrn-xs" />{" "}
                  2 hours ago
                </p>
                <p className="mb-0 fz14 list-inline-item mb5-sm">
                  <i className="flaticon-contract fz16 vam text-thm2 me-1 bdrl1 bdrn-md pl15 pl0-md bdrn-xs" />{" "}
                  1 Received
                </p>
              </div>
              <p className="text mb-0">{data.brief}</p>
            </div>
          </div>
        </div>
        <div className="col-xl-2 px-0">
          <div className="text-lg-center text-xl-end mt-0 mt-lg-2 mt-xl-0">
            <h4>
              ${data.price.min} - ${data.price.max}
            </h4>
            <p className="text mb-0">in {data.hours} hours</p>
          </div>
        </div>
      </div>
    </>
  );
}
