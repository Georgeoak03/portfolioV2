import './App.css';
import React from 'react';
import Navbar from "./components/Navbar";
import Splash from "./components/Splash";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <main id="main" className="bg-zinc-900 min-h-full ">
            <Splash id="splash"/>
            <Navbar />
            <About id="about"/>
            <Projects id="projects"/>
            <Contact id="contact"/>
            <Footer id="footer"/>
        </main>

    );
}

export default App;

