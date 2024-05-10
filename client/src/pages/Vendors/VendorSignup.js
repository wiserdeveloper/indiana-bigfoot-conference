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
            Vendor spaces are now full
          </h2>
        </div>
        <div className="disclaimer">
          Our vendor spaces are now full. If you have been selected to be a vendor for the Indiana Bigfoot Conference, please make your payment of $100 below. Vendors will only have <em>one month</em> to make their payment.
          Vendors must be set up by 2PM on Friday at the <em>latest</em>, doors to the vendor hall will be open at 10AM each day. <strong>The host will supply electricity and tables.</strong>
          <br />

          <p>If you would like to be put on a waiting list, please email <strong>bfc2024info@gmail.com</strong></p>
         
        </div>

        <div className="parent-container">
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
        </div>

      </div>
    </section>
  );
};

export default VendorRequestForm;
