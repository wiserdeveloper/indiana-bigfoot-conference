import React, { useState } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import Stripe from "./Stripe";
import { Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import 'bootstrap/dist/css/bootstrap.min.css'
import { productsArray } from "./productStore";
import "./tickets.css";

export default function Tickets() {
  const [selectedSize, setSelectedSize] = useState('all')

  const handleSizeChange = event => {
    setSelectedSize(event.target.value)
  }

  const filteredProducts = productsArray.filter(
    product => selectedSize === 'all' || product.size === selectedSize || product.title === 'Ticket'
  );

  return (
    <section id="tickets">
      <div className="ticket-container">
        <div className="ticket-content">
          <span className="ticket-topper">Tickets & Merch</span>
          <h2 className="ticket-title">Purchase Conference Tickets & Merch</h2>
          <h3 className="weekend-pass">
          Tickets for Saturday are no longer available for purchase.
          </h3>
          <p className="rsvp-text">
          Uncover the mysteries of Bigfoot at the Indiana Bigfoot Conference! Friday features a free Town Hall Meeting, a forum for sharing stories and experiences. On Saturday, expert speakers will delve into evidence and insights surrounding this enigmatic creature. Engage with researchers, witness compelling evidence showcases, and explore merchandise and vendors. Join us for a weekend of discovery and community as we unravel the legend of Bigfoot! Though tickets are sold out, you’re more than welcome to continue purchasing merch to show your support!
          </p>
          <h2 className="shirts-disc">
            Shirts and hoodies will be available for pick up during the
            convention, show proof of purchase.
          </h2>
          <h2 className="refund-disc">No refunds.</h2>
        </div>
        
        <div className="dropdown">
          <label htmlFor="size-dropdown">Select Size:</label>
          <select id="size-dropdown" onChange={handleSizeChange}>
            <option value="all">All Sizes</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="xl">XL</option>
            <option value="2xl">2XL</option>
            <option value="3xl">3XL</option>
            <option value="4xl">4XL</option>
            <option value="5xl">5XL</option>
          </select>
        </div>

        STRIPE
        <Row xs={1} md={3} className="g-4">
        {filteredProducts.map((product, idx) => (
          <Col align="center" key={idx}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>

      </div>
    </section>
  );
}
