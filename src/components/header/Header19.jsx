import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";
import MobileNavigation2 from "./MobileNavigation2";
export default function Header19() {
    return (
        <>
            <header className="header-nav nav-innerpage-style at-home20 main-menu border-0 ">
                <nav className="posr">
                    <div className="container-fluid custom-container custom-container2 posr">
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
                                                src="/images/header-logo-dark2.svg"
                                                alt="Header Logo"
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-auto px-0 px-xl-3">
                                <Navigation />
                            </div>
                            <div className="col-auto pe-0 ">
                                <div className="d-flex align-items-center">
                                    <Link
                                        className="login-info"
                                        href="/become-seller"
                                    >
                                        <span className="d-none d-xl-inline-block">
                                            Become a
                                        </span>{" "}
                                        Seller
                                    </Link>
                                    <Link
                                        className="login-info mr10 home18-sign-btn px30 py-1 bdrs12 ml30 bdr1-dark"
                                        href="/login"
                                    >
                                        Sign in
                                    </Link>
                                    <Link
                                        className="ud-btn add-joining home20-join-btn bdrs12 text-white"
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
