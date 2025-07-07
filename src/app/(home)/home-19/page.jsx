import Footer from "@/components/footer/Footer";
import Header18 from "@/components/header/Header18";
import Hero19 from "@/components/hero/Hero19";
import Blog16 from "@/components/section/Blog16";
import BrowserCategory19 from "@/components/section/BrowserCategory19";
import CounterInfo2 from "@/components/section/CounterInfo2";
import CtaBanner20 from "@/components/section/CtaBanner20";
import NeedSomething5 from "@/components/section/NeedSomething5";
import OurCta16 from "@/components/section/OurCta16";
import OurTeam from "@/components/section/OurTeam";
import Testimonials19 from "@/components/section/Testimonials19";
import TrendingService6 from "@/components/section/TrendingService6";
import React from "react";

export const metadata = {
    title: "Freeio - Freelance Marketplace React/Next Js Template | Home 19",
};

export default function page() {
    return (
        <>
            <div className="wrapper ovh">
                <Header18 />
                <div className="body_content">
                    <Hero19 />
                    <NeedSomething5 />
                    <TrendingService6 />
                    <CtaBanner20 />
                    <BrowserCategory19 />
                    <CounterInfo2 />
                    <OurTeam />
                    <Testimonials19 />
                    <Blog16 />
                    <OurCta16 />
                </div>
                <Footer />
            </div>
        </>
    );
}
