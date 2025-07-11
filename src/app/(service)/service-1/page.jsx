import Breadcumb3 from "@/components/breadcumb/Breadcumb3";
import Breadcumb4 from "@/components/breadcumb/Breadcumb4";
import Footer from "@/components/footer/Footer";
import Header20 from "@/components/header/Header20";
import Listing1 from "@/components/section/Listing1";

export const metadata = {
    title: "Freeio - Freelance Marketplace React/Next Js Template | Service 1",
};

export default function page() {
    return (
        <>
            <Header20 />
            <Breadcumb4 />
            <Listing1 />
            <Footer />
        </>
    );
}
