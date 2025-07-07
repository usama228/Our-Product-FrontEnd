import Image from "next/image";
import Link from "next/link";

export default function BlogCard4({ data, index }) {
  return (
    <>
      <div
        className={`blog-style1 large-size mb20 ${
          index == data.id ? "mb50" : ""
        }`}
      >
        <div className="blog-img">
          <Image
            height={398}
            width={736}
            className="w-100 bdrs4 object-fit-cover"
            src={data.img}
            alt="blog"
          />
        </div>
        <div className="blog-content px-0 pt20 pb-0">
          <div className="blog-single-meta mb25">
            <div className="post-author d-sm-flex align-items-center">
              <Image
                height={60}
                width={60}
                className="mr10 object-fit-contain"
                src={data.author.img}
                alt="avatar"
              />
              <a className="pr15 body-light-color">{data.author.name}</a>
              <a className="ml15 pr15 body-light-color">Business</a>
              <a className="ml15 body-light-color">{data.date}</a>
            </div>
          </div>
          <h3 className="title mt-1 mb10">
            <Link href={`/blog-single/${data.id}`}>{data.title}</Link>
          </h3>
          <p className="text mb25">{data.description}</p>
          <Link
            href={`/blog-single/${data.id}`}
            className="ud-btn btn-light-thm"
          >
            Read More
            <i className="fal fa-arrow-right-long" />
          </Link>
        </div>
      </div>
    </>
  );
}
