"use client";
import { employee } from "@/data/product";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function Breadcumb15() {
  const { id } = useParams();
  const data = employee.find((item) => item.id == id);
  return (
    <>
      <section className="breadcumb-section pt-0">
        <div className="cta-employee-single freelancer-single-style mx-auto maxw1700 pt120 pt60-sm pb120 pb60-sm bdrs16 position-relative overflow-hidden d-flex align-items-center mx20-lg px30-lg">
          <Image
            height={226}
            width={198}
            className="left-top-img wow zoomIn"
            src="/images/vector-img/left-top.png"
            alt="vector-img"
          />
          <Image
            height={181}
            width={255}
            className="right-bottom-img wow zoomIn"
            src="/images/vector-img/right-bottom.png"
            alt="vector-img"
          />
          <div className="container">
            <div className="row wow fadeInUp">
              <div className="col-xl-7">
                <div className="position-relative">
                  <div className="list-meta d-sm-flex align-items-center">
                    <a className="position-relative freelancer-single-style">
                      {data ? (
                        <Image
                          height={120}
                          width={120}
                          className="rounded-circle w-100 wa-sm mb15-sm"
                          src={data.img}
                          alt="Freelancer Photo"
                        />
                      ) : (
                        <Image
                          height={120}
                          width={120}
                          className="rounded-circle w-100 wa-sm mb15-sm"
                          src="/images/team/employee-single.png"
                          alt="Freelancer Photo"
                        />
                      )}
                      <span className="online2" />
                    </a>
                    <div className="ml20 ml0-xs">
                      {data ? (
                        <h5 className="title mb-1">{data.server}</h5>
                      ) : (
                        <h5 className="title mb-1">Invision</h5>
                      )}
                      <p className="text fz14 mb-2">
                        Lorem Ipsum Dolar Sit Amet
                      </p>
                      <p className="mb-0 dark-color fz15 fw500 list-inline-item mb5-sm">
                        <i className="fas fa-star vam fz10 review-color me-2" />{" "}
                        4.82 94 reviews
                      </p>
                      <p className="mb-0 dark-color fz15 fw500 list-inline-item ml15 mb5-sm ml0-xs">
                        <i className="flaticon-place vam fz20 me-2" /> London,
                        UK
                      </p>
                      <p className="mb-0 dark-color fz15 fw500 list-inline-item ml15 mb5-sm ml0-xs">
                        <i className="flaticon-30-days vam fz20 me-2" /> Since
                        April 1, 2022
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
