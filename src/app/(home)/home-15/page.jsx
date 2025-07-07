import Footer12 from "@/components/footer/Footer12";
import Header14 from "@/components/header/Header14";
import Hero15 from "@/components/hero/Hero15";
import About15 from "@/components/section/About15";
import Blog15 from "@/components/section/Blog15";
import BrowserCategory15 from "@/components/section/BrowserCategory15";
import InspiringService11 from "@/components/section/InspiringService11";
import NeedSomething2 from "@/components/section/NeedSomething2";
import OurPartner1 from "@/components/section/OurPartner1";
import Talent15 from "@/components/section/Talent15";
import Testimonial1 from "@/components/section/Testimonial1";
import TrendingService15 from "@/components/section/TrendingService15";
import React from "react";

export const metadata = {
    title: "Freeio - Freelance Marketplace React/Next Js Template | Home 15",
};

export default function page() {
    return (
        <>
            <div className="wrapper ovh">
                <Header14 />
                <div className="body_content">
                    <Hero15 />
                    <NeedSomething2 />
                    <BrowserCategory15 />
                    <OurPartner1 />
                    <About15 />
                    <TrendingService15 />
                    <Talent15 />
                    <Testimonial1 />
                    <Blog15 />
                    <InspiringService11 />
                </div>
                <Footer12 />
            </div>
        </>
    );
}
