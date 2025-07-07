import Breadcumb12 from "@/components/breadcumb/Breadcumb12";
import Breadcumb3 from "@/components/breadcumb/Breadcumb3";
import Header20 from "@/components/header/Header20";

import Listing10 from "@/components/section/Listing10";
import TabSection1 from "@/components/section/TabSection1";

export const metadata = {
    title: "Freeio - Freelance Marketplace React/Next Js Template | Job 2",
};

export default function page() {
    return (
        <>
            <Header20 />
            <TabSection1 />
            <Breadcumb3 path={["Home", "Services", "Design & Creative"]} />
            <Breadcumb12 />
            <Listing10 />
        </>
    );
}
