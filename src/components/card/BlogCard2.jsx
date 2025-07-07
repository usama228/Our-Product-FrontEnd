import Image from "next/image";
import Link from "next/link";

export default function BlogCard2({ data }) {
  return (
    <>
      <div className="blog-style1">
        <div className="blog-img">
          <Image
            height={253}
            width={334}
            className="w-100 h-100 object-fit-contain"
            src={data.img}
            alt="blog"
          />
        </div>
        <div className="blog-content">
          <a className="date">{data.date}</a>
          <h4 className="title mt-1">
            <Link href={`/blog-single/${data.id}`}>{data.title}</Link>
          </h4>
          <p className="text mb-0">{data.brief}</p>
        </div>
      </div>
    </>
  );
}
