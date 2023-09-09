import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./home.css";
import conFlyer from '../components/img/flyer.png'
import ibroFlyer from "../components/img/ibro-flyer.png"

import HeaderImg from "./img/browncounty.jpg";

const Home = () => {
  return (
    <div>
      {/* HEADER IMG */}
      <div className="headerImg">
        <img src={HeaderImg} alt="" />
      </div>
      
      <div id="hp">
        <div className="hp-container">
          <div className="hp-content">
            <span className="hp-topper">Indiana's 1st Annual Bigfoot Conference</span>
            <h2 className="hp-title">Indiana Bigfoot Conference</h2>
          </div>

          <div className="hp-text-container">
            <h2>September 27th - September 28th, 2024</h2>
            <h2>The Seasons Lodge, Nashville, Indiana</h2>
            <NavLink className="tickets-btn" to="/tickets">Buy Tickets!</NavLink>
            <h3>Get ready to mark your calendars and join us for an unforgettable
            experience at Indiana's highly anticipated Bigfoot Conference taking
            place from September 27th to September 28th, 2024. Nestled in the
            captivating realm of Nashville, Indiana, renowned for its legendary
            Bigfoot sightings, this exceptional event is an absolute must-attend
            for all enthusiasts and curious minds alike.</h3>
          </div>

          <div className="flyer-container">
            <picture className="con-flyer">
              <img 
              loading="lazy"
              decoding="async"
              srcSet={conFlyer}
              alt="Indy Bigfoot Con Flyer"
              aria-hidden="true"
              />
            </picture>
            <div className="host-flyer">
              <h2>Special Thanks to IBRO for Hosting Indy Bigfoot Con</h2>
              <picture className="ibro-flyer">
              <img 
              loading="lazy"
              decoding="async"
              srcSet={ibroFlyer}
              alt="IBRO Flyer"
              aria-hidden="true"
              />
            </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
