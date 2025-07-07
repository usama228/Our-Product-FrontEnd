"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";

const categories = [
  "All Categories",
  "Graphics Design",
  "Digital Marketing",
  "Writing Translation",
  "Video Animation",
  "Music Audio",
  "Programming Tech",
  "Business",
  "Lifestyle",
  "Trending",
];

// categories_list_section overflow-hidden

export default function TabSection1() {
  const [getCurrentTab, setCurrentTab] = useState("All Categories");

  const path = usePathname();

  return (
    <>
      <section
        className={`categories_list_section overflow-hidden ${
          path === "/home-3" ? "bgc-thm5" : ""
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="listings_category_nav_list_menu">
                <ul className="mb0 d-flex ps-0">
                  {categories.map((item, index) => (
                    <li key={index}>
                      <a
                        onClick={() => setCurrentTab(item)}
                        className={getCurrentTab == item ? "active" : ""}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
