"use client";
import { useEffect, useState } from "react";

export default function BottomToTop() {
  const [isBottom, setBottom] = useState(false);

  // scroll from top
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setBottom(scrollTop > 200);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  // bottom to top handler
  const bottomToTopHandler = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <a
        onClick={bottomToTopHandler}
        className={`scrollToHome ${isBottom ? "show" : ""}`}
      >
        <i className="fas fa-angle-up" />
      </a>
    </>
  );
}
