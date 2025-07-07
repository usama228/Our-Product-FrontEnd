"use client";
import { shopProduct1 } from "@/data/product";
import FsLightbox from "fslightbox-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function ShopSingleAreaGallery() {
  const [toggler, setToggler] = useState(false);
  const param = useParams();

  const data = shopProduct1.find((product) => product.id == param.id);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={
          data
            ? data.gallery
            : [
                "/images/shop/shop-single-1.png",
                "/images/shop/shop-single-1.png",
                "/images/shop/shop-single-1.png",
                "/images/shop/shop-single-1.png",
              ]
        }
      />
      <div className="shop-single">
        {data ? (
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-item1">
              <div className="shop-single-item mb10 bdr1 bdrs8 text-center py-5">
                <a className="popup-img" onClick={() => setToggler(!toggler)}>
                  <Image
                    height={400}
                    width={400}
                    className="wa"
                    src={data.gallery[0]}
                    alt="product"
                  />
                </a>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-item2">
              <div className="shop-single-item mb10 bdr1 bdrs8 text-center py-5">
                <a className="popup-img" onClick={() => setToggler(!toggler)}>
                  <Image
                    height={400}
                    width={400}
                    className="wa"
                    src="/images/shop/shop-single-1.png"
                    alt="product"
                  />
                </a>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-item3">
              <div className="shop-single-item mb10 bdr1 bdrs8 text-center py-5">
                <a className="popup-img" onClick={() => setToggler(!toggler)}>
                  <Image
                    height={400}
                    width={400}
                    className="wa"
                    src="/images/shop/shop-single-1.png"
                    alt="product"
                  />
                </a>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-item4">
              <div className="shop-single-item mb10 bdr1 bdrs8 text-center py-5">
                <a className="popup-img" onClick={() => setToggler(!toggler)}>
                  <Image
                    height={400}
                    width={400}
                    className="wa"
                    src="/images/shop/shop-single-1.png"
                    alt="product"
                  />
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-item1">
              <div className="shop-single-item mb10 bdr1 bdrs8 text-center py-5">
                <a className="popup-img" onClick={() => setToggler(!toggler)}>
                  <Image
                    height={400}
                    width={400}
                    className="wa"
                    src="/images/shop/shop-single-1.png"
                    alt="product"
                  />
                </a>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-item2">
              <div className="shop-single-item mb10 bdr1 bdrs8 text-center py-5">
                <a className="popup-img" onClick={() => setToggler(!toggler)}>
                  <Image
                    height={400}
                    width={400}
                    className="wa"
                    src="/images/shop/shop-single-1.png"
                    alt="product"
                  />
                </a>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-item3">
              <div className="shop-single-item mb10 bdr1 bdrs8 text-center py-5">
                <a className="popup-img" onClick={() => setToggler(!toggler)}>
                  <Image
                    height={400}
                    width={400}
                    className="wa"
                    src="/images/shop/shop-single-1.png"
                    alt="product"
                  />
                </a>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-item4">
              <div className="shop-single-item mb10 bdr1 bdrs8 text-center py-5">
                <a className="popup-img" onClick={() => setToggler(!toggler)}>
                  <Image
                    height={400}
                    width={400}
                    className="wa"
                    src="/images/shop/shop-single-1.png"
                    alt="product"
                  />
                </a>
              </div>
            </div>
          </div>
        )}
        {data ? (
          <ul className="nav nav-pills mb-3" id="pills-tab">
            <li className="nav-item">
              <button
                className="nav-link mr10 mb10 active"
                id="pills-item1-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-item1"
              >
                <Image
                  height={90}
                  width={90}
                  src={data.gallery[0]}
                  alt="product"
                />
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link mr10 mb10"
                id="pills-item2-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-item2"
              >
                <Image
                  height={90}
                  width={90}
                  src="/images/shop/shop-single-3.png"
                  alt="product"
                />
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link mr10 mb10"
                id="pills-item3-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-item3"
              >
                <Image
                  height={90}
                  width={90}
                  src="/images/shop/shop-single-4.png"
                  alt="product"
                />
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link mr10 mb10"
                id="pills-item4-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-item4"
              >
                <Image
                  height={90}
                  width={90}
                  src="/images/shop/shop-single-5.png"
                  alt="product"
                />
              </button>
            </li>
          </ul>
        ) : (
          <ul className="nav nav-pills mb-3" id="pills-tab">
            <li className="nav-item">
              <button
                className="nav-link mr10 mb10 active"
                id="pills-item1-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-item1"
              >
                <Image
                  height={90}
                  width={90}
                  src="/images/shop/shop-single-2.png"
                  alt="product"
                />
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link mr10 mb10"
                id="pills-item2-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-item2"
              >
                <Image
                  height={90}
                  width={90}
                  src="/images/shop/shop-single-3.png"
                  alt="product"
                />
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link mr10 mb10"
                id="pills-item3-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-item3"
              >
                <Image
                  height={90}
                  width={90}
                  src="/images/shop/shop-single-4.png"
                  alt="product"
                />
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link mr10 mb10"
                id="pills-item4-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-item4"
              >
                <Image
                  height={90}
                  width={90}
                  src="/images/shop/shop-single-5.png"
                  alt="product"
                />
              </button>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}
