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

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    function encode(data) {
        return Object.keys(data)
            .map(
                (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
            )
            .join("&");
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", name, email, message }),
        })
            .then(() => alert("Message sent!"))
            .catch((error) => alert(error));
    }


    return (
        <section id="contact" className="bg-zinc-900">
            <m.div ref={ref}
                   variants={boxVariant}
                   initial="hidden"
                   animate={control}
                className="flex-wrap-col relative m-auto lg:m-0">
                <div className="invisible lg:visible absolute bg-[#222A23] w-[70%] top-32 h-[600px] left-[20%]"></div>
                <div className="absolute w-[200px] h-6 bg-[#263d28] lg:h-3/5  top-28 left-[18%] lg:h-9 lg:left-[12%] lg:top-44 lg:w-[550px]"></div>
                <div className="absolute w-[85px] h-6 bg-[#263d28] lg:h-3/5  top-44 left-[18%] lg:hidden lg:h-9 lg:left-[12%] lg:top-44 lg:w-[550px]"></div>
                <div className="relative z-10 w-4/5 top-20 left-[13%] lg:top-32 lg:left-[8%]">
                    <h1 className="text-6xl w-2/5 lg:text-12xl lg:text-8xl text-white font-greatSailor lg:w-full">
                        Contact me.
                    </h1>
                </div>
                <div className="relative z-10 flex sm:flex-nowrap flex-wrap top-8 p-12">
                    <form netlify name="contact" onSubmit={handleSubmit} className="flex flex-col lg:m-0 w-full lg:py-8 mt-8 lg:mt-9">
                        <div className="relative flex-wrap-col m-auto justify-center lg:left-[30%] lg:m-0 w-[300px]">
                            <p className="text-sm text-white text-right font-['Futura']">Do you have any questions or do you want to work together? Please get in contact and I'll get back to you.</p>
                        </div>
                        <div className="relative flex-wrap-col m-auto justify-center lg:absolute pt-5 w-[300px] lg:w-[20%] lg:left-[62%] xl:left-[53%] xl:top-36">
                            <div className="relative mb-4 shadow-inner">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Name"
                                    className="w-full bg-gray-500 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder-gray-800 placeholder:font-['Futura'] placeholder:text-sm"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="relative mb-4">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    className="w-full bg-gray-500 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder-gray-800 placeholder:font-['Futura'] placeholder:text-sm"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="relative mb-4">
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Message"
                                    className="w-full bg-gray-500 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out placeholder-gray-800 placeholder:font-['Futura'] placeholder:text-sm"
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="text-white bg-zinc-700 py-1 px-2 focus:outline-none hover:bg-[#597554] hover:text-zinc-900 transition ease-in-out duration-1000 transform rounded-xl text-2xl relative right-0 shadow-md shadow-black font-greatSailor">
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