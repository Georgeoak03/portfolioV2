import React, {useEffect} from "react";
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import photoOfMe from './photo-of-me.png';
import postman from './postman.svg';
import mongodb from './mongodb.svg';
import mysql from './mysql.svg';
import {motion as m, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";

export default function About() {
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
        <section id="about-me">
            <m.div ref={ref}
                 variants={boxVariant}
                 initial="hidden"
                 animate={control}
                className="relative min-h-screen">
                <div className="invisible lg:visible absolute z-0 bg-[#222A23] w-[70%] top-28  h-[700px] left-[20%]"></div>
                <div className="absolute z-0 bg-[#263d28] w-[175px] lg:w-[300px] h-6 top-28 left-[25%] lg:h-8 lg:left-[16%] lg:top-40"></div>
                <div className="absolute lg:hidden w-[85px] z-0 bg-[#263d28] h-6 top-44 left-[25%]"></div>
                <div className="flex absolute z-0 left-[55%] top-40 lg:left-[60%] lg:top-72">
                    <img src={photoOfMe} alt="George" className="grayscale h-auto w-36 lg:w-72 opacity-25 lg:opacity-75"/>
                </div>
                <div className="relative z-10 w-4/5 top-20 left-[20%] lg:top-32 lg:left-[12%]">
                    <h1 className="text-white font-greatSailor text-6xl w-1/5 lg:w-full lg:text-12xl">
                        About me.
                    </h1>
                </div>
                <div className="relative z-10 flex-wrap-col left-[10%] top-40 w-4/5 md:left-[25%] md:w-1/3 lg:left-[25%]">
                    <p className="text-sm text-white font-['Futura'] lg:text-lg">I am a motivated and passionate
                        Full Stack Developer. Outside of catchin' 'mons, chuckin' blue spikey shells and levitating
                        spaceships out of swamps, I have a love for the outdoors and getting to see the world.</p>
                    <br />
                    <p className="text-sm text-white font-['Futura'] lg:text-lg">Technology has always interested
                        and excited me both as a source of leisure and as an invaluable tool. I truly believe it has
                        the potential to change the world for the better. My recent dive into the world of coding
                        has really cemented these ideals for me. Problem-solving and creating bring me such joy and
                        I'm excited to bring my creativity and logic into this challenging new career path.</p>
                </div>
                <div className="collapse lg:visible relative flex m-auto justify-center space-x-5 z-10 w-fit left-[5%] w-3/4 top-44 p-6 xl:top-72">
                    <FontAwesomeIcon icon="fa-brands fa-php" className="collapse lg:visible lg:text-4xl xl:text-5xl text-white"/>
                    <FontAwesomeIcon icon="fa-brands fa-js" className="collapse lg:visible lg:text-4xl xl:text-5xl text-white"/>
                    <FontAwesomeIcon icon="fa-brands fa-html5" className="collapse lg:visible lg:text-4xl xl:text-5xl text-white"/>
                    <FontAwesomeIcon icon="fa-brands fa-css3-alt" className="collapse lg:visible lg:text-4xl xl:text-5xl text-white"/>
                    <FontAwesomeIcon icon="fa-brands fa-react" className="collapse lg:visible lg:text-4xl xl:text-5xl text-white"/>
                    <FontAwesomeIcon icon="fa-brands fa-bootstrap" className="collapse lg:visible lg:text-4xl xl:text-5xl text-white"/>
                    <FontAwesomeIcon icon="fa-brands fa-node" className="collapse lg:visible lg:text-4xl xl:text-5xl text-white"/>
                    <FontAwesomeIcon icon="fa-brands fa-sass" className="collapse lg:visible lg:text-4xl xl:text-5xl text-white mx-3"/>
                    <FontAwesomeIcon icon="fa-brands fa-git-alt" className="collapse lg:visible lg:text-4xl xl:text-5xl text-white mr-3"/>
                    <div className="flex collapse lg:visible">
                        <img src={postman} alt="postman" className="w-11 mr-2"/>
                        <img src={mongodb} alt="mongodb" className="w-11 mr-2"/>
                        <img src={mysql} alt="mysql" className="w-11"/>
                    </div>
                </div>
                <div className="lg:hidden relative flex-wrap-col m-auto justify-center space-x-3 w-fit top-24 lg:w-2/3 lg:top-52 p-6 text-4xl text-white">
                    <FontAwesomeIcon icon="fa-brands fa-php"/>
                    <FontAwesomeIcon icon="fa-brands fa-js"/>
                    <FontAwesomeIcon icon="fa-brands fa-html5"/>
                    <FontAwesomeIcon icon="fa-brands fa-css3-alt"/>
                    <FontAwesomeIcon icon="fa-brands fa-react"/>
                    <FontAwesomeIcon icon="fa-brands fa-bootstrap"/>
                </div>
                <div className="lg:hidden relative flex m-auto justify-center w-fit top-24 p-0 lg:top-64 text-4xl text-white">
                    <FontAwesomeIcon icon="fa-brands fa-node"/>
                    <FontAwesomeIcon icon="fa-brands fa-sass" className="mx-3"/>
                    <FontAwesomeIcon icon="fa-brands fa-git-alt" className="mr-3"/>
                    <img src={postman} alt="postman" className="w-9 mr-1"/>
                    <img src={mongodb} alt="mongodb" className="w-9 mr-1"/>
                    <img src={mysql} alt="mysql" className="w-9"/>
                </div>
            </m.div>
            <div className="relative h-72 flex"></div>
        </section>
    )
}