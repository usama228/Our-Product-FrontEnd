"use client";
import { price1 } from "@/data/project";
import PriceTableCard1 from "../card/PriceTableCard1";
import priceStore from "@/store/priceStore";
import { usePathname } from "next/navigation";

export default function PriceTable1() {
  const togglePlan = priceStore((state) => state.togglePlan);

  const path = usePathname();

  // monthly & yearly price handler
  const checkboxHandler = (e) => {
    if (e.target.checked) {
      togglePlan("1y");
    } else {
      togglePlan("1m");
    }
  };

  return (
    <>
      <section
        className={`our-pricing ${
          path === "/home-2" ? "pb90" : path === "/about-1" ? "pt0 pb0" : ""
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto wow fadeInUp">
              <div className="main-title text-center mb30">
                <h2 className="title">Membership Plans</h2>
                <p className="paragraph mt10">
                  Give your visitor a smooth online experience with a solid UX
                  design
                </p>
              </div>
            </div>
          </div>
          <div className="row wow fadeInUp" data-wow-delay="200ms">
            <div className="col-lg-12">
              <div className="pricing_packages_top d-flex align-items-center justify-content-center mb60">
                <div className="toggle-btn">
                  <span className="pricing_save1 dark-color ff-heading">
                    Billed Monthly
                  </span>
                  <label className="switch">
                    <input
                      type="checkbox"
                      id="checbox"
                      onChange={checkboxHandler}
                    />
                    <span className="pricing_table_switch_slide round" />
                  </label>
                  <span className="pricing_save2 dark-color ff-heading">
                    Billed Yearly
                  </span>
                  <span className="pricing_save3">Save 20%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row wow fadeInUp" data-wow-delay="300ms">
            {price1.map((item,i) => (
              <div key={ i } className="col-sm-6 col-xl-3">
                <PriceTableCard1 data={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
