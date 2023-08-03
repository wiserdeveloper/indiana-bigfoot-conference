import React, { useState } from "react";
import "./registerAttend.css";
import locationMap from "../components/img/location-map.png";
import locationIcon from "../components/img/location-icon.svg";

// Add a page that allows users to easily register to attend the conference.

// When user hits submit, it sends an email to the host of the person’s information (name, phone number, email, and state/city they are from)

// https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete for accessibility, google loves a11y for ranking.

const initialFormState = {
  name: "",
  phone: "",
  email: "",
  city: "",
  state: "",
};
const RegisterAttend = () => {
  const [formData, setFormData] = useState(initialFormState);

  //     const handleSubmit = (e) => {
  //  // build an onSubmit for the form, where are we sending it?
  //     }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  console.log(formData);
  return (
    <section id="rsvp">
      <div className="rsvp-container">
        <div className="rsvp-content">
          <span className="rsvp-topper">RSVP</span>
          <h2 className="rsvp-title">
            RSVP for Indiana's 1st Annual Bigfoot Conference
          </h2>
          <p className="rsvp-text">
            Let us know we can expect you by September 20th, 2024.
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

        <form className="cs-form" id="cs-form" name="RSVP-Form">
          <label className="cs-label">
            Name
            <input
              className="cs-input"
              required
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              autoComplete="name"
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
            Email
            <input
              className="cs-input"
              required
              type="email"
              id="email"
              name="email"
              placeholder="Email"
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
            Phone
            <input
              className="cs-input"
              required
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone"
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
            What city are you coming from?
            <input
              className="cs-input"
              required
              type="text"
              id="city"
              name="city"
              placeholder="City"
              autoComplete="address-level2"
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
            What state are you coming from?
            <input
              className="cs-input"
              required
              type="text"
              id="state"
              name="state"
              placeholder="State"
              autoComplete="address-level1"
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

          <button className="cs-submit" type="submit">
            RSVP
          </button>
        </form>
      </div>
    </section>
  );
};

export default RegisterAttend;
