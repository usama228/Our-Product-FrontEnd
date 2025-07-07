import Link from "next/link";
import FooterSocial2 from "./FooterSocial2";

const links = [
    { id: 1, name: "Terms of Service", path: "/" },
    { id: 2, name: "Privacy Policy", path: "/" },
    { id: 3, name: "Site Map", path: "/" },
];

export default function FooterHeader2() {
    return (
        <div className="row bdrb1 pb10 mb60">
            <div className="col-md-7">
                <div className="d-block text-center text-md-start justify-content-center justify-content-md-start d-md-flex align-items-center mb-3 mb-md-0">
                    {links.map((item, i) => (
                        <Link
                            key={i}
                            className="fz17 fw500 mr15-md mr30 text-white"
                            href={item.path}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
            <div className="col-md-5">
                <FooterSocial2 />
            </div>
        </div>
    );
}
