"use client";
import { dasboardNavigation } from "@/data/dashboard";
import toggleStore from "@/store/toggleStore";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardHeader() {
  const toggle = toggleStore((state) => state.dashboardSlidebarToggleHandler);
  const path = usePathname();

  return (
    <>
      <header className="header-nav nav-innerpage-style menu-home4 dashboard_header main-menu">
        <nav className="posr">
          <div className="container-fluid pr30 pr15-xs pl30 posr menu_bdrt1">
            <div className="row align-items-center justify-content-between">
              <div className="col-6 col-lg-auto">
                <div className="text-center text-lg-start d-flex align-items-center">
                  <div className="dashboard_header_logo position-relative me-2 me-xl-5">
                    <Link href="/" className="logo">
                      <Image
                        height={40}
                        width={133}
                        src="/images/header-logo-dark.svg"
                        alt="logo"
                      />
                    </Link>
                  </div>
                  <div className="fz20 ml90">
                    <a
                      onClick={toggle}
                      className="dashboard_sidebar_toggle_icon vam"
                    >
                      <Image
                        height={18}
                        width={20}
                        src="/images/dashboard-navicon.svg"
                        alt="navicon"
                      />
                    </a>
                  </div>
                  <a
                    className="login-info d-block d-xl-none ml40 vam"
                    data-bs-toggle="modal"
                    href="#exampleModalToggle"
                  >
                    <span className="flaticon-loupe" />
                  </a>
                  <div className="ml40 d-none d-xl-block">
                    <div className="search_area dashboard-style">
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="What service are you looking for today?"
                      />
                      <label>
                        <span className="flaticon-loupe" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-auto">
                <div className="text-center text-lg-end header_right_widgets">
                  <ul className="dashboard_dd_menu_list d-flex align-items-center justify-content-center justify-content-sm-end mb-0 p-0">
                    <li className="d-none d-sm-block">
                      <a
                        className="text-center mr5 text-thm2 dropdown-toggle fz20"
                        type="button"
                        data-bs-toggle="dropdown"
                      >
                        <span className="flaticon-notification" />
                      </a>
                      <div className="dropdown-menu">
                        <div className="dboard_notific_dd px30 pt10 pb15">
                          <div className="notif_list d-flex align-items-center bdrb1 pb15 mb10">
                            <Image
                              height={40}
                              width={40}
                              src="/images/resource/notif-1.png"
                              alt="notif"
                            />
                            <div className="details ml10">
                              <p className="text mb-0">Your resume</p>
                              <p className="text mb-0">updated!</p>
                            </div>
                          </div>
                          <div className="notif_list d-flex align-items-center bdrb1 pb15 mb10">
                            <Image
                              height={40}
                              width={40}
                              src="/images/resource/notif-2.png"
                              alt="notif"
                            />
                            <div className="details ml10">
                              <p className="text mb-0">You changed</p>
                              <p className="text mb-0">password</p>
                            </div>
                          </div>
                          <div className="notif_list d-flex align-items-center bdrb1 pb15 mb10">
                            <Image
                              height={40}
                              width={40}
                              src="/images/resource/notif-3.png"
                              alt="notif"
                            />
                            <div className="details ml10">
                              <p className="text mb-0">Your account has been</p>
                              <p className="text mb-0">created successfully</p>
                            </div>
                          </div>
                          <div className="notif_list d-flex align-items-center bdrb1 pb15 mb10">
                            <Image
                              height={40}
                              width={40}
                              src="/images/resource/notif-4.png"
                              alt="notif"
                            />
                            <div className="details ml10">
                              <p className="text mb-0">
                                You applied for a job{" "}
                              </p>
                              <p className="text mb-0">Front-end Developer</p>
                            </div>
                          </div>
                          <div className="notif_list d-flex align-items-center">
                            <Image
                              height={40}
                              width={40}
                              src="/images/resource/notif-5.png"
                              alt="notif"
                            />
                            <div className="details ml10">
                              <p className="text mb-0">Your course uploaded</p>
                              <p className="text mb-0">successfully</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="d-none d-sm-block">
                      <a
                        className="text-center mr5 text-thm2 dropdown-toggle fz20"
                        type="button"
                        data-bs-toggle="dropdown"
                      >
                        <span className="flaticon-mail" />
                      </a>
                      <div className="dropdown-menu">
                        <div className="dboard_notific_dd px30 pt20 pb15">
                          <div className="notif_list d-flex align-items-start bdrb1 pb25 mb10">
                            <Image
                              height={50}
                              width={50}
                              className="img-2"
                              src="/images/testimonials/testi-1.png"
                              alt="testimonials"
                            />
                            <div className="details ml15">
                              <p className="dark-color fw500 mb-2">Ali Tufan</p>
                              <p className="text mb-2">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing.
                              </p>
                              <p className="mb-0 text-thm">4 hours ago</p>
                            </div>
                          </div>
                          <div className="notif_list d-flex align-items-start mb25">
                            <Image
                              height={50}
                              width={50}
                              className="img-2"
                              src="/images/testimonials/testi-2.png"
                              alt="testimonials"
                            />
                            <div className="details ml15">
                              <p className="dark-color fw500 mb-2">Ali Tufan</p>
                              <p className="text mb-2">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing.
                              </p>
                              <p className="mb-0 text-thm">4 hours ago</p>
                            </div>
                          </div>
                          <div className="d-grid">
                            <Link
                              href="/message"
                              className="ud-btn btn-thm w-100"
                            >
                              View All Messages
                              <i className="fal fa-arrow-right-long" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="d-none d-sm-block">
                      <a
                        className="text-center mr5 text-thm2 dropdown-toggle fz20"
                        type="button"
                        data-bs-toggle="dropdown"
                      >
                        <span className="flaticon-like" />
                      </a>
                      <div className="dropdown-menu">
                        <div className="dboard_notific_dd px30 pt10 pb15">
                          <div className="notif_list d-flex align-items-center bdrb1 pb15 mb10">
                            <Image
                              height={40}
                              width={40}
                              src="/images/resource/notif-1.png"
                              alt="notif"
                            />
                            <div className="details ml10">
                              <p className="text mb-0">Your resume</p>
                              <p className="text mb-0">updated!</p>
                            </div>
                          </div>
                          <div className="notif_list d-flex align-items-center bdrb1 pb15 mb10">
                            <Image
                              height={40}
                              width={40}
                              src="/images/resource/notif-2.png"
                              alt="notif"
                            />
                            <div className="details ml10">
                              <p className="text mb-0">You changed</p>
                              <p className="text mb-0">password</p>
                            </div>
                          </div>
                          <div className="notif_list d-flex align-items-center bdrb1 pb15 mb10">
                            <Image
                              height={40}
                              width={40}
                              src="/images/resource/notif-3.png"
                              alt="notif"
                            />
                            <div className="details ml10">
                              <p className="text mb-0">Your account has been</p>
                              <p className="text mb-0">created successfully</p>
                            </div>
                          </div>
                          <div className="notif_list d-flex align-items-center bdrb1 pb15 mb10">
                            <Image
                              height={40}
                              width={40}
                              src="/images/resource/notif-4.png"
                              alt="notif"
                            />
                            <div className="details ml10">
                              <p className="text mb-0">
                                You applied for a job{" "}
                              </p>
                              <p className="text mb-0">Front-end Developer</p>
                            </div>
                          </div>
                          <div className="notif_list d-flex align-items-center">
                            <Image
                              height={40}
                              width={40}
                              src="/images/resource/notif-5.png"
                              alt="notif"
                            />
                            <div className="details ml10">
                              <p className="text mb-0">Your course uploaded</p>
                              <p className="text mb-0">successfully</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="user_setting">
                      <div className="dropdown">
                        <a className="btn" data-bs-toggle="dropdown">
                          <Image
                            height={50}
                            width={50}
                            src="/images/resource/user.png"
                            alt="user.png"
                          />
                        </a>
                        <div className="dropdown-menu">
                          <div className="user_setting_content">
                            <p className="fz15 fw400 ff-heading mb10 pl30">
                              Start
                            </p>
                            {dasboardNavigation.slice(0, 8).map((item,i) => (
                              <Link
                                key={i}
                                className={`dropdown-item ${
                                  path === item.path ? "active" : ""
                                }`}
                                href={item.path}
                              >
                                <i className={`${item.icon} mr10`} />
                                {item.name}
                              </Link>
                            ))}
                            <p className="fz15 fw400 ff-heading mt30 pl30">
                              Organize and Manage
                            </p>
                            {dasboardNavigation.slice(8, 13).map((item,i) => (
                              <Link
                                key={i}
                                className={`dropdown-item ${
                                  path === item.path ? "active" : ""
                                }`}
                                href={item.path}
                              >
                                <i className={`${item.icon} mr10`} />
                                {item.name}
                              </Link>
                            ))}
                            <p className="fz15 fw400 ff-heading mt30 pl30">
                              Account
                            </p>
                            {dasboardNavigation.slice(13, 15).map((item,i) => (
                              <Link
                                key={i}
                                className={`dropdown-item ${
                                  path === item.path ? "active" : ""
                                }`}
                                href={item.path}
                              >
                                <i className={`${item.icon} mr10`} />
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
