"use client";
import { useEffect, useState } from "react";

export default function useStickyMenu(max = 20) {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window) {
                const scrollTop =
                    window.pageYOffset || document.documentElement.scrollTop;
                setIsSticky(scrollTop > max);
            }
        };
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    return isSticky;
}
