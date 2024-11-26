import React from "react";
import { Link } from "react-router-dom";

import "./location.css";

import desktopImg from "../components/img/seasonsLodge.jpg";
import mobileImg from "../components/img/seasonsLodgeMobile.jpg";
import mapDesktopImg from "../components/img/nashville-map-desktop.png";
import mapMobileImg from "../components/img/nashville-map-mobile.png";

const Location = () => {

  return (
    <section id="location">
      <div className="location-container">
        <div className="location-content">
          <span className="location-topper">Location</span>
          <h2 className="location-title">The Seasons Lodge</h2>
        </div>

        <div className="location-flex-container">
          <div className="location-img-container">
            <picture className="location-background">
              {/* <!--Mobile Image--> */}
              <source media="(max-width: 600px)" srcSet={mobileImg} />
              {/* <!--Tablet and above Image--> */}
              <source media="(min-width: 601px)" srcSet={desktopImg} />
              <img
                loading="lazy"
                decoding="async"
                srcSet={desktopImg}
                alt="nashville, indiana"
                aria-hidden="true"
              />
            </picture>
          </div>

          <div className="location-text-container">
            <p data-testid="city-description">
              Located in Nashville, Indiana, The Seasons Lodge will hosting the 2nd Annual Bigfoot Conference. If you are attending the conference and would like to stay at The Seasons Lodge, you <strong>MUST</strong> call to make a reservation and let them know that you will be attending the Bigfoot Conference.
            </p>
            <h1>Come & Explore Nashville!</h1>
          </div>
        </div>

        <div className="the-seasons-text">
            <h1>Want to reserve a room at The Seasons Lodge?</h1>
            <p>The Indiana Bigfoot Conference is scheduled to take place at The Seasons Lodge from September 26th through the 27th. If you're planning to stay at this venue during the event, please call the number below to book your room. When making your reservation, kindly mention your affiliation with the Indiana Bigfoot Conference to ensure you receive the relevant accommodations.</p>
            <p>(812) 988-2284</p>
        </div>

        <p className="drag-map">Drag and click map</p>
        <iframe className="the-map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3091.7776384035683!2d-86.23966942363309!3d39.20250108593075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1694394214046!5m2!1sen!2sus" width="1500" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        

        <div className="nashville-map">
          <div className="map-text-container">
            <p data-testid="city-description-pt2">
              Nashville is just a short drive away from anywhere in Indiana,
              making it an easy and accessible destination. Whether you're up
              north near South Bend or down south close to Evansville, the
              journey is straightforward and offers a taste of different
              landscapes along the route. It's a quick trip that opens the door
              to Nashville's music, culture, and warm Southern welcome.
            </p>
          </div>
          <div className="nashville-map-container">
            <picture className="map-background">
              {/* <!--Mobile Image--> */}
              <source media="(max-width: 600px)" srcSet={mapMobileImg} />
              {/* <!--Tablet and above Image--> */}
              <source media="(min-width: 601px)" srcSet={mapDesktopImg} />
              <img
                loading="lazy"
                decoding="async"
                srcSet={mapDesktopImg}
                alt="nashville, indiana map"
                aria-hidden="true"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
