import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./home.css";
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

          <div className="schedule-container">
            <h1>Schedule</h1>
            <div className="friday-container">
              <h3 className="friday-date">Friday, September 27th <br /> 4pm - 8pm</h3>
              <h3>Town Hall</h3>
              <div className="schedule list-container">
                <div className="schedule-list">
                  <p>4pm - 7pm</p>
                  <p>Doors open for Vendor sales</p>
                </div>
                <div className="schedule-list">
                  <p>4pm - 7pm</p>
                  <p>Pre-registration for Saturday's Conference</p>
                </div>
                <div className="schedule-list">
                  <p>4pm - 7pm</p>
                  <p>Raffle tickets for Ebike available for purchase</p>
                </div>
                <div className="schedule-list">
                  <p>5pm - 7pm</p>
                  <p>Town Hall</p>
                </div>
                <div className="schedule-list">
                  <p>8pm</p>
                  <p>Venue closed</p>
                </div>
              </div>
            </div>

            <div className="saturday-container">
              <h3>Saturday, September 28th <br /> 8am - 8pm</h3>
              <h3>Speaker Event</h3>
              <div className="schedule list-container">
                <div className="schedule-list">
                  <p>8am</p>
                  <p>Doors open for event & vendor sales</p>
                </div>
                <div className="schedule-list">
                  <p>8am - 5pm</p>
                  <p>Registration for speaker event</p>
                </div>
                <div className="schedule-list">
                  <p>8am - 5pm</p>
                  <p>Ebike raffle tickets available for purchase</p>
                </div>
                <div className="schedule-list">
                  <p>9am - 10am</p>
                  <p>LeRoy Nail -- IBRO Host of Event</p>
                </div>
                <div className="schedule-list">
                  <p>10am - 10:15am</p>
                  <p>Break</p>
                </div>
                <div className="schedule-list">
                  <p>10:15am - 11:15am</p>
                  <p>Packman Paranormal</p>
                </div>
                <div className="schedule-list">
                  <p>11:15am - 11:30am</p>
                  <p>Break</p>
                </div>
                <div className="schedule-list">
                  <p>11:30am - 12:30pm</p>
                  <p>Charlie Raymond</p>
                </div>
                <div className="schedule-list">
                  <p>12:30pm - 2pm</p>
                  <p>Lunch break</p>
                </div>
                <div className="schedule-list">
                  <p>2pm - 3pm</p>
                  <p>Squatchman (Greg Yost)</p>
                </div>
                <div className="schedule-list">
                  <p>3pm - 3:15pm</p>
                  <p>Break</p>
                </div>
                <div className="schedule-list">
                  <p>3:15pm - 4:15pm</p>
                  <p>Amy Bue</p>
                </div>
                <div className="schedule-list">
                  <p>4:15pm - 4:30pm</p>
                  <p>Break</p>
                </div>
                <div className="schedule-list">
                  <p>4:30pm - 5:30pm</p>
                  <p>Marc DeWerth</p>
                </div>
                <div className="schedule-list">
                  <p>5:30pm - 5:45pm</p>
                  <p>Break</p>
                </div>
                <div className="schedule-list">
                  <p>5:45pm - 6:45pm</p>
                  <p>Adam Davies</p>
                </div>
                <div className="schedule-list">
                  <p>7pm - 7:30pm</p>
                  <p>LeRoy Nail -- closing & ebike winner announced</p>
                </div>
                <div className="schedule-list">
                  <p>8pm</p>
                  <p>Venue Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flyer-container">
            {/* <picture className="con-flyer">
              <img 
              loading="lazy"
              decoding="async"
              srcSet={conFlyer}
              alt="Indy Bigfoot Con Flyer"
              aria-hidden="true"
              />
            </picture> */}
            <div className="host-flyer">
              <h2>Special Thanks to IBRO for Hosting Indy Bigfoot Con</h2>
              <h2 id="site-link" ><a href="https://ibroindiana.com/">https://ibroindiana.com/</a></h2>
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

            <div className="vendor-list">
              <h2>Vendor List</h2>
                <ul>
                  <li>Carter's Creative Coloring</li>
                  <li>Crowtown Squatchers</li>
                  <li>Cryptid Creatures</li>
                  <li>Cryptids, Creeps, & Conspiracy</li>
                  <li>Linda Wood Creation AI</li>
                  <li>Mark A. Randall Creative Artist</li>
                  <li>Rita's Knit-Knats</li>
                  <li>Nature Lovers Books</li>
                  <li>That's So Ro</li>
                  <li>Damon Pfiefer & Sandee Riggs</li>
                  <li>Tinfoil Tales</li>
                  <li>T.W. Williams Fine Arts</li>
                  <li>Dollars for Dimes Mobile Welding</li>
                  <li>Mudworks Pottery & Timber Laser Art</li>
                  <li>Pine Winds Press</li>
                  <li>Where the Wild Things Grow</li>
                  <li>Adam / Mark Miller</li>
                </ul> 
            </div>
          </div>

          <div className="dev-team-text-container">
            <h3>Website created by Alyssa Wiser</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
