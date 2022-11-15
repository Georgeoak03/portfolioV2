import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// window.onscroll = function() {scrollFunction()};
// window.onscroll = function() {scrollFunction2()};

// function scrollFunction() {
//     if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//         document.getElementById("navbar").style.display = "visible";
//     } else {
//         document.getElementById("navbar").style.display = "none";
//     }
// }

// function scrollFunction2() {
//     if (document.getElementById("") === "splash") {
//         document.getElementById("navbar").style.display = "none";
//     } else {
//         document.getElementById("navbar").style.display = "inline";
//     }
// }

function App() {
    return (
        <html className="App" lang="en">
        <head>
            <title>George's Portfolio'</title>
        </head>
        <body>
        <div className="scroll-smooth">
            <div id="splash" className="bg-zinc-900 h-screen flex-wrap-col m-auto md:m-0 justify-center">
                <div className="flex w-3/4 h-3/5 absolute z-0 bg-[#222A23] top-44 left-14 md:left-80"></div>
                <div className="flex-wrap-col max-w-xs relative z-10 top-28 left-10 md:left-40">
                    <h1 className="lg:text-12xl md:text-[175px] text-8xl text-white font-['Great_Sailor']">
                        HELLO THERE!
                    </h1>
                </div>
                <div className="flex-wrap-col relative z-10 w-12 md:w-2/5 top-36 left-24 md:left-1/5 md:top-32">
                    <p className="text-5xl text-white font-['Great_Sailor'] md:text-5xl italic">I'm <span className="text-[#85B97C] not-italic"><span className="text-6xl md:text-7xl">G</span>eorge <span className="text-6xl md:text-7xl">O</span>akley</span>,</p><p className="text-5xl md:text-5xl text-white font-['Great_Sailor'] italic"><span className="whitespace-nowrap">a FULL</span>-STACK DEVELOPER.</p>
                </div>
                <div className="z-10 text-gray-600 hover:text-white text-xl flex-wrap-col relative w-12 items-center">
                    <FontAwesomeIcon icon="fa-solid fa-arrow-down" />
                </div>
            </div>
            <div id="About-me" className="bg-zinc-900 h-screen flex">
                <nav id="navbar" className="fixed w-full z-20 top-0 left-0 border-b-2 border-white bg-zinc-900 bg-opacity-95">
                    <a href="#splash" className="font-['Great_Sailor'] text-[#85B97C] text-6xl">G<span className="text-white">.</span>O<span className="text-white">.</span></a>
                    <a href="#About-me" className="font-['Great_Sailor'] text-white text-6xl collapse md:visible">About.</a>
                    <a href="#Projects" className="font-['Great_Sailor'] text-white text-6xl collapse md:visible">Projects.</a>
                    <a href="#Contact" className="font-['Great_Sailor'] text-white text-6xl collapse md:visible">Contact</a>
                </nav>
                <div className="flex-wrap-col m-auto md:m-0">
                    <div className="flex-wrap-col w-2/5 relative z-10 left-1/4 md:top-32 md:left-40">
                        <h1 className="text-6xl lg:text-12xl md:text-8xl text-white font-['Great_Sailor']">
                            About me.
                        </h1>
                    </div>
                    <div className="flex-wrap-col relative z-10 w-4/5 md:w-1/3 left-9 md:left-1/4 top-10 md:top-52">
                        <p className="text-sm text-white font-['Futura'] md:text-xl">I am a motivated and passionate Full Stack Developer. Outside of catchin' 'mons, chuckin' blue spikey shells and levatating spaceships out of swamps, I have a love for the outdoors and getting to see the world.</p>
                        <p className="text-sm text-white font-['Futura'] md:text-xl">Technology has always interested and excited me both as a source of leisure and as an invaluable tool. I truly believe it has the potential to change the world for the better. My recent dive into the world of coding has really cemented these ideals for me. Problem-solving and creating bring me such joy and I'm excited to bring my creativity and logic into this challenging new career path.</p>
                    </div>
                </div>
            </div>
            <div id="Projects" className="bg-zinc-900 h-screen flex">
                <div className="flex-wrap-col m-auto md:m-0">
                    <div className="flex-wrap-col w-2/5 relative z-10 left-1/4 md:top-32 md:left-40">
                        <h1 className="text-6xl lg:text-12xl md:text-8xl text-white font-['Great_Sailor']">
                            Projects.
                        </h1>
                    </div>
                    <div className="flex-wrap-col relative z-10 w-4/5 md:w-1/3 left-9 md:left-1/4 top-10 md:top-52">
                    </div>
                </div>
            </div>
            <div id="Contact" className="bg-zinc-900 h-screen flex">
                <div className="flex-wrap-col m-auto md:m-0">
                    <div className="flex-wrap-col w-2/5 relative z-10 left-1/4 md:top-32 md:left-40">
                        <h1 className="text-6xl lg:text-12xl md:text-8xl text-white font-['Great_Sailor']">
                            Contact me.
                        </h1>
                    </div>
                    <div className="flex-wrap-col relative z-10 w-4/5 md:w-1/3 left-9 md:left-1/4 top-10 md:top-52">
                    </div>
                </div>
            </div>
        </div>
        </body>
        </html>
    );
}

export default App;

