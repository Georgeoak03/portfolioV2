import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

export default function Splash() {
    return (
        <section id="splash" className="bg-zinc-900 min-h-screen z-999">
            <div>
                <div className="relative">
                    <div className="relative h-fit left-[10%] md:left-[25%] lg:left-[35%] w-screen">
                        {/*<div className="hidden absolute z-0 bg-[#222A23] w-[70%] h-[475px] top-44 left-[15%] md:top-52 md:h-[55%] md:left-1/4 xl:w-[55%]"></div>*/}
                        <div className="invisible lg:visible absolute top-48 -left-52 w-72 h-72 bg-[#222A23] rounded-full  filter blur-xl  animate-blob animation-delay-6000"></div>
                        <div className="absolute top-44 left-4 w-72 h-72 bg-[#3b403b] rounded-full  filter blur-xl  animate-blob overflow-hidden"></div>
                        <div className="absolute top-44 left-36 w-72 h-72 bg-[#30332f] rounded-full  filter blur-xl opacity-90 animate-blob animation-delay-2000 overflow-hidden"></div>
                        <div className="absolute top-96 left-20 w-72 h-72 bg-[#222A23] rounded-full  filter blur-xl  animate-blob animation-delay-4000 overflow-hidden"></div>
                        <div className="collapse lg:visible absolute top-[475px] left-64 w-72 h-72 bg-[#1c1f1d] rounded-full  filter blur-xl  animate-blob animation-delay-6000"></div>
                    </div>
                    <div className="relative max-w-xs z-10 top-36 left-[10%] md:left-[15%]">
                        <h1 className="lg:text-[175px] md:text-[150px] text-8xl text-white font-['Great_Sailor']">
                            HELLO THERE!
                        </h1>
                    </div>
                    <div className="relative z-10 w-auto inline-block mt-48 ml-[18%] md:left-[20%] lg:left-[30%] text-left">
                        <p className="text-5xl text-white font-['Great_Sailor'] md:text-5xl italic w-auto inline-block">I'm <span className="text-[#85B97C] not-italic"><span className="text-6xl md:text-7xl">G</span>eorge <span className="text-6xl md:text-7xl">O</span>akley</span>,</p><p className="text-5xl md:text-5xl text-white font-['Great_Sailor'] italic"><span className="whitespace-nowrap w-auto inline-block">a FULL</span>-STACK</p> <p className="text-5xl md:text-5xl text-white font-['Great_Sailor'] italic w-auto inline-block">DEVELOPER.</p>
                    </div>
                    <div className="relative top-36 w-2/5 h-32 left-[10%] md:top-32 md:left-40"></div>
                </div>
                <div className="relative bottom-10 z-10 w-auto mt-28 flex justify-center w-screen hover:animate-bounce">
                    <a href="#about-me">
                        <FontAwesomeIcon icon="fa-solid fa-arrow-down" className="text-gray-700 hover:text-white text-4xl transition ease-in-out duration-1000 transform"/>
                    </a>
                </div>
            </div>
        </section>
    )
}