/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Menu from './components/sideMenu'
import Fleche from './components/fleche'
import PreAbout from './components/pre-about'
import PreFooter from './components/pre-footer'
import Footer from './components/footer'
import Wave1 from './assets/svg/wave1.svg'
import './assets/styles/css/Style.css'
import './assets/styles/css/animation-text.css'
import './App.css'

function App() {

  console.log("-----------------------------------------------------")

  return (
    <>

    <Menu/>
    <Home/>
    <div>
      <img src={Wave1} alt="" />
    </div>
    <Fleche/>
    <PreAbout/>
      <BrowserRouter>
        <Routes>
        </Routes>
      </BrowserRouter>
      <PreFooter/>
      <Footer/>
    </>
  )
}

export default App
