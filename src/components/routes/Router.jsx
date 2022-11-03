import React, { createContext, useState } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Carrito from "../carrito/Carrito";
import Home from "../Home/Home";
import Login from "../sesion/Login";
import Register from "../sesion/Register";



const Router = () => {
   
    return ( 

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="home" element={<Home />} />
                <Route path="register"  element={<Register />} />
                <Route path="carrito"  element={<Carrito />} />
                
            </Routes>
        </BrowserRouter>
   
    )
}

export default Router;