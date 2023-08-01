import React from "react";
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
                    <button>Register to Attend Now!</button>
               </div>
          </div>
     )
}

export default Home;