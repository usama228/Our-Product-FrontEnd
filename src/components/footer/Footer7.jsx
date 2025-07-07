"use client";
import { about, category, support } from "@/data/footer";
import Link from "next/link";
import Image from "next/image";
import FooterSelect1 from "./ui/FooterSelect1";
import FooterSocial3 from "./ui/FooterSocial3";

export default function Footer7() {
    return (
        <>
            <section className="footer-style1 at-home8 pb-0 pt60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="footer-widget mb-4 mb-lg-5">
                                <div className="mailchimp-widget mb90">
                                    <h6 className="title mb20">Subscribe</h6>
                                    <div className="mailchimp-style1 at-home8 bdrs4 overflow-hidden">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Your email address"
                                        />
                                        <button
                                            className="text-thm"
                                            type="submit"
                                        >
                                            Send
                                        </button>
                                    </div>
                                </div>
                                <div className="row justify-content-between">
                                    <div className="col-auto">
                                        <div className="link-style1 at-home8 mb-3">
                                            <h6 className="mb25">About</h6>
                                            <div className="link-list">
                                                {about.map((item, i) => (
                                                    <Link
                                                        key={i}
                                                        href={item.path}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="link-style1 at-home8 mb-3">
                                            <h6 className="mb25">Categories</h6>
                                            <ul className="ps-0">
                                                {category.map((item, i) => (
                                                    <li key={i}>
                                                        <Link href={item.path}>
                                                            {item.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="link-style1 at-home8 mb-3">
                                            <h6 className=" mb25">Support</h6>
                                            <ul className="ps-0">
                                                {support.map((item, i) => (
                                                    <li key={i}>
                                                        <Link href={item.path}>
                                                            {item.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-4 offset-xl-2">
                            <div className="footer-widget mb-4 mb-lg-5">
                                <Link className="footer-logo" href="/">
                                    <Image
                                        height={40}
                                        width={133}
                                        className="mb40 object-fit-contain"
                                        src="/images/header-logo2.svg"
                                        alt="logo"
                                    />
                                </Link>
                                <div className="row mb-4 mb-lg-5">
                                    <div className="col-auto">
                                        <div className="contact-info">
                                            <p className="info-title mb-2">
                                                Toll Free Customer Care
                                            </p>
                                            <h5 className="info-phone">
                                                <Link href="#">
                                                    +(1) 123 456 7890
                                                </Link>
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="contact-info">
                                            <p className="info-title mb-2">
                                                Need live support?
                                            </p>
                                            <h5 className="info-mail">
                                                <Link href="mailto:hi@freeio.com">
                                                    hi@freeio.com
                                                </Link>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="app-widget at-home8">
                                    <h5 className="title  mb20">Apps</h5>
                                    <div className="row mb-4 mb-lg-5">
                                        <div className="col-auto">
                                            <Link href="/">
                                                <div className="app-info d-flex align-items-center mb10 bdrs4 bgc-thm3">
                                                    <div className="flex-shrink-0">
                                                        <i className="fab fa-apple fz30" />
                                                    </div>
                                                    <div className="flex-grow-1 ml20">
                                                        <p className="app-text fz13 mb0">
                                                            Download on the
                                                        </p>
                                                        <h6 className="app-title">
                                                            Apple Store
                                                        </h6>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-auto">
                                            <Link href="/">
                                                <div className="app-info d-flex align-items-center mb10 bdrs4 bgc-thm3">
                                                    <div className="flex-shrink-0">
                                                        <i className="fab fa-google-play fz30" />
                                                    </div>
                                                    <div className="flex-grow-1 ml20">
                                                        <p className="app-text mb0">
                                                            Get in on
                                                        </p>
                                                        <h6 className="app-title">
                                                            Google Play
                                                        </h6>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <FooterSocial3 />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container bdrt1 py-4">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="text-center text-lg-start">
                                <p className="copyright-text mb-0 at-home8 ff-heading">
                                    © Freeio. 2023{" "}
                                    <Link
                                        href="https://themeforest.net/user/ib-themes/portfolio"
                                        target="_blank"
                                        style={{ color: "inherit" }}
                                    >
                                        ib-themes
                                    </Link>
                                    . All rights reserved.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="footer_bottom_right_btns at-home8 text-center text-lg-end">
                                <FooterSelect1 />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
