import { job1 } from "@/data/job";
import AboutMe1 from "../element/AboutMe1";
import EmployeeDetailSlider1 from "../element/EmployeeDetailSlider1";
import ServiceDetailComment1 from "../element/ServiceDetailComment1";
import ServiceDetailReviewInfo1 from "../element/ServiceDetailReviewInfo1";
import JobCard5 from "../card/JobCard5";

export default function EmplyeeDetail1() {
  return (
    <>
      <section className="pt10 pb90 pb30-md">
        <div className="container">
          <div className="row wow fadeInUp">
            <div className="col-lg-8">
              <div className="service-about">
                <h4 className="mb20">About Company</h4>
                <p className="text mb30">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
                <p className="text mb30">
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
                </p>
                <h5 className="mb20 mt60">Who are we?</h5>
                <p className="text mb30">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
                <h5 className="mb20 mt60">What do we do?</h5>
                <p className="text mb30">
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
                </p>
                <EmployeeDetailSlider1 />
                <div className="row">
                  <h4 className="mb25">Projects</h4>
                  {job1.slice(0, 3).map((item,i) => (
                    <div key={ i } className="col-sm-6 col-xl-12">
                      <JobCard5 data={item} />
                    </div>
                  ))}
                </div>

                <ServiceDetailReviewInfo1 />
                <ServiceDetailComment1 />
              </div>
            </div>
            <div className="col-lg-4">
              <AboutMe1 />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
