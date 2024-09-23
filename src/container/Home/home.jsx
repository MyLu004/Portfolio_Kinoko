
import React from "react";
import "./home.css"
import { sampleProfile } from "../../constant/Imgage";

import { FaGithub, FaLinkedinIn, FaEnvelope  } from "react-icons/fa";

const Home = () =>(
    <div className="portfolio__home-container box__container section__padding flex__center" id="home">
        <div className="portfolio__home-img-container">
            <img className="app__wrapper_img" src={sampleProfile} alt="" />
        </div>

        <div className="portfolio__home-description-wrapper">
            <h1 className="headtext__inter ">Hello, I am My Lu</h1>
            
            <div className="portfolio__icons-links">

                <a href="https://github.com/MyLu004" target="_blank" rel="noopener noreferrer">
                    <FaGithub/>
                </a>
                
                <a href="https://www.linkedin.com/in/my-lu/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn/>
                </a>

                <a href="mailto:myluwork004@gmail.com" rel="noopener noreferrer">
                    <FaEnvelope/>
                </a>
            </div>

            <p className="portfolio__home-subDes p__robotoMono  ">I'm a junior at California State University, Long Beach, studying Computer Science. 
                I passionate about front-end development and UI/UX design—there's just something so fun 
                about making apps look beautiful and easy to use! I'm also super 
                passionate about coding and love helping others as a tutor and through hackathons. </p>
        </div>

    </div>

);

export default Home;