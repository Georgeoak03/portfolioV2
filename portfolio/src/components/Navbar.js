import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";


export default function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <section id="navbar">
            <div className="fixed w-full z-20 top-0 border-b-2 border-white bg-zinc-900 bg-opacity-95 flex flex-wrap items-center justify-between mx-auto p-1 px-4">
                <a href="#splash" className="font-['Great_Sailor'] text-[#85B97C] text-6xl">G<span className="text-white">.</span>O<span className="text-white">.</span></a>
                <nav>
                    <section className="MOBILE-MENU flex lg:hidden">
                        <div className="absolute top-0 right-0 px-8 py-8" onClick={() => setIsNavOpen((prev) => !prev)}>
                            <FontAwesomeIcon icon="fa-solid fa-bars" className="md:collapse text-gray-700 hover:text-white text-4xl transition ease-in-out duration-1000 transform"/>
                        </div>
                        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                            <div className="CROSS-ICON absolute top-0 right-0 px-8 py-8" onClick={() => setIsNavOpen(false)}>
                                <svg className="h-8 w-8 text-gray-600"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </div>
                            <ul className="NAVIGATION-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                                <li className="border-b border-gray-400 my-8 uppercase">
                                    <a href="/about">About</a>
                                </li>
                                <li className="border-b border-gray-400 my-8 uppercase">
                                    <a href="/portfolio">Portfolio</a>
                                </li>
                                <li className="border-b border-gray-400 my-8 uppercase">
                                    <a href="/contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <div className="hidden w-full md:block md:w-auto space-x-4" id="navbar-default">
                        <a href="#about-me" className="font-['Great_Sailor'] text-white text-6xl md:text-5xl collapse md:visible hover:text-[#85B97C]">About.</a>
                        <a href="#projects" className="font-['Great_Sailor'] text-white text-6xl md:text-5xl collapse md:visible hover:text-[#85B97C]">Projects.</a>
                        <a href="#contact" className="font-['Great_Sailor'] text-white text-6xl md:text-5xl collapse md:visible hover:text-[#85B97C]">Contact.</a>
                    </div>

                    <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <style>{`.hideMenuNav {display: none;}
                      .showMenuNav {
                        display: block;
                        position: absolute;
                        width: 100%;
                        height: 100vh;
                        top: 0;
                        left: 0;
                        background: white;
                        z-index: 10;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-evenly;
                        align-items: center;}`}
            </style>
        </section>
    )
}