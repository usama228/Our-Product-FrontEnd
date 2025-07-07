"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

const tabs = [
    "Top skills",
    "Trending skills",
    "Top skills in US",
    "Project Catalog",
];

const skills1 = [
    "Data Entry Specialists",
    "Video Editors",
    "Data Analyst",
    "Shopify Developer",
    "Ruby on Rails Developer",
    "Social Media Manager",
    "Android Developer",
    "Bookkeeper",
    "Content Writer",
    "Copywriter",
    "Database Administrator",
    "Software Developer",
    "Data Scientist",
    "Front-End Developer",
    "Game Developer",
    "Graphic Designer",
    "iOS Developer",
    "Java Developer",
    "JavaScript Developer",
    "Logo Designer",
    "Mobile App Developer",
    "PHP Developer",
    "Python Developer",
    "Resume Writer",
    "Technical Writer",
    "UI Designer",
    "UX Designer",
    "Virtual Assistant",
    "Web Designer",
    "Wordpress Developer",
];

const skills2 = [
    "Web Designer",
    "Java Developer",
    "Content Writer",
    "Shopify Developer",
    "PHP Developer",
    "Technical Writer",
    "UX Designer",
    "Data Scientist",
    "Data Entry Specialists",
    "Resume Writer",
    "Social Media Manager",
    "Python Developer",
    "Ruby on Rails Developer",
    "Game Developer",
    "Front-End Developer",
    "iOS Developer",
    "Database Administrator",
    "Copywriter",
    "Logo Designer",
    "Android Developer",
    "Bookkeeper",
    "JavaScript Developer",
    "Virtual Assistant",
    "Wordpress Developer",
    "UI Designer",
    "Web Designer",
    "Java Developer",
    "Content Writer",
    "Shopify Developer",
    "PHP Developer",
];

const skills3 = [
    "UX Designer",
    "Android Developer",
    "Data Entry Specialists",
    "Wordpress Developer",
    "Web Designer",
    "Python Developer",
    "Front-End Developer",
    "JavaScript Developer",
    "Ruby on Rails Developer",
    "Database Administrator",
    "Social Media Manager",
    "Copywriter",
    "Content Writer",
    "Shopify Developer",
    "Resume Writer",
    "Technical Writer",
    "UI Designer",
    "Game Developer",
    "Data Scientist",
    "iOS Developer",
    "Bookkeeper",
    "Virtual Assistant",
    "PHP Developer",
    "UX Designer",
    "Android Developer",
    "Data Entry Specialists",
    "Wordpress Developer",
    "Web Designer",
    "Python Developer",
    "Front-End Developer",
];

const skills4 = [
    "Web Designer",
    "Java Developer",
    "Content Writer",
    "Shopify Developer",
    "PHP Developer",
    "Technical Writer",
    "UX Designer",
    "Data Scientist",
    "Data Entry Specialists",
    "Resume Writer",
    "Social Media Manager",
    "Python Developer",
    "Ruby on Rails Developer",
    "Game Developer",
    "Front-End Developer",
    "iOS Developer",
    "Database Administrator",
    "Copywriter",
    "Logo Designer",
    "Android Developer",
    "Bookkeeper",
    "JavaScript Developer",
    "Virtual Assistant",
    "Wordpress Developer",
    "UI Designer",
    "Web Designer",
    "Java Developer",
    "Content Writer",
    "Shopify Developer",
    "PHP Developer",
];

export default function SkillArea1() {
    const [getCurrentTab, setCurrentTab] = useState(0);

    const path = usePathname();

    // skills
    const groups1 = useMemo(() => {
        const groupsArray = [];
        for (let i = 0; i < skills1.length; i += 6) {
            groupsArray.push(skills1.slice(i, i + 6));
        }
        return groupsArray;
    }, []);

    const groups2 = useMemo(() => {
        const groupsArray = [];
        for (let i = 0; i < skills2.length; i += 6) {
            groupsArray.push(skills2.slice(i, i + 6));
        }
        return groupsArray;
    }, []);

    const groups3 = useMemo(() => {
        const groupsArray = [];
        for (let i = 0; i < skills3.length; i += 6) {
            groupsArray.push(skills3.slice(i, i + 6));
        }
        return groupsArray;
    }, []);

    const groups4 = useMemo(() => {
        const groupsArray = [];
        for (let i = 0; i < skills4.length; i += 6) {
            groupsArray.push(skills4.slice(i, i + 6));
        }
        return groupsArray;
    }, []);

    return (
        <>
            <section className="pb90 pb30-md ">
                <div className="container">
                    <div className="row align-items-md-center">
                        <div className="col-lg-12">
                            <div className="home9-navtab-style">
                                <div className="navtab-style2">
                                    <nav>
                                        <div className="nav nav-tabs mb50">
                                            {tabs.map((item, i) => (
                                                <button
                                                    onClick={() =>
                                                        setCurrentTab(i)
                                                    }
                                                    key={i}
                                                    className={`nav-link fw600 ${
                                                        getCurrentTab === i
                                                            ? "active"
                                                            : ""
                                                    }`}
                                                >
                                                    {item}
                                                </button>
                                            ))}
                                        </div>
                                    </nav>
                                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
                                        {getCurrentTab === 0 &&
                                            groups1.map((item, i) => (
                                                <div key={i} className="col">
                                                    <div className="skill-list-style1 mb20">
                                                        <ul className="p-0 mb-0">
                                                            {item.map(
                                                                (item2, i2) => (
                                                                    <li
                                                                        key={i2}
                                                                    >
                                                                        <Link href="/home-4">
                                                                            {
                                                                                item2
                                                                            }
                                                                        </Link>
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                    </div>
                                                </div>
                                            ))}{" "}
                                        {getCurrentTab === 1 &&
                                            groups2.map((item, i) => (
                                                <div key={i} className="col">
                                                    <div className="skill-list-style1 mb20">
                                                        <ul className="p-0 mb-0">
                                                            {item.map(
                                                                (item2, i2) => (
                                                                    <li
                                                                        key={i2}
                                                                    >
                                                                        <Link href="/home-4">
                                                                            {
                                                                                item2
                                                                            }
                                                                        </Link>
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                    </div>
                                                </div>
                                            ))}
                                        {getCurrentTab === 2 &&
                                            groups3.map((item, i) => (
                                                <div key={i} className="col">
                                                    <div className="skill-list-style1 mb20">
                                                        <ul className="p-0 mb-0">
                                                            {item.map(
                                                                (item2, i2) => (
                                                                    <li
                                                                        key={i2}
                                                                    >
                                                                        <Link href="/home-4">
                                                                            {
                                                                                item2
                                                                            }
                                                                        </Link>
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                    </div>
                                                </div>
                                            ))}
                                        {getCurrentTab === 3 &&
                                            groups4.map((item, i) => (
                                                <div key={i} className="col">
                                                    <div className="skill-list-style1 mb20">
                                                        <ul className="p-0 mb-0">
                                                            {item.map(
                                                                (item2, i2) => (
                                                                    <li
                                                                        key={i2}
                                                                    >
                                                                        <Link href="/home-4">
                                                                            {
                                                                                item2
                                                                            }
                                                                        </Link>
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
