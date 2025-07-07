"use client";
import React from "react";

import useStickyMenu from "@/hook/useStickyMenu";
import Image from "next/image";
import Link from "next/link";
import MobileNavigation2 from "./MobileNavigation2";
import Navigation from "./Navigation";

export default function Header16() {
    const sticky = useStickyMenu(50);
    return (
        <>
            <header
                className={`header-nav nav-homepage-style at-home17 stricky main-menu border-0 animated
    ${sticky ? "slideInDown stricky-fixed" : "slideIn"} 
    `}
            >
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
                                                src="/images/header-logo-white.svg"
                                                alt="Header Logo"
                                            />
                                        </Link>
                                        <Link
                                            className="header-logo logo2"
                                            href="/"
                                        >
                                            <Image
                                                width={133}
                                                height={40}
                                                src="/images/header-logo2.svg"
                                                alt="Header Logo"
                                            />
                                        </Link>
                                    </div>
                                    <a
                                        className="login-info pl30"
                                        data-bs-toggle="modal"
                                        href="#exampleModalToggle"
                                        role="button"
                                    >
                                        <span className="flaticon-loupe"></span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-auto pe-0 pe-xl-3">
                                <div className="d-flex align-items-center">
                                    <Navigation />
                                    <Link
                                        className="login-info ml30 mr10 home18-sign-btn px30 py-1 bdrs12"
                                        href="/login"
                                    >
                                        Sign in
                                    </Link>
                                    <Link
                                        className="ud-btn btn-white add-joining home17-join-btn bdrs12"
                                        href="/register"
                                    >
                                        Join
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
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
            <MobileNavigation2 />
        </>
    );
}
