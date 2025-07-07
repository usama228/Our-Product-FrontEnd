import Link from "next/link";
import Image from "next/image";

import Navigation from "./Navigation";
import MobileNavigation5 from "./MobileNavigation5";
import Mega from "./Mega";

export default function Header5() {
    return (
        <>
            <header className="header-nav nav-innerpage-style bg-transparent zi9 position-relative main-menu border-0  ">
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
                                                height={40}
                                                width={133}
                                                src="/images/header-logo3.svg"
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
                                    <a
                                        className="login-info"
                                        data-bs-toggle="modal"
                                        href="#exampleModalToggle"
                                    >
                                        <span className="flaticon-loupe" />
                                    </a>
                                    <Link
                                        className="login-info mx10-lg mx30"
                                        href="/become-seller"
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
                                        className="ud-btn btn-thm2 add-joining"
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
            <MobileNavigation5 />
        </>
    );
}
