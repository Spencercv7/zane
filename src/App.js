import React, { useEffect } from 'react'
import { BrowserRouter, Router, Route, Routes} from 'react-router-dom';
import './App.css'
import PageRoutes from './Pages/Routes';
import NavBar from './Components/navbar';
const App = () => {

  return (
    <BrowserRouter>
      <div id="SiteWrapper">
        <NavBar/>
        <PageRoutes/>
      </div>
    </BrowserRouter>
  )
}
export default App

