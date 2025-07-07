"use client";

import { shopProduct1 } from "@/data/product";
import ShopListCard1 from "../card/ShopListCard1";
import ShopListInfo1 from "../element/ShopListInfo1";
import ShopAreaSidebar1 from "../sidebar/ShopAreaSidebar1";
import Pagination1 from "./Pagination1";
import priceStore from "@/store/priceStore";
import listingStore from "@/store/listingStore";

export default function ShopArea1() {
  const getCategory = listingStore((state) => state.getCategory);
  const priceRange = priceStore((state) => state.priceRange);
  const getBestSeller = listingStore((state) => state.getBestSeller);
  const getSearch = listingStore((state) => state.getSearch);

  // category filter
  const categoryFilter = (item) =>
    getCategory?.length !== 0 ? getCategory.includes(item.category) : item;

  // salary filter
  const salaryFilter = (item) =>
    priceRange.min <= item.price && priceRange.max >= item.price;

  // sort by filter
  const sortByFilter = (item) =>
    getBestSeller === "best-seller" ? item : item.sort === getBestSeller;

  const searchFilter = (item) =>
    getSearch !== ""
      ? item.title.toLowerCase().includes(getSearch.toLowerCase())
      : item;

  const content = shopProduct1
    .slice(0, 9)
    .filter(categoryFilter)
    .filter(salaryFilter)
    .filter(sortByFilter)
    .filter(searchFilter)
    .map((item,i) => (
      <div key={ i } className="col-sm-6 col-xl-4">
        <ShopListCard1 data={item} />
      </div>
    ));

  return (
    <>
      <section className="shop-checkout pt-0">
        <div className="container">
          <div className="row wow fadeInUp" data-wow-delay="300ms">
            <div className="col-lg-3">
              <ShopAreaSidebar1 />
            </div>
            <div className="col-lg-9">
              <ShopListInfo1 length={content?.length} />
              <div className="row">{content}</div>
              <Pagination1 />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
