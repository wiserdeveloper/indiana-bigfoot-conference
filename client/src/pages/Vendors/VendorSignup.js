import React, { useState, useEffect } from "react";
import "./vendorSignup.css";
import { Button } from "react-bootstrap";
import NavLink from "react-bootstrap";

// https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete for accessibility, google loves a11y for ranking.

const VendorRequestForm = () => {

  return (
    <section id="rsvp">
      <div className="rsvp-container">
        <div className="rsvp-content">
          <h2 className="rsvp-title">
            Vendor applications are currently closed. Thank you for applying!
          </h2>
        </div>
        <div className="disclaimer">
        Our vendor application is currently closed.
          <br />
        </div>

        {/* <div className="vendors-list">
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
        </div> */}

        {/* <div className="parent-container">
        <div className="container">
          <div className="vendor-card-container">
            <div className="vendor-card">
              <h4 className="vendor-name">1 Spot</h4>
              <a href="https://buy.stripe.com/4gweWR5bna3ZgykeUV" class="vendor-button">Submit Payment</a>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="vendor-card-container">
            <div className="vendor-card">
              <h4 className="vendor-name">2 Spots</h4>
              <a href="https://buy.stripe.com/00g7upeLX2Bx95SeV2" class="vendor-button">Submit Payment</a>
            </div>
          </div>
        </div>
        </div> */}

      </div>
    </section>
  );
};

export default VendorRequestForm;
