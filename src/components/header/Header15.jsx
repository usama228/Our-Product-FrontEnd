import React from "react";

import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";
import MobileNavigation6 from "./MobileNavigation6";

export default function Header15() {
    return (
        <>
            <header className="header-nav nav-innerpage-style default-box-shadow1 main-menu  ">
                <nav className="posr">
                    <div className="container posr">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-auto px-0 px-xl-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="logos">
                                        <Link
                                            className="header-logo logo1"
                                            href="/"
                                        >
                                            <Image
                                                width={133}
                                                height={40}
                                                src="/images/header-logo-dark.svg"
                                                alt="Header Logo"
                                            />
                                        </Link>
                                    </div>

                                    <Navigation />
                                </div>
                            </div>
                            <div className="col-auto pe-0 pe-xl-3">
                                <div className="d-flex align-items-center">
                                    <a
                                        className="login-info pr30"
                                        data-bs-toggle="modal"
                                        href="#exampleModalToggle"
                                        role="button"
                                    >
                                        <span className="flaticon-loupe"></span>
                                    </a>
                                    <Link
                                        className="login-info mr15-xl mr10 ud-btn btn-dark add-joining bdrs12 dark-color bg-transparent"
                                        href="/login"
                                    >
                                        Sign in
                                    </Link>
                                    <Link
                                        className="ud-btn btn-dark add-joining bdrs12 text-white"
                                        href="/register"
                                    >
                                        Join
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="search-modal">
                    <div
                        className="modal fade"
                        id="exampleModalToggle"
                        aria-hidden="true"
                        aria-labelledby="exampleModalToggleLabel"
                        tabindex="-1"
                    >
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5
                                        className="modal-title"
                                        id="exampleModalToggleLabel"
                                    ></h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    >
                                        <i className="fal fa-xmark"></i>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="popup-search-field search_area">
                                        <input
                                            type="text"
                                            className="form-control border-0"
                                            placeholder="What service are you looking for today?"
                                        />
                                        <label>
                                            <span className="far fa-magnifying-glass"></span>
                                        </label>
                                        <button
                                            className="ud-btn btn-thm"
                                            type="submit"
                                        >
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <MobileNavigation6 />
        </>
    );
}
