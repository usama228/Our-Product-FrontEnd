"use client";
import { lan, momney } from "@/data/footer";
import { useState } from "react";

export default function FooterSelect2() {
    const [getMoneySelect, setMoneySelect] = useState("Euro");
    const [getLanSelect, setLanSelect] = useState("English");

    return (
        <>
            <ul className="p-0 m-0">
                <li className="list-inline-item">
                    <div className="dropdown bootstrap-select show-tick">
                        <button
                            type="button"
                            className="btn dropdown-toggle btn-light"
                            data-bs-toggle="dropdown"
                        >
                            <div className="filter-option">
                                <div className="filter-option-inner">
                                    <div className="filter-option-inner-inner">
                                        {getMoneySelect}
                                    </div>
                                </div>
                            </div>
                        </button>
                        <div className="dropdown-menu ">
                            <div className="inner show">
                                <ul className="dropdown-menu inner show">
                                    {momney.map((item, index) => (
                                        <li
                                            key={index}
                                            className={
                                                getMoneySelect === item
                                                    ? "selected active"
                                                    : ""
                                            }
                                            onClick={() => setMoneySelect(item)}
                                        >
                                            <a
                                                className="dropdown-item"
                                                id="bs-select-2-0"
                                            >
                                                <span className=" bs-ok-default check-mark" />
                                                <span className="text">
                                                    {item}
                                                </span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="list-inline-item">
                    <div className="dropdown bootstrap-select show-tick">
                        <button
                            type="button"
                            className="btn dropdown-toggle btn-light"
                            data-bs-toggle="dropdown"
                        >
                            <div className="filter-option">
                                <div className="filter-option-inner">
                                    <div className="filter-option-inner-inner">
                                        {getLanSelect}
                                    </div>
                                </div>
                            </div>
                        </button>
                        <div className="dropdown-menu ">
                            <div className="inner show">
                                <ul className="dropdown-menu inner show">
                                    {" "}
                                    {lan.map((item, index) => (
                                        <li
                                            key={index}
                                            className={
                                                getLanSelect === item
                                                    ? "selected active"
                                                    : ""
                                            }
                                            onClick={() => setLanSelect(item)}
                                        >
                                            <a
                                                className="dropdown-item"
                                                id="bs-select-3-0"
                                            >
                                                <span className="bs-ok-default check-mark" />
                                                <span className="text">
                                                    {item}
                                                </span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    );
}
