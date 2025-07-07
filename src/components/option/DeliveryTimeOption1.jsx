"use client";
import { deliveryTime } from "@/data/listing";
import listingStore from "@/store/listingStore";

export default function DeliveryTimeOption1() {
  const getDeliveryTime = listingStore((state) => state.getDeliveryTime);
  const setDeliveryTime = listingStore((state) => state.setDeliveryTime);

  // handler
  const deliveryTimeHandler = (data) => {
    setDeliveryTime(data);
  };

  return (
    <>
      <div className="card-body card-body px-0 pt-0">
        <div className="radio-element">
          {deliveryTime.map((item,i) => (
            <div
              key={ i }
              className="form-check d-flex align-items-center mb10"
            >
              <input
                className="form-check-input"
                type="radio"
                checked={item.value === getDeliveryTime}
                onChange={() => deliveryTimeHandler(item.value)}
                id={`delivery-time${item.id}`}
              />
              <label
                className="form-check-label"
                htmlFor={`delivery-time${item.id}`}
              >
                {item.title}
              </label>
              <span className="right-tags">({item.total})</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
