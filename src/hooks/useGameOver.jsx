import { useCallback, useState } from 'react';

const useGameOver = () => {

    const [gameOver, setGameOver] = useState(true)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const resetGameOver = useCallback(() => {
        setGameOver(false)
    })

    return (
        [gameOver, setGameOver, resetGameOver]  
    );
};

export default useGameOver;