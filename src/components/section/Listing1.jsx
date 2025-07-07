"use client";
import { product1 } from "@/data/product";
import ListingOption1 from "../element/ListingOption1";
import ListingSidebarModal1 from "../modal/ListingSidebarModal1";
import Pagination1 from "./Pagination1";
import TrendingServiceCard1 from "../card/TrendingServiceCard1";
import listingStore from "@/store/listingStore";
import priceStore from "@/store/priceStore";
import PopularServiceSlideCard1 from "../card/PopularServiceSlideCard1";

export default function Listing1() {
  const getDeliveryTime = listingStore((state) => state.getDeliveryTime);
  const getPriceRange = priceStore((state) => state.priceRange);
  const getLevel = listingStore((state) => state.getLevel);
  const getLocation = listingStore((state) => state.getLocation);
  const getBestSeller = listingStore((state) => state.getBestSeller);
  const getDesginTool = listingStore((state) => state.getDesginTool);
  const getSpeak = listingStore((state) => state.getSpeak);
  const getSearch = listingStore((state) => state.getSearch);

  // delivery filter
  const deliveryFilter = (item) =>
    getDeliveryTime === "" || getDeliveryTime === "anytime"
      ? item
      : item.deliveryTime === getDeliveryTime;

  // price filter
  const priceFilter = (item) =>
    getPriceRange.min <= item.price && getPriceRange.max >= item.price;

  // level filter
  const levelFilter = (item) =>
    getLevel?.length !== 0 ? getLevel.includes(item.level) : item;

  // location filter
  const locationFilter = (item) =>
    getLocation?.length !== 0 ? getLocation.includes(item.location) : item;

  const searchFilter = (item) =>
    getSearch !== ""
      ? item.location.split("-").join(" ").includes(getSearch.toLowerCase())
      : item;

  // sort by filter
  const sortByFilter = (item) =>
    getBestSeller === "best-seller" ? item : item.sort === getBestSeller;

  // design tool filter
  const designToolFilter = (item) =>
    getDesginTool?.length !== 0 ? getDesginTool.includes(item.tool) : item;

  // speak filter
  const speakFilter = (item) =>
    getSpeak?.length !== 0 ? getSpeak.includes(item.language) : item;

  return (
    <>
      <section className="pt30 pb90">
        <div className="container">
          <ListingOption1 />
          <div className="row">
            {product1
              .slice(0, 12)
              .filter(deliveryFilter)
              .filter(priceFilter)
              .filter(levelFilter)
              .filter(locationFilter)
              .filter(searchFilter)
              .filter(sortByFilter)
              .filter(designToolFilter)
              .filter(speakFilter)
              .map((item,i) => (
                <div key={ i } className="col-sm-6 col-xl-3">
                  {item?.gallery ? (
                    <PopularServiceSlideCard1 data={item} />
                  ) : (
                    <TrendingServiceCard1 data={item} />
                  )}
                </div>
              ))}
          </div>
          <Pagination1 />
        </div>
      </section>
      <ListingSidebarModal1 />
    </>
  );
}
