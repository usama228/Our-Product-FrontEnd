import Footer13 from "@/components/footer/Footer13";
import Header17 from "@/components/header/Header17";
import Hero18 from "@/components/hero/Hero18";
import BrowserCategory3 from "@/components/section/BrowserCategory3";
import CounterInfo1 from "@/components/section/CounterInfo1";
import ForClient from "@/components/section/ForClient";
import HighestRated18 from "@/components/section/HighestRated18";
import NeedSomething18 from "@/components/section/NeedSomething18";
import OurBlog1 from "@/components/section/OurBlog1";
import Testimonials18 from "@/components/section/Testimonials18";
import TrendingService3 from "@/components/section/TrendingService3";
import React from "react";

export const metadata = {
    title: "Freeio - Freelance Marketplace React/Next Js Template | Home 18",
};

export default function page() {
    return (
        <>
            <div className="wrapper ovh">
                <Header17 />
                <div className="body_content">
                    <Hero18 />
                    <BrowserCategory3 />
                    <TrendingService3 />
                    <NeedSomething18 />
                    <CounterInfo1 />
                    <HighestRated18 />
                    <Testimonials18 />
                    <ForClient />
                    <OurBlog1 />
                </div>
                <Footer13 />
            </div>
        </>
    );
}
