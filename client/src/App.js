import React from 'react';
import { Route, Routes } from 'react-router-dom';

// import pages below
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <>
    <Header />

    <Routes>
      <Route exact path='/' element={<Home />} />
    </Routes>
    </>
  );
}

export default App;
