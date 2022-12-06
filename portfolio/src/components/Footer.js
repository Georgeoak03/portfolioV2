import React, {useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {motion as m, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";

export default function Footer() {
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
        <m.footer ref={ref}
                  variants={boxVariant}
                  initial="hidden"
                  animate={control}
                className="flex flex-col bg-zinc-900 z-20">
            <div className="invisible md:visible relative pin-b w-full bottom-0 z-20 flex flex-wrap items-center justify-between mt-auto py-4 px-8">
                <h2 className=" font-['Futura'] text-gray-500 text-md">George Oakley 2022</h2>
                <div>
                    <FontAwesomeIcon icon="fa-brands fa-linkedin" className="text-gray-500 text-6xl mr-8"/>
                    <FontAwesomeIcon icon="fa-solid fa-envelope" className="text-gray-500 text-6xl mr-8" />
                    <FontAwesomeIcon icon="fa-brands fa-github" className="text-gray-500 text-6xl" />
                </div>
            </div>
            <div className="md:hidden relative flex-wrap-col m-auto justify-center p-4">
                <div>
                    <a href="https://www.linkedin.com/in/george-oakley-84b95894">
                        <FontAwesomeIcon icon="fa-brands fa-linkedin" className="text-gray-500 text-6xl mr-10 hover:text-white transition ease-in-out duration-1000 transform"/>
                    </a>
                    <a href="mailto: george.oakley@hotmail.co.uk">
                        <FontAwesomeIcon icon="fa-solid fa-envelope" className="text-gray-500 text-6xl mr-10 hover:text-white transition ease-in-out duration-1000 transform" />
                    </a>
                    <a href="https://github.com/Georgeoak03">
                        <FontAwesomeIcon icon="fa-brands fa-github" className="text-gray-500 text-6xl hover:text-white transition ease-in-out duration-1000 transform" />
                    </a>
                </div>
                <h2 className=" font-['Futura'] text-gray-500 text-md flex justify-center pt-4">George Oakley 2022</h2>
            </div>
        </m.footer>
    )
}