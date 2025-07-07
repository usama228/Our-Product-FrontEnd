import Footer5 from "@/components/footer/Footer5";
import Header5 from "@/components/header/Header5";
import Hero5 from "@/components/hero/Hero5";
import BrowserCategory4 from "@/components/section/BrowserCategory4";
import NeedSomething2 from "@/components/section/NeedSomething2";
import OurBlog1 from "@/components/section/OurBlog1";
import OurCta2 from "@/components/section/OurCta2";
import OurFunFact3 from "@/components/section/OurFunFact3";
import OurFunFact4 from "@/components/section/OurFunFact4";
import OurFunFact5 from "@/components/section/OurFunFact5";
import OurPartner3 from "@/components/section/OurPartner3";
import Testimonial2 from "@/components/section/Testimonial2";
import TrendingService3 from "@/components/section/TrendingService3";

export const metadata = {
    title: "Freeio - Freelance Marketplace React/Next Js Template | Home 5",
};

export default function page() {
    return (
        <>
            <div className="wrapper ovh">
                <Header5 />
                <Hero5 />
                <OurPartner3 />
                <BrowserCategory4 />
                <NeedSomething2 />
                <TrendingService3 />
                <OurFunFact3 />
                <OurFunFact4 />
                <OurFunFact5 />
                <Testimonial2 />
                <OurCta2 />
                <OurBlog1 />
                <Footer5 />
            </div>
        </>
    );
}
