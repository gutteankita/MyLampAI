import React, { Component } from 'react';
import { PiCodesandboxLogoFill } from "react-icons/pi";
import { MdOutlineExplore } from "react-icons/md";
import { MdOutlineLaptopMac } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa6";
import { GoProjectSymlink } from "react-icons/go";
import { GiProgression } from "react-icons/gi";
import { GiDiscussion } from "react-icons/gi";
import { BsChatLeftText } from "react-icons/bs";
import { Link } from 'react-router-dom';

import { NavLink } from 'react-router-dom';
import './index.css';

class Sidebar extends Component {
    render() {
        return (
            <div className='side-links'>
                {/* <div> */}
                    <ul>
                        <li>
                            <NavLink className="navlinks" exact="true" to="/">
                                
                                <PiCodesandboxLogoFill size={24} className='icons' />
                                <h1 className='side-links-name'>Home</h1>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="navlinks" to="/explore">
                                <MdOutlineExplore size={24} className='icons' />
                                <h1 className='side-links-name'>Explore</h1>
                            </NavLink>
                            {/* <Link to="/explore">Explore</Link> */}

                        </li>
                        <li>
                            <NavLink className="navlinks" to="/learn">
                                <MdOutlineLaptopMac size={24} className='icons' />
                                <h1 className='side-links-name'>Learn</h1>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="navlinks" to="/archieve">
                                <FaGraduationCap size={24} className='icons' />
                                <h1 className='side-links-name'>Archieve</h1>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="navlinks" to="/peactice">
                                <GoProjectSymlink size={24} className='icons' />
                                <h1 className='side-links-name'>Practice</h1>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="navlinks" to="/career">
                                <GiProgression size={24} className='icons' />
                                <h1 className='side-links-name'>Career</h1>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="navlinks" to="/mentorship">
                                <GiDiscussion size={24} className='icons' />
                                <h1 className='side-links-name'>Mentorship</h1>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="navlinks" to="/blogs">
                                <BsChatLeftText size={24} className='icons' />
                                <h1 className='side-links-name'>Blogs</h1>
                            </NavLink>
                        </li>
                    </ul>
                {/* </div> */}
                {/* <div className='footer'>
                    <p className='paras'>Help</p>
                    <p className='paras'>Contact us</p>
                </div> */}
            </div>
        );
    }
}


export default Sidebar;
