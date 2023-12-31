import React, { useState, useEffect } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import Stripe from "./Stripe";
import { Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";

import { productsArray } from "./productStore";

import "./tickets.css";

export default function Tickets() {

  return (
    <section id="tickets">
      <div className="ticket-container">
        <div className="ticket-content">
          <span className="ticket-topper">Tickets & Merch</span>
          <h2 className="ticket-title">Purchase Conference Tickets & Merch</h2>
          <h3 className="weekend-pass">
            Full Weekend Pass Including Speaker Events on Saturday for Only $50!
          </h3>
          <p className="rsvp-text">
            Embark on an extraordinary journey into the mysterious realms of the
            unknown at the Indiana Bigfoot Conference! Grab your exclusive
            weekend pass for just $50 and unlock an immersive experience like no
            other. Join us on Friday and Saturday to delve into the enigma of
            the legendary Bigfoot. Engage with local researchers, hear
            captivating eyewitness accounts, and dive into gripping
            presentations that unveil the secrets of this elusive creature. With
            thrilling discussions, gripping evidence, and an opportunity to
            connect with fellow enthusiasts, this conference is a must for
            anyone intrigued by the unexplained. Unravel the truth, forge new
            connections, and become part of an unforgettable quest for the
            truth. Your adventure awaits at the Indiana Bigfoot Conference –
            secure your tickets now! #IndyBigfootCon
          </p>
          <h2 className="shirts-disc">
            Shirts and hoodies will be available for pick up during the
            convention, show proof of purchase.
          </h2>
        </div>

        {/* STRIPE */}
        <Row xs={1} md={3} className="g-4">
        {productsArray.map((product, idx) => (
          <Col align="center" key={idx}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>

      </div>
    </section>
  );
}
