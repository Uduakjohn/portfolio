import './App.css';
import Home from './Home';
//import { Route, Router, Routes } from 'react-router-dom';
import {BrowserRouter,Routes, Route } from "react-router-dom";

import Navbar from './Navbar';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import Resume from './Resume';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Navbar/> 
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/work' element = {<Work/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/resume' element={<Resume/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
