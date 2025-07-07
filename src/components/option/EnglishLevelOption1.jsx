"use client";
import { englishLevel } from "@/data/listing";
import listingStore from "@/store/listingStore";

export default function EnglishLevelOption1() {
  const getEnglishLevel = listingStore((store) => store.getEnglishLevel);
  const setEnglishLevel = listingStore((store) => store.setEnglishLevel);

  // handler
  const englishLevelHandler = (data) => {
    setEnglishLevel(data);
  };

  return (
    <>
      <div className="checkbox-style1">
        {englishLevel.map((item,i) => (
          <label key={ i } className="custom_checkbox">
            {item.title}
            <input
              type="checkbox"
              onChange={() => englishLevelHandler(item.title)}
              checked={getEnglishLevel.includes(item.title)}
            />
            <span className="checkmark" />
            <span className="right-tags">({item.total})</span>
          </label>
        ))}
      </div>
    </>
  );
}
