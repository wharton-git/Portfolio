/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home'
import Menu from './components/sideMenu'
import './assets/styles/css/Style.css'
import './App.css'

function App() {

  console.log("-----------------------------------------------------")

  return (
    <>
    <Menu/>
      <BrowserRouter>
        
        <Routes>
          <Route path='/Portfolio' element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
