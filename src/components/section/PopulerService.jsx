import { product1 } from "@/data/product";
import Link from "next/link";
import PopularServiceSlideCard1 from "../card/PopularServiceSlideCard1";
import PopularServiceCard1 from "../card/PopularServiceCard1";

export default function PopulerService() {
  return (
    <>
      <section className="pb40-md pb70 mt70 mt0-lg">
        <div className="container">
          <div className="row align-items-center wow fadeInUp">
            <div className="col-lg-12">
              <div className="main-title mb30-lg">
                <h2 className="title">
                  People Who Viewed This Service Also Viewed
                </h2>
                <p className="paragraph">
                  Give your visitor a smooth online experience with a solid UX
                  design
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {product1.slice(0, 4).map((item,i) => (
              <div key={ i } className="col-sm-6 col-xl-3">
                {item.gallery ? (
                  <PopularServiceSlideCard1
                    style="listing-style1"
                    data={item}
                  />
                ) : (
                  <PopularServiceCard1 style="listing-style1" data={item} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
