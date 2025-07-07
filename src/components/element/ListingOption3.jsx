"use client";
import { deliveryTime } from "@/data/listing";
import toggleStore from "@/store/toggleStore";
import Image from "next/image";
import listingStore from "@/store/listingStore";
import { useEffect, useState } from "react";
import priceStore from "@/store/priceStore";
import ReactSlider from "react-slider";
import ClearButton from "../button/ClearButton";
import SortOption1 from "../option/SortOption1";

export default function ListingOption3() {
  const [getDelivery, SetDelivery] = useState("");

  const [getPrice, setPrice] = useState({
    min: 0,
    max: 100000,
  });

  const priceRange = priceStore((state) => state.priceRange);
  const setPriceRange = priceStore((state) => state.priceRangeHandler);
  const listingToggle = toggleStore((state) => state.listingToggleHandler);
  const setOurDeliveryTime = listingStore((state) => state.setDeliveryTime);
  const getDeliveryTime = listingStore((state) => state.getDeliveryTime);

  // filters handler
  const deliveryHandler = (data) => {
    SetDelivery(data);
  };

  useEffect(() => {
    SetDelivery(getDeliveryTime);
  }, [getDeliveryTime]);

  const priceHandler = (data) => {
    setPrice({
      min: data[0],
      max: data[1],
    });
  };

  useEffect(() => {
    setPrice(priceRange);
  }, [priceRange]);

  return (
    <>
      <div className="row align-items-center mb20">
        <div className="col-6 col-sm-6 col-lg-9 pe-0">
          <div className="text-center text-sm-start">
            <div className="dropdown-lists">
              <ul className="p-0 mb-0 text-center text-sm-start">
                <li className="list-inline-item">
                  <button
                    onClick={listingToggle}
                    type="button"
                    className="open-btn filter-btn-left mb10"
                  >
                    <Image
                      height={18}
                      width={18}
                      className="me-2"
                      src="/images/icon/all-filter-icon.svg"
                      alt="icon"
                    />
                    All Filter
                  </button>
                </li>
                <li className="list-inline-item position-relative d-none d-xl-inline-block">
                  <button
                    className="open-btn mb10 dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                  >
                    Delivery Time
                    <i className="fa fa-angle-down ms-2" />
                  </button>
                  <div className="dropdown-menu">
                    <div className="widget-wrapper pb25 mb0">
                      <div className="radio-element">
                        {deliveryTime.map((item,i) => (
                          <div
                            key={ i }
                            className="form-check d-flex align-items-center mb10"
                          >
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id={`flexRadioDefault1${item.id}`}
                              checked={getDelivery === item.value}
                              onChange={() => deliveryHandler(item.value)}
                            />
                            <label
                              className="form-check-label"
                              htmlFor={`flexRadioDefault1${item.id}`}
                            >
                              {item.title}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={() => setOurDeliveryTime(getDelivery)}
                      className="done-btn ud-btn btn-thm drop_btn"
                    >
                      Apply
                      <i className="fal fa-arrow-right-long" />
                    </button>
                  </div>
                </li>
                <li className="list-inline-item position-relative d-none d-xl-inline-block">
                  <button
                    className="open-btn mb10 dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                  >
                    Budget
                    <i className="fa fa-angle-down ms-2" />
                  </button>
                  <div className="dropdown-menu dd3">
                    <div className="widget-wrapper pb25 mb0 pr20">
                      <div className="range-slider-style1">
                        <div className="range-wrapper">
                          <div className="price__range__box">
                            <ReactSlider
                              className="horizontal-slider"
                              thumbClassName="example-thumb"
                              trackClassName="example-track"
                              value={[getPrice.min, getPrice.max]}
                              min={0}
                              max={100000}
                              onChange={priceHandler}
                              minDistance={10}
                            />
                          </div>
                          <div className="d-flex gap-1 align-items-center pt-4">
                            <input
                              type="number"
                              className="amount w-100"
                              placeholder="$20"
                              min={0}
                              value={getPrice.min}
                              onChange={(e) =>
                                setPrice({
                                  ...getPrice,
                                  min: e.target.value,
                                })
                              }
                            />
                            <span className="fa-sharp fa-solid fa-minus mx-1 dark-color" />
                            <input
                              type="number"
                              className="amount2 w-100"
                              placeholder="$100000"
                              min={0}
                              max={100000}
                              value={getPrice.max}
                              onChange={(e) =>
                                setPrice({
                                  ...getPrice,
                                  max: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setPriceRange(getPrice.min, getPrice.max)}
                      className="done-btn ud-btn btn-thm drop_btn3"
                    >
                      Apply
                      <i className="fal fa-arrow-right-long" />
                    </button>
                  </div>
                </li>
                <li className="list-inline-item position-relative d-none d-xl-inline-block">
                  <ClearButton />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-6 col-lg-3 px-0">
          <div className="page_control_shorting mb10 d-flex align-items-center justify-content-center justify-content-sm-end">
            <SortOption1 />
          </div>
        </div>
      </div>
    </>
  );
}
