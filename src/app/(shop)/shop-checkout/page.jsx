import Breadcumb3 from "@/components/breadcumb/Breadcumb3";
import Footer from "@/components/footer/Footer";
import Header20 from "@/components/header/Header20";

import HeaderInfo1 from "@/components/section/HeaderInfo1";
import ShopCheckoutArea1 from "@/components/section/ShopCheckoutArea1";

export const metadata = {
    title: "Freeio - Freelance Marketplace React/Next Js Template | Shop Checkout",
};

export default function page() {
    return (
        <>
            <Header20 />

            <Breadcumb3 path={["Home", "Services", "Design & Creative"]} />
            <HeaderInfo1
                title="Shop Checkout"
                brief="Give your visitor a smooth online experience with a solid UX design"
            />
            <ShopCheckoutArea1 />
            <Footer />
        </>
    );
}
