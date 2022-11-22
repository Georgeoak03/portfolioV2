import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import photoOfMe from './photo-of-me.png';
import postman from './postman.svg';
import mongodb from './mongodb.svg';
import mysql from './mysql.svg';

export default function About() {
    return (
        <section id="about-me" className="bg-zinc-900 min-h-screen">
            <div className="relative">
                <div className="absolute w-[35%] h-6 md:h-3/5 z-0 bg-[#222A23] top-40 left-[25%] md:left-1/4"></div>
                <div className="absolute w-[20%] h-6 md:h-3/5 z-0 bg-[#222A23] top-56 left-[25%] md:left-1/4"></div>
                <div className="w-36 flex absolute z-0 left-[55%] top-52">
                    <img src={photoOfMe} alt="George" className="grayscale opacity-25"/>
                </div>
                <div className="relative z-10 w-4/5 top-32 left-[20%] md:top-32 md:left-40">
                    <h1 className="text-6xl w-2/5 lg:text-12xl md:text-8xl text-white font-['Great_Sailor']">
                        About me.
                    </h1>
                </div>
                <div className="relative flex-wrap-col left-[10%] top-56 z-10 w-4/5 md:w-2/3 md:top-52">
                    <p className="text-sm text-white font-['Futura'] md:text-lg lg:text-lg">I am a motivated and passionate
                        Full Stack Developer. Outside of catchin' 'mons, chuckin' blue spikey shells and levatating
                        spaceships out of swamps, I have a love for the outdoors and getting to see the world.</p>
                    <br />
                    <p className="text-sm text-white font-['Futura'] md:text-xl">Technology has always interested
                        and excited me both as a source of leisure and as an invaluable tool. I truly believe it has
                        the potential to change the world for the better. My recent dive into the world of coding
                        has really cemented these ideals for me. Problem-solving and creating bring me such joy and
                        I'm excited to bring my creativity and logic into this challenging new career path.</p>
                </div>
                <div className="relative flex-wrap-col m-auto justify-center space-x-3 z-10 w-fit md:w-2/3 top-60 md:top-52 p-6">
                    <FontAwesomeIcon icon="fa-brands fa-php" className="text-4xl text-white"/>
                    <FontAwesomeIcon icon="fa-brands fa-js" className="text-4xl text-white"/>
                    <FontAwesomeIcon icon="fa-brands fa-html5" className="text-4xl text-white"/>
                    <FontAwesomeIcon icon="fa-brands fa-css3-alt" className="text-4xl text-white"/>
                    <FontAwesomeIcon icon="fa-brands fa-react" className="text-4xl text-white"/>
                    <FontAwesomeIcon icon="fa-brands fa-bootstrap" className="text-4xl text-white"/>
                </div>
                <div className="relative flex m-auto justify-center w-fit top-60 p-0">
                    <FontAwesomeIcon icon="fa-brands fa-node" className="text-4xl text-white"/>
                    <FontAwesomeIcon icon="fa-brands fa-sass" className="text-4xl text-white mx-3"/>
                    <FontAwesomeIcon icon="fa-brands fa-git-alt" className="text-4xl text-white mr-3"/>
                    <img src={postman} alt="postman" className="w-9 mr-1"/>
                    <img src={mongodb} alt="mongodb" className="w-9 mr-1"/>
                    <img src={mysql} alt="mysql" className="w-9"/>
                </div>

            </div>
        </section>
    )
}