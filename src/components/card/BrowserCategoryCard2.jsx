import Image from "next/image";
import Link from "next/link";

export default function BrowserCategoryCard2({ data }) {
  return (
    <>
      {" "}
      <Link href="/project-1">
        <div className="feature-style1 mb30 bdrs16">
          <div className="feature-img bdrs16 overflow-hidden">
            <Image
              height={298}
              width={257}
              className="w-100 h-100 object-fit-cover"
              src={data.img}
              alt="feature image"
            />
          </div>
          <div className="feature-content">
            <div className="top-area">
              <h6 className="title mb-1">{data.skill} skills</h6>
              <h5 className="text">{data.title}</h5>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
