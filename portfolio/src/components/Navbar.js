import React from "react";

export default function Navbar() {
    return (
        <section id="navbar">
            <nav id="navbar" className="fixed w-full z-20 top-0 border-b-2 border-white bg-zinc-900 bg-opacity-95 flex flex-wrap items-center justify-between mx-auto">
                <a href="#splash" className="font-['Great_Sailor'] text-[#85B97C] text-6xl">G<span className="text-white">.</span>O<span className="text-white">.</span></a>
                <div className="hidden w-full md:block md:w-auto " id="navbar-default">
                    <a href="#about-me" className="font-['Great_Sailor'] text-white text-6xl collapse md:visible hover:text-[#85B97C]">About.</a>
                    <a href="#projects" className="font-['Great_Sailor'] text-white text-6xl collapse md:visible hover:text-[#85B97C]">Projects.</a>
                    <a href="#contact" className="font-['Great_Sailor'] text-white text-6xl collapse md:visible hover:text-[#85B97C]">Contact</a>
                </div>
            </nav>
        </section>
    )
}