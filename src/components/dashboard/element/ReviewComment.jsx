import Image from "next/image";
import Link from "next/link";

export default function ReviewComment({ i, lenght }) {
  return (
    <>
      <div className={`pb20 ${i + 1 !== lenght ? "bdrb1" : ""}`}>
        <div className="mbp_first position-relative d-sm-flex align-items-center justify-content-start mb30-sm mt30">
          <Image
            height={60}
            width={60}
            src="/images/blog/comments-2.png"
            className="mr-3"
            alt="comments-2.png"
          />
          <div className="ml20 ml0-xs mt20-xs">
            <div className="del-edit">
              <span className="flaticon-flag" />
            </div>
            <h6 className="mt-0 mb-1">Ali Tufan</h6>
            <div className="d-flex align-items-center">
              <div>
                <i className="fas fa-star vam fz10 review-color me-2" />
                <span className="fz15 fw500">4.98</span>
              </div>
              <div className="ms-3">
                <span className="fz14 text">Published 2 months ago</span>
              </div>
            </div>
          </div>
        </div>
        <p className="text mt20 mb20">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text.
        </p>
        <Link href="/service-single" className="ud-btn bgc-thm4 text-thm">
          Respond
        </Link>
      </div>
    </>
  );
}
