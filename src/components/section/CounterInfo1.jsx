"use client";

import CountUp from "react-countup";

export default function CounterInfo1(notBorder) {
  return (
    <>
      <section className="pb0 pt60">
        <div className={`container maxw1600 ${notBorder ? "" : "bdrb1"}  pb60`}>
          <div
            className="row justify-content-center wow fadeInUp"
            data-wow-delay="300ms"
          >
            <div className="col-6 col-md-3">
              <div className="funfact_one mb20-sm text-center">
                <div className="details">
                  <ul className="ps-0 mb-0 d-flex justify-content-center">
                    <li>
                      <div className="timer">
                        <CountUp
                          decimals={1}
                          end={834}
                          duration={2.75}
                          enableScrollSpy
                        />
                      </div>
                    </li>
                    <li>
                      <span>M</span>
                    </li>
                  </ul>
                  <p className="text mb-0">Total Freelancer</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="funfact_one mb20-sm text-center">
                <div className="details">
                  <ul className="ps-0 mb-0 d-flex justify-content-center">
                    <li>
                      <div className="timer">
                        <CountUp
                          decimals={1}
                          end={732}
                          duration={2.75}
                          enableScrollSpy
                        />
                      </div>
                    </li>
                    <li>
                      <span>M</span>
                    </li>
                  </ul>
                  <p className="text mb-0">Positive Review</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="funfact_one mb20-sm text-center">
                <div className="details">
                  <ul className="ps-0 mb-0 d-flex justify-content-center">
                    <li>
                      <div className="timer">
                        <CountUp
                          decimals={1}
                          end={90}
                          duration={2.75}
                          enableScrollSpy
                        />
                      </div>
                    </li>
                    <li>
                      <span>M</span>
                    </li>
                  </ul>
                  <p className="text mb-0">Order recieved</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="funfact_one mb20-sm text-center">
                <div className="details">
                  <ul className="ps-0 mb-0 d-flex justify-content-center">
                    <li>
                      <div className="timer">
                        <CountUp
                          decimals={1}
                          end={236}
                          duration={2.75}
                          enableScrollSpy
                        />
                      </div>
                    </li>
                    <li>
                      <span>M</span>
                    </li>
                  </ul>
                  <p className="text mb-0">Projects Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
