"use client";
import { shopProduct1 } from "@/data/product";
import shopStore from "@/store/shopStore";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function ShopSingleAreaProductInfo() {
  const products = shopStore((state) => state.products);
  const [getCurrentQty, setCurrentQty] = useState(1);
  const addToCart = shopStore((state) => state.addToCart);

  const param = useParams();
  const data = shopProduct1.find((product) => product.id == param.id);
  const router = useRouter();

  const incQty = () => {
    setCurrentQty(getCurrentQty + 1);
  };

  const decQty = () => {
    if (getCurrentQty > 1) {
      setCurrentQty(getCurrentQty - 1);
    }
  };

  // handler
  const addToCartHandler = () => {
    if (data) {
      const d = { ...data, qty: getCurrentQty };
      addToCart(d);
      router.push("/shop-cart");
    }
  };

  const isAddedCart = products.some((product) => product.id == param.id);

  return (
    <>
      {data ? (
        <div className="shop-single-content">
          <h2 className="mb15">{data.title}</h2>
          <div className="list-style1 mb10">
            <ul className="mb-1">
              <li className="mb-1">
                <i className="far fa-check text-thm3 bgc-thm3-light" />
                {data.inStock} in stock
              </li>
            </ul>
          </div>
          <p className="text">{data.description}</p>
          <h4 className="price mb30">
            ${data.price}{" "}
            <small>
              <del className="body-light-color fz13 fw400">
                ${data.oldPrice}
              </del>
            </small>
          </h4>
          <div className="d-sm-flex">
            {!isAddedCart && (
              <div className="cart-quantity mb10-xs mr20">
                <div className="quantity-block">
                  <button className="quantity-arrow-minus">
                    <span className="fa fa-minus" onClick={decQty} />
                  </button>
                  <input
                    className="quantity-num"
                    type="number"
                    value={getCurrentQty}
                    onChange={(e) => setCurrentQty(e.target.value)}
                  />
                  <button className="quantity-arrow-plus" onClick={incQty}>
                    <span className="fas fa-plus" />
                  </button>
                </div>
              </div>
            )}

            <a
              onClick={addToCartHandler}
              className={`ud-btn ${isAddedCart ? "btn-thm2" : "btn-thm"}`}
            >
              {isAddedCart ? "Added Cart" : "Add to cart"}
              <i className="fal fa-arrow-right-long" />
            </a>
          </div>
          <div className="d-flex mt30 mb20-sm">
            <ul className="ps-0">
              <li className="text">Sku:</li>
              <li className="text">Category:</li>
              <li className="text">Tags:</li>
            </ul>
            <ul className="ps-0 ms-4">
              <li className="text">{data.sku}</li>
              <li className="text">{data.category}</li>
              <li className="text">{data.tag}</li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="shop-single-content">
          <h2 className="mb15">Urban Bags - KeySmart - Premium Key Holders</h2>
          <div className="list-style1 mb10">
            <ul className="mb-1">
              <li className="mb-1">
                <i className="far fa-check text-thm3 bgc-thm3-light" />
                432 in stock
              </li>
            </ul>
          </div>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus
            nulla faucibus viverra
            <br className="d-none d-lg-block" /> nisl non senectus tortor.
            Suspendisse pellentesque elementum proin diam.
          </p>
          <h4 className="price mb30">
            $765.99{" "}
            <small>
              <del className="body-light-color fz13 fw400"> $959</del>
            </small>
          </h4>
          <div className="d-sm-flex">
            <div className="cart-quantity mb10-xs mr20">
              <div className="quantity-block">
                <button className="quantity-arrow-minus">
                  <span className="fa fa-minus" onClick={decQty} />
                </button>
                <input
                  className="quantity-num"
                  type="number"
                  defaultValue={getCurrentQty}
                />
                <button className="quantity-arrow-plus" onClick={incQty}>
                  <span className="fas fa-plus" />
                </button>
              </div>
            </div>
            <Link className="ud-btn btn-thm" href="/shop-cart">
              Add to cart
              <i className="fal fa-arrow-right-long" />
            </Link>
          </div>
          <div className="d-flex mt30 mb20-sm">
            <ul className="ps-0">
              <li className="text">Sku:</li>
              <li className="text">Category:</li>
              <li className="text">Tags:</li>
            </ul>
            <ul className="ps-0 ms-4">
              <li className="text">RTA-0058</li>
              <li className="text">Book</li>
              <li className="text">business / seo</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
