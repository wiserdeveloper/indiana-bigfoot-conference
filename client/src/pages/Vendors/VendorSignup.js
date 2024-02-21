import React, { useState, useRef } from "react";
import "./vendorSignup.css";
import locationIcon from "../../components/img/location-icon.svg";
import emailjs from "@emailjs/browser";

// https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete for accessibility, google loves a11y for ranking.

// const initialFormState = {
//   companyName: "",
//   contactName: "",
//   phone: "",
//   email: "",
//   webUrl: "",
//   location: "",
//   bringing: "",
//   willDonate: false,
// };

const vendorArray = [
  {
    id: "",
    title: "Outside Vendor",
    price: 100.00
  },
  {
    id: "",
    title: "Inside Vendor",
    price: 100.00
  }
]

const VendorRequestForm = () => {
  // const [formData, setFormData] = useState(initialFormState);
  // const [messageSent, setMessageSent] = useState(false);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  // const form = useRef();

  // const handleSubmit = (e) => {
  //   setLoading(true);
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_y8sapzl",
  //       "template_234rowl",
  //       form.current,
  //       "qXWcTR0X7eLecKwHb"
  //     )
  //     .then(
  //       (result) => {
  //         if (result.text === "OK") {
  //           setMessageSent(true);
  //           form.current.reset();
  //           setLoading(false);
  //         }
  //       },
  //       (error) => {
  //         setLoading(false);
  //         console.log(error.text);
  //         setError(true);
  //       }
  //     );
  //   setFormData(initialFormState);
  // };

  // const handleChange = (e) => {
  //   const { name, value, checked } = e.target;

  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //     willDonate: checked,
  //   });
  // };

  return (
    <section id="rsvp">
      <div className="rsvp-container">
        <div className="rsvp-content">
          <h2 className="rsvp-title">
            Vendor submissions are now closed
          </h2>
        </div>
        <div className="disclaimer">
          * If selected, vendors will then have <em>one month</em> to pay a fee
          of $100 after they are selected. Vendors must be set up by 2PM on
          Friday at the latest, doors to vendor hall will open at 10am each day.{" "}
          <strong>The host will supply electricity and tables.</strong>{" "}
          <p>If you have been selected to be a vendor for the Indiana Bigfoot Conference, please decide if you wish to set up outside or inside. A link to the payment form will be up soon.</p>
        </div>
        {/* <form
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
          <label className="cs-label">
            Contact Name
            <input
              className="cs-input"
              required
              type="text"
              id="contactName"
              name="contactName"
              placeholder="What is your name?"
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
            Are you willing to donate a door prize? (Optional)
            <input
              className="cs-checkbox"
              type="checkbox"
              name="willDonate"
              autoComplete="url"
              id="willDonate"
              value={formData.willDonate}
              onChange={handleChange}
            />
          </label>

          <button className="cs-submit" type="submit">
            {loading ? "Sending..." : "Submit"}
          </button>
          <div className="delayed-payment-message">We kindly request that all payments be deferred until the year 2024.</div>
          {messageSent && (
            <p className="cs-success">
              Thank you for your submission! We will be in touch soon.
            </p>
          )}
          {error && (
            <p className="cs-error">
              There was an error sending your message. Please try again later.
            </p>
          )}
        </form> */}
      </div>
    </section>
  );
};

export default VendorRequestForm;
