"use client";
import { projectProposal1 } from "@/data/product";
import ProjectProposalCard1 from "../card/ProjectProposalCard1";
import ServiceDetailExtra1 from "../element/ServiceDetailExtra1";
import { Sticky, StickyContainer } from "react-sticky";
import ProjectPriceWidget1 from "../element/ProjectPriceWidget1";
import ProjectContactWidget1 from "../element/ProjectContactWidget1";
import useScreen from "@/hook/useScreen";

const skills = [
  "SaaS",
  "Figma",
  "Software Design",
  "Sketch",
  "Prototyping",
  "HTML5",
  "Design",
  "Writing",
];

export default function ProjectDetail1() {
  const isMatchedScreen = useScreen(1216);

  return (
    <>
      <StickyContainer>
        <section className="pt30">
          <div className="container">
            <div className="row wrap">
              <div className="col-lg-8">
                <div className="column">
                  <div className="scrollbalance-inner">
                    <div className="row">
                      <div className="col-sm-6 col-xl-4">
                        <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
                          <div className="icon flex-shrink-0">
                            <span className="flaticon-notification-1" />
                          </div>
                          <div className="details">
                            <h5 className="title">Seller Type</h5>
                            <p className="mb-0 text">Company</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-xl-4">
                        <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
                          <div className="icon flex-shrink-0">
                            <span className="flaticon-dollar" />
                          </div>
                          <div className="details">
                            <h5 className="title">Project type</h5>
                            <p className="mb-0 text">Hourly</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-xl-4">
                        <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
                          <div className="icon flex-shrink-0">
                            <span className="flaticon-fifteen" />
                          </div>
                          <div className="details">
                            <h5 className="title">Project Duration</h5>
                            <p className="mb-0 text">10-15 Hours</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-xl-4">
                        <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
                          <div className="icon flex-shrink-0">
                            <span className="flaticon-like-1" />
                          </div>
                          <div className="details">
                            <h5 className="title">Project Level</h5>
                            <p className="mb-0 text">Expensive</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-xl-4">
                        <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
                          <div className="icon flex-shrink-0">
                            <span className="flaticon-translator" />
                          </div>
                          <div className="details">
                            <h5 className="title">Languages</h5>
                            <p className="mb-0 text">20</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-xl-4">
                        <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
                          <div className="icon flex-shrink-0">
                            <span className="flaticon-goal" />
                          </div>
                          <div className="details">
                            <h5 className="title">English Level</h5>
                            <p className="mb-0 text">Professional</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="service-about">
                      <h4>Description</h4>
                      <p className="text mb30">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English.{" "}
                      </p>
                      <p className="text mb30">
                        Many desktop publishing packages and web page editors
                        now use Lorem Ipsum as their default model text, and a
                        search for 'lorem ipsum' will uncover many web sites
                        still in their infancy. Various versions have evolved
                        over the years, sometimes by accident, sometimes on
                        purpose (injected humour and the like).
                      </p>
                      <hr className="opacity-100 mb60 mt60" />
                      <h4 className="mb30">Attachments</h4>
                      <div className="row">
                        <div className="col-6 col-lg-3">
                          <div className="project-attach">
                            <h6 className="title">Project Brief</h6>
                            <p>PDF</p>
                            <span className="icon flaticon-page" />
                          </div>
                        </div>
                        <div className="col-6 col-lg-3">
                          <div className="project-attach">
                            <h6 className="title">Project Brief</h6>
                            <p>PDF</p>
                            <span className="icon flaticon-page" />
                          </div>
                        </div>
                      </div>
                      <hr className="opacity-100 mb60 mt30" />
                      <h4 className="mb30">Skills Required</h4>
                      <div className="mb60">
                        {skills.map((item, i) => (
                          <a
                            key={i}
                            className={`tag list-inline-item mb-2 mb-xl-0 ${
                              Number(item.length) === 7 ? "mr0" : "mr10"
                            }`}
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                      <hr className="opacity-100 mb60" />
                      <h4 className="mb30">Project Proposals (3)</h4>
                      <div className="row">
                        {projectProposal1.slice(0, 3).map((item,i) => (
                          <div key={ i } className="col-md-6 col-lg-12">
                            <ProjectProposalCard1 data={item} />
                          </div>
                        ))}
                      </div>
                      <div className="bsp_reveiw_wrt mt25">
                        <h4>Send Your Proposal</h4>
                        <form className="comments_form mt30 mb30-md">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="mb20">
                                <label className="fw500 ff-heading dark-color mb-2">
                                  Your hourly price
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="$99"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="mb20">
                                <label className="fw500 ff-heading dark-color mb-2">
                                  Estimated Hours
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder={4}
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="mb-4">
                                <label className="fw500 fz16 ff-heading dark-color mb-2">
                                  Cover Letter
                                </label>
                                <textarea
                                  className="pt15"
                                  rows={6}
                                  placeholder="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <ServiceDetailExtra1 />
                            </div>
                            <div className="col-md-12">
                              <div className="d-grid">
                                <a className="ud-btn btn-thm">
                                  Submit a Proposal
                                  <i className="fal fa-arrow-right-long" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="column">
                  {isMatchedScreen ? (
                    <Sticky>
                      {({ style }) => (
                        <div className="scrollbalance-inner" style={style}>
                          <div className="blog-sidebar ms-lg-auto">
                            <ProjectPriceWidget1 />
                            <ProjectContactWidget1 />
                          </div>
                        </div>
                      )}
                    </Sticky>
                  ) : (
                    <div className="scrollbalance-inner">
                      <div className="blog-sidebar ms-lg-auto">
                        <ProjectPriceWidget1 />
                        <ProjectContactWidget1 />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </StickyContainer>
    </>
  );
}
