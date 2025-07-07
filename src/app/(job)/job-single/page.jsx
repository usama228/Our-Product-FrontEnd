import Breadcumb10 from "@/components/breadcumb/Breadcumb10";
import Breadcumb13 from "@/components/breadcumb/Breadcumb13";
import Header20 from "@/components/header/Header20";

import JobDetail1 from "@/components/section/JobDetail1";
import TabSection1 from "@/components/section/TabSection1";

export const metadata = {
    title: "Freeio - Freelance Marketplace React/Next Js Template | Job Single",
};

export default function page() {
    return (
        <>
            <Header20 />
            <TabSection1 />
            <Breadcumb10 path={["Home", "Services", "Design & Creative"]} />
            <Breadcumb13 />
            <JobDetail1 />
        </>
    );
}
