import './App.css';
import React from 'react';
import Navbar from "./components/Navbar";
import Splash from "./components/Splash";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
        <main id="main">
            <Splash id="splash"/>
            <Navbar />
            <About id="about"/>
            <Projects id="projects"/>
            <Contact id="contact"/>
        </main>

    );
}

export default App;

