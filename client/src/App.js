import React from "react";
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

// import pages below
import Header from "./components/Header";
import Home from "./components/Home";
import Location from "./pages/Location";
import IBRO from "./pages/IBRO";
import Tickets from "./pages/Tickets";
import Speakers from "./pages/Speakers";
import Lodging from "./pages/Lodging";
import VendorSignup from "./pages/Vendors/VendorSignup";
import ScrollUp from "./components/Scrollup";
import Sponsors from "./pages/Sponsors";
// stripe checkout pages
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import CartProvider from "./CartContext";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("");

function App() {
  return (
    <CartProvider>
    <Elements stripe={stripePromise}>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/location" element={<Location />} />
        <Route path="/ibro" element={<IBRO />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/vendors" element={<VendorSignup />} />
        <Route path="/lodging" element={<Lodging />} />
        <Route path="/sponsors" element={<Sponsors />} />

        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>

      <ScrollUp />
      
    </Elements>
    </CartProvider>
  );
}

export default App;
