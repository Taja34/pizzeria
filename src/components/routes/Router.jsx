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
import Header from "../Home/Header/Header";
export const AppContext = createContext([])

const Router = () => {

    const [pizzas, setPizzas] = useState({})
    return ( 
<AppContext.Provider value={{pizzas,setPizzas}}>
        <BrowserRouter>
            <Routes>
            <Route  element={<Header/>} >
                <Route path="home" element={<Home />} />
            </Route>
                <Route path="/" element={<Login />} />
                <Route path="register"  element={<Register />} />
                <Route path="carrito"  element={<Carrito />} />
            </Routes>
        </BrowserRouter>
        </AppContext.Provider>
    )
}

export default Router;