"use client";
import shopStore from "@/store/shopStore";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ShopListCard1({ data }) {
  const addToCart = shopStore((state) => state.addToCart);
  const products = shopStore((state) => state.products);

  const router = useRouter();

  // handler
  const addToCartHandler = (product) => {
    addToCart(product);
    router.push("/shop-cart");
  };

  const isAdded = products.some((product) => product.id === data.id);

  return (
    <>
      <div className="shop-item text-center">
        <div className="thumb">
          <Link href={`/shop-single/${data.id}`}>
            <Image
              height={247}
              width={271}
              className="w-100 w-100 object-fit-cover"
              src={data.img}
              alt="product"
            />
          </Link>
        </div>
        <div className="details">
          <p className="mb10">{data.shortTitle}</p>
          <h5 className="mb10">{data.brandInfo}</h5>
          <h5 className="mb20">${data.price.toFixed(2)}</h5>
          <a
            onClick={() => addToCartHandler(data)}
            className={`ud-btn ${isAdded ? "btn-thm2" : "btn-light-thm"}`}
          >
            {isAdded ? "Added Cart" : "Add to cart"}
            <i className="fal fa-arrow-right-long" />
          </a>
        </div>
      </div>
    </>
  );
}
