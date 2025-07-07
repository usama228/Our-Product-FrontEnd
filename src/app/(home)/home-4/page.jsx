import Footer4 from "@/components/footer/Footer4";
import Header4 from "@/components/header/Header4";
import Hero4 from "@/components/hero/Hero4";
import BrowserCategory1 from "@/components/section/BrowserCategory1";
import LatestJob1 from "@/components/section/LatestJob1";
import LearnFreeio2 from "@/components/section/LearnFreeio2";
import NeedSomething3 from "@/components/section/NeedSomething3";
import OurBlog1 from "@/components/section/OurBlog1";
import OurFunFact2 from "@/components/section/OurFunFact2";
import OurPartner2 from "@/components/section/OurPartner2";
import SkillArea1 from "@/components/section/SkillArea1";
import TabSection2 from "@/components/section/TabSection2";
import TrendingService2 from "@/components/section/TrendingService2";

export const metadata = {
    title: "Freeio - Freelance Marketplace React/Next Js Template | Home 4",
};

export default function page() {
    return (
        <>
            <div className="wrapper ovh">
                <Header4 />
                <TabSection2 />
                <Hero4 />
                <OurPartner2 />
                <NeedSomething3 />
                <BrowserCategory1 />
                <TrendingService2 />
                <LatestJob1 />
                <LearnFreeio2 />
                <OurFunFact2 />
                <OurBlog1 />
                <SkillArea1 />
                <Footer4 />
            </div>
        </>
    );
}
