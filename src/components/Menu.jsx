import React from 'react';
import "./Menu.css"

<div>{/* Récupération props onClick contenant objet Start du composant Game*/}</div>
const Menu = ({ onClick }) => {
    return (
        <div className='Menu'>
            <div>{/* Utilisation Props réagissant au clique */}</div>
            <button className='Button-menu' onClick={onClick}>
                Play Tetris
            </button>
        </div>
    );
};

export default Menu;