import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from '../Menu/Menu';
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Layout from "../pages/Layout";
import NoPage from "../pages/NoPage";
import LerMais from "../LerMais/LerMais";
import Post from "../Post/Post"


const AppRoutes =()=>{
    return(
        <Router>
            <Menu/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/cadastro" element={<Layout/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/lermais" element={<LerMais/>}></Route>
                <Route path="/post" element={<Post/>}></Route>
                <Route path="*" element={<NoPage/>}/>
            </Routes>
        </Router>
    )
}

export default AppRoutes;
