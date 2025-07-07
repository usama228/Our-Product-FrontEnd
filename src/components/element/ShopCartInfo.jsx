"use client";

import shopStore from "@/store/shopStore";
import Link from "next/link";

export default function ShopCartInfo() {
  const products = shopStore((state) => state.products);

  let total = 0;
  products.forEach((item) => {
    const price = item.qty * item.price;
    total = total + price;
  });

  return (
    <>
      <div className="shop-sidebar ms-lg-auto">
        <div className="order_sidebar_widget default-box-shadow1">
          <h4 className="title">Cart Totals</h4>
          <p className="text bdrb1 pb10">
            Subtotal
            <span className="float-end">${total}</span>
          </p>
          <p className="text">
            Total
            <span className="float-end">${total}</span>
          </p>
          <div className="d-grid mt40">
            <Link className="ud-btn btn-thm" href="/shop-checkout">
              Proceed to Checkout
              <i className="fal fa-arrow-right-long" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
