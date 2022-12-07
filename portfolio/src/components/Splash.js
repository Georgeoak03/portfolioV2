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

    const item = {
        visible: { opacity: 1},
        hidden: { opacity: 0,
            transition: { duration: 1 }
        }
    }

    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }}, [control, inView]);

    return (
        <section id="splash" className="bg-zinc-900 min-h-screen z-999">
            <m.div ref={ref}
                   variants={boxVariant}
                   initial="hidden"
                   animate={control}
                   className="h-auto">
                <div className="relative">
                    <div className="relative h-fit left-[10%] md:left-[25%] lg:left-[35%] w-screen">
                        <div className="invisible lg:visible absolute top-48 -left-52 w-72 h-72 bg-[#3b403b] rounded-full filter blur-3xl animate-blob animation-delay-6000"></div>
                        <div className="invisible lg:visible absolute top-56 -left-40 w-72 h-72 bg-[#3b403b] rounded-full filter blur-3xl animate-blob animation-delay-1000"></div>
                        <div className="absolute top-44 left-4 w-72 h-72 bg-[#3b403b] rounded-full filter blur-2xl lg:blur-3xl animate-blob overflow-hidden"></div>
                        <div className="absolute top-44 left-36 w-72 h-72 bg-[#30332f] rounded-full filter blur-2xl lg:blur-3xl opacity-90 animate-blob animation-delay-2000 overflow-hidden"></div>
                        <div className="absolute top-96 left-20 w-72 h-72 bg-[#3b403b] rounded-full filter blur-3xl animate-blob animation-delay-4000 overflow-hidden"></div>
                        <div className="collapse lg:visible absolute top-[475px] left-64 w-72 h-72 bg-[#3b403b rounded-full filter blur-3xl  animate-blob animation-delay-6000"></div>
                    </div>
                    <div className="relative max-w-xs z-10 top-36 left-[10%] md:left-[15%]">
                        <h1 className="lg:text-[175px] md:text-[150px] text-8xl text-white font-greatSailor">
                            HELLO THERE!
                        </h1>
                    </div>
                    <div className="relative z-10 w-auto inline-block mt-48 ml-[18%] md:left-[20%] lg:left-[30%] text-left">
                        <p className="text-5xl text-white font-greatSailor md:text-5xl italic w-auto inline-block">I'm <span className="text-[#85B97C] not-italic"><m.span ref={ref}
                                                                                                                                                                           variants={item}
                                                                                                                                                                           initial="hidden"
                                                                                                                                                                           animate={control} className="h-auto text-6xl md:text-7xl">G</m.span>eorge <span className="text-6xl md:text-7xl">O</span>akley</span>,</p><p className="text-5xl md:text-5xl text-white font-greatSailor italic"><span className="whitespace-nowrap w-auto inline-block">a FULL</span>-STACK</p> <p className="text-5xl md:text-5xl text-white font-greatSailor italic w-auto inline-block">DEVELOPER.</p>
                    </div>
                </div>
                <div className="relative bottom-10 z-10 w-auto mt-28 flex justify-center w-screen hover:animate-bounce">
                    <a href="#about-me">
                        <FontAwesomeIcon icon="fa-solid fa-arrow-down" className="text-gray-700 hover:text-white text-4xl transition ease-in-out duration-1000 transform"/>
                    </a>
                </div>
            </m.div>
            <div className="relative top-36 w-2/5 h-32 left-[10%] md:top-32 md:left-40"></div>
        </section>
    )
}