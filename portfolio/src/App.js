import './App.css';
import React from 'react';
import Navbar from "./components/Navbar";
import Splash from "./components/Splash";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import {useAnimation} from "framer-motion";
// import {useInView} from "react-intersection-observer";

function App() {
    // const boxVariant = {
    //     visible: { opacity: 1},
    //     hidden: { opacity: 0,
    //         transition: { duration: 6 }
    //     }
    // }
    //
    // // const item = {
    // //     visible: { opacity: 1},
    // //     hidden: { opacity: 0,
    // //         transition: { duration: 1 }
    // //     }
    // // }
    //
    // const control = useAnimation()
    // const [ref, inView] = useInView()
    //
    // useEffect(() => {
    //     if (inView) {
    //         control.start("visible");
    //     } else {
    //         control.start("hidden");
    //     }}, [control, inView]);

    return (
        <main id="main" className="bg-zinc-900 min-h-full">
            <Splash id="splash" />
            <Navbar />
            <About id="about"/>
            <Projects id="projects"/>
            <Contact id="contact"/>
            <Footer id="footer"/>
        </main>

    );
}

export default App;

