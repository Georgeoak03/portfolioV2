import React, {useEffect} from "react";
import './Contact.css';
import {useInView} from "react-intersection-observer";
import {motion as m, useAnimation} from "framer-motion";

export default function Contact() {
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
        <section id="contact" className="bg-zinc-900">
            <m.div ref={ref}
                   variants={boxVariant}
                   initial="hidden"
                   animate={control}
                className="flex-wrap-col relative m-auto lg:m-0">
                <div className="invisible absolute z-0 bg-[#222A23] w-[70%] h-[475px] top-44 left-[15%] lg:visible lg:top-32 lg:h-[600px] lg:left-[20%]"></div>
                <div className="absolute w-[200px] h-6 lg:h-3/5 z-0 bg-[#263d28] top-40 left-[18%] lg:h-9 lg:left-[12%] lg:top-44 lg:w-[550px]"></div>
                <div className="absolute w-[75px] h-6 lg:h-3/5 z-0 bg-[#263d28] top-56 left-[18%] lg:hidden lg:h-9 lg:left-[12%] lg:top-44 lg:w-[550px]"></div>
                <div className="relative z-10 w-4/5 top-32 left-[13%] lg:top-32 lg:left-[8%]">
                    <h1 className="text-6xl w-2/5 lg:text-12xl lg:text-8xl text-white font-['Great_Sailor'] lg:w-full">
                        Contact me.
                    </h1>
                </div>
                <div className="relative z-10 flex sm:flex-nowrap flex-wrap top-14 p-12">
                    <form name="contact" className="flex flex-col lg:m-0 w-full lg:py-8 mt-8 lg:mt-9">
                        <div className="relative flex-wrap-col m-auto justify-center lg:left-[30%] lg:m-0 w-[300px]">
                            <p className="text-sm text-white text-right font-['Futura']">Do you have any questions or do you want to work together? Please get in contact and I'll get back to you.</p>
                        </div>
                        <div className="relative flex-wrap-col m-auto justify-center lg:absolute pt-5 w-[300px] lg:w-[20%] lg:left-[62%] xl:left-[53%] xl:top-36">
                            <div className="relative mb-4">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Name"
                                    className="w-full bg-gray-500 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder-gray-800 placeholder:font-['Futura'] placeholder:text-sm"
                                />
                            </div>
                            <div className="relative mb-4">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    className="w-full bg-gray-500 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder-gray-800 placeholder:font-['Futura'] placeholder:text-sm"
                                />
                            </div>
                            <div className="relative mb-4">
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Message"
                                    className="w-full bg-gray-500 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out placeholder-gray-800 placeholder:font-['Futura'] placeholder:text-sm"
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="text-white bg-gray-700 py-1 px-2 focus:outline-none hover:bg-indigo-600 rounded-xl text-2xl relative right-0 drop-shadow-2xl shadow-2xl font-['Great_Sailor']">
                                    Submit.
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </m.div>
        </section>
    )
}