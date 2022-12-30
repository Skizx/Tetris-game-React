import React from 'react';
import Menu from "./Menu";
import Tetris from "./Tetris";
import useGameOver  from '../hooks/useGameOver';

<div>{/* Récupération props rows&columns de mon App */}</div>
const Game = ({ rows, columns }) => {

    <div>{/* Création d'un custom Hook */}</div>
    const [gameOver, setGameOver, resetGameOver] = useGameOver()

    const start = () => resetGameOver();

    return (
        <>
        <div>{/*Props onClick avec objet Start envoyée au composant Menu */}</div>
        <div className='Game'>
        {gameOver ? (
        <Menu onClick={start} />

        ) : (
            <Tetris rows={rows} columns={columns} setGameOver={setGameOver} />
        )}
            </div>
        </>
    );
};

export default Game;