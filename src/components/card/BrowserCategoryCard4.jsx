import Link from "next/link";

export default function BrowserCategoryCard4({ data }) {
  return (
    <>
      <div className="iconbox-style1 bdr1 default-box-shadow1">
        <div className="icon">
          <span className={data.icon} />
        </div>
        <div className="details mt20">
          <p className="text mb5">{data.skill} skills</p>
          <h5 className="title">
            <Link href="/job-1">{data.title}</Link>
          </h5>
        </div>
      </div>
    </>
  );
}
