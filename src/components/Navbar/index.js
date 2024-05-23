import React, { Component } from 'react';
import { FaRegBell } from "react-icons/fa";
import { PiSquaresFourFill } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import './index.css';

class Navbar extends Component {
    render() {
        return (
            <div className='navbar-container'>
                <div className='logo'>
                    <h2>WIZE</h2>
                </div>
                <div className='profile-container'>
                    <div className='bell-icon'>
                        <FaRegBell size={18} style={{color:'#CC6CE7'}}/>
                    </div>
                    <div className='nav-menu profile-icon'>
                        <p className='nav-name'>Account</p>
                        <CgProfile size={25} style={{color:'#CC6CE7'}} />
                    </div>
                    <div className='nav-menu profile-icon'>
                        <p className='nav-name'>Menu</p>
                        <PiSquaresFourFill size={25} style={{color:'#CC6CE7'}} />
                    </div>
                </div>
            </div>
        );
    }
}


export default Navbar;
