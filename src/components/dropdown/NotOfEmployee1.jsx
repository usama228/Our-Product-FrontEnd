"use client";
import { noOfEmployee } from "@/data/listing";
import listingStore from "@/store/listingStore";
import { useEffect, useState } from "react";

export default function NotOfEmployee1() {
  const [getNoOfEmployee, setNoOfEmployee] = useState([]);

  const setNoOfEmployeeState = listingStore((state) => state.setNoOfEmployee);
  const getNoOfEmployeeState = listingStore((state) => state.getNoOfEmployee);

  // handler
  const noOfEmployeeHandler = (data) => {
    if (!getNoOfEmployee.includes(data)) {
      return setNoOfEmployee([...getNoOfEmployee, data]);
    }
    const deleted = getNoOfEmployee.filter((item) => item !== data);
    setNoOfEmployee(deleted);
  };

  const noOfEmployeeSumitHandler = () => {
    setNoOfEmployeeState([]);
    getNoOfEmployee.forEach((item) => {
      setNoOfEmployeeState(item);
    });
  };

  useEffect(() => {
    setNoOfEmployee(getNoOfEmployeeState);
  }, [getNoOfEmployeeState]);

  return (
    <>
      <div className="widget-wrapper pb25 mb0">
        <div className="checkbox-style1">
          {noOfEmployee.map((item,i) => (
            <label key={ i } className="custom_checkbox">
              {item.totalEmployee}
              <input
                type="checkbox"
                onChange={() => noOfEmployeeHandler(item.totalEmployee)}
                checked={getNoOfEmployee.includes(item.totalEmployee)}
              />
              <span className="checkmark" />
              <span className="right-tags">({item.total})</span>
            </label>
          ))}
        </div>
      </div>
      <button
        onClick={noOfEmployeeSumitHandler}
        className="done-btn ud-btn btn-thm dropdown-toggle"
      >
        Apply
        <i className="fal fa-arrow-right-long" />
      </button>
    </>
  );
}
