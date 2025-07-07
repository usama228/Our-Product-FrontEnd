import { about, category, support } from "@/data/footer";
import Link from "next/link";
import FooterSelect2 from "./ui/FooterSelect2";
import FooterSocial6 from "./ui/FooterSocial6";
export default function Footer13() {
    return (
        <section className="footer-style1 at-home18 m30 pb-0 pt150">
            <div className="container">
                <div className="row bb-white-light pb10 mb60">
                    <div className="col-md-7">
                        <div className="d-block text-center text-md-start justify-content-center justify-content-md-start d-md-flex align-items-center mb-3 mb-md-0">
                            <a
                                className="fz17 fw500 text-white mr15-md mr30"
                                href="#"
                            >
                                Terms of Service
                            </a>
                            <a
                                className="fz17 fw500 text-white mr15-md mr30"
                                href="#"
                            >
                                Privacy Policy
                            </a>
                            <a className="fz17 fw500 text-white" href="#">
                                Site Map
                            </a>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <FooterSocial6 />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-lg-3">
                        <div className="link-style1 mb-4 mb-sm-5">
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
                        <div className="link-style1 mb-4 mb-sm-5">
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
                        <div className="link-style1 mb-4 mb-sm-5">
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
                                    <div className="mailchimp-style1">
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
                                        <a
                                            className="app-list d-flex align-items-center mb10"
                                            href="#"
                                        >
                                            <i className="fab fa-apple fz17 mr15"></i>
                                            <h6 className="app-title fz15 fw400 mb-0">
                                                iOS App
                                            </h6>
                                        </a>
                                        <a
                                            className="app-list d-flex align-items-center"
                                            href="#"
                                        >
                                            <i className="fab fa-google-play fz15 mr15"></i>
                                            <h6 className="app-title fz15 fw400 mb-0">
                                                Android App
                                            </h6>
                                        </a>
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
                            <p className="copyright-text mb-2 mb-md-0 text-white-light ff-heading">
                                © Freeio. 2023 CreativeLayers. All rights
                                reserved.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="footer_bottom_right_btns text-center text-lg-end">
                            <FooterSelect2 />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
