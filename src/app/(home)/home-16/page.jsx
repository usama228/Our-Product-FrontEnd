import Footer from "@/components/footer/Footer";
import Header15 from "@/components/header/Header15";
import Hero16 from "@/components/hero/Hero16";
import Blog16 from "@/components/section/Blog16";
import BrowserCategory16 from "@/components/section/BrowserCategory16";
import CtaBanner16 from "@/components/section/CtaBanner16";
import LearnFreeio16 from "@/components/section/LearnFreeio16";
import LearnFreeio17 from "@/components/section/LearnFreeio17";
import NeedSomething2 from "@/components/section/NeedSomething2";
import OurCta16 from "@/components/section/OurCta16";
import OurPartner1 from "@/components/section/OurPartner1";
import PopularService1 from "@/components/section/PopularService1";
import React from "react";

export const metadata = {
    title: "Freeio - Freelance Marketplace React/Next Js Template | Home 16",
};

export default function page() {
    return (
        <div className="wrapper ovh">
            <Header15 />
            <div className="body_content">
                <Hero16 />
                <BrowserCategory16 />
                <NeedSomething2 />
                <PopularService1 />
                <LearnFreeio16 />
                <CtaBanner16 />
                <OurPartner1 />
                <LearnFreeio17 />
                <Blog16 />
                <OurCta16 />
            </div>
            <Footer />
        </div>
    );
}
