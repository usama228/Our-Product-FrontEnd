import Footer from "@/components/footer/Footer";
import Header16 from "@/components/header/Header16";
import Hero17 from "@/components/hero/Hero17";
import BrowserCategory17 from "@/components/section/BrowserCategory17";
import CounterInfo1 from "@/components/section/CounterInfo1";
import CtaBanner17 from "@/components/section/CtaBanner17";
import CtaBanner18 from "@/components/section/CtaBanner18";
import CtaBanner19 from "@/components/section/CtaBanner19";
import HighestRated17 from "@/components/section/HighestRated17";
import InspiringService11 from "@/components/section/InspiringService11";
import OurPartner1 from "@/components/section/OurPartner1";
import TrendingService2 from "@/components/section/TrendingService2";
import React from "react";

export const metadata = {
    title: "Freeio - Freelance Marketplace React/Next Js Template | Home 17",
};

export default function page() {
    return (
        <>
            <div className="wrapper ovh">
                <Header16 />
                <div className="body_content">
                    <Hero17 />
                    <TrendingService2 />
                    <BrowserCategory17 />
                    <CtaBanner17 />
                    <CtaBanner18 />
                    <CounterInfo1 notBorder={true} />
                    <HighestRated17 />
                    <OurPartner1 />
                    <CtaBanner19 />
                    <InspiringService11 />
                </div>
                <Footer />
            </div>
        </>
    );
}
