import React from "react";

export default function About() {
    return (
        <section id="about-me" className="relative">
            <div className="bg-zinc-900 h-screen flex">
                <div className="flex-wrap-col m-0">
                    <div className="flex-wrap-col w-2/5 relative z-10 top-[15%] left-[20%] md:top-32 md:left-40">
                        <h1 className="text-6xl lg:text-12xl md:text-8xl text-white font-['Great_Sailor']">
                            About me.
                        </h1>
                    </div>
                    <div className="flex-wrap-col relative z-10 w-4/5 md:w-1/3 left-9 md:left-1/4 top-[30%] md:top-52">
                        <p className="text-sm text-white font-['Futura'] md:text-xl">I am a motivated and passionate
                            Full Stack Developer. Outside of catchin' 'mons, chuckin' blue spikey shells and levatating
                            spaceships out of swamps, I have a love for the outdoors and getting to see the world.</p>
                        <p className="text-sm text-white font-['Futura'] md:text-xl">Technology has always interested
                            and excited me both as a source of leisure and as an invaluable tool. I truly believe it has
                            the potential to change the world for the better. My recent dive into the world of coding
                            has really cemented these ideals for me. Problem-solving and creating bring me such joy and
                            I'm excited to bring my creativity and logic into this challenging new career path.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}