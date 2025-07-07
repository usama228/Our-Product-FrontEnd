import DashboardLayout from "@/components/dashboard/DashboardLayout";
import ReviewsInfo from "@/components/dashboard/section/ReviewsInfo";

import MobileNavigation2 from "@/components/header/MobileNavigation2";

export const metadata = {
  title: "Freeio - Freelance Marketplace React/Next Js Template | Review",
};

export default function page() {
  return (
    <>
    
    <MobileNavigation2 />
      <DashboardLayout>
        <ReviewsInfo />
      </DashboardLayout>
    </>
  );
}
