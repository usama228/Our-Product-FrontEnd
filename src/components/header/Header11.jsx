"use client";

import React from "react";
import useStickyMenu from "@/hook/useStickyMenu";
import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";
import MobileNavigation6 from "./MobileNavigation6";

export default function Header11() {
    const sticky = useStickyMenu(70);
    return (
        <>
            <section
                id="topalert2"
                className="header-top-home12 pt10  stricky  pb10 animated  "
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <p className="text-center dark-color mb-0 fw500">
                                Hire the Top 3% of Freelance
                            </p>
                            <div
                                onClick={() =>
                                    (document.getElementById(
                                        "topalert2"
                                    ).style.display = "none")
                                }
                                style={{ cursor: "pointer" }}
                            >
                                <span className="ht-close-icon fa-sharp fa-regular fa-xmark"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <header
                className={`header-nav nav-homepage-style at-home3 stricky main-menu border-0 ${
                    sticky ? "slideInDown stricky-fixed" : "slideIn"
                }`}
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
                                                src="/images/header-logo-dark.svg"
                                                alt="/Header Logo"
                                            />
                                        </Link>
                                        <Link
                                            className="header-logo logo2"
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
                                    <Navigation id="respMenu" />
                                </div>
                            </div>
                            <div className="col-auto pe-0 pe-xl-3">
                                <div className="d-flex align-items-center">
                                   
                                    <Link
                                        className="login-info mr15-xl mr10 ud-btn btn-dark add-joining bdrs50 dark-color bg-transparent"
                                        href="/login"
                                    >
                                        Sign in
                                    </Link>
                                    <Link
                                        className="ud-btn btn-dark add-joining bdrs50 text-white"
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
            <MobileNavigation6 />
        </>
    );
}
