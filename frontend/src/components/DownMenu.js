import React from 'react';
import { Link } from "react-router-dom";

function DownMenu() {
    return (
        <nav class="down_menu">
            <ul>
                <li><a><Link to="/">SOU.</Link></a></li>
                <li><a><Link to="/about">Sobre nós</Link></a></li>
            </ul>
        </nav> 
    )
}

export default DownMenu;