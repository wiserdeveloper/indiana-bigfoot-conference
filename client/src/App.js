import React from "react";
import { Route, Routes } from "react-router-dom";

// import pages below
import Header from "./components/Header";
import Home from "./components/Home";
import RegisterAttend from "./pages/RegisterAttend";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/attend" element={<RegisterAttend />} />
      </Routes>
    </>
  );
}

export default App;
