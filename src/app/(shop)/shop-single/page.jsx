import Breadcumb3 from "@/components/breadcumb/Breadcumb3";
import Footer from "@/components/footer/Footer";
import Header20 from "@/components/header/Header20";

import ShopSingleArea1 from "@/components/section/ShopSingleArea1";

export const metadata = {
    title: "Freeio - Freelance Marketplace React/Next Js Template | Shop Single",
};

export default function page() {
    return (
        <>
            <Header20 />
            <Breadcumb3 path={["Home", "Services", "Design & Creative"]} />
            <ShopSingleArea1 />
            <Footer />
        </>
    );
}
