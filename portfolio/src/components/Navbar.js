import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";


export default function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <section id="navbar">
            <div className="fixed w-full z-20 top-0 border-b-2 border-gray-700 bg-zinc-900 bg-opacity-95 flex flex-wrap items-center justify-between mx-auto p-1 px-4">
                <a href="#splash" className="font-['Great_Sailor'] text-[#85B97C] text-6xl">G<span className="text-white">.</span>O<span className="text-white">.</span></a>
                <nav>
                <div className="mobile-menu flex lg:hidden">
                    <div className="top-4 absolute
                    right-0 px-8" onClick={() => setIsNavOpen((prev) => !prev)}>
                        <FontAwesomeIcon icon="fa-solid fa-bars" className="md:collapse text-gray-700 hover:text-white text-4xl transition ease-in-out duration-1000 transform"/>
                    </div>
                    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                        <div className="CROSS-ICON absolute top-0 right-2 px-8 py-8 z-20" onClick={() => setIsNavOpen(false)}>
                            <FontAwesomeIcon icon="fa-solid fa-xmark" className="text-gray-700 hover:text-white text-4xl transition ease-in-out duration-1000 transform"/>
                        </div>
                        <ul className="NAVIGATION-MOBILE-OPEN flex flex-col justify-between bg-zinc-900 opacity-75 p-8 border-2 border-gray-700 rounded-lg transition ease-in-out duration-1000 transform">
                            <li>
                                <a href="#splash" onClick={() => setIsNavOpen(false)} className="font-['Great_Sailor'] text-[#85B97C] text-6xl">G<span className="text-white">.</span>O<span className="text-white">.</span></a>
                            </li>
                            <li>
                                <a href="#about-me" onClick={() => setIsNavOpen(false)} className="font-['Great_Sailor'] text-white text-6xl hover:text-[#85B97C]">About.</a>
                            </li>
                            <li>
                                <a href="#projects" onClick={() => setIsNavOpen(false)} className="font-['Great_Sailor'] text-white text-6xl hover:text-[#85B97C]">Projects.</a>
                            </li>
                            <li>
                                <a href="#contact" onClick={() => setIsNavOpen(false)} className="font-['Great_Sailor'] text-white text-6xl hover:text-[#85B97C]">Contact.</a>
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
                        z-index: 10;
                        opacity: 0.9;
                        display: flex;
                        flex-direction: column;
                        padding: 25px;
                        }`}
            </style>
        </section>
    )
}