import React from "react";
import {Link} from 'react-router-dom'
import './Menu.css';

const Menu = ()=>{
    return(
        <header className = 'menu'>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/cadastro">Cadastro</Link>
                <Link to="/Pesquisa">Pesquisa</Link>
                <Link to="/contact">Fale Conosco</Link>
            </nav>
        </header>
    )
}
export default Menu;