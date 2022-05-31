import React from 'react'
// import { useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import UnderCon from './Pages/UnderCon';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Resume from './Pages/Resume';

const Home = () => {
  return (
    <h1>
        Home Page
    </h1>
  )
}

const App = () => {

  return (
    <BrowserRouter>
      <Route exact path='/' component={Home}/>
      <Route exact path='/construction' component={Construction}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/profile' component={Profile }/>
      <Route exact path='/resume' component={Resume}/>
    </BrowserRouter>
  )
}
export default App
