import OrderInfo1 from "../element/OrderInfo1";
import PaymentOption1 from "../element/PaymentOption1";

export default function ShopCheckoutAreaInfo1() {
  return (
    <>
      <div className="shop-sidebar ms-md-auto">
        <OrderInfo1 />
        <PaymentOption1 />
        <div className="d-grid default-box-shadow2">
          <button className="ud-btn btn-thm">
            Place Order
            <i className="fal fa-arrow-right-long" />
          </button>
        </div>
      </div>
    </>
  );
}
