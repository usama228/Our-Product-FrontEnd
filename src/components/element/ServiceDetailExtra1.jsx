"use client";
import { useState } from "react";

const extraService = [
  {
    id: 1,
    title: "100 Words (+2 days)",
    brief: "I will professionally translate english to german",
    price: 25,
    value: "silver",
  },
  {
    id: 2,
    title: "100 Words (+2 days)",
    brief: "I will professionally translate english to german",
    price: 45,
    value: "gold",
  },
  {
    id: 3,
    title: "100 Words (+2 days)",
    brief: "I will professionally translate english to german",
    price: 75,
    value: "platinum",
  },
];

export default function ServiceDetailExtra1() {
  const [getSelect, setSelect] = useState([]);

  // handler
  const serviceSelectHandler = (value) => {
    const isExist = getSelect.includes(value);

    if (!isExist) {
      return setSelect((old) => [...old, value]);
    }

    const deleted = getSelect.filter((item) => item !== value);
    setSelect(deleted);
  };

  return (
    <>
      <div className="extra-service-tab mb40 mt30">
        <nav>
          <div className="nav flex-column nav-tabs">
            {extraService.map((item,i) => (
              <button
                key={ i }
                className={`nav-link ${
                  getSelect?.includes(item.value) ? "active" : ""
                }`}
              >
                <label className="custom_checkbox fw500 text-start">
                  {item.title}
                  <span className="text text-bottom">{item.brief}</span>
                  <input
                    type="checkbox"
                    checked={getSelect?.includes(item.value)}
                    onChange={() => serviceSelectHandler(item.value)}
                  />
                  <span className="checkmark" />
                </label>
                <span className="price">${item.price}</span>
              </button>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}
