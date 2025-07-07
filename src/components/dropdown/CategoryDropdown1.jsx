"use client";

import { category } from "@/data/listing";
import listingStore from "@/store/listingStore";
import { useEffect, useState } from "react";

export default function CategoryDropdown1() {
  const [getCategory, setCategory] = useState([]);

  const setCategoryState = listingStore((state) => state.setCategory);
  const getCategoryState = listingStore((state) => state.getCategory);

  // handler
  const categoryHandler = (data) => {
    if (!getCategory.includes(data)) {
      return setCategory([...getCategory, data]);
    }
    const deleted = getCategory.filter((item) => item !== data);
    setCategory(deleted);
  };

  const categorySumitHandler = () => {
    setCategoryState([]);
    getCategory.forEach((item) => {
      setCategoryState(item);
    });
  };

  useEffect(() => {
    setCategory(getCategoryState);
  }, [getCategoryState]);

  return (
    <>
      <div className="widget-wrapper pr20">
        <div className="checkbox-style1">
          {category.map((item,i) => (
            <label key={ i } className="custom_checkbox">
              {item.title}
              <input
                type="checkbox"
                onChange={() => categoryHandler(item.title)}
                checked={getCategory.includes(item.title)}
              />
              <span className="checkmark" />
            </label>
          ))}
        </div>
      </div>
      <button
        onClick={categorySumitHandler}
        className="done-btn ud-btn btn-thm drop_btn4"
      >
        Apply
        <i className="fal fa-arrow-right-long" />
      </button>
    </>
  );
}
