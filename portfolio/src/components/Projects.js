import React from "react";

export default function Projects() {
    return (
        <section id="projects" className="bg-zinc-900 flex">
            <div className="relative">
                <div className="absolute w-3/5 h-8 md:h-3/5 z-0 bg-[#263d28] top-44 left-[18%] md:left-1/4"></div>
                <div className="relative top-36 w-2/5 left-[10%] md:top-32 md:left-40">
                    <h1 className="text-6xl lg:text-12xl md:text-8xl text-white font-['Great_Sailor']">
                        Projects.
                    </h1>
                </div>
                <div className="relative flex-wrap-col m-auto justify-center top-36 w-fit md:top-32 md:left-40">
                    <div className="flex-wrap-col w-72 h-40 z-10 m-10 rounded-xl bg-[#292929] drop-shadow-2xl shadow-2xl border-[#0d0d0d] border-[1px] border-solid p-5">
                        <div className="relative w-full">
                            <h3 className="text-white font-['Great_Sailor'] text-2xl">Ice Pace</h3>
                        </div>
                        <div className="relative w-1/2">
                            <h4 className="text-white font-['Futura'] text-sm">SOCIAL MEDIA APP</h4>
                        </div>
                        <div className="relative w-1/2">
                            <p className="text-white font-['Futura'] text-xs">OOP-based & SQL for backend.</p>
                        </div>
                    </div>
                    <div className="flex w-72 h-40 z-10 m-10 rounded-xl bg-[#292929] drop-shadow-2xl shadow-2xl border-[#0d0d0d] border-[1px] border-solid">
                    </div>
                    <div className="flex w-72 h-40 z-10 m-10 rounded-xl bg-[#292929] drop-shadow-2xl shadow-2xl border-[#0d0d0d] border-[1px] border-solid">
                    </div>
                    <div className="flex w-72 h-40 z-10 m-10 rounded-xl bg-[#292929] drop-shadow-2xl shadow-2xl border-[#0d0d0d] border-[1px] border-solid">
                    </div>
                    <div className="flex w-72 h-40 z-10 m-10 rounded-xl bg-[#292929] drop-shadow-2xl shadow-2xl border-[#0d0d0d] border-[1px] border-solid">
                    </div>
                </div>
                <div className="relative top-36 w-2/5 h-32 left-[10%] md:top-32 md:left-40"></div>
            </div>
        </section>
    )
}