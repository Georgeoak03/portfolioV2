import React from "react";

export default function Contact() {
    return (
        <section id="contact" className="bg-zinc-900 min-h-screen">
            <div className="">
                <div className="flex-wrap-col relative m-auto md:m-0">
                    <div className="invisible absolute z-0 bg-[#222A23] w-[70%] h-[475px] top-44 left-[15%] md:visible md:top-32 md:h-[600px] md:left-[20%]"></div>
                    <div className="absolute w-[35%] h-6 md:h-3/5 z-0 bg-[#263d28] top-40 left-[18%] md:h-9 md:left-[12%] md:top-44 md:w-[550px]"></div>
                    <div className="relative z-10 w-4/5 top-32 left-[10%] md:top-32 md:left-[8%]">
                        <h1 className="text-6xl w-2/5 lg:text-12xl md:text-8xl text-white font-['Great_Sailor'] md:w-full">
                            Contact me.
                        </h1>
                    </div>
                    <div className="relative z-10 flex sm:flex-nowrap flex-wrap top-14 p-12">
                        <form name="contact" className="flex flex-col md:m-0 w-full md:py-8 mt-8 md:mt-9">
                            <div className="relative pl-[12%] md:w-[40%] md:left-[20%]">
                                <p className="text-sm text-white text-right font-['Futura']">Do you have any questions or do you want to work together? Please get in contact and I'll get back to you.</p>
                            </div>
                            <div className="pt-5 md:w-[20%] md:absolute md:left-[62%]">
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
                    <footer>
                        <div className="relative w-full z-20 flex flex-wrap items-center justify-between mx-auto p-1 px-4">
                            <a href="#splash" className="font-['Great_Sailor'] text-[#85B97C] text-6xl">G<span className="text-white">.</span>O<span className="text-white">.</span></a>
                        </div>
                    </footer>
                </div>
            </div>
        </section>
    )
}