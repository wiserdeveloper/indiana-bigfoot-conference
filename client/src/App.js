import React from "react";
import { Route, Routes } from "react-router-dom";

// import pages below
import Header from "./components/Header";
import Home from "./components/Home";
import Location from "./pages/Location";
import IBRO from "./pages/IBRO";
import Tickets from "./pages/Tickets";
import Speakers from "./pages/Speakers";
import Lodging from "./pages/Lodging";
import VendorSignup from "./pages/Vendors/VendorSignup";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("");

function App() {
  return (
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
      </Routes>
    </Elements>
  );
}

export default App;
