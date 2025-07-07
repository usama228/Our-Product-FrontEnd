import Footer8 from "@/components/footer/Footer8";
import Header21 from "@/components/header/Header21";
import Hero9 from "@/components/hero/Hero9";
import BrowserCategory2 from "@/components/section/BrowserCategory2";
import HighestRated3 from "@/components/section/HighestRated3";
import LearnFreeio1 from "@/components/section/LearnFreeio1";
import OurCta5 from "@/components/section/OurCta5";
import OurFunFact3 from "@/components/section/OurFunFact3";
import OurPartner1 from "@/components/section/OurPartner1";
import PopularService1 from "@/components/section/PopularService1";
import SkillArea1 from "@/components/section/SkillArea1";
import TrendingService5 from "@/components/section/TrendingService5";

export const metadata = {
    title: "Freeio - Freelance Marketplace React/Next Js Template | Home 9",
};

export default function page() {
    return (
        <>
            <div className="wrapper ovh">
                <Header21 />
                <Hero9 />
                <OurPartner1 />
                <BrowserCategory2 />
                <PopularService1 />
                <OurCta5 />
                <HighestRated3 />
                <OurFunFact3 />
                <TrendingService5 />
                <LearnFreeio1 />
                <SkillArea1 />
                <Footer8 />
            </div>
        </>
    );
}
