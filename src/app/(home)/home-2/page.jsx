import Footer2 from "@/components/footer/Footer2";
import Header2 from "@/components/header/Header2";
import Hero2 from "@/components/hero/Hero2";
import BrowserCategory2 from "@/components/section/BrowserCategory2";
import CtaBanner2 from "@/components/section/CtaBanner2";
import HighestRated1 from "@/components/section/HighestRated1";
import LearnFreeio1 from "@/components/section/LearnFreeio1";
import NeedSomething2 from "@/components/section/NeedSomething2";
import OurPartner1 from "@/components/section/OurPartner1";
import PopularService1 from "@/components/section/PopularService1";
import PriceTable1 from "@/components/section/PriceTable1";

export const metadata = {
    title: "Freeio - Freelance Marketplace React/Next Js Template | Home 2",
};

export default function page() {
    return (
        <>
            <div className="wrapper ovh">
                <Header2 />
                <Hero2 />
                <NeedSomething2 />
                <PopularService1 />
                <CtaBanner2 />
                <OurPartner1 />
                <BrowserCategory2 />
                <HighestRated1 />
                <LearnFreeio1 />
                <PriceTable1 />
                <Footer2 />
            </div>
        </>
    );
}
