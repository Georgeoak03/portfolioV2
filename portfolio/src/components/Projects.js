import React, {useEffect} from "react";
import IcePace from '../images/IcePace.png';
import SurfwaveFury from '../images/SurfwaveFury.png';
import IglooInbox from '../images/IglooInbox.png';
import ArcticExchange from '../images/ArcticExchange.png';
import WineCollector from '../images/WineCollector.png';
import {motion as m, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";


export default function Projects() {
    const boxVariant = {
        visible: { opacity: 1},
        hidden: { opacity: 0},
    }

    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    return (
        <section id="projects">
            <m.div ref={ref}
                 variants={boxVariant}
                 initial="hidden"
                 animate={control}
                 className="relative">
                <div className="absolute bg-[#263d28] w-52 h-8 z-0 top-28 left-[18%] lg:top-44 lg:h-10 lg:left-[11%] lg:w-[350px] xl:left-[20%]"></div>
                <div className="relative top-20 w-2/5 left-[10%] lg:top-32 lg:left-[7%] xl:left-[18%]">
                    <h1 className="text-6xl lg:text-8xl text-white font-greatSailor">
                        Projects.
                    </h1>
                </div>
                <div className="relative flex-wrap-col m-auto justify-center top-24 w-fit lg:top-32 lg:w-[700px] lg:h-[700px] lg:justify-between xl:w-[800px] xl:h-[800px]">
                    <div className="lg:m-8 lg:grid lg:grid-cols-3 lg:grid-rows-3 lg:gap-5 lg:justify-evenly">
                        <div className="relative flex-wrap-col w-72 h-40 z-10 m-10 rounded-xl bg-[#292929] drop-shadow-2xl shadow-2xl shadow-black p-5 lg:p-3 lg:m-0 lg:col-span-1 lg:w-auto xl:h-52">
                            <div className="absolute z-0 w-36 h-36 right-5 h-full overflow-hidden">
                                <img src={IcePace} alt="IcePace" className="opacity-[.15] blur-[1px]"/>
                            </div>
                            <a href="https://dev.io-academy.uk/projects/2022-july/icepace/" className="h-full relative">
                                <div className="w-full z-10">
                                    <h3 className="text-white font-greatSailor text-2xl">Ice Pace</h3>
                                </div>
                                <div className="w-1/2 z-10 md:w-full">
                                    <h4 className="text-white font-['Futura'] text-sm md:text-xs">SOCIAL MEDIA APP</h4>
                                </div>
                                <div className="w-1/2 z-10 md:w-full">
                                    <p className="text-white font-['Futura'] text-xs">OOP-based & SQL for backend.</p>
                                </div>
                            </a>
                        </div>
                        <div className="relative flex-wrap-col w-72 h-40 z-10 m-10 rounded-xl bg-[#292929] drop-shadow-2xl shadow-2xl shadow-black p-5 lg:p-3 lg:flex lg:col-span-2 lg:m-0 lg:w-auto xl:h-52">
                            <div className="absolute z-0 w-36 h-36 left-5 h-full overflow-hidden lg:top-0 lg:p-5">
                                <img src={IglooInbox} alt="Igloo Inbox" className="opacity-[.15] blur-[1px]"/>
                            </div>
                            <a href="https://2022-july-igloo-inbox.dev.io-academy.uk/" className="relative h-full">
                                <div className="left-1/2 flex-wrap-col">
                                    <div className="w-full z-10">
                                        <h3 className="text-white font-greatSailor text-2xl text-right">Igloo Inbox</h3>
                                    </div>
                                    <div className="z-10">
                                        <h4 className="text-white font-['Futura'] text-sm md:text-xs text-right">EMAIL CLIENT</h4>
                                    </div>
                                    <div className="z-10">
                                        <p className="text-white font-['Futura'] text-xs text-right">React & Bootstrap based email client. Create, read, send, delete functionality through API.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="relative flex-wrap-col w-72 h-40 z-10 m-10 rounded-xl bg-[#292929] drop-shadow-2xl shadow-2xl shadow-black p-5 lg:p-3 lg:flex lg:col-span-3 lg:m-0 lg:w-auto xl:h-52">
                            <div className="absolute z-0 w-36 h-36 right-5 h-full overflow-hidden">
                                <img src={SurfwaveFury} alt="Surfwave Fury" className="opacity-[.15] blur-[1px]"/>
                            </div>
                            <a href="https://dev.io-academy.uk/projects/2022-july/surfwave-fury/index.html" className="relative h-full">
                                <div className="w-full z-10">
                                    <h3 className="text-white font-greatSailor text-2xl">Surfwave Fury</h3>
                                </div>
                                <div className="w-1/2 z-10">
                                    <h4 className="text-white font-['Futura'] text-sm md:text-xs">PENGUIN SURFING GAME</h4>
                                </div>
                                <div className="w-1/2 z-10">
                                    <p className="text-white font-['Futura'] text-xs">JavaScript-based keyboard racing game</p>
                                </div>
                            </a>
                        </div>
                        <div className="relative flex-wrap-col w-72 h-40 z-10 m-10 rounded-xl bg-[#292929] drop-shadow-2xl shadow-2xl shadow-black p-5 lg:p-3 lg:m-0 lg:col-span-2 lg:w-auto xl:h-52">
                            <div className="absolute z-0 w-36 h-36 left-5 overflow-hidden">
                                <img src={ArcticExchange} alt="Arctic Exchange" className="opacity-[.15] blur-[1px]"/>
                            </div>
                            <a href="https://2022-jul-arctic-exchange.dev.io-academy.uk/" className="relative h-full">
                                <div className="left-1/2 flex-wrap-col">
                                    <div className="w-full z-10">
                                        <h3 className="text-white font-greatSailor text-2xl text-right">Arctic Exchange</h3>
                                    </div>
                                    <div className="z-10">
                                        <h4 className="text-white font-['Futura'] text-sm md:text-xs text-right">FESTIVE GIFT EXCHANGE</h4>
                                    </div>
                                    <div className="z-10">
                                        <p className="text-white font-['Futura'] text-xs text-right">React & Bootstrap based email client. Create, read, send, delete functionality through API.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="relative flex-wrap-col w-72 h-40 z-10 m-10 rounded-xl bg-[#292929] drop-shadow-2xl shadow-2xl shadow-black p-5 lg:p-3 lg:pt-1 lg:m-0 lg:col-span-1 lg:w-auto xl:h-52">
                            <div className="absolute z-0 right-5 w-36 h-36 object-fill overflow-hidden">
                                <img src={WineCollector} alt="Wine Collector" className="opacity-[.15] blur-[1px]"/>
                            </div>
                            <div className="relative h-full">
                                <div className="w-full z-10">
                                    <h3 className="text-white font-greatSailor text-2xl">Wine Library</h3>
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
            </m.div>
            <div className="relative top-36 w-2/5 h-56 lg:h-72 left-[10%] md:top-32 md:left-40"></div>
        </section>
    )
}