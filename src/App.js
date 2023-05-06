import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import SeriesList from "./Components/SeriesList";
import Player from "./Components/Player";
import About from "./Components/About";
import Current from "./Components/Current";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const App = () => {
  return (
    <>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar/>}>
            <Route index element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/series" element={<SeriesList/>}/>
            <Route path="/player" element={<Player/>}/>
            <Route path="/current" element={<Current/>}/>

          </Route>
        </Routes>
        </BrowserRouter>
  </>  
  );
}
export default App;
