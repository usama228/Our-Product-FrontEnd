"use client";
import { employee } from "@/data/product";
import ListingSidebar4 from "../sidebar/ListingSidebar4";
import Pagination1 from "./Pagination1";
import listingStore from "@/store/listingStore";
import EmployeeCard1 from "../card/EmployeeCard1";
import ListingOption2 from "../element/ListingOption2";
import ListingSidebarModal4 from "../modal/ListingSidebarModal4";

export default function Listing12() {
  const getCategory = listingStore((state) => state.getCategory);
  const getNoOfEmployee = listingStore((state) => state.getNoOfEmployee);
  const getBestSeller = listingStore((state) => state.getBestSeller);

  // category filter
  const categoryFilter = (item) =>
    getCategory?.length !== 0 ? getCategory.includes(item.category) : item;

  // no of employee
  const noOfEmployeeFilter = (item) =>
    getNoOfEmployee?.length !== 0 ? getNoOfEmployee.includes(item.jobs) : item;

  // sort by filter
  const sortByFilter = (item) =>
    getBestSeller === "best-seller" ? item : item.sort === getBestSeller;

  // content
  const content = employee
    .slice(0, 12)
    .filter(categoryFilter)
    .filter(noOfEmployeeFilter)
    .filter(sortByFilter)
    .map((item,i) => (
      <div key={ i } className="col-sm-6 col-xl-4">
        <EmployeeCard1 data={item} />
      </div>
    ));

  return (
    <>
      <section className="pt30 pb90">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <ListingSidebar4 />
            </div>
            <div className="col-lg-9">
              <ListingOption2 itemLength={content?.length} />
              <div className="row">{content}</div>
              <div className="row mt30">
                <Pagination1 />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ListingSidebarModal4 />
    </>
  );
}
