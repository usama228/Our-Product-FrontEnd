import Image from "next/image";

export default function RecentServiceCard1({ data }) {
  return (
    <>
      <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb10">
        <div className="list-thumb wa flex-shrink-0 bdrs4 mb15-lg">
          <Image
            height={60}
            width={60}
            className="wa img-2"
            src={data.img}
            alt="thumb"
          />
        </div>
        <div className="list-content flex-grow-1 py-0 pb10 pl15 pl0-lg">
          <h6 className="list-title mb-2">
            Medium. <span className="text-thm">has purchased</span> I will deal
            with your item Description and assets
          </h6>
          <div className="list-meta d-flex justify-content-between align-items-center">
            <div className="review-meta d-flex align-items-center">
              <p className="mb-0 body-color fz14">February 26, 2021</p>
            </div>
            <div className="budget">
              <p className="mb-0">
                <span className="fz15 fw500 dark-color">$983</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
