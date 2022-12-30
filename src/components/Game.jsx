import React from 'react';
import Menu from "./Menu"

const Game = ({ rows, columns }) => {

    const start = () => { console.log("start")}

    return (
        <>
        <div>{/*Props onClick avec objet Start envoyée au composant Menu */}</div>
        <Menu onClick={start} />
            <div className='Game'>rows {rows}, columns {columns}</div>
        </>
    );
};

export default Game;