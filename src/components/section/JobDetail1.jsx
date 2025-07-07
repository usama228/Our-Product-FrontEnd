import { job1 } from "@/data/job";
import Link from "next/link";
import JobCard5 from "../card/JobCard5";

export default function JobDetail1() {
  return (
    <>
      <section className="pt10 pb90 pb30-md">
        <div className="container">
          <div className="row wow fadeInUp">
            <div className="col-lg-8 mx-auto">
              <div className="row">
                <div className="col-sm-6 col-xl-3">
                  <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
                    <div className="icon flex-shrink-0">
                      <span className="flaticon-calendar" />
                    </div>
                    <div className="details">
                      <h5 className="title">Date Posted</h5>
                      <p className="mb-0 text">Posted 1 days ago</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                  <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
                    <div className="icon flex-shrink-0">
                      <span className="flaticon-place" />
                    </div>
                    <div className="details">
                      <h5 className="title">Location</h5>
                      <p className="mb-0 text">London</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                  <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
                    <div className="icon flex-shrink-0">
                      <span className="flaticon-fifteen" />
                    </div>
                    <div className="details">
                      <h5 className="title">Hours</h5>
                      <p className="mb-0 text">50h / week</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                  <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
                    <div className="icon flex-shrink-0">
                      <span className="flaticon-pay-day" />
                    </div>
                    <div className="details">
                      <h5 className="title">Salary</h5>
                      <p className="mb-0 text">$35 - $45K</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-about">
                <h4 className="mb-4">Description</h4>
                <p className="text mb30">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.{" "}
                </p>
                <p className="text mb60">
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
                </p>
                <h4 className="mb30">Key Responsibilities</h4>
                <div className="list-style1 mb60 pr50 pr0-lg">
                  <ul>
                    <li>
                      <i className="far fa-check text-thm3 bgc-thm3-light" />
                      Be involved in every step of the product design cycle from
                      discovery to developer handoff and user acceptance
                      testing.
                    </li>
                    <li>
                      <i className="far fa-check text-thm3 bgc-thm3-light" />
                      Work with BAs, product managers and tech teams to lead the
                      Product Design
                    </li>
                    <li>
                      <i className="far fa-check text-thm3 bgc-thm3-light" />
                      Maintain quality of the design process and ensure that
                      when designs are translated into code they accurately
                      reflect the design specifications.
                    </li>
                    <li>
                      <i className="far fa-check text-thm3 bgc-thm3-light" />
                      Accurately estimate design tickets during planning
                      sessions.
                    </li>
                    <li>
                      <i className="far fa-check text-thm3 bgc-thm3-light" />
                      Contribute to sketching sessions involving
                      non-designersCreate, iterate and maintain UI deliverables
                      including sketch files, style guides, high fidelity
                      prototypes, micro interaction specifications and pattern
                      libraries.
                    </li>
                    <li>
                      <i className="far fa-check text-thm3 bgc-thm3-light" />
                      Ensure design choices are data led by identifying
                      assumptions to test each sprint, and work with the
                      analysts in your team to plan moderated usability test
                      sessions.
                    </li>
                    <li>
                      <i className="far fa-check text-thm3 bgc-thm3-light" />
                      Design pixel perfect responsive UI’s and understand that
                      adopting common interface patterns is better for UX than
                      reinventing the wheel
                    </li>
                    <li>
                      <i className="far fa-check text-thm3 bgc-thm3-light" />
                      Present your work to the wider business at Show &amp; Tell
                      sessions.
                    </li>
                  </ul>
                </div>
                <h4 className="mb30">Work &amp; Experience</h4>
                <ul className="list-style-type-bullet ps-3 mb60">
                  <li>
                    You have at least 3 years’ experience working as a Product
                    Designer.
                  </li>
                  <li>
                    You have experience using Sketch and InVision or Framer X
                  </li>
                  <li>
                    You have some previous experience working in an agile
                    environment – Think two-week sprints.
                  </li>
                  <li>
                    You are familiar using Jira and Confluence in your workflow
                  </li>
                </ul>
                <div className="d-grid mb60">
                  <Link href="/contact" className="ud-btn btn-thm2">
                    Apply For Job
                    <i className="fal fa-arrow-right-long" />
                  </Link>
                </div>
                <div className="main-title mb30">
                  <h2>Related Jobs</h2>
                  <p className="text">2022 jobs live - 293 added today</p>
                </div>
                <div className="row">
                  {job1.slice(0, 3).map((item,i) => (
                    <div key={ i } className="col-sm-6 col-xl-12">
                      <JobCard5 data={item} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
