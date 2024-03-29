import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { CartContext } from "../CartContext";
import CartProduct from "./CartProduct";

import { FaShoppingCart } from "react-icons/fa";

import 'bootstrap/dist/css/bootstrap.min.css'

import { Button, Modal } from 'react-bootstrap'

const Header = () => {
  const cart = useContext(CartContext)

  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const checkout = async () => {
    await fetch('https://indiana-bigfoot-conference-server.vercel.app/checkout', { // Make sure to change to deployed domain when in live mode
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({items: cart.items})
    }).then((response) => {
        return response.json();
    }).then((response) => {
        if(response.url) {
            window.location.assign(response.url); // This is forwarding the user to Stripe to finish checkout
        }
    }).catch((error) => {
      console.log(error)
    })
}

  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        Indiana Bigfoot Conference
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded
            ? "navigation-menu expanded"
            : "navigation-menu"
        }
      >
        <ul>
          <li onClick={() => setIsNavExpanded(false)}>
            <Link to="/">HOME</Link>
          </li>
          <li onClick={() => setIsNavExpanded(false)}>
            <Link to="/tickets">TICKETS</Link>
          </li>
          <li onClick={() => setIsNavExpanded(false)}>
            <Link to="speakers">SPEAKERS</Link>
          </li>
          <li onClick={() => setIsNavExpanded(false)}>
            <Link to="/vendors">VENDORS</Link>
          </li>
          <li onClick={() => setIsNavExpanded(false)}>
            <Link to="/location">LOCATION</Link>
          </li>
          <li onClick={() => setIsNavExpanded(false)}>
            <Link to="/lodging">LODGING</Link>
          </li>
          <li onClick={() => setIsNavExpanded(false)}>
            <Link to="/sponsors">SPONSORS</Link>
          </li>
          <li onClick={() => setIsNavExpanded(false)}>
            <Button onClick={handleShow}><FaShoppingCart /> ({productsCount} Items)</Button>
          </li>
        </ul>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title style={{ textAlign: 'center', width: '100%' }}>Shopping Cart</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            {productsCount > 0 ?
                <>
                    <p>Items in your cart:</p>
                    {cart.items.map((currentProduct, idx) => (
                      <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                    ))}

                    <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

                    <Button varient="success" onClick={checkout}>
                      Checkout
                    </Button>
                </>
            :
                <h1>There are no items in your cart.</h1>
            }
          </Modal.Body>
        </Modal>
      </div>
    </nav>
  );
};

export default Header;
