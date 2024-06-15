import React from "react";
import {  Routes, Route} from "react-router-dom"; // Import Routes
import "./App.css";

import Completesection from "./components/Completesection";
import Blogonerender from "./pages/Blogonerender";
import Blogtworender from "./pages/Blogtworender";
import Blogthreerender from "./pages/Blogthreerender";
import Blogfourrender from "./pages/Blogfourrender";
import Corporatefinancerender from "./pages/Corporatefinancerender";
import Personalfinancerender from "./pages/Personalfinancerender";
import Businessadvisoryrender from "./pages/Businessadvisory";


// let allRoutes = createBrowserRouter(
//   [
//     {
//       path: '/',
//       element: <Completesection/>
//     },

//     {
//       path: '/Servicespageone',
//       element: <Servicesrender/>
//     }
//   ]
// )
function App() {
  return (
    
   
    <div className="App">
      
    <Routes >
      
    <Route path="/" element = {<Completesection/>}/ >
    <Route path="/blogone" element = {<Blogonerender/>}/ >
    <Route path="/blogtwo" element = {<Blogtworender/>}/ >
    <Route path="/blogthree" element = {<Blogthreerender/>}/ >
    <Route path="/blogfour" element = {<Blogfourrender/>}/ >
    <Route path="/Corporatefinance" element = {<Corporatefinancerender/>}/ >
    <Route path="/Personalfinance" element = {<Personalfinancerender/>}/ >
    <Route path="/Businessadvisory" element = {<Businessadvisoryrender/>}/ >
  
  </Routes>
  </div>
 
  );
}

export default App;
