"use client";
import { useState } from "react";
import PayoutForm from "../element/PayoutForm";

const method = ["Paypal", "Bank Transfer", "Payoneer"];

export default function PaymentMethod() {
  const [methodSelect, setMethodSelect] = useState("Paypal");

  // handler
  const methodHandler = (data) => {
    setMethodSelect(data);
  };
  return (
    <>
      <div className="bdrb1 pb15">
        <h5 className="list-title">Payout Methods</h5>
      </div>
      <div className="widget-wrapper mt35">
        <h6 className="list-title mb10">Select default payout method</h6>
        <div className="bootselect-multiselect">
          <div className="dropdown bootstrap-select">
            <button
              type="button"
              className="btn dropdown-toggle btn-light"
              data-bs-toggle="dropdown"
            >
              <div className="filter-option">
                <div className="filter-option-inner">
                  <div className="filter-option-inner-inner">
                    {methodSelect}
                  </div>
                </div>{" "}
              </div>
            </button>
            <div className="dropdown-menu ">
              <div className="inner show">
                <ul className="dropdown-menu inner show">
                  {method.map((item, i) => (
                    <li key={i} className="selected active">
                      <a
                        className={`dropdown-item ${
                          methodSelect === item ? "selected active" : ""
                        }`}
                        onClick={() => methodHandler(item)}
                      >
                        <span className="text">{item}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h5 className="mb15">Payout Details</h5>
      <div className="navpill-style1 payout-style">
        <ul className="nav nav-pills align-items-center justify-content-center mb30">
          {method.map((item, i) => (
            <li key={i} className="nav-item">
              <button
                className={`nav-link fw500 dark-color ${
                  methodSelect === item ? "active" : ""
                }`}
                onClick={() => methodHandler(item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
        {methodSelect === "Paypal" && <PayoutForm />}
        {methodSelect === "Bank Transfer" && <PayoutForm />}
        {methodSelect === "Payoneer" && <PayoutForm />}
      </div>
    </>
  );
}
