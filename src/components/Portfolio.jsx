import React from "react";
import Introduction from "./Introduction/Introduction";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Proficiency from "./Proficiency/Proficiency";
import Achievements from "./Achievements/Achievements";
const Portfolio = () =>{
    return (
        <div>
            <Introduction />
            <Skills />
            <Projects />
            <Proficiency />
            <Achievements />
        </div>
    );
}

export default Portfolio;