"use client";
import { useEffect, useState } from "react";

export default function useScreen(size) {
  const [isMatched, setMatched] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setMatched(window.innerWidth > size);
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [size]);

  return isMatched;
}
