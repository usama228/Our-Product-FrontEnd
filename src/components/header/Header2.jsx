"use client";
import Link from "next/link";
import Mega from "./Mega";
import MobileNavigation2 from "./MobileNavigation2";
import Navigation from "./Navigation";
import Image from "next/image";
import useStickyMenu from "@/hook/useStickyMenu";

export default function Header2() {
    const sticky = useStickyMenu(50);
    return (
        <>
            <header
                className={`header-nav nav-homepage-style stricky main-menu border-0 slideIn animated  ${
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
                                            href="/home-2"
                                        >
                                            <Image
                                                height={40}
                                                width={133}
                                                src="/images/header-logo.svg"
                                                alt="Header Logo"
                                            />
                                        </Link>
                                        <Link
                                            className="header-logo logo2"
                                            href="/home-2"
                                        >
                                            <Image
                                                height={40}
                                                width={133}
                                                src="/images/header-logo2.svg"
                                                alt="Header Logo"
                                            />
                                        </Link>
                                    </div>
                                    <div className="home1_style at-home2">
                                        <Mega />
                                    </div>
                                    <Navigation />
                                </div>
                            </div>
                            <div className="col-auto pe-0 pe-xl-3">
                                <div className="d-flex align-items-center">
                                    <a
                                        className="login-info"
                                        data-bs-toggle="modal"
                                        href="#exampleModalToggle"
                                    >
                                        <span className="flaticon-loupe" />
                                    </a>
                                    <Link
                                        className="login-info mx15-xl mx30"
                                        href="/become-seller"
                                    >
                                        <span className="d-none d-xl-inline-block">
                                            Become a
                                        </span>
                                        Seller
                                    </Link>
                                    <Link
                                        className="login-info mr15-xl mr30"
                                        href="/login"
                                    >
                                        Sign in
                                    </Link>
                                    <Link
                                        className="ud-btn btn-white add-joining bdrs50 text-thm2"
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
