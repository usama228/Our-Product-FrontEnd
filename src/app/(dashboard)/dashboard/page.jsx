import DashboardLayout from "@/components/dashboard/DashboardLayout";
import DashboardInfo from "@/components/dashboard/section/DashboardInfo";

import MobileNavigation2 from "@/components/header/MobileNavigation2";

export const metadata = {
  title: "Freeio - Freelance Marketplace React/Next Js Template | Dashboard",
};

export default function page() {
  return (
    <>
    
    <MobileNavigation2 />
      <DashboardLayout>
        <DashboardInfo />
      </DashboardLayout>
    </>
  );
}
