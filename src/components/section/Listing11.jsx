"use client";
import { employee } from "@/data/product";
import EmployeeCard1 from "../card/EmployeeCard1";
import ListingOption5 from "../element/ListingOption5";
import Pagination1 from "./Pagination1";
import ListingSidebarModal4 from "../modal/ListingSidebarModal4";
import listingStore from "@/store/listingStore";

export default function Listing11() {
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
    .slice(0, 16)
    .filter(categoryFilter)
    .filter(noOfEmployeeFilter)
    .filter(sortByFilter)
    .map((item,i) => (
      <div key={ i } className="col-sm-6 col-lg-4 col-xl-3">
        <EmployeeCard1 data={item} />
      </div>
    ));
  return (
    <>
      <section className="pt30 pb90">
        <div className="container">
          <ListingOption5 />
          <div className="row">{content}</div>
          <div className="row">
            <div className="mt30">
              <Pagination1 />
            </div>
          </div>
        </div>
      </section>
      <ListingSidebarModal4 />
    </>
  );
}
