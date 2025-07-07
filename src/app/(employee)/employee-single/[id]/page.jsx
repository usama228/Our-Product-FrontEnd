import Breadcumb10 from "@/components/breadcumb/Breadcumb10";
import Breadcumb15 from "@/components/breadcumb/Breadcumb15";
import Footer from "@/components/footer/Footer";
import Header20 from "@/components/header/Header20";
import EmplyeeDetail1 from "@/components/section/EmplyeeDetail1";
import JobInvision1 from "@/components/section/JobInvision1";
import TabSection1 from "@/components/section/TabSection1";

export const metadata = {
    title: "Freeio - Freelance Marketplace React/Next Js Template | Emplyee Single",
};

export default function page() {
    return (
        <>
            <Header20 />
            <TabSection1 />
            <Breadcumb10 path={["Home", "Services", "Design & Creative"]} />
            <Breadcumb15 />
            <EmplyeeDetail1 />
            <JobInvision1 />
            <Footer />
        </>
    );
}
