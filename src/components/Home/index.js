import React, { Component } from 'react';


import { IoLocation } from "react-icons/io5";
import { FaHandshake } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
// import Explore from/ '../Explore';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';

import './index.css';

const domainList = [
    { optionId: 'data science', displayText: 'Data Science' },
    { optionId: 'frontend', displayText: 'Frontend' },
    { optionId: 'backend', displayText: 'Backend' },
    { optionId: 'fullstack', displayText: 'Full Stack' },
];

class Dashboard extends Component {
    state = {
        title: '',
        selectedDomain: domainList[0].optionId,
        selectFromDate: '',
        selectToDate: '',
        venue: '',
        inputList: [],
    };

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { title, selectedDomain, selectFromDate, selectToDate, venue, inputList } = this.state;

        const newEntry = { title, selectedDomain, selectFromDate, selectToDate, venue };
        this.setState({ inputList: [...inputList, newEntry], title: '', selectedDomain: domainList[0].optionId, selectFromDate: '', selectToDate: '', venue: '' });
    };

    render() {
        const { title, selectedDomain, selectFromDate, selectToDate, venue, inputList } = this.state;
        console.log(inputList)
        return (
            <div className='dashboard-container'>
                <Navbar />
                <div className='home-container'>
                    <div>
                        <Sidebar />
                    </div>
                    <div className='home-explore-content'>


                        <div className='content-container'>
                            <form className='task-form' onSubmit={this.handleSubmit}>



                                <div className='inputs-container'>

                                    <label className='label' htmlFor='title'>Title</label>
                                    <input
                                        className='input'
                                        type='text'
                                        id='title'
                                        name='title'
                                        value={title}
                                        onChange={this.handleChange}
                                    />
                                </div>

                                <div className='inputs-container'>
                                    {/* <div> */}
                                    {/* <FaHandshake /> */}
                                    <label className='label' htmlFor='domain'>Domain</label>
                                    {/* </div> */}
                                    <select
                                        id="domain"
                                        name='selectedDomain'
                                        value={selectedDomain}
                                        onChange={this.handleChange}
                                        className='input'
                                    >
                                        {domainList.map(each => (
                                            <option key={each.optionId} value={each.optionId}>
                                                {each.displayText}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className='inputs-container'>
                                    {/* <div className='venue-section'> */}
                                    {/* <IoLocation /> */}
                                    <label className='label' htmlFor='venue'>Venue</label>
                                    {/* </div> */}
                                    <input
                                        type="radio"
                                        id="online"
                                        name="venue"
                                        value="online"
                                        checked={venue === 'online'}
                                        onChange={this.handleChange}
                                    />
                                    <label htmlFor="online">Online</label>
                                    <input
                                        type="radio"
                                        id="offline"
                                        name="venue"
                                        value="offline"
                                        checked={venue === 'offline'}
                                        onChange={this.handleChange}
                                    />
                                    <label htmlFor="offline">Offline</label>
                                </div>

                                <div className='inputs-container'>
                                    <label className='labelFromDate' htmlFor='selectFromDate'>From Date</label>
                                    <input
                                        id="selectFromDate"
                                        name="selectFromDate"
                                        type="date"
                                        value={selectFromDate}
                                        onChange={this.handleChange}
                                        className='input'
                                    />
                                    <label className='labelToDate' htmlFor='selectToDate'>To Date</label>
                                    <input
                                        id="selectToDate"
                                        name="selectToDate"
                                        type="date"
                                        value={selectToDate}
                                        onChange={this.handleChange}
                                        className='input'
                                    />
                                </div>

                                <div className='btn-container'>
                                    <button type="submit" className="add-btn">Add</button>
                                </div>

                            </form>
                        </div>

                        <div className='input-list'>
                            {inputList.length !== 0 ? (
                                <ul className='card-container'>
                                    {inputList.map((item, index) => (
                                        <li key={index}>

                                            <div className='card'>
                                                <h2>{item.title}</h2>
                                                <div>
                                                    <div className='fileds'>
                                                        <FaHandshake size={20} style={{ color: '#a152ec' }} />
                                                        <p className='heading-title'>Domain</p>
                                                        <p>Bootcamp: {item.selectedDomain}</p>
                                                    </div>
                                                    <div className='fileds'>
                                                        <IoLocation size={20} style={{ color: '#a152ec' }} />
                                                        <p className='heading-title'>Venue</p>
                                                        <p>{item.venue},Zoom</p>
                                                    </div>
                                                    <div className='fileds dateField'>
                                                        <div className='cal'>

                                                            <SlCalender size={17} style={{ color: '#a152ec' }} />
                                                        </div>
                                                        <p className='date-content'>Date {item.selectFromDate}-{item.selectToDate}</p>
                                                    </div>
                                                    <div className='btn-fileds'>
                                                        <button className='btns btn1'>Past Workshops</button>
                                                        <button className='btns'>Join Workshops</button>
                                                    </div>
                                                </div>

                                            </div>

                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p><div className='card'>
                                    <h2>HII</h2>
                                    <div>
                                        <div className='fileds'>
                                            <FaHandshake size={20} style={{ color: '#a152ec' }} />
                                            <p className='heading-title'>Domain</p>
                                            <p>Bootcamp: DataScience</p>
                                        </div>
                                        <div className='fileds'>
                                            <IoLocation size={20} style={{ color: '#a152ec' }} />
                                            <p className='heading-title'>Venue</p>
                                            <p>Online,Zoom</p>
                                        </div>
                                        <div className='fileds dateField'>
                                            <div className='cal'>

                                                <SlCalender size={17} style={{ color: '#a152ec' }} />
                                            </div>
                                            <p className='date-content'>4-5 June</p>
                                        </div>
                                        <div className='btn-fileds'>
                                            <button className='btns btn1'>Past Workshops</button>
                                            <button className='btns'>Join Workshops</button>
                                        </div>
                                    </div>

                                </div></p>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Dashboard;
