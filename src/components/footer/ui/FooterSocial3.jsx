import Link from "next/link";

export default function FooterSocial3() {
    return (
        <>
            <div class="social-widget">
                <h5 class="mb20">Follow Us</h5>
                <div class="social-style1 light-style">
                    <Link href="/">
                        <i class="fab fa-facebook-f list-inline-item"></i>
                    </Link>
                    <Link href="/">
                        <i class="fab fa-twitter list-inline-item"></i>
                    </Link>
                    <Link href="/">
                        <i class="fab fa-instagram list-inline-item"></i>
                    </Link>
                    <Link href="/">
                        <i class="fab fa-linkedin-in list-inline-item"></i>
                    </Link>
                </div>
            </div>
        </>
    );
}
