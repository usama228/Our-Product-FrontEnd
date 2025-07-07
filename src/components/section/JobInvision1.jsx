import { job1 } from "@/data/job";
import JobCard4 from "../card/JobCard4";

export default function JobInvision1() {
  return (
    <>
      <section className="pt-0 pb90 pb30-md">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="mb30">
                <h2>3 jobs at Invision</h2>
                <p className="text">2022 jobs live - 293 added today</p>
              </div>
            </div>
          </div>
          <div className="row">
            {job1.slice(0, 4).map((item,i) => (
              <div key={ i } className="col-sm-6 col-lg-4 col-xl-3">
                <JobCard4 data={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
