"use client";

import ReactSlider from "react-slider";
import { useEffect, useState } from "react";
import priceStore from "@/store/priceStore";

export default function BudgetOption2() {
  const setPriceRange = priceStore((state) => state.priceRangeHandler);
  const priceRange = priceStore((state) => state.priceRange);

  const [getPrice, setPrice] = useState(priceRange);

  useEffect(() => {
    setPriceRange(getPrice.min, getPrice.max);
  }, [getPrice.min, getPrice.max, setPriceRange]);

  useEffect(() => {
    setPrice({
      min: priceRange.min,
      max: priceRange.max,
    });
  }, [priceRange.min, priceRange.max, setPrice]);

  const priceHandler = (data) => {
    setPrice({
      min: data[0],
      max: data[1],
    });
  };

  return (
    <>
      <div className="card-body card-body px-0 pt-0">
        <div className="range-slider-style2">
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
    </>
  );
}
