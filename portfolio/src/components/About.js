import React, {useEffect} from "react";
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
        <section id="about-me" className="bg-zinc-900">
            <m.div ref={ref}
                 variants={boxVariant}
                 initial="hidden"
                 animate={control}
                className="relative">
                <div className="invisible absolute z-0 bg-[#222A23] w-[70%] h-[475px] top-44 left-[15%] lg:visible lg:top-32 lg:h-[700px] lg:left-[20%]"></div>
                <div className="absolute z-0 bg-[#263d28] w-[175px] lg:w-[300px] h-6 top-40 left-[25%] lg:h-10 lg:left-[16%] lg:top-44 lg:w-[450px]"></div>
                <div className="absolute w-[75px] h-6 z-0 bg-[#263d28] top-56 left-[25%] lg:hidden"></div>
                <div className="w-36 flex absolute z-0 left-[55%] top-52 lg:w-72 lg:left-[60%] lg:top-72">
                    <img src={photoOfMe} alt="George" className="grayscale opacity-25 lg:opacity-75"/>
                </div>
                <div className="relative z-10 w-4/5 top-32 left-[20%] lg:top-32 lg:left-[12%]">
                    <h1 className="text-6xl w-1/5 lg:w-full lg:text-12xl lg:text-8xl text-white font-greatSailor">
                        About me.
                    </h1>
                </div>
                <div className="relative flex-wrap-col left-[10%] top-56 z-10 w-4/5 md:w-[400px] md:left-[15%] md:top-72 lg:w-1/3 lg:top-40 lg:left-[22%]">
                    <p className="text-sm text-white font-['Futura'] lg:text-lg lg:text-lg">I am a motivated and passionate
                        Full Stack Developer. Outside of catchin' 'mons, chuckin' blue spikey shells and levatating
                        spaceships out of swamps, I have a love for the outdoors and getting to see the world.</p>
                    <br />
                    <p className="text-sm text-white font-['Futura'] lg:text-lg">Technology has always interested
                        and excited me both as a source of leisure and as an invaluable tool. I truly believe it has
                        the potential to change the world for the better. My recent dive into the world of coding
                        has really cemented these ideals for me. Problem-solving and creating bring me such joy and
                        I'm excited to bring my creativity and logic into this challenging new career path.</p>
                </div>
                <div className="collapse lg:visible lg:relative lg:flex lg:m-auto lg:justify-center lg:space-x-5 lg:z-10 lg:w-fit lg:left-[5%] lg:w-3/4 md:top-80 lg:top-44 lg:p-6 xl:top-64">
                    <FontAwesomeIcon icon="fa-brands fa-php" className="collapse lg:visible lg:text-4xl xl:text-5xl text-white"/>
                    <FontAwesomeIcon icon="fa-brands fa-js" className="collapse lg:visible lg:text-4xl xl:text-5xl text-white"/>
                    <FontAwesomeIcon icon="fa-brands fa-html5" className="collapse lg:visible lg:text-4xl xl:text-5xl text-white"/>
                    <FontAwesomeIcon icon="fa-brands fa-css3-alt" className="collapse lg:visible lg:text-4xl xl:text-5xl text-white"/>
                    <FontAwesomeIcon icon="fa-brands fa-react" className="collapse lg:visible lg:text-4xl xl:text-5xl text-white"/>
                    <FontAwesomeIcon icon="fa-brands fa-bootstrap" className="collapse lg:visible lg:text-4xl xl:text-5xl text-white"/>
                    <FontAwesomeIcon icon="fa-brands fa-node" className="collapse lg:visible lg:text-4xl xl:text-5xl text-white"/>
                    <FontAwesomeIcon icon="fa-brands fa-sass" className="collapse lg:visible lg:text-4xl xl:text-5xl text-white mx-3"/>
                    <FontAwesomeIcon icon="fa-brands fa-git-alt" className="collapse lg:visible lg:text-4xl xl:text-5xl text-white mr-3"/>
                    <div className="flex">
                        <img src={postman} alt="postman" className="collapse lg:visible w-11 mr-2"/>
                        <img src={mongodb} alt="mongodb" className="collapse lg:visible w-11 mr-2"/>
                        <img src={mysql} alt="mysql" className="collapse lg:visible w-11"/>
                    </div>
                </div>
                <div className="lg:hidden relative flex-wrap-col m-auto justify-center space-x-3 z-10 w-fit lg:w-2/3 top-44 md:top-64 lg:top-52 p-6">
                    <FontAwesomeIcon icon="fa-brands fa-php" className="text-4xl text-white"/>
                    <FontAwesomeIcon icon="fa-brands fa-js" className="text-4xl text-white"/>
                    <FontAwesomeIcon icon="fa-brands fa-html5" className="text-4xl text-white"/>
                    <FontAwesomeIcon icon="fa-brands fa-css3-alt" className="text-4xl text-white"/>
                    <FontAwesomeIcon icon="fa-brands fa-react" className="text-4xl text-white"/>
                    <FontAwesomeIcon icon="fa-brands fa-bootstrap" className="text-4xl text-white"/>
                </div>
                <div className="lg:hidden relative flex m-auto justify-center w-fit top-44 p-0 md:top-64">
                    <FontAwesomeIcon icon="fa-brands fa-node" className="text-4xl text-white"/>
                    <FontAwesomeIcon icon="fa-brands fa-sass" className="text-4xl text-white mx-3"/>
                    <FontAwesomeIcon icon="fa-brands fa-git-alt" className="text-4xl text-white mr-3"/>
                    <img src={postman} alt="postman" className="w-9 mr-1"/>
                    <img src={mongodb} alt="mongodb" className="w-9 mr-1"/>
                    <img src={mysql} alt="mysql" className="w-9"/>
                </div>
            </m.div>
            <div className="relative top-36 w-2/5 h-56 lg:h-96 left-[10%] md:top-32 md:left-40"></div>
        </section>
    )
}