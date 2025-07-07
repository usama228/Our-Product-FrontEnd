"use client";
import { jobType } from "@/data/listing";
import listingStore from "@/store/listingStore";
import { useEffect, useState } from "react";

export default function JobTypeDropdown1() {
  const [getJobType, setJobType] = useState([]);

  const setJobTypeState = listingStore((state) => state.setJobType);
  const getJobTypeState = listingStore((state) => state.getJobType);

  // handler
  const setJobTypeHandler = (data) => {
    if (!getJobType.includes(data)) {
      return setJobType([...getJobType, data]);
    }
    const deleted = getJobType.filter((item) => item !== data);
    setJobType(deleted);
  };

  const jobTypeSumitHandler = () => {
    setJobTypeState([]);
    getJobType.forEach((item) => {
      setJobTypeState(item);
    });
  };

  useEffect(() => {
    setJobType(getJobTypeState);
  }, [getJobTypeState]);

  return (
    <>
      <div className="widget-wrapper pr20">
        {jobType.map((item,i) => (
          <div key={ i } className="switch-style1">
            <div className="form-check form-switch mb20">
              <input
                className="form-check-input"
                type="checkbox"
                id={`flexSwitchCheckDefault1${item.id}`}
                checked={getJobType.includes(item.title)}
                onChange={() => setJobTypeHandler(item.title)}
              />
              <label
                className="form-check-label"
                htmlFor={`flexSwitchCheckDefault1${item.id}`}
              >
                {item.title}
              </label>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={jobTypeSumitHandler}
        className="done-btn ud-btn btn-thm drop_btn4"
      >
        Apply
        <i className="fal fa-arrow-right-long" />
      </button>
    </>
  );
}
