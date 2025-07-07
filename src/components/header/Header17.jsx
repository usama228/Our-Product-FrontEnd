"use client";
import React from "react";
import useStickyMenu from "@/hook/useStickyMenu";
import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";
import MobileNavigation2 from "./MobileNavigation2";
import Mega from "./Mega";

export default function Header17() {
    const sticky = useStickyMenu(50);
    return (
        <>
            <header
                className={`header-nav nav-homepage-style at-home18 stricky main-menu border-0 animated 
    ${sticky ? "slideInDown stricky-fixed" : "slideIn"}
    `}
                style={!sticky ? { marginTop: "30px" } : {}}
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
                                    <div className="home1_style at-home18 mx20">
                                        <Mega
                                            staticMenuClass={
                                                "text-white d-flex justify-content-center align-items-center"
                                            }
                                        />
                                    </div>

                                    <Navigation />
                                </div>
                            </div>
                            <div className="col-auto pe-0 ">
                                <div className="d-flex align-items-center">
                                    <Link
                                        className="login-info mr10 home18-sign-btn px30 py-1 bdrs120"
                                        href="/login"
                                    >
                                        Sign in
                                    </Link>
                                    <Link
                                        className="ud-btn btn-white add-joining home18-join-btn bdrs120"
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
            <MobileNavigation2 />
        </>
    );
}
