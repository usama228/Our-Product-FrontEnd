import Breadcumb10 from "@/components/breadcumb/Breadcumb10";
import Footer from "@/components/footer/Footer";
import Header20 from "@/components/header/Header20";

import FreelancerDetail3 from "@/components/section/FreelancerDetails3";
import TabSection1 from "@/components/section/TabSection1";

export const metadata = {
    title: "Freeio - Freelance Marketplace React/Next Js Template | Freelancer Single",
};

export default function page() {
    return (
        <>
            <Header20 />
            <TabSection1 />
            <div className="bgc-thm3">
                <Breadcumb10 path={["Home", "Services", "Design & Creative"]} />

                <FreelancerDetail3 />
            </div>
            <Footer />
        </>
    );
}
