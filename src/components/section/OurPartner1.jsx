"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

const partners = [
  "/images/partners/1.png",
  "/images/partners/2.png",
  "/images/partners/3.png",
  "/images/partners/4.png",
  "/images/partners/5.png",
  "/images/partners/6.png",
];

export default function OurPartner1() {
  const path = usePathname();

  return (
    <>
      <section
        className={`our-partners ${
          path === "/" ||
          path === "/home-3" ||
          path === "/about-2" ||
          path === "/home-15" ||
          path === "/home-6"
            ? "pt0"
            : ""
        } ${path === "/home-8" ? "pt0 pb0" : ""} ${
          path === "/home-14" ? "bdrt1 pt55 pb55" : ""
        } 
        ${path === "/home-16" ? "pt55 pb55" : ""}
        ${path === "/home-13" ? "pt55 pb55" : ""}
        `}
      >
        <div className="container">
          <div className="row">
            {path === "/home-14" ? (
              ""
            ) : (
              <div className="col-lg-12 wow fadeInUp">
                <div className="main-title text-center">
                  <h6>Trusted by the world’s best</h6>
                </div>
              </div>
            )}
          </div>
          <div className="row">
            {partners.map((item, index) => (
              <div key={index} className="col-6 col-md-4 col-xl-2">
                <div className="partner_item text-center mb30-lg">
                  <Image
                    height={26}
                    width={84}
                    className="wa m-auto w-100 h-100 object-fit-contain"
                    src={item}
                    alt={`Partner ${index}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
