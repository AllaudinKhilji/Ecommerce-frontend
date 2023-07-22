
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { CartItems } from './components/CartItems';
import Header from './components/Header';
import { Home } from './components/Home';
import SignForm from './components/Signinform';
import Signup from './components/Signup';
import { About } from './components/About';
import { Contactus } from './components/Contactus';
import HideTopNav from './components/HideTopNav';
import { Description } from './components/Description';

function App() {

  const [isCartUpdated, setIsCartUpdated] = useState(0)
  return (
    <BrowserRouter>
      <div>
        <HideTopNav><Header /></HideTopNav>

        <Routes>
          <Route path='/login' element={<SignForm />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/home' element={<Home setIsCartUpdated={setIsCartUpdated} />} />
          <Route path='/cart' element={<CartItems setIsCartUpdated={setIsCartUpdated}/>} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contactus />} />
          <Route path='/description' element={<Description />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
