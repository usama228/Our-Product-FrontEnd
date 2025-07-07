"use client";
import { project1 } from "@/data/product";
import ProjectCard1 from "../card/ProjectCard1";
import ListingOption2 from "../element/ListingOption2";
import ListingSidebar2 from "../sidebar/ListingSidebar2";
import Pagination1 from "./Pagination1";
import listingStore from "@/store/listingStore";
import priceStore from "@/store/priceStore";
import ListingSidebarModal2 from "../modal/ListingSidebarModal2";

export default function Listing8() {
  const getCategory = listingStore((state) => state.getCategory);
  const getProjectType = listingStore((state) => state.getProjectType);
  const getPrice = priceStore((state) => state.priceRange);
  const getDesginTool = listingStore((state) => state.getDesginTool);
  const getLocation = listingStore((state) => state.getLocation);
  const getSearch = listingStore((state) => state.getSearch);
  const getSpeak = listingStore((state) => state.getSpeak);
  const getBestSeller = listingStore((state) => state.getBestSeller);
  const getEnglishLevel = listingStore((state) => state.getEnglishLevel);

  // category filter
  const categoryFilter = (item) =>
    getCategory?.length !== 0 ? getCategory.includes(item.category) : item;

  // project-type filter
  const projectTypeFilter = (item) =>
    getProjectType?.length !== 0
      ? getProjectType.includes(item.projectType)
      : item;

  // price filter
  const priceFilter = (item) =>
    getPrice.min <= item.price.min && getPrice.max >= item.price.max;

  // skill filter
  const skillFilter = (item) =>
    getDesginTool?.length !== 0
      ? getDesginTool.includes(item.skills.split(" ").join("-").toLowerCase())
      : item;

  // location filter
  const locationFilter = (item) =>
    getLocation?.length !== 0
      ? getLocation.includes(item.location.split(" ").join("-").toLowerCase())
      : item;

  // location filter
  const searchFilter = (item) =>
    getSearch !== ""
      ? item.location
          .split("-")
          .join(" ")
          .toLowerCase()
          .includes(getSearch.toLowerCase())
      : item;

  // speak filter
  const speakFilter = (item) =>
    getSpeak?.length !== 0
      ? getSpeak.includes(item.language.split(" ").join("-").toLowerCase())
      : item;

  // english level filter
  const englishLevelFilter = (item) =>
    getEnglishLevel?.length !== 0
      ? getEnglishLevel.includes(item.englishLevel)
      : item;

  // sort by filter
  const sortByFilter = (item) =>
    getBestSeller === "best-seller" ? item : item.sort === getBestSeller;

  // content
  let content = project1
    .slice(0, 8)
    .filter(categoryFilter)
    .filter(projectTypeFilter)
    .filter(priceFilter)
    .filter(skillFilter)
    .filter(locationFilter)
    .filter(searchFilter)
    .filter(speakFilter)
    .filter(englishLevelFilter)
    .filter(sortByFilter)
    .map((item,i) => (
      <div key={ i } className="col-md-6 col-lg-12">
        <ProjectCard1 data={item} />
      </div>
    ));
  return (
    <>
      <section className="pt30 pb90">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <ListingSidebar2 />
            </div>
            <div className="col-lg-9">
              <ListingOption2 itemLength={content?.length} />
              <div className="row">{content}</div>
              <div className="mt30">
                <Pagination1 />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ListingSidebarModal2 />
    </>
  );
}
