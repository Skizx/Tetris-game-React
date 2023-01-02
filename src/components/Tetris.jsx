import React from 'react';
import Board from "./Board";
import "./Tetris.css";

import useBoard from '../hooks/useBoard';

const Tetris = ({ rows, columns, setGameOver }) => {
    // eslint-disable-next-line no-unused-vars
    const [board, setBoard] = useBoard({ rows, columns})
    return (
        
        <Board board={board} />

    )

};

export default Tetris;