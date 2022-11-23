import React from "react";
import IcePace from './IcePace.png';
import SurfwaveFury from './SurfwaveFury.png';
import IglooInbox from './IglooInbox.png';
import ArcticExchange from './ArcticExchange.png';


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
                        <div className="relative h-full">
                            <div className="absolute z-0 w-1/2 bottom-0 right-0">
                                <img src={IcePace} alt="IcePace" className="opacity-[.15] blur-[1px]"/>
                            </div>
                            <div className="w-full z-10">
                                <h3 className="text-white font-['Great_Sailor'] text-2xl">Ice Pace</h3>
                            </div>
                            <div className="w-1/2 z-10">
                                <h4 className="text-white font-['Futura'] text-sm">SOCIAL MEDIA APP</h4>
                            </div>
                            <div className="w-1/2 z-10">
                                <p className="text-white font-['Futura'] text-xs">OOP-based & SQL for backend.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-wrap-col w-72 h-40 z-10 m-10 rounded-xl bg-[#292929] drop-shadow-2xl shadow-2xl border-[#0d0d0d] border-[1px] border-solid p-5">
                        <div className="relative h-full">
                            <div className="absolute z-0 w-1/2 bottom-0 left-0">
                                <img src={IglooInbox} alt="Igloo Inbox" className="opacity-[.15] blur-[1px]"/>
                            </div>
                            <div className="left-1/2 flex-wrap-col">
                                <div className="w-full z-10">
                                    <h3 className="text-white font-['Great_Sailor'] text-2xl text-right">Igloo Inbox</h3>
                                </div>
                                <div className="z-10">
                                    <h4 className="text-white font-['Futura'] text-sm text-right">EMAIL CLIENT</h4>
                                </div>
                                <div className="z-10">
                                    <p className="text-white font-['Futura'] text-xs text-right">React & Bootstrap based email client. Create, read, send, delete functionality through API.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-wrap-col w-72 h-40 z-10 m-10 rounded-xl bg-[#292929] drop-shadow-2xl shadow-2xl border-[#0d0d0d] border-[1px] border-solid p-5">
                        <div className="relative h-full">
                            <div className="absolute z-0 w-1/2 bottom-0 right-0">
                                <img src={SurfwaveFury} alt="Surfwave Fury" className="opacity-[.15] blur-[1px]"/>
                            </div>
                            <div className="w-full z-10">
                                <h3 className="text-white font-['Great_Sailor'] text-2xl">Surfwave Fury</h3>
                            </div>
                            <div className="w-1/2 z-10">
                                <h4 className="text-white font-['Futura'] text-sm">PENGUIN SURFING GAME</h4>
                            </div>
                            <div className="w-1/2 z-10">
                                <p className="text-white font-['Futura'] text-xs">JavaScript-based keyboard racing game</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-wrap-col w-72 h-40 z-10 m-10 rounded-xl bg-[#292929] drop-shadow-2xl shadow-2xl border-[#0d0d0d] border-[1px] border-solid p-5">
                        <div className="relative h-full">
                            <div className="absolute z-0 w-1/2 bottom-0 left-0">
                                <img src={ArcticExchange} alt="Arctic Exchange" className="opacity-[.15] blur-[1px]"/>
                            </div>
                            <div className="left-1/2 flex-wrap-col">
                                <div className="w-full z-10">
                                    <h3 className="text-white font-['Great_Sailor'] text-2xl text-right">Arctic Exchange</h3>
                                </div>
                                <div className="z-10">
                                    <h4 className="text-white font-['Futura'] text-sm text-right">FESTIVE GIFT EXCHANGE</h4>
                                </div>
                                <div className="z-10">
                                    <p className="text-white font-['Futura'] text-xs text-right">React & Bootstrap based email client. Create, read, send, delete functionality through API.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-wrap-col w-72 h-40 z-10 m-10 rounded-xl bg-[#292929] drop-shadow-2xl shadow-2xl border-[#0d0d0d] border-[1px] border-solid p-5">
                        <div className="relative h-full">
                            <div className="absolute z-0 w-1/2 bottom-0 right-0">
                                <img src={IcePace} alt="IcePace" className="opacity-[.15] blur-[1px]"/>
                            </div>
                            <div className="w-full z-10">
                                <h3 className="text-white font-['Great_Sailor'] text-2xl">Wine Library</h3>
                            </div>
                            <div className="w-1/2 z-10">
                                <h4 className="text-white font-['Futura'] text-sm">COLLECTION APP</h4>
                            </div>
                            <div className="w-1/2 z-10">
                                <p className="text-white font-['Futura'] text-xs">PHP & SQL based app using communication with a database to store aa wine collection.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative top-36 w-2/5 h-32 left-[10%] md:top-32 md:left-40"></div>
            </div>
        </section>
    )
}