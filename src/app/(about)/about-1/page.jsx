import Footer from "@/components/footer/Footer";
import Header20 from "@/components/header/Header20";
import About2 from "@/components/section/About2";
import About3 from "@/components/section/About3";
import About4 from "@/components/section/About4";
import CounterInfo1 from "@/components/section/CounterInfo1";
import CtaBanner1 from "@/components/section/CtaBanner1";
import OurCta1 from "@/components/section/OurCta1";
import OurPartner1 from "@/components/section/OurPartner1";
import PriceTable1 from "@/components/section/PriceTable1";
import Testimonial1 from "@/components/section/Testimonial1";

export const metadata = {
    title: "Freeio - Freelance Marketplace React/Next Js Template | About 1",
};

export default function page() {
    return (
        <>
            <Header20 />
            <About2 />
            <About3 />
            <CtaBanner1 />
            <CounterInfo1 />
            <Testimonial1 />
            <About4 />
            <PriceTable1 />
            <OurPartner1 />
            <OurCta1 />
            <Footer />
        </>
    );
}
