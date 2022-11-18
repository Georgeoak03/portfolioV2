import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import photoOfMe from './photo-of-me.png';

export default function About() {
    return (
        <section id="about-me" className="bg-zinc-900 h-screen relative flex-wrap-col">
            <div >
                <div className="w-36 flex absolute z-0 left-[55%] top-52">
                    <img src={photoOfMe} alt="photo of George" className="grayscale opacity-25"/>
                </div>
                <div className="relative z-10 w-2/5 top-32 left-[20%] md:top-32 md:left-40">
                    <h1 className="text-6xl lg:text-12xl md:text-8xl text-white font-['Great_Sailor']">
                        About me.
                    </h1>
                </div>
                <div className="flex-wrap-col relative z-10 left-[10%] w-4/5 md:w-2/3 top-60 md:top-52">
                    <p className="text-sm text-white font-['Futura'] md:text-lg lg:text-lg">I am a motivated and passionate
                        Full Stack Developer. Outside of catchin' 'mons, chuckin' blue spikey shells and levatating
                        spaceships out of swamps, I have a love for the outdoors and getting to see the world.</p>
                    <p className="text-sm text-white font-['Futura'] md:text-xl">Technology has always interested
                        and excited me both as a source of leisure and as an invaluable tool. I truly believe it has
                        the potential to change the world for the better. My recent dive into the world of coding
                        has really cemented these ideals for me. Problem-solving and creating bring me such joy and
                        I'm excited to bring my creativity and logic into this challenging new career path.</p>
                </div>
                <div className="flex-wrap-col relative z-10 left-[10%] w-4/5 md:w-2/3 top-60 md:top-52 p-6">
                    <FontAwesomeIcon icon="fa-brands fa-php" className="text-5xl text-white"/>
                    <FontAwesomeIcon icon="fa-brands fa-js" className="text-5xl text-white"/>
                    <FontAwesomeIcon icon="fa-brands fa-html5" className="text-5xl text-white"/>
                    <FontAwesomeIcon icon="fa-brands fa-css3-alt" className="text-5xl text-white"/>
                    <FontAwesomeIcon icon="fa-brands fa-react" className="text-5xl text-white"/>
                    <FontAwesomeIcon icon="fa-brands fa-bootstrap" className="text-5xl text-white"/>
                    <FontAwesomeIcon icon="fa-brands fa-node" className="text-5xl text-white"/>
                    <FontAwesomeIcon icon="fa-brands fa-sass" className="text-5xl text-white"/>
                    <FontAwesomeIcon icon="fa-brands fa-git-alt" className="text-5xl text-white"/>
                </div>
            </div>
        </section>
    )
}