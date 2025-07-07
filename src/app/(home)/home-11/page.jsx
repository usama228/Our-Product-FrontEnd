import Footer10 from "@/components/footer/Footer10";
import Header10 from "@/components/header/Header10";
import Hero11 from "@/components/hero/Hero11";
import BrowserCategory11 from "@/components/section/BrowserCategory11";
import CtaBanner11 from "@/components/section/CtaBanner11";
import InspiringService11 from "@/components/section/InspiringService11";
import OurFunFact11 from "@/components/section/OurFunFact11";
import OurPartner1 from "@/components/section/OurPartner1";
import PopulerService11 from "@/components/section/PopulerService11";
import Talent11 from "@/components/section/Talent11";
import Testimonials11 from "@/components/section/Testimonials11";
import React from "react";

export const metadata = {
    title: "Freeio - Freelance Marketplace React/Next Js Template | Home 11",
};

export default function page() {
    return (
        <>
            <div className="wrapper ovh">
                <Header10 />
                <Hero11 />
                <OurFunFact11 />
                <PopulerService11 />
                <BrowserCategory11 />
                <CtaBanner11 />
                <Testimonials11 />
                <OurPartner1 />
                <Talent11 />
                <InspiringService11 />
                <Footer10 />
            </div>
        </>
    );
}
