import React from "react";

export default function Contact() {
    return (
        <section id="contact" className="bg-zinc-900 min-h-screen">
            <div className="">
                <div className="flex-wrap-col relative m-auto md:m-0">
                    <div className="absolute w-[35%] h-6 md:h-3/5 z-0 bg-[#263d28] top-40 left-[18%] md:left-1/4"></div>
                    <div className="absolute w-[20%] h-6 md:h-3/5 z-0 bg-[#263d28] top-56 left-[18%] md:left-1/4"></div>
                    <div className="relative z-10 w-4/5 top-32 left-[10%] md:top-32 md:left-40">
                        <h1 className="text-6xl w-2/5 lg:text-12xl md:text-8xl text-white font-['Great_Sailor']">
                            Contact me.
                        </h1>
                    </div>
                    <div className="relative z-10 flex sm:flex-nowrap flex-wrap top-14 p-12">
                        <form name="contact" className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                            <div className="relative pl-[12%]">
                                <p className="text-sm text-white text-right font-['Futura']">Do you have any questions or do you want to work together? Please get in contact and I'll get back to you.</p>
                            </div>
                            <div className="pt-5">
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
                                        className="text-white bg-gray-700 py-1 px-2 focus:outline-none hover:bg-indigo-600 rounded-xl text-2xl relative right-0 drop-shadow-2xl shadow-2xl border-[#0d0d0d] border-[1px] border-solid font-['Great_Sailor']">
                                        Submit.
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}