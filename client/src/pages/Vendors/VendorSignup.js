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
            Vendor submissions are now open
          </h2>
        </div>
        <div className="disclaimer">
          * If selected, vendors will then have <em>one month</em> to pay a fee
          of $100 after they are selected. Vendors must be set up by 2PM on
          Friday at the latest, doors to vendor hall will open at 10am each day.{" "}
          <strong>The host will supply electricity and tables.</strong>{" "}
          <p>If you have been selected to be a vendor for the Indiana Bigfoot Conference, please decide if you wish to set up outside or inside.</p>
        </div>

        <div className="container">
          <div className="vendor-card-container">
            <div className="vendor-card">
              <h4 className="vendor-name">Vendor</h4>
              <a href="https://buy.stripe.com/4gweWR5bna3ZgykeUV" class="vendor-button">Submit Payment</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default VendorRequestForm;
