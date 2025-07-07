import Image from "next/image";

export default function BlogRecentCard1({ data, index }) {
  return (
    <>
      <div
        className={`list-news-style d-flex align-items-center ${
          index.firstIndex === data.id ? "mt30" : ""
        } ${index.lastIndex === data.id ? "mb0" : "mb20"}`}
      >
        <div className="news-img flex-shrink-0">
          <Image
            height={70}
            width={70}
            className="object-fit-cover"
            src={data.img}
            alt="recent post"
          />
        </div>
        <div className="news-content flex-shrink-1 ms-3">
          <h6 className="new-text mb0">{data.title}</h6>
          <a className="body-light-color">{data.date}</a>
        </div>
      </div>
    </>
  );
}
