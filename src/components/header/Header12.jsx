"use client";

import React from "react";
import useStickyMenu from "@/hook/useStickyMenu";
import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";

export default function Header12() {
    const sticky = useStickyMenu(50);

    return (
        <header
            className={`header-nav nav-homepage-style at-home3  stricky  stricky main-menu border-0 animated  ${
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
                                <Link
                                    className="login-info mx15-xl mx30"
                                    href="/become-seller"
                                >
                                    <span className="d-none d-xl-inline-block">
                                        Become a
                                    </span>{" "}
                                    Seller
                                </Link>
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
        </header>
    );
}
