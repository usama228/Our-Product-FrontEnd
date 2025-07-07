"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BlogCard1({ data, isContentExpanded = false }) {
  const path = usePathname();
  return (
    <>
      <div
        className={`blog-style1 ${
          path === "/home-5" ? "bdr1 at-home5 overflow-hidden" : ""
        } ${
          path === "/home-6" ||
          path === "/home-18" ||
          path === "/home-13" ||
          path === "/home-12"
            ? "at-home6"
            : ""
        } ${path === "/home-7" ? "at-home7 bdr1" : ""} ${
          path === "/home-8" ? "at-home8" : ""
        }`}
      >
        <div
          className={`blog-img ${
            path === "/home-6" ? "bdrs4 over-flowhidden" : ""
          }`}
        >
          <Image
            height={250}
            width={329}
            className="w-100 h-100 object-fit-cover"
            src={data.img}
            alt="thumbnail"
          />
        </div>
        <div className={`blog-content ${isContentExpanded ? "px-0" : ""}`}>
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
