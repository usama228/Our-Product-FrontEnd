import Footer from "@/components/footer/Footer";
import Header20 from "@/components/header/Header20";
import PriceTable1 from "@/components/section/PriceTable1";

export const metadata = {
    title: "Freeio - Freelance Marketplace React/Next Js Template | Pricing",
};

export default function page() {
    return (
        <>
            <Header20 />
            <PriceTable1 />
            <Footer />
        </>
    );
}
