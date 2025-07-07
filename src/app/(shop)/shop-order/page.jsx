import OrderComplete1 from "@/components/element/OrderComplete1";
import Footer from "@/components/footer/Footer";
import Header20 from "@/components/header/Header20";

export const metadata = {
    title: "Freeio - Freelance Marketplace React/Next Js Template | Shop Order",
};

export default function page() {
    return (
        <>
            <Header20 />
            <OrderComplete1 />
            <Footer />
        </>
    );
}
