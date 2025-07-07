import Breadcumb18 from "@/components/breadcumb/Breadcumb18";
import Breadcumb3 from "@/components/breadcumb/Breadcumb3";
import Header20 from "@/components/header/Header20";

import Listing20 from "@/components/section/Listing20";
import TabSection1 from "@/components/section/TabSection1";

export const metadata = {
    title: "Freeio - Freelance Marketplace React/Next Js Template | Project 1",
};

export default function page() {
    return (
        <>
            <Header20 />
            <TabSection1 />
            <Breadcumb3 path={["Home", "Services", "Design & Creative"]} />
            <div className=" bgc-thm3">
                <Breadcumb18 />
                <Listing20 />
            </div>
        </>
    );
}
