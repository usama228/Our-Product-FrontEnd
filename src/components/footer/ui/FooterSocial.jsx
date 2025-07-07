import Link from "next/link";

export default function FooterSocial() {
    return (
        <>
            <div className="social-widget text-center text-md-end">
                <div className="social-style1">
                    <Link className="text-white me-2 fw500 fz17" href="/">
                        Follow us
                    </Link>
                    <Link href="/">
                        <i className="fab fa-facebook-f list-inline-item" />
                    </Link>
                    <Link href="/">
                        <i className="fab fa-twitter list-inline-item" />
                    </Link>
                    <Link href="/">
                        <i className="fab fa-instagram list-inline-item" />
                    </Link>
                    <Link href="/">
                        <i className="fab fa-linkedin-in list-inline-item" />
                    </Link>
                </div>
            </div>
        </>
    );
}
