import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

export default function Splash() {
    return (
        <section id="splash" className="bg-zinc-900 h-screen relative">
            <div >
                <div className="inline absolute w-3/5 h-96 md:h-3/5 z-0 bg-[#222A23] top-44 left-[15%] md:left-1/4"></div>
                <div className="flex-wrap-col relative max-w-xs z-10 top-28 left-[10%] md:left-[15%]">
                    <h1 className="lg:text-[175px] md:text-[150px] text-8xl text-white font-['Great_Sailor']">
                        HELLO THERE!
                    </h1>
                </div>
                <div className="flex-wrap-col relative z-10 w-12 md:w-1/2 top-36 left-[20%] md:left-[45%] md:top-50 text-left">
                    <p className="text-5xl text-white font-['Great_Sailor'] md:text-5xl italic">I'm <span className="text-[#85B97C] not-italic"><span className="text-6xl md:text-7xl">G</span>eorge <span className="text-6xl md:text-7xl">O</span>akley</span>,</p><p className="text-5xl md:text-5xl text-white font-['Great_Sailor'] italic"><span className="whitespace-nowrap">a FULL</span>-STACK</p> <p className="text-5xl md:text-5xl text-white font-['Great_Sailor'] italic">DEVELOPER.</p>
                </div>
                <div className="z-10 w-auto flex relative justify-center top-56">
                    <a href="#about-me">
                        <FontAwesomeIcon icon="fa-solid fa-arrow-down" className="text-gray-700 hover:text-white text-4xl transition ease-in-out duration-1000 transform"/>
                    </a>
                </div>
            </div>
        </section>
    )
}