"use client";
import { speaks } from "@/data/listing";
import listingStore from "@/store/listingStore";

export default function SpeakOption1() {
  const getSpeak = listingStore((state) => state.getSpeak);
  const setSpeak = listingStore((state) => state.setSpeak);

  // handler
  const speakHandler = (data) => {
    setSpeak(data);
  };

  return (
    <>
      <div className="card-body card-body px-0 pt-0">
        <div className="checkbox-style1 mb15">
          {speaks.map((item,i) => (
            <label key={ i } className="custom_checkbox">
              {item.title}
              <input
                type="checkbox"
                onChange={() => speakHandler(item.value)}
                checked={getSpeak.includes(item.value)}
              />
              <span className="checkmark" />
              <span className="right-tags">({item.total})</span>
            </label>
          ))}
        </div>
        <a className="text-thm">+20 more</a>
      </div>
    </>
  );
}
