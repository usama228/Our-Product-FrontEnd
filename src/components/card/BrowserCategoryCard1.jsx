"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BrowserCategoryCard1({ data }) {
  const path = usePathname();

  return (
    <>
      <div
        className={`iconbox-style1 ${
          path === "/home-8" || path === "/help" ? "bdr1" : ""
        }`}
      >
        <div className="icon">
          <span className={data.icon} />
        </div>
        <div className="details mt20">
          <p className="text mb5">{data.skill} skills</p>
          <h4 className="title">
            <Link href="/service-1">{data.title}</Link>
          </h4>
          <p className="mb-0">{data.brif} </p>
        </div>
      </div>
    </>
  );
}
