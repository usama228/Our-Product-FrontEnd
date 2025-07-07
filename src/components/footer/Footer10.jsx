import { about, category, support } from "@/data/footer";
import FooterHeader from "./ui/FooterHeader";
import Link from "next/link";
import FooterSelect2 from "./ui/FooterSelect2";

export default function Footer10() {
    return (
        <section className="footer-style1 at-home11 pt25 pb-0">
            <div className="container">
                <FooterHeader />
                <div className="row">
                    <div className="col-sm-6 col-lg-3">
                        <div className="link-style1 at-home11 mb-4 mb-sm-5">
                            <h5 className="text-white mb15">About</h5>
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
                        <div className="link-style1 at-home11 mb-4 mb-sm-5">
                            <h5 className="text-white mb15">Categories</h5>
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
                        <div className="link-style1 at-home11 mb-4 mb-sm-5">
                            <h5 className="text-white mb15">Support</h5>
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
                                    <h5 className="title text-white mb20">
                                        Subscribe
                                    </h5>
                                    <div className="mailchimp-style1 at-home11">
                                        <input
                                            type="email"
                                            className="form-control bdrs4"
                                            placeholder="Your email address"
                                        />
                                        <button type="submit">Send</button>
                                    </div>
                                </div>
                            </div>
                            <div className="app-widget mb-4 mb-sm-5">
                                <h5 className="title text-white mb20">Apps</h5>
                                <div className="row mb-4 mb-lg-5">
                                    <div className="col-lg-12">
                                        <Link
                                            className="app-list d-flex align-items-center mb10"
                                            href="/"
                                        >
                                            <i className="text-white fab fa-apple fz17 mr15" />
                                            <h6 className="app-title text-white fz15 fw400 mb-0">
                                                iOS App
                                            </h6>
                                        </Link>
                                        <Link
                                            className="app-list d-flex align-items-center"
                                            href="/"
                                        >
                                            <i className="text-white fab fa-google-play fz15 mr15" />
                                            <h6 className="app-title text-white fz15 fw400 mb-0">
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
            <div className="container white-bdrt1 py-4">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="text-center text-lg-start">
                            <p className="copyright-text mb-0 text-white ff-heading">
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
                        <div className="footer_bottom_right_btns at-home11 text-center text-lg-end">
                            <FooterSelect2 />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
