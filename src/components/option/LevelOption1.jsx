"use client";
import { level } from "@/data/listing";
import listingStore from "@/store/listingStore";

export default function LevelOption1() {
  const getLevel = listingStore((state) => state.getLevel);
  const setLevel = listingStore((state) => state.setLevel);

  // handler
  const levelHandler = (data) => {
    setLevel(data);
  };

  return (
    <>
      <div className="card-body card-body px-0 pt-0">
        <div className="checkbox-style1">
          {level.map((item,i) => (
            <label key={ i } className="custom_checkbox">
              {item.title}
              <input
                type="checkbox"
                onChange={() => levelHandler(item.value)}
                checked={getLevel.includes(item.value)}
              />
              <span className="checkmark" />
              <span className="right-tags">({item.total})</span>
            </label>
          ))}
        </div>
      </div>
    </>
  );
}
