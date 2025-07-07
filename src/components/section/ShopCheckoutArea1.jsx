import ShopCheckoutAreaForm from "../element/ShopCheckoutAreaForm";
import ShopCheckoutAreaInfo1 from "../sidebar/ShopCheckoutAreaInfo1";

export default function ShopCheckoutArea1() {
  return (
    <>
      <section className="shop-checkout pt-0">
        <div className="container">
          <div className="row wow fadeInUp" data-wow-delay="300ms">
            <div className="col-md-7 col-lg-8">
              <ShopCheckoutAreaForm />
            </div>
            <div className="col-md-5 col-lg-4">
              <ShopCheckoutAreaInfo1 />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
