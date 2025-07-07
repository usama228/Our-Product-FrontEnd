"use client";
import { projectType } from "@/data/listing";
import listingStore from "@/store/listingStore";

export default function ProjectTypeOption1() {
  const getProjectType = listingStore((state) => state.getProjectType);
  const setProjectType = listingStore((state) => state.setProjectType);

  // handler
  const projectTypeHandler = (data) => {
    setProjectType(data);
  };

  return (
    <>
      {projectType.map((item,i) => (
        <div key={ i } className="switch-style1">
          <div className="form-check form-switch mb20">
            <input
              className="form-check-input mt-0"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onChange={() => projectTypeHandler(item.title)}
            />
            <label
              className="form-check-label mt-0"
              htmlFor="flexSwitchCheckDefault"
            >
              {item.title}
            </label>
            <span className="right-tags">({item.total})</span>
          </div>
        </div>
      ))}
    </>
  );
}
