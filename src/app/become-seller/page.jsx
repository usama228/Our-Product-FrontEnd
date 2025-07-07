import AboutArea1 from "@/components/section/AboutArea1";
import Breadcumb1 from "@/components/breadcumb/Breadcumb1";
import CounterInfo1 from "@/components/section/CounterInfo1";
import CtaBanner1 from "@/components/section/CtaBanner1";
import OurFaq1 from "@/components/section/OurFaq1";
import OurFeature1 from "@/components/section/OurFeature1";
import OurTeam1 from "@/components/section/OurTeam1";
import Header20 from "@/components/header/Header20";
import Footer from "@/components/footer/Footer";

export const metadata = {
    title: "Freeio - Freelance Marketplace React/Next Js Template | Become seller",
};

export default function page() {
    return (
        <>
            <Header20 />
            <Breadcumb1
                title={"Work Your Way"}
                brief={` Give your visitor a smooth online
                                        experience with a solid UX design.`}
                isBtnActive={true}
            />
            <AboutArea1 />
            <OurFeature1 />
            <CtaBanner1 />
            <CounterInfo1 />
            <OurTeam1 />
            <OurFaq1 />
            <Footer />
        </>
    );
}
