import Breadcumb3 from "@/components/breadcumb/Breadcumb3";
import Breadcumb6 from "@/components/breadcumb/Breadcumb6";
import Footer from "@/components/footer/Footer";
import Header20 from "@/components/header/Header20";

import Listing4 from "@/components/section/Listing4";
import TabSection1 from "@/components/section/TabSection1";

export const metadata = {
    title: "Freeio - Freelance Marketplace React/Next Js Template | Service 4",
};

export default function page() {
    return (
        <>
            <Header20 />
            <TabSection1 />
            <Breadcumb3 path={["Home", "Services", "Design & Creative"]} />
            <Breadcumb6 />
            <Listing4 />
            <Footer />
        </>
    );
}
