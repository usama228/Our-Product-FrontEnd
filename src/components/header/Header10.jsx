"use client";
// home version 11
import React from "react";
import Image from "next/image";
import Link from "next/link";
import MobileNavigation6 from "./MobileNavigation6";
import Navigation from "./Navigation";
import Mega from "./Mega";

export default function Header10() {
    return (
        <>
            <section id="topalert" className="header-top-home11 pt10 pb10  ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <p className="text-center dark-color mb-0 fw500">
                                Hire the Top 3% of Freelance
                            </p>
                            <div
                                onClick={() =>
                                    (document.getElementById(
                                        "topalert"
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

            <header className="header-nav nav-innerpage-style bg-transparent main-menu">
                <nav className="posr">
                    <div className="container posr menu_bdrt1">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-auto px-0">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="logos">
                                        <Link
                                            className="header-logo logo2"
                                            href="/"
                                        >
                                            <Image
                                                width={133}
                                                height={40}
                                                src="/images/header-logo3.svg"
                                                alt="Header Logo"
                                            />
                                        </Link>
                                    </div>
                                    

                                    <Navigation id="respMenu" />
                                </div>
                            </div>
                            <div className="col-auto px-0">
                                <div className="d-flex align-items-center">
                                    <a
                                        className="login-info mr20"
                                        data-bs-toggle="modal"
                                        href="#exampleModalToggle"
                                        role="button"
                                    >
                                        <span className="flaticon-loupe"></span>
                                    </a>
                                    
                                    <Link
                                        className="login-info mr10-lg mr30 "
                                        href="/login"
                                    >
                                        Sign in
                                    </Link>
                                    <Link
                                        className="ud-btn btn-thm add-joining"
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
