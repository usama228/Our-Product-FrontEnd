import Link from "next/link";
import { about, category, support } from "@/data/footer";
import FooterSelect1 from "./ui/FooterSelect1";
import FooterHeader3 from "./ui/FooterHeader3";

export default function Footer5() {
    return (
        <>
            <section className="footer-style1 at-home5 pt25 pb-0">
                <div className="container">
                    <FooterHeader3 />
                    <div className="row">
                        <div className="col-sm-6 col-lg-3">
                            <div className="link-style1 light-style at-home8 mb-4 mb-sm-5">
                                <h5 className="mb15">About</h5>
                                <div className="link-list">
                                    {about.map((item, i) => (
                                        <Link key={i} href={item.path}>
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="link-style1 light-style at-home8 mb-4 mb-sm-5">
                                <h5 className="mb15">Categories</h5>
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
                        <div className="col-sm-6 col-lg-3">
                            <div className="link-style1 light-style at-home8 mb-4 mb-sm-5">
                                <h5 className="mb15">Support</h5>
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
                        <div className="col-sm-6 col-lg-3">
                            <div className="footer-widget">
                                <div className="footer-widget mb-4 mb-sm-5">
                                    <div className="mailchimp-widget">
                                        <h5 className="title mb20">
                                            Subscribe
                                        </h5>
                                        <div className="mailchimp-style1 at-home7">
                                            <input
                                                type="email"
                                                className="form-control bg-white"
                                                placeholder="Your email address"
                                            />
                                            <button type="submit">Send</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="app-widget mb-4 mb-sm-5">
                                    <h5 className="title mb20">Apps</h5>
                                    <div className="row mb-4 mb-lg-5">
                                        <div className="col-lg-12">
                                            <Link
                                                href="/"
                                                className="app-list light-style d-flex align-items-center mb10"
                                            >
                                                <i className="fab fa-apple fz17 mr15" />
                                                <h6 className="app-title fz15 fw400 mb-0">
                                                    iOS App
                                                </h6>
                                            </Link>
                                            <Link
                                                href="/"
                                                className="app-list light-style d-flex align-items-center"
                                            >
                                                <i className="fab fa-google-play fz15 mr15" />
                                                <h6 className="app-title fz15 fw400 mb-0">
                                                    Android App
                                                </h6>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container bdrt1 py-4">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="text-center text-lg-start">
                                <p className="copyright-text mb-2 mb-md0 text-dark-light ff-heading">
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
                        <div className="col-md-6">
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
