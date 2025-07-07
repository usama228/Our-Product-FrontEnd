import Footer11 from "@/components/footer/Footer11";
import Header11 from "@/components/header/Header11";
import Hero12 from "@/components/hero/Hero12";
import BrowserCategory12 from "@/components/section/BrowserCategory12";
import CtaBanner12 from "@/components/section/CtaBanner12";
import ForClient from "@/components/section/ForClient";
import HighestRated12 from "@/components/section/HighestRated12";
import OurBlog12 from "@/components/section/OurBlogs12";
import OurCta12 from "@/components/section/OurCta12";
import Testimonials12 from "@/components/section/Testimonials12";
import TrendingService2 from "@/components/section/TrendingService2";
import React from "react";

export const metadata = {
    title: "Freeio - Freelance Marketplace React/Next Js Template | Home 12",
};

export default function page() {
    return (
        <>
            <div className="wrapper ovh">
                <Header11 />
                <Hero12 />
                <BrowserCategory12 />
                <CtaBanner12 />
                <TrendingService2 bgColor={"bgc-gray-3"} />
                <ForClient />
                <HighestRated12 />
                <Testimonials12 />
                <OurBlog12 />
                <OurCta12 />
                <Footer11 />
            </div>
        </>
    );
}
