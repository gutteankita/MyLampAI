import React, { Component } from 'react';


import { IoLocation } from "react-icons/io5";
import { FaHandshake } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";

import Sidebar from '../Sidebar';
import Navbar from '../Navbar';

const technologies = [
    {
        name: "React",
        videoUrl: "https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3"
    },
    {
        name: "Node.js",
        videoUrl: "https://www.youtube.com/watch?v=LAUi8pPlcUM&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY"
    },

    {
        name: "Machine Learning",
        videoUrl: "https://www.youtube.com/watch?v=EoYfa6mYOG4&list=PLztVVS4n98EcwjGvW5Y8zMoSku0GOgbGR"
    },
    {
        name: "Artificial Intelligence",
        videoUrl: "https://www.youtube.com/watch?v=JMUxmLyrhSk"
    },
    {
        name: "Python",
        videoUrl: "https://www.youtube.com/watch?v=YYXdXT2l-Gg&list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU"
    }

];

class Explore extends Component {
    render() {
        return (
            <div className='dashboard-container'>
                <Navbar />
                <div className='home-container'>
                    <div>
                        <Sidebar />
                    </div>
                    <div className='home-explore-content'>
                    

                        {/* <img src='https://res.cloudinary.com/ddsbhqayi/image/upload/v1716288497/mypc_f0inrg.jpg' /> */}
                        {technologies.map((tech, index) => (
                           <>
                            <li key={index}>
                            {/* <video src={tech.videoUrl} /> */}
                            {/* <source src={tech.videoUrl} type="video/mp4" /> */}
                            <p>{tech.name}</p>
                            <video controls>
        <source src={tech.videoUrl} type="video/mp4" />
        {/* Add additional <source> elements for other formats */}
        Your browser does not support the video tag.
      </video>
                            </li>
                           </>
                            
                        ))}


                    </div>

                </div>
            </div>
        );
    }
}

export default Explore;





