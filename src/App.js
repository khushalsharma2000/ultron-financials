import React from "react";
import {  Routes, Route} from "react-router-dom"; // Import Routes
import "./App.css";

import Completesection from "./components/Completesection";
import Blogonerender from "./pages/Blogonerender";
import Blogtworender from "./pages/Blogtworender";
import Blogthreerender from "./pages/Blogthreerender";
import Blogfourrender from "./pages/Blogfourrender";
import { BrowserRouter } from "react-router-dom";


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
    <BrowserRouter basename={process.env.PUBLIC_URL}>
   
    <div className="App">
      
    <Routes >
      
    <Route path="/" element = {<Completesection/>}/ >
    <Route path="/blogone" element = {<Blogonerender/>}/ >
    <Route path="/blogtwo" element = {<Blogtworender/>}/ >
    <Route path="/blogthree" element = {<Blogthreerender/>}/ >
    <Route path="/blogfour" element = {<Blogfourrender/>}/ >
  
  </Routes>
  </div>
  </BrowserRouter>
  );
}

export default App;
