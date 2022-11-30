import React from "react";
import IcePace from './IcePace.png';
import SurfwaveFury from './SurfwaveFury.png';
import IglooInbox from './IglooInbox.png';
import ArcticExchange from './ArcticExchange.png';


export default function Projects() {
    return (
        <section id="projects" className="bg-zinc-900">
            <div className="relative">
                <div className="absolute w-52 h-8 z-0 bg-[#263d28] top-44 left-[18%] lg:h-10 lg:left-[11%] lg:w-[350px] xl:left-[20%]"></div>
                <div className="relative top-36 w-2/5 left-[10%] lg:top-32 lg:left-[7%] xl:left-[18%]">
                    <h1 className="text-6xl lg:text-12xl lg:text-8xl text-white font-['Great_Sailor']">
                        Projects.
                    </h1>
                </div>
                <div className="relative flex-wrap-col m-auto justify-center top-36 w-fit lg:w-[500px] lg:top-28 lg:w-[700px] lg:justify-between xl:w-[800px] xl:h-[800px]">
                    <div className="lg:m-8 lg:grid lg:grid-cols-3 lg:gap-5 lg:justify-evenly">
                        <div className="flex-wrap-col w-72 h-40 z-10 m-10 rounded-xl bg-[#292929] drop-shadow-2xl shadow-2xl border-[#0d0d0d] border-[1px] border-solid p-5 lg:p-3 lg:m-0 lg:col-span-1 lg:w-auto xl:h-52">
                            <div className="relative h-full">
                                <div className="absolute z-0 w-1/2 bottom-0 right-0 overflow-hidden md:h-3/4 md:w-auto">
                                    <img src={IcePace} alt="IcePace" className="opacity-[.15] blur-[1px]"/>
                                </div>
                                <div className="w-full z-10">
                                    <h3 className="text-white font-['Great_Sailor'] text-2xl">Ice Pace</h3>
                                </div>
                                <div className="w-1/2 z-10 md:w-full">
                                    <h4 className="text-white font-['Futura'] text-sm md:text-xs">SOCIAL MEDIA APP</h4>
                                </div>
                                <div className="w-1/2 z-10 md:w-full">
                                    <p className="text-white font-['Futura'] text-xs">OOP-based & SQL for backend.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-wrap-col w-72 h-40 z-10 m-10 rounded-xl bg-[#292929] drop-shadow-2xl shadow-2xl border-[#0d0d0d] border-[1px] border-solid p-5 lg:p-3 lg:flex lg:col-span-2 lg:m-0 lg:w-auto xl:h-52">
                            <div className="relative h-full">
                                <div className="absolute z-0 w-1/2 bottom-0 left-0 md:w-3/4 md:h-3/4 md:overflow-hidden">
                                    <img src={IglooInbox} alt="Igloo Inbox" className="opacity-[.15] blur-[1px]"/>
                                </div>
                                <div className="left-1/2 flex-wrap-col">
                                    <div className="w-full z-10">
                                        <h3 className="text-white font-['Great_Sailor'] text-2xl text-right">Igloo Inbox</h3>
                                    </div>
                                    <div className="z-10">
                                        <h4 className="text-white font-['Futura'] text-sm md:text-xs text-right">EMAIL CLIENT</h4>
                                    </div>
                                    <div className="z-10">
                                        <p className="text-white font-['Futura'] text-xs text-right">React & Bootstrap based email client. Create, read, send, delete functionality through API.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-wrap-col w-72 h-40 z-10 m-10 rounded-xl bg-[#292929] drop-shadow-2xl shadow-2xl border-[#0d0d0d] border-[1px] border-solid p-5 lg:p-3 lg:col-span-3 lg:m-0 lg:w-auto xl:h-52">
                            <div className="relative h-full">
                                <div className="absolute z-0 w-1/2 bottom-0 right-0 md:w-4/5 md:h-3/4 md:overflow-hidden">
                                    <img src={SurfwaveFury} alt="Surfwave Fury" className="opacity-[.15] blur-[1px]"/>
                                </div>
                                <div className="w-full z-10">
                                    <h3 className="text-white font-['Great_Sailor'] text-2xl">Surfwave Fury</h3>
                                </div>
                                <div className="w-1/2 z-10">
                                    <h4 className="text-white font-['Futura'] text-sm md:text-xs">PENGUIN SURFING GAME</h4>
                                </div>
                                <div className="w-1/2 z-10">
                                    <p className="text-white font-['Futura'] text-xs">JavaScript-based keyboard racing game</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-wrap-col w-72 h-40 z-10 m-10 rounded-xl bg-[#292929] drop-shadow-2xl shadow-2xl border-[#0d0d0d] border-[1px] border-solid p-5 lg:p-3 lg:m-0 lg:col-span-2 lg:w-auto xl:h-52">
                            <div className="relative h-full">
                                <div className="absolute z-0 w-1/2 bottom-0 left-0 md:w-3/4 md:h-3/4 md:overflow-hidden">
                                    <img src={ArcticExchange} alt="Arctic Exchange" className="opacity-[.15] blur-[1px]"/>
                                </div>
                                <div className="left-1/2 flex-wrap-col">
                                    <div className="w-full z-10">
                                        <h3 className="text-white font-['Great_Sailor'] text-2xl text-right">Arctic Exchange</h3>
                                    </div>
                                    <div className="z-10">
                                        <h4 className="text-white font-['Futura'] text-sm md:text-xs text-right">FESTIVE GIFT EXCHANGE</h4>
                                    </div>
                                    <div className="z-10">
                                        <p className="text-white font-['Futura'] text-xs text-right">React & Bootstrap based email client. Create, read, send, delete functionality through API.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-wrap-col w-72 h-40 z-10 m-10 rounded-xl bg-[#292929] drop-shadow-2xl shadow-2xl border-[#0d0d0d] border-[1px] border-solid p-5 lg:p-3 lg:pt-1 lg:m-0 lg:col-span-1 lg:w-auto xl:h-52">
                            <div className="relative h-full">
                                <div className="absolute z-0 w-1/2 bottom-0 right-0 overflow-hidden md:h-3/4 md:w-auto">
                                    <img src={IcePace} alt="IcePace" className="opacity-[.15] blur-[1px]"/>
                                </div>
                                <div className="w-full z-10">
                                    <h3 className="text-white font-['Great_Sailor'] text-2xl">Wine Library</h3>
                                </div>
                                <div className="w-1/2 z-10 md:w-full">
                                    <h4 className="text-white font-['Futura'] text-sm md:text-xs">COLLECTION APP</h4>
                                </div>
                                <div className="w-1/2 z-10 md:w-full">
                                    <p className="text-white font-['Futura'] text-xs">PHP & SQL based app using communication with a database to store aa wine collection.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative top-36 w-2/5 h-32 left-[10%] md:top-32 md:left-40"></div>
            </div>
        </section>
    )
}