import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

export default function Splash() {
    return (
        <section id="splash" className="bg-zinc-900 min-h-screen z-999">
            <div className="relative">
                <div className="absolute w-[70%] h-[475px] md:h-4/5 z-0 bg-[#222A23] top-44 left-[15%] md:left-1/4"></div>
                <div className="relative max-w-xs z-10 top-36 left-[10%] md:left-[15%]">
                    <h1 className="lg:text-[175px] md:text-[150px] text-8xl text-white font-['Great_Sailor']">
                        HELLO THERE!
                    </h1>
                    <div className="z-10 w-12 md:w-1/2 mt-10 ml-[12%] md:left-[45%] md:top-50 text-left">
                        <p className="text-5xl text-white font-['Great_Sailor'] md:text-5xl italic">I'm <span className="text-[#85B97C] not-italic"><span className="text-6xl md:text-7xl">G</span>eorge <span className="text-6xl md:text-7xl">O</span>akley</span>,</p><p className="text-5xl md:text-5xl text-white font-['Great_Sailor'] italic"><span className="whitespace-nowrap">a FULL</span>-STACK</p> <p className="text-5xl md:text-5xl text-white font-['Great_Sailor'] italic">DEVELOPER.</p>
                    </div>
                    <div className="z-10 w-auto mt-10 flex justify-center">
                        <a href="#about-me">
                            <FontAwesomeIcon icon="fa-solid fa-arrow-down" className="text-gray-700 hover:text-white text-4xl transition ease-in-out duration-1000 transform"/>
                        </a>
                    </div>
                </div>
                <div className="relative top-36 w-2/5 h-32 left-[10%] md:top-32 md:left-40"></div>
            </div>
        </section>
    )
}