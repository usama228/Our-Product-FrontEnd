"use client";
import { projectType } from "@/data/listing";
import listingStore from "@/store/listingStore";

export default function ProjectTypeOption2() {
  const getProjectType = listingStore((state) => state.getProjectType);
  const setProjectType = listingStore((state) => state.setProjectType);

  // handler
  const projectTypeHandler = (data) => {
    setProjectType(data);
  };

  return (
    <div  className="checkbox-style1">
      {projectType.map((item,i) => (
        <label key={i}  className="custom_checkbox">
          {item.title}
          <input
            type="checkbox"
            checked={getProjectType.includes(item.title)}
            onChange={() => projectTypeHandler(item.title)}
          />
          <span  className="checkmark"></span>
        </label>
      ))}
    </div>
  );
}
