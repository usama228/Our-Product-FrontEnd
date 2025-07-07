import DashboardLayout from "@/components/dashboard/DashboardLayout";
import ProposalInfo from "@/components/dashboard/section/ProposalInfo";

import MobileNavigation2 from "@/components/header/MobileNavigation2";

export const metadata = {
  title: "Freeio - Freelance Marketplace React/Next Js Template | Proposal",
};

export default function page() {
  return (
    <>
    
    <MobileNavigation2 />
      <DashboardLayout>
        <ProposalInfo />
      </DashboardLayout>
    </>
  );
}
