"use client";
import shopStore from "@/store/shopStore";
import ShopCartInfo from "../element/ShopCartInfo";
import CartList1 from "../element/CartList1";
import Link from "next/link";

export default function ShopCartArea1() {
  const products = shopStore((state) => state.products);

  return (
    <>
      <section className="shop-checkout pt-0">
        <div className="container">
          <div className="row wow fadeInUp" data-wow-delay="300ms">
            <div className="col-lg-8">
              <div className="shopping_cart_table table-responsive">
                <table className="table table-borderless">
                  <thead>
                    <tr>
                      <th className="pl30" scope="col">
                        Product
                      </th>
                      <th className="ps-0" scope="col">
                        Price
                      </th>
                      <th className="ps-0" scope="col">
                        Quantity
                      </th>
                      <th className="ps-0" scope="col">
                        Subtotal
                      </th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody className="table_body">
                    {products.map((item,i) => (
                      <CartList1 key={ i } data={item} />
                    ))}
                  </tbody>
                </table>
                {products?.length !== 0 ? (
                  <div className="coupon-form mt30 mb30-md">
                    <div className="d-md-flex align-items-center justify-content-between">
                      <div className="d-md-flex justify-content-between">
                        <input
                          type="text"
                          className="form-control coupon_input mb10-sm"
                          placeholder="Coupon Code"
                        />
                        <a className="ud-btn btn-thm flex-shrink-0 ml20 ml0-sm">
                          Apply Coupon
                          <i className="fal fa-arrow-right-long" />
                        </a>
                      </div>
                      <div className="btn-lsit1">
                        <Link
                          href="/shop-list"
                          className="ud-btn btn-light-thm"
                        >
                          Buy Product
                          <i className="fal fa-arrow-right-long" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="d-flex justify-content-center pt-5 mb30">
                    <Link href="/shop-list" className="ud-btn btn-light-thm">
                      Buy Product
                      <i className="fal fa-arrow-right-long" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-4">
              <ShopCartInfo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
