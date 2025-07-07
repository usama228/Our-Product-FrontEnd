"use client";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";
import BottomToTop from "@/components/button/BottomToTop";
import SearchModal1 from "@/components/modal/SearchModal1";
import { usePathname } from "next/navigation";
import toggleStore from "@/store/toggleStore";
import "react-tooltip/dist/react-tooltip.css";
import NavSidebar from "@/components/sidebar/NavSidebar";
if (typeof window !== "undefined") {
  import("bootstrap");
}

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export default function RootLayout({ children }) {
  const isListingActive = toggleStore((state) => state.isListingActive);
  const path = usePathname();

  // wow js
  useEffect(() => {
    const { WOW } = require("wowjs");
    const wow = new WOW({
      live: false,
    });
    wow.init();
  }, [path]);

  return (
    <html lang="en">
      <body className={`${dmSans.className}`}>
        <SearchModal1 />
        {children}

        {/* bottom to top */}
        <BottomToTop />

        {/* sidebar mobile navigation */}
        <NavSidebar />
      </body>
    </html>
  );
}
