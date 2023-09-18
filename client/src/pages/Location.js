import React from "react";
import { Link } from "react-router-dom";

import "./location.css";

import desktopImg from "../components/img/nashville-in.jpg";
import mobileImg from "../components/img/mobile-nashville.jpg";
import mapDesktopImg from "../components/img/nashville-map-desktop.png";
import mapMobileImg from "../components/img/nashville-map-mobile.png";

const Location = () => {
  // let map;
  // const nashville = { lat: 39.2025, lng: 86.2371 }

  // function createCenterControl(map) {
  //   const controlButton = document.createElement("button")

  //   controlButton.classList.add("buttonStyle")

  //   controlButton.textContent = "Center Map";
  //   controlButton.title = "Click to recenter the map";
  //   controlButton.type = "button";

  //   // Setup the click event listeners: simply set the map to Chicago.
  //   controlButton.addEventListener("click", () => {
  //   map.setCenter(nashville);
  // });

  // return controlButton;

  // }

  return (
    <section id="location">
      <div className="location-container">
        <div className="location-content">
          <span className="location-topper">Location</span>
          <h2 className="location-title">Nashville, Indiana</h2>
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
              Nestled within the rolling hills of southern Indiana, Nashville
              exudes a unique charm that captivates the soul of every traveler.
              This picturesque town is an artistic haven, where quaint streets
              are adorned with galleries, studios, and boutiques, showcasing the
              works of local artisans. The air is filled with the sweet melodies
              of live music, offering a soothing backdrop as you explore the
              scenic trails, lush forests, and serene waterways that surround
              the area. With its warm community spirit and a welcoming
              atmosphere, Nashville, Indiana, invites you to indulge in its
              creative spirit, relish in outdoor adventures, and discover a
              hidden gem that promises unforgettable memories and a true sense
              of connection with both art and nature.
            </p>
            <h1>Come & Explore Nashville!</h1>
          </div>
        </div>

        <div className="map-container">
        <iframe className="the-map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3091.7776384035683!2d-86.23966942363309!3d39.20250108593075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1694394214046!5m2!1sen!2sus" width="1500" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        {/* <div className="icon-flex-container">
          <div className="icon-container">
            <div className="icon">
              <MdCabin />
              <Link className="icon-text" to="/stay-in-nashville">
                Stay
              </Link>
            </div>
            <div className="icon">
              <FaHiking />
              <Link className="icon-text" to="/things-to-do">
                Do
              </Link>
            </div>
            <div className="icon">
              <IoMdRestaurant />
              <Link className="icon-text" to="/restaurants-in-nashville">
                Eat
              </Link>
            </div>
            <div className="icon">
              <HiShoppingBag />
              <Link className="icon-text" to="/shop-nashville">
                Shop
              </Link>
            </div>
          </div>
        </div> */}

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
