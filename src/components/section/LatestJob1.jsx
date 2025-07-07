import Link from "next/link";
import JobCard1 from "../card/JobCard1";
import { job1 } from "@/data/job";

export default function LatestJob1() {
  return (
    <>
      <section className="pb90 pb30-md">
        <div className="container">
          <div className="row align-items-center wow fadeInUp">
            <div className="col-lg-9">
              <div className="main-title mb50">
                <h2 className="title">Our Latest Jobs</h2>
                <p className="paragraph">
                  Know your worth and find the job that qualify your life
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="text-start text-lg-end mb-4 mb-lg-2">
                <Link className="ud-btn2" href="/job-1">
                  Browse All
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            {job1.slice(0, 8).map((item,i) => (
              <div key={ i } className="col-sm-6">
                <JobCard1 data={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
