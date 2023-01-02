import { useCallback, useState } from 'react';

const buildGameStats = () => ({
    level: 1,
    linesCompleted: 0,
    linesPerLevel: 10,
    points: 0,
});

const useGameStats = () => {
    const [gameStats, setGamesStats] = useState(buildGameStats());

    const addLinesCleared = useCallback(() => {}, []);

    return [gameStats, addLinesCleared];
}

export default useGameStats;