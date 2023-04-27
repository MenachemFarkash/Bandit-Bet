import { createContext, useState } from "react";
export const MinefieldMaddnessContext = createContext();

const MinefieldMaddnessContextProvider = ({ children }) => {
    const [minefieldOrder, setMinefieldOrder] = useState(new Array(25).fill(0));
    const [numberOfMines, setNumberOfMines] = useState(2);
    const [betAmount, setBetAmount] = useState(0);
    const [gameState, setGameState] = useState("notPlaying");
    const [flippedTiles, setFlippedTiles] = useState([]);
    const [failed, setFailed] = useState(false);

    const addMinesToBoard = (mines) => {
        let withMines = new Array(25).fill(0);
        let selectedIndices = [];
        for (let i = 0; i < mines; i++) {
            let index;
            do {
                index = Math.floor(Math.random() * 25);
            } while (selectedIndices.includes(index));
            selectedIndices.push(index);
            withMines[index] = 1;
        }
        console.log(withMines);
        setMinefieldOrder(withMines);
    };

    const restartEverything = () => {
        setMinefieldOrder(new Array(25).fill(0));
        setNumberOfMines(2);
        setBetAmount(0);
        setGameState("notPlaying");
        setFlippedTiles([]);
        setFailed(false);
    };

    const startGame = () => {
        setFailed(false);
        setFlippedTiles([]);
        setGameState("playing");
        addMinesToBoard(4);
    };

    const good = (mineIndex) => {
        console.log("money", mineIndex);
        if (flippedTiles.includes(mineIndex)) {
            return;
        } else {
            setFlippedTiles((prevState) => [...prevState, mineIndex]);
        }
    };

    const bad = () => {
        console.log("mine");
        setGameState("not playing");
    };

    return (
        <MinefieldMaddnessContext.Provider
            value={{
                minefieldOrder,
                startGame,
                good,
                bad,
                gameState,
                flippedTiles,
                failed,
                setFailed,
                restartEverything,
            }}
        >
            {children}
        </MinefieldMaddnessContext.Provider>
    );
};

export default MinefieldMaddnessContextProvider;
