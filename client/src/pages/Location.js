import React from "react";

import './location.css';
import nashvilleImg from "../components/img/nashville-in.jpg"

const Location = () => {

     return (
     <section id="location">
          <div className="location-container">
               <div className="location-content">
                    <span className="location-topper">Location</span>
                    <h2 className="location-title">Nashville, Indiana</h2>
               </div>

               <div className="location-img-container">
               <picture className="location-background">
                    {/* <!--Mobile Image--> */}
                    <source media="(max-width: 600px)" srcSet={nashvilleImg} />
                    {/* <!--Tablet and above Image--> */}
                    <source media="(min-width: 601px)" srcSet={nashvilleImg} />
                    <img
                    loading="lazy"
                    decoding="async"
                    srcSet={nashvilleImg}
                    width='700'
                    height='400'
                    alt="nashville, indiana"
                    aria-hidden="true"
                    />
               </picture>
               </div>

          </div>
     </section>
     )

}

export default Location;