import React from "react";

export default function Projects() {
    return (
        <section id="projects" className="bg-zinc-900 flex">
            <div className="relative">
                <div className="absolute w-3/5 h-8 md:h-3/5 z-0 bg-[#222A23] top-44 left-[18%] md:left-1/4"></div>
                <div className="relative top-36 w-2/5 left-[10%] md:top-32 md:left-40">
                    <h1 className="text-6xl lg:text-12xl md:text-8xl text-white font-['Great_Sailor']">
                        Projects.
                    </h1>
                </div>
                <div className="relative flex-wrap-col m-auto justify-center top-36 w-fit md:top-32 md:left-40">
                    <div className="flex w-72 h-40 border-2 border-white z-10 m-10 rounded-lg">
                    </div>
                    <div className="flex w-72 h-40 border-2 border-white z-10 m-10 rounded-lg">
                    </div>
                    <div className="flex w-72 h-40 border-2 border-white z-10 m-10 rounded-lg">
                    </div>
                    <div className="flex w-72 h-40 border-2 border-white z-10 m-10 rounded-lg">
                    </div>
                    <div className="flex w-72 h-40 border-2 border-white z-10 m-10 rounded-lg">
                    </div>
                </div>
                <div className="relative top-36 w-2/5 h-32 left-[10%] md:top-32 md:left-40"></div>
            </div>
        </section>
    )
}