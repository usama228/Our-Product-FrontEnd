import ShopSingleAreaGallery from "../element/ShopSingleAreaGallery";
import ShopSingleAreaInfo1 from "../element/ShopSingleAreaInfo1";
import ShopSingleAreaProductInfo from "../element/ShopSingleAreaProductInfo";

export default function ShopSingleArea1() {
  return (
    <>
      <section className="shop-checkout pt40 pb90">
        <div className="container">
          <div className="row wow fadeInUp" data-wow-delay="300ms">
            <div className="col-lg-6">
              <ShopSingleAreaGallery />
            </div>
            <div className="col-lg-6">
              <ShopSingleAreaProductInfo />
            </div>
          </div>
          <ShopSingleAreaInfo1 />
        </div>
      </section>
    </>
  );
}
