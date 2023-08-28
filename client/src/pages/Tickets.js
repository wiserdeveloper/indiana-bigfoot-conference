import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import Stripe from "./Stripe";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_51Nj2nuBvXyDWVtmIHmJRaKQozVcxcghT53PNrWEd896fMlWKpYRLpAlk6uDaYGS3RvZcai7Ba8xdQyJ74pqPAFjd00dOSpH7Hx", {
     stripeAccount: 'acct_1Nj2nuBvXyDWVtmI',
})

export default function Tickets() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/create-payment-intent", {
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
    <div className="Tickets">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <Stripe />
        </Elements>
      )}
    </div>
  );
}