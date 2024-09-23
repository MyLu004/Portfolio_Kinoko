
import React, {useState} from 'react';
import { IoMenu } from "react-icons/io5";
import { BiMenuAltRight } from "react-icons/bi";


import "./navBar.css"

const Navbar = () =>{
    
    const [toggleMenu, setToggleMenu] = React.useState(false);

    return (
        <div className="portfolio__navbar">
            <nav className="pofortlio__navbar-container">
                <ul className='portfolio__navbar-links p__robotoMono'>
                    <li><a href="#home">home</a></li>
                    <li><a href="#project">project</a></li>
                    <li><a href="#skills">skills</a></li>
                    <li><a href="#contact">contact</a></li>
                </ul>

                <div className="portfolio__navbar-resumeBtn">
                    <h2>Resume</h2>
                </div>


                <div className="portfolio__navbar-smallscreen">
                <IoMenu color ="fff" fontSize={27} cursor={'pointer'} onClick={() => setToggleMenu(true)}></IoMenu>

                {toggleMenu &&(
                    <div className="portfolio__navbar-smallscreen_overlay flex__center slide-bot">
                        <BiMenuAltRight color ="fff" fontSize={30} className="overlay__close" onClick={() => setToggleMenu(false)}></BiMenuAltRight>
                            <ul className='porfolio__navbar-smallscreen_links p__robotoMono'>
                                <li><a href="#home">home</a></li>
                                <li><a href="#project">project</a></li>
                                <li><a href="#skills">skills</a></li>
                                <li><a href="#contact">contact</a></li>
                            </ul>
                    </div>
                )}
                </div>

            </nav>

           

        </div>
    )
}

export default Navbar;