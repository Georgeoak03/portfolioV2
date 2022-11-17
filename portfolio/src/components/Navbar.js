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
                <div className="mobile-menu flex lg:hidden">
                    <div className="absolute top-0 right-0 px-8 py-8" onClick={() => setIsNavOpen((prev) => !prev)}>
                        <FontAwesomeIcon icon="fa-solid fa-bars" className="md:collapse text-gray-700 hover:text-white text-4xl transition ease-in-out duration-1000 transform"/>
                    </div>
                    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                        <div className="CROSS-ICON absolute top-0 right-0 px-8 py-8" onClick={() => setIsNavOpen(false)}>
                            <FontAwesomeIcon icon="fa-solid fa-xmark" className="text-gray-700 hover:text-white text-4xl transition ease-in-out duration-1000 transform"/>
                        </div>
                        <ul className="NAVIGATION-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] bg-zinc-900 opacity-75">
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
                </div>
                    <div className="hidden w-full md:block md:w-auto space-x-4" id="navbar-default">
                        <a href="#about-me" className="font-['Great_Sailor'] text-white text-6xl md:text-5xl collapse md:visible hover:text-[#85B97C]">About.</a>
                        <a href="#projects" className="font-['Great_Sailor'] text-white text-6xl md:text-5xl collapse md:visible hover:text-[#85B97C]">Projects.</a>
                        <a href="#contact" className="font-['Great_Sailor'] text-white text-6xl md:text-5xl collapse md:visible hover:text-[#85B97C]">Contact.</a>
                    </div>
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
                        background: black;
                        webkit-backdrop-filter: blur(20px);
                        backdrop-filter: blur(20px);
                        z-index: 10;
                        opacity: 0.5;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-evenly;
                        align-items: center;}`}
            </style>
        </section>
    )
}