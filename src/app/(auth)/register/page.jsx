import Footer from "@/components/footer/Footer";
import Header20 from "@/components/header/Header20";
import Link from "next/link";

export default function page() {
    return (
        <>
            <div className="bgc-thm4">
                <Header20 />

                <section className="our-register">
                    <div className="container">
                        <div className="row">
                            <div
                                className="col-lg-6 m-auto wow fadeInUp"
                                data-wow-delay="300ms"
                            >
                                <div className="main-title text-center">
                                    <h2 className="title">Register</h2>
                                    <p className="paragraph">
                                        Give your visitor a smooth online
                                        experience with a solid UX design
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="row wow fadeInRight"
                            data-wow-delay="300ms"
                        >
                            <div className="col-xl-6 mx-auto">
                                <div className="log-reg-form search-modal form-style1 bgc-white p50 p30-sm default-box-shadow1 bdrs12">
                                    <div className="mb30">
                                        <h4>Let's create your account!</h4>
                                        <p className="text mt20">
                                            Already have an account?{" "}
                                            <Link
                                                href="/login"
                                                className="text-thm"
                                            >
                                                Log In!
                                            </Link>
                                        </p>
                                    </div>
                                    <div className="mb25">
                                        <label className="form-label fw500 dark-color">
                                            Display Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="ali"
                                        />
                                    </div>
                                    <div className="mb25">
                                        <label className="form-label fw500 dark-color">
                                            Username
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="alitf"
                                        />
                                    </div>
                                    <div className="mb25">
                                        <label className="form-label fw500 dark-color">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="alitfn58@gmail.com"
                                        />
                                    </div>
                                    <div className="mb15">
                                        <label className="form-label fw500 dark-color">
                                            Password
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="*******"
                                        />
                                    </div>
                                    <div className="d-grid mb20">
                                        <button
                                            className="ud-btn btn-thm default-box-shadow2"
                                            type="button"
                                        >
                                            Creat Account{" "}
                                            <i className="fal fa-arrow-right-long" />
                                        </button>
                                    </div>
                                    <div className="hr_content mb20">
                                        <hr />
                                        <span className="hr_top_text">OR</span>
                                    </div>
                                    <div className="d-md-flex justify-content-between">
                                        <button
                                            className="ud-btn btn-fb fz14 fw400 mb-2 mb-md-0"
                                            type="button"
                                        >
                                            <i className="fab fa-facebook-f pr10" />{" "}
                                            Continue Facebook
                                        </button>
                                        <button
                                            className="ud-btn btn-google fz14 fw400 mb-2 mb-md-0"
                                            type="button"
                                        >
                                            <i className="fab fa-google" />{" "}
                                            Continue Google
                                        </button>
                                        <button
                                            className="ud-btn btn-apple fz14 fw400"
                                            type="button"
                                        >
                                            <i className="fab fa-apple" />{" "}
                                            Continue Apple
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    );
}
