import React from 'react';
import './BoardCell.css';

const BoardCell = ({ cell }) => {
    return (
        <div className={`BoardCell ${cell.className}`}>
            <div className='Sparkle'></div>
        </div>
    );
};

export default BoardCell;