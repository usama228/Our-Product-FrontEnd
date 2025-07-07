import Footer6 from "@/components/footer/Footer6";
import Header6 from "@/components/header/Header6";
import Hero6 from "@/components/hero/Hero6";
import BrowserCategory5 from "@/components/section/BrowserCategory5";
import CounterInfo1 from "@/components/section/CounterInfo1";
import CtaBanner5 from "@/components/section/CtaBanner5";
import NeedSomething4 from "@/components/section/NeedSomething4";
import NewsLetterSubscribe1 from "@/components/section/NewsLetterSubscribe1";
import OurBlog1 from "@/components/section/OurBlog1";
import OurPartner1 from "@/components/section/OurPartner1";
import PopularService3 from "@/components/section/PopularService3";
import Testimonial1 from "@/components/section/Testimonial1";
import TrendingService4 from "@/components/section/TrendingService4";

export const metadata = {
    title: "Freeio - Freelance Marketplace React/Next Js Template | Home 6",
};

export default function page() {
    return (
        <>
            <div className="wrapper ovh">
                <Header6 />
                <Hero6 />
                <NeedSomething4 />
                <BrowserCategory5 />
                <PopularService3 />
                <CtaBanner5 />
                <CounterInfo1 />
                <Testimonial1 />
                <TrendingService4 />
                <OurBlog1 />
                <OurPartner1 />
                <NewsLetterSubscribe1 />
                <Footer6 />
            </div>
        </>
    );
}
