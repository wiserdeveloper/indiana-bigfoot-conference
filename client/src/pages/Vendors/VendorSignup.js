import React, { useState, useRef } from "react";
import "./vendorSignup.css";
import locationMap from "../../components/img/location-map.png";
import locationIcon from "../../components/img/location-icon.svg";
import emailjs from "@emailjs/browser";

// Vendors should be able to access a page for them to sign up/register to be a vendor. They will be able to fill out a form that requires them to input their vendor information:

// Name of Company ** done
// What they will be selling ** done
// What they are bringing
// Are they will to donate (checkbox option)** done
// Contact Number ** done
// Company Email ** done
// Website URL ** done
// City, State, Zip ** done
// The host will supply electricity and tables. ** done
// If selected, vendors will then have a month to pay a fee of $100 after they are selected.
// Vendors must be set up by 2PM on Friday at the latest, doors to vendor hall will open at 10am each day.

// Once form is submitted, the information will then be sent to either bfc2024vendors@gmail.com OR sent to a Google Sheets or Admin Page. They must also sign an agreement in order to be selected.

// https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete for accessibility, google loves a11y for ranking.

const initialFormState = {
  companyName: "",
  contactName: "",
  phone: "",
  email: "",
  webUrl: "",
  location: "",
  bringing: "",
  willDonate: false,
};
const VendorRequestForm = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [loading, setLoading] = useState(false);

  const form = useRef();

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
        },
        (error) => {
          setLoading(false);
          console.log(error.text);
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      willDonate: e.target.checked,
    });
  };

  return (
    <section id="rsvp">
      <div className="rsvp-container">
        <div className="rsvp-content">
          <span className="rsvp-topper">RSVP</span>
          <h2 className="rsvp-title">
            Request to be a Vendor for Indiana's 1st Annual Bigfoot
            Conference
          </h2>
          <p className="rsvp-text">
            The host will supply electricity and tables.
          </p>
        </div>

        <picture className="rsvp-background">
          {/* <!--Mobile Image--> */}
          <source media="(max-width: 600px)" srcSet={locationMap} />
          {/* <!--Tablet and above Image--> */}
          <source media="(min-width: 601px)" srcSet={locationMap} />
          <img
            loading="lazy"
            decoding="async"
            srcSet={locationMap}
            alt="location map"
            width="1280"
            height="568"
            aria-hidden="true"
          />
        </picture>

        <form
          className="cs-form"
          id="cs-form"
          ref={form}
          name="RSVP-Form"
          onSubmit={handleSubmit}
        >
          <label className="cs-label">
            Company Name
            <input
              className="cs-input"
              required
              type="text"
              id="name"
              name="companyName"
              placeholder="What is your company name?"
              autoComplete="organization"
              onChange={handleChange}
            />
            <img
              className="cs-icon"
              loading="lazy"
              decoding="async"
              src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Contact-Page/person-gold.svg"
              alt="person icon"
              width="32"
              height="32"
            />
          </label>
          <label className="cs-label cs-email">
            Company Email
            <input
              className="cs-input"
              required
              type="email"
              id="email"
              name="email"
              placeholder="What is your company email?"
              autoComplete="email"
              onChange={handleChange}
            />
            <img
              className="cs-icon"
              loading="lazy"
              decoding="async"
              src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Contact-Page/mail-gold.svg"
              alt="mail icon"
              width="32"
              height="32"
            />
          </label>
          <label className="cs-label cs-phone">
            Contact Number
            <input
              className="cs-input"
              required
              type="tel"
              id="phone"
              name="phone"
              placeholder="Contact phone number"
              autoComplete="tel-national"
              onChange={handleChange}
            />
            <img
              className="cs-icon"
              loading="lazy"
              decoding="async"
              src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Contact-Page/phone-golden.svg"
              alt="phone icon"
              width="32"
              height="32"
            />
          </label>
          <label className="cs-label cs-phone">
            Location (City, State, Zip):
            <input
              className="cs-input"
              required
              type="text"
              id="city"
              name="location"
              placeholder="Enter city, state, and zip."
              aria-label="Location (City, State, Zip)"
              autoComplete="address"
              onChange={handleChange}
            />
            <img
              className="cs-icon"
              loading="lazy"
              decoding="async"
              src={locationIcon}
              alt="location icon"
              width="32"
              height="32"
            />
          </label>
          <label className="cs-label cs-phone">
            Company Website
            <input
              className="cs-input"
              required
              type="text"
              id="state"
              name="webUrl"
              placeholder="Enter your company website."
              autoComplete="url"
              onChange={handleChange}
            />
          </label>
          <label className="cs-label cs-phone">
            What are you bringing?
            <input
              className="cs-input"
              required
              type="text"
              id="state"
              name="bringing"
              placeholder="What are you bringing?"
              onChange={handleChange}
            />
          </label>

          <label className="check-label cs-check">
            Are you willing to donate?
            <input
              className="cs-checkbox"
              type="checkbox"
              name="willDonate"
              autoComplete="url"
              value={formData.willDonate}
              onChange={handleChange}
            />
          </label>

          <button className="cs-submit" type="submit">
            Submit Request
          </button>
        </form>
      </div>
      <div className="disclaimer">
        * If selected, vendors will then have <em>one month</em> to
        pay a fee of $100 after they are selected. Vendors must be set
        up by 2PM on Friday at the latest, doors to vendor hall will
        open at 10am each day.{" "}
        <strong>The host will supply electricity and tables.</strong>{" "}
      </div>
    </section>
  );
};

export default VendorRequestForm;
