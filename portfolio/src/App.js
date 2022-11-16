import './App.css';
import React from 'react';
import Navbar from "./components/Navbar";
import Splash from "./components/Splash";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

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
        <main className="scroll-smooth m-auto">
            <Navbar />
            <Splash />
            <About />
            <Projects />
            <Contact />
        </main>
    );
}

export default App;

