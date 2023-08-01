import React from "react";
import { NavLink } from "react-router-dom";

import './home.css'

import HeaderImg from "./img/browncounty.jpg";

const Home = () => {

     return (
          <div>
               <div className="headerImg">
                    <img src={HeaderImg} alt="" />
               </div>
               <div className="event-info">
                    <h1>September 27th - 28th, 2024</h1>
                    <h1 id="event-location">The Seasons Lodge, Nashville, Indiana</h1>
                    <NavLink className='register-btn' to='/attend'>Register to Attend Now!</NavLink>
               </div>
          </div>
     )
}

export default Home;