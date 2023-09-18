import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import Stripe from "./Stripe";
import './tickets.css';

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY, {
     stripeAccount: 'acct_1Nj2nuBvXyDWVtmI',
})

export default function Tickets() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://indiana-bigfoot-conference-server.vercel.app//api/payments/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "ticket" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <section id="tickets">
      <div className="ticket-container">
        <div className="ticket-content">
          <span className="ticket-topper">Tickets</span>
          <h2 className="ticket-title">
            Purchase Conference Tickets
          </h2>
          <h3>
            Full Weekend Pass for Only $45!
          </h3>
          <p className="rsvp-text">
          Embark on an extraordinary journey into the mysterious realms of the unknown at the Indiana Bigfoot Conference! Grab your exclusive weekend pass for just $45 and unlock an immersive experience like no other. Join us on Friday and Saturday to delve into the enigma of the legendary Bigfoot. Engage with local researchers, hear captivating eyewitness accounts, and dive into gripping presentations that unveil the secrets of this elusive creature. With thrilling discussions, gripping evidence, and an opportunity to connect with fellow enthusiasts, this conference is a must for anyone intrigued by the unexplained. Unravel the truth, forge new connections, and become part of an unforgettable quest for the truth. Your adventure awaits at the Indiana Bigfoot Conference – secure your tickets now! #IndyBigfootCon
          </p>
        </div>
      </div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <Stripe />
        </Elements>
      )}
    </section>
  );
}