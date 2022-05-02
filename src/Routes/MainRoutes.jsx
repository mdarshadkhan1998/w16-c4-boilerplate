import React from "react";
import { Navbar } from "../components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Men from "../components/Men";
import Women from "../components/Women";
import Kids from "../components/Kids";
import HomeDecor from "../components/HomeDecor";
import { Products } from "../components/Products";


const MainRoutes = () => {
  return <>
        {/* Navbar and all the routes */}
          <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/products" element={<Products/>}/>
              <Route path="/products/men" element={<Men/>}/>
              <Route path="/products/women" element={<Women/>}/>
              <Route path="/products/kids" element={<Kids/>}/>
              <Route path="/products/homedecor" element={<HomeDecor/>}/>

          </Routes>
        </>;
};
export { MainRoutes };
