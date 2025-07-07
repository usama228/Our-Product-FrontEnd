import Link from "next/link";
import Image from "next/image";
import MobileNavigation4 from "./MobileNavigation4";
import Navigation from "./Navigation";

export default function Header4() {
    return (
        <>
            <header
                className="header-nav nav-innerpage-style bg-transparent zi9 position-relative main-menu border-0"
                style={{ padding: "17px 0" }}
            >
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
                                                src="/images/header-logo2.svg"
                                                alt="Header Logo"
                                            />
                                        </Link>
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
                                        href="page-login"
                                    >
                                        Sign in
                                    </Link>
                                    <Link
                                        className="ud-btn btn-thm2 add-joining"
                                        href="page-register"
                                    >
                                        Join
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <MobileNavigation4 />
        </>
    );
}
