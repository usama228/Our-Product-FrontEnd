import Breadcumb14 from "@/components/breadcumb/Breadcumb14";
import Breadcumb3 from "@/components/breadcumb/Breadcumb3";
import Footer from "@/components/footer/Footer";
import Header20 from "@/components/header/Header20";

import Listing12 from "@/components/section/Listing12";
import TabSection1 from "@/components/section/TabSection1";

export const metadata = {
    title: "Freeio - Freelance Marketplace React/Next Js Template | Employee 2",
};

export default function page() {
    return (
        <>
            <Header20 />
            <TabSection1 />
            <Breadcumb3 path={["Home", "Services", "Design & Creative"]} />
            <Breadcumb14 />
            <Listing12 />
            <Footer />
        </>
    );
}
