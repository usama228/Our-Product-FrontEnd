import Breadcumb3 from "@/components/breadcumb/Breadcumb3";
import Breadcumb7 from "@/components/breadcumb/Breadcumb7";
import Footer from "@/components/footer/Footer";
import Header20 from "@/components/header/Header20";

import Listing6 from "@/components/section/Listing6";
import TabSection1 from "@/components/section/TabSection1";

export const metadata = {
    title: "Freeio - Freelance Marketplace React/Next Js Template | Service 6",
};

export default function page() {
    return (
        <>
            <Header20 />
            <TabSection1 />
            <Breadcumb3 path={["Home", "Services", "Design & Creative"]} />
            <Breadcumb7 />
            <Listing6 />
            <Footer />
        </>
    );
}
