import Link from "next/link";
import Image from "next/image";
import Mega from "./Mega";
import Navigation from "./Navigation";
import MobileNavigation5 from "./MobileNavigation5";

export default function Header10() {
    return (
        <>
            <header className="header-nav nav-innerpage-style stricky main-menu bdrb1 slideIn animated  ">
                <nav className="posr">
                    <div className="container-fluid posr menu_bdrt1">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-auto">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="logos mr20">
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
                                    <div className="home1_style bdrl1">
                                        <Mega />
                                    </div>
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="d-flex align-items-center">
                                    <Navigation />
                                    <a
                                        className="login-info bdrl1 pl15-lg pl30"
                                        data-bs-toggle="modal"
                                        href="#exampleModalToggle"
                                    >
                                        <span className="flaticon-loupe vam" />
                                    </a>
                                    <Link
                                        className="login-info mx15-lg mx30"
                                        href="/become-seller"
                                    >
                                        <span className="d-none d-xl-inline-block">
                                            Become a
                                        </span>{" "}
                                        Seller
                                    </Link>
                                    <Link
                                        className="login-info mr15-lg mr30"
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
            <MobileNavigation5 />
        </>
    );
}
