import React from "react";
import { Route, Routes } from "react-router-dom";

// import pages below
import Header from "./components/Header";
import Home from "./components/Home";
import RegisterAttend from "./pages/RegisterAttend";
import Location from './pages/Location'
import IBRO from "./pages/IBRO";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/attend" element={<RegisterAttend />} />
        <Route path='/location' element={<Location />} />
        <Route path="/ibro" element={<IBRO />} />
      </Routes>
    </>
  );
}

export default App;
