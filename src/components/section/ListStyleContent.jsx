import { product1 } from "@/data/product";
import Pagination1 from "./Pagination1";
import PopularServiceSlideCard1 from "../card/PopularServiceSlideCard1";
import PopularServiceCard1 from "../card/PopularServiceCard1";
import PopularServiceCard2 from "../card/PopularServiceCard2";
import BestServiceCard1 from "../card/BestServiceCard1";

export default function ListStyleContent() {
  return (
    <>
      <section className="pt0 pb90">
        <div className="container">
          <div className="row mt35">
            <div className="col-lg-12 mb15">
              <h2>List Stytle V1</h2>
              <p className="text">
                Give your visitor a smooth online experience with a solid UX
                design
              </p>
            </div>
            {product1.slice(0, 4).map((item,i) => (
              <div key={ i } className="col-sm-6 col-xl-3">
                {item.gallery ? (
                  <PopularServiceSlideCard1 data={item} style="style1" />
                ) : (
                  <PopularServiceCard1 data={item} style="style1" />
                )}
              </div>
            ))}
          </div>
          <div className="row mt35">
            <div className="col-lg-12 mb15">
              <h2>List Stytle V2</h2>
              <p className="text">
                Give your visitor a smooth online experience with a solid UX
                design
              </p>
            </div>
            {product1.slice(0, 4).map((item,i) => (
              <div key={ i } className="col-sm-6 col-xl-3">
                {item.gallery ? (
                  <PopularServiceSlideCard1 data={item} style="style2" />
                ) : (
                  <PopularServiceCard1 data={item} style="style2" />
                )}
              </div>
            ))}
          </div>
          <div className="row mt35">
            <div className="col-lg-12 mb15">
              <h2>List Stytle V3</h2>
              <p className="text">
                Give your visitor a smooth online experience with a solid UX
                design
              </p>
            </div>
            {product1.slice(0, 4).map((item,i) => (
              <div key={ i } className="col-sm-6 col-xl-3">
                {item.gallery ? (
                  <PopularServiceSlideCard1 data={item} style="style3" />
                ) : (
                  <PopularServiceCard1 data={item} style="style3" />
                )}
              </div>
            ))}
          </div>
          <div className="row mt35">
            <div className="col-lg-12 mb15">
              <h2>List Stytle V4</h2>
              <p className="text">
                Give your visitor a smooth online experience with a solid UX
                design
              </p>
            </div>
            {product1.slice(0, 4).map((item,i) => (
              <div key={ i } className="col-sm-6 col-xl-3">
                {item.gallery ? (
                  <PopularServiceSlideCard1 data={item} style="style4" />
                ) : (
                  <PopularServiceCard1 data={item} style="style4" />
                )}
              </div>
            ))}
          </div>
          <div className="row mt35">
            <div className="col-lg-12 mb15">
              <h2>List Stytle V5</h2>
              <p className="text">
                Give your visitor a smooth online experience with a solid UX
                design
              </p>
            </div>
            {product1.slice(0, 4).map((item,i) => (
              <div key={ i } className="col-sm-6 col-xl-3">
                {item.gallery ? (
                  <PopularServiceSlideCard1
                    data={item}
                    style="style5"
                    isContentExpanded={true}
                  />
                ) : (
                  <PopularServiceCard1
                    data={item}
                    style="style5"
                    isContentExpanded={true}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="row mt35">
            <div className="col-lg-12 mb15">
              <h2>List Stytle V6</h2>
              <p className="text">
                Give your visitor a smooth online experience with a solid UX
                design
              </p>
            </div>
            {product1.slice(0, 4).map((item,i) => (
              <div key={ i } className="col-md-6">
                <PopularServiceCard2 data={item} text1={false} />
              </div>
            ))}
          </div>
          <div className="row mt35">
            <div className="col-lg-12 mb15">
              <h2>List Stytle V7</h2>
              <p className="text">
                Give your visitor a smooth online experience with a solid UX
                design
              </p>
            </div>
            {product1.slice(2, 4).map((item,i) => (
              <div key={ i } className="col-md-9">
                <PopularServiceCard2 data={item} text1={true} />
              </div>
            ))}
          </div>
          <div className="row mt35">
            <div className="col-lg-12 mb15">
              <h2>List Stytle V7</h2>
              <p className="text">
                Give your visitor a smooth online experience with a solid UX
                design
              </p>
            </div>
            {product1.slice(6, 11).map((item,i) => (
              <div key={ i } className="col">
                <BestServiceCard1 data={item} />
              </div>
            ))}
          </div>
          <Pagination1 />
        </div>
      </section>
    </>
  );
}
