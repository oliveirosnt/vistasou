import React from 'react';
import { Link } from "react-router-dom";

function TopMenu() {
    return (
        <nav class="top_menu">
            <ul>
            <li><a><Link to="/">SOU.</Link></a></li>
            <li><a><Link to="/catalogue">Catálogo</Link></a></li>
            <li><a><Link to="/about">Sobre nós</Link></a></li>
            <li><a><Link to="/newProduct">Cadastrar</Link></a></li>
            </ul>
        </nav>
    )
}

export default TopMenu;