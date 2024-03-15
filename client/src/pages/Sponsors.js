import React from "react";
import { FaWarehouse } from "react-icons/fa";

const Sponsors = () => {
     return (
          <section id="speaker">
      <div className="speakers-container">
        <div className="speakers-content">
          <span className="speakers-topper">Sponsor Information</span>
          <h2 className="speakers-title">Sponsor Donation</h2>

          <p className="sponsor-p">If you are interested in being a sponsor or have questions, please make your donation on-line.  If you have questions, please send an email to bfc2024info@gmail.com and we will get back to you. Thank you for your desire to sponsor our event. (Please note that any of these sponsorships can be anonymous if you wish. Just indicate that when you make your donation).</p>

          <div className="sponsor-master-container">
          <div className="container">
          <div className="sponsor-card-container">
            <div className="sponsor-card">
              <h4 className="sponsor-name">$50 Tier</h4>
               <p>*Anonymous donation</p>
              <a href="https://buy.stripe.com/6oE7up47ja3Z6XK6or" class="sponsor-button">Submit Payment</a>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="sponsor-card-container">
            <div className="sponsor-card">
              <h4 className="sponsor-name">$100 Tier</h4>
               <p>*Name on poster at event</p>
              <a href="https://buy.stripe.com/8wMcOJ7jv4JF81OdQU" class="sponsor-button">Submit Payment</a>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="sponsor-card-container">
            <div className="sponsor-card">
              <h4 className="sponsor-name">Sponsor a Speaker ($250) Tier</h4>
               <p>*Name announced during introduction of speaker</p>
               <p>*Name on poster displayed at event for that speaker</p>
               <p>*Name on speaker's bio page on website if desired</p>
              <a href="https://buy.stripe.com/3cs9Cx47jgsn0zm6ot" class="sponsor-button">Submit Payment</a>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="sponsor-card-container">
            <div className="sponsor-card">
              <h4 className="sponsor-name">$250 Tier</h4>
               <p>*Name on poster displayed at event</p>
               <p>*Name on conference website if desired</p>
              <a href="https://buy.stripe.com/00g6qleLX3FBa9W8wD" class="sponsor-button">Submit Payment</a>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="sponsor-card-container">
            <div className="sponsor-card">
              <h4 className="sponsor-name">$500 Tier</h4>
               <p>*Name on event T-shirt</p>
               <p>*Name on poster displayed at event</p>
               <p>*Name on conference website if desired</p>
              <a href="https://buy.stripe.com/8wMdSN9rDcc72Hu6ou" class="sponsor-button">Submit Payment</a>
            </div>
          </div>
        </div>
          </div>

        </div>
      </div>
    </section>
     )
}

export default Sponsors;