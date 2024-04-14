import React from "react";
import {  Routes, Route} from "react-router-dom"; // Import Routes
import "./App.css";

import Completesection from "./components/Completesection";
import Blogonerender from "./pages/Blogonerender";
import Blogtworender from "./pages/Blogtworender";
import Blogthreerender from "./pages/Blogthreerender";
import Blogfourrender from "./pages/Blogfourrender";


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
    // <Router>
    //   <div className="App">
    //     <Routes> {/* Wrap Routes around Route components */}
    //       <Route exact path="/" element={<Completesection />} />
    //       <Route exact path="/Servicespageone" element={<Servicesrender />} /> {/* Use the 'element' prop instead of 'component' */}
    //     </Routes>
    //   </div>
    // </Router>
    <div className="App">
      
    <Routes >
      
    <Route path="/" element = {<Completesection/>}/ >
    <Route path="/blogone" element = {<Blogonerender/>}/ >
    <Route path="/blogtwo" element = {<Blogtworender/>}/ >
    <Route path="/blogthree" element = {<Blogthreerender/>}/ >
    <Route path="/blogfour" element = {<Blogfourrender/>}/ >
  
  </Routes>
  </div>
  );
}

export default App;
