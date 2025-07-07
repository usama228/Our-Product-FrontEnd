"use client";
import { designTools } from "@/data/listing";
import listingStore from "@/store/listingStore";

export default function DesignToolOption1() {
  const getDesginTool = listingStore((state) => state.getDesginTool);
  const setDesginTool = listingStore((state) => state.setDesginTool);

  // handler
  const designToolsHandler = (data) => {
    setDesginTool(data);
  };

  return (
    <>
      <div className="card-body card-body px-0 pt-0">
        <div className="checkbox-style1 mb15">
          {designTools.map((item,i) => (
            <label key={ i } className="custom_checkbox">
              {item.title}
              <input
                type="checkbox"
                checked={getDesginTool.includes(item.value)}
                onChange={() => designToolsHandler(item.value)}
              />
              <span className="checkmark" />
              <span className="right-tags">({item.total})</span>
            </label>
          ))}
        </div>
        <a className="text-thm" href="#">
          +20 more
        </a>
      </div>
    </>
  );
}
