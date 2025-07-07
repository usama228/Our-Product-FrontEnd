import Breadcumb3 from "@/components/breadcumb/Breadcumb3";
import Footer from "@/components/footer/Footer";
import Header20 from "@/components/header/Header20";

import BlogArea1 from "@/components/section/BlogArea1";

export const metadata = {
    title: "Freeio - Freelance Marketplace React/Next Js Template | Blog 1",
};

export default function page() {
    return (
        <>
            <Header20 />
            <Breadcumb3 />
            <BlogArea1 />
            <Footer />
        </>
    );
}
