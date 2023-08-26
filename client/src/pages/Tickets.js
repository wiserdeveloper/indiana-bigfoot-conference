import React from "react";

import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)

const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;
const secretKey = process.env.REACT_APP_STRIPE_SECRET_KEY;

const Tickets = () => {
     return (
          <div>Ticket Page</div>
     )
}

export default Tickets;