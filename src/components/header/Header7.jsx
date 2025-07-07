import Link from "next/link";
import Image from "next/image";
import MobileNavigation6 from "./MobileNavigation6";
import Navigation from "./Navigation";
import Mega from "./Mega";

export default function Header7() {
    return (
        <>
            <header className="header-nav nav-innerpage-style stricky main-menu border-0">
                <nav className="posr">
                    <div className="container-fluid posr menu_bdrt1 px30">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-auto px-0">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="logos">
                                        <Link
                                            className="header-logo logo2"
                                            href="/"
                                        >
                                            <Image
                                                height={40}
                                                width={133}
                                                src="/images/header-logo-dark.svg"
                                                alt="Header Logo"
                                            />
                                        </Link>
                                    </div>
                                    <div className="home1_style">
                                        <Mega />
                                    </div>
                                    <Navigation />
                                </div>
                            </div>
                            <div className="col-auto px-0">
                                <div className="d-flex align-items-center">
                                    <Link
                                        className="login-info"
                                        data-bs-toggle="modal"
                                        href="#exampleModalToggle"
                                        role="button"
                                    >
                                        <span className="flaticon-loupe" />
                                    </Link>
                                    <Link
                                        className="login-info mx10-lg mx30"
                                        href="page-become-seller.html"
                                    >
                                        <span className="d-none d-xl-inline-block">
                                            Become a
                                        </span>{" "}
                                        Seller
                                    </Link>
                                    <Link
                                        className="login-info mr10-lg mr30"
                                        href="/login"
                                    >
                                        Sign in
                                    </Link>
                                    <Link
                                        className="ud-btn btn-dark add-joining"
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
