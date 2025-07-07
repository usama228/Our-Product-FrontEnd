import Footer4 from "@/components/footer/Footer4";
import Header7 from "@/components/header/Header7";
import Hero7 from "@/components/hero/Hero7";
import BrowserCategory6 from "@/components/section/BrowserCategory6";
import CtaBanner6 from "@/components/section/CtaBanner6";
import HighestRated2 from "@/components/section/HighestRated2";
import LatestJob2 from "@/components/section/LatestJob2";
import OurBlog1 from "@/components/section/OurBlog1";
import OurCta3 from "@/components/section/OurCta3";
import OurFunFact3 from "@/components/section/OurFunFact3";
import OurPartner1 from "@/components/section/OurPartner1";
import PopularService4 from "@/components/section/PopularService4";

export const metadata = {
    title: "Freeio - Freelance Marketplace React/Next Js Template | Home 7",
};

export default function page() {
    return (
        <>
            <div className="wrapper ovh">
                <Header7 />
                <Hero7 />
                <PopularService4 />
                <BrowserCategory6 />
                <LatestJob2 />
                <OurFunFact3 />
                <HighestRated2 />
                <CtaBanner6 />
                <OurPartner1 />
                <OurBlog1 />
                <OurCta3 />
                <Footer4 />
            </div>
        </>
    );
}
