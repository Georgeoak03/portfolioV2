import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useEffect} from "react";
import { useAnimation, motion as m } from "framer-motion";
import { useInView } from "react-intersection-observer";
import './Splash.css';

export default function Splash() {
    const boxVariant = {
        visible: { opacity: 1},
        hidden: { opacity: 0,
            transition: { duration: 6 }
        }
    }

    // const item = {
    //     visible: { opacity: 1},
    //     hidden: { opacity: 0,
    //         transition: { duration: 1 }
    //     }
    // }

    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }}, [control, inView]);

    return (
        <section id="splash" className="min-h-screen">
            <m.div ref={ref}
                   variants={boxVariant}
                   initial="hidden"
                   animate={control}
                   className="h-auto">
                <div className="relative">
                    <div className="relative h-fit left-[10%] md:left-[25%] lg:left-[35%] w-screen">
                        <div className="absolute bg-[#3b403b] top-36 left-1 w-52 h-52 lg:w-72 lg:h-72 lg:top-64 lg:left-4 rounded-full filter blur-xl lg:blur-2xl animate-blob overflow-hidden"></div>
                        <div className="absolute bg-[#30332f] top-44 left-10 w-52 h-52 lg:left-36 lg:top-72 lg:w-72 lg:h-72 rounded-full filter blur-xl lg:blur-2xl opacity-90 animate-blob animation-delay-2000 overflow-hidden"></div>
                        <div className="absolute bg-[#3b403b] top-72 left-10 w-52 h-52 md:top-96 lg:left-20 lg:w-72 lg:h-72 rounded-full filter blur-xl lg:blur-3xl animate-blob animation-delay-4000 overflow-hidden"></div>
                        <div className="absolute bg-[#3b403b] invisible lg:visible top-48 -left-52 w-72 h-72 rounded-full filter blur-2xl animate-blob animation-delay-6000"></div>
                        <div className="absolute bg-[#3b403b] invisible md:visible top-56 -left-40 w-72 h-72 rounded-full filter blur-2xl animate-blob animation-delay-1000"></div>
                        <div className="absolute bg-[#3b403b] invisible md:visible top-[475px] w-72 h-72  md:left-24 lg:left-64 rounded-full filter blur-3xl animate-blob animation-delay-6000"></div>
                    </div>
                    <div className="relative z-10 max-w-xs top-28 left-[10%] md:left-[15%] lg:left-[25%] lg:top-36">
                        <h1 className="text-8xl md:text-[150px] lg:text-[175px] text-white font-greatSailor">
                            HELLO THERE!
                        </h1>
                    </div>
                    <div className="relative z-10 w-52 left-[20%] mr-[20%] mt-28 md:left-[32%] lg:mt-36 lg:left-[45%] lg:w-auto text-left">
                        <p className="text-3xl text-zinc-300 font-greatSailor italic inline-block w-auto md:text-5xl">I'm
                            <p className="text-[#85B97C] text-5xl not-italic">
                                <span className="text-6xl md:text-7xl">G</span>eorge
                                <span className="text-6xl md:text-7xl"> O</span>akley,
                            </p>
                        </p>
                        <p className="text-3xl md:text-5xl text-zinc-300 font-greatSailor italic">
                            <span className="whitespace-nowrap w-auto inline-block">a FULL</span>-STACK
                        </p>
                        <p className="text-3xl md:text-5xl text-zinc-300 font-greatSailor italic w-auto inline-block">DEVELOPER.
                        </p>
                    </div>
                </div>
                <div className="absolute pin-b bottom-10 lg:bottom-5 z-10 left-1/2 w-fit m-auto flex justify-center">
                    <a href="#about-me">
                        <FontAwesomeIcon icon="fa-solid fa-arrow-down" className="text-gray-700 hover:text-white text-4xl hover:animate-bounce transition ease-in-out duration-1000 transform"/>
                    </a>
                </div>
            </m.div>
            <div className="relative h-72"></div>
        </section>
    )
}