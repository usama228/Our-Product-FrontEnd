import Breadcumb1 from "@/components/breadcumb/Breadcumb1";
import Footer from "@/components/footer/Footer";
import Header20 from "@/components/header/Header20";

import ContactInfo1 from "@/components/section/ContactInfo1";
import GoogleMap1 from "@/components/section/GoogleMap1";
import OurFaq1 from "@/components/section/OurFaq1";

export const metadata = {
    title: "Freeio - Freelance Marketplace React/Next Js Template | Contact",
};

export default function page() {
    return (
        <>
            <Header20 />
            <Breadcumb1
                title={"Contact us"}
                brief={`We'd love to talk about how we can help you.`}
                isBtnActive={false}
            />
            <ContactInfo1 />
            <GoogleMap1 />
            <OurFaq1 />
            <Footer />
        </>
    );
}
