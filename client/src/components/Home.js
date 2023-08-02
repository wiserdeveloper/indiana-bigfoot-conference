import React from "react";
import { NavLink } from "react-router-dom";

import './home.css'

import HeaderImg from "./img/browncounty.jpg";
import MobileImg from './img/mobile-bc.png';

const Home = () => {

     return (
          <div>
               <div className="headerImg">
                    <img src={HeaderImg} alt="" />
               </div>
               <div className="headerImg-mobile">
                    <img src={MobileImg} alt="" />
               </div>
               <div className="hp-body">
                    <div className="event-info">
                         <h1>September 27th - 28th, 2024</h1>
                         <h1 id="event-location">The Seasons Lodge, Nashville, Indiana</h1>
                         <NavLink className='register-btn' to='/attend'>Register to Attend Now!</NavLink>
                    </div>
                    <div className="event-desc">
                         <h1>Indiana's 1st Annual Bigfoot Conference</h1>
                         <p>Get ready to mark your calendars and join us for an unforgettable experience at Indiana's highly anticipated Bigfoot Conference taking place from September 27th to September 28th, 2024. Nestled in the captivating realm of Nashville, Indiana, renowned for its legendary Bigfoot sightings, this exceptional event is an absolute must-attend for all enthusiasts and curious minds alike.</p>
                    </div>
               </div>
          </div>
     )
}

export default Home;