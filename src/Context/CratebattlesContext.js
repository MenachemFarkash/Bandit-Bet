import { createContext, useState } from "react";
export const CrateBattleContext = createContext();

const CrateBattleContextProvider = (props) => {
    const { children } = props;

    const [cratesOrder, setCratesOrder] = useState([]);
    const [selectedCrates, setSelectedCrates] = useState([]);
    const [itemsWon, setItemsWon] = useState([[], [], [], []]);
    const [slotsOrders, setSlotsOrders] = useState([[], [], [], []]);
    const [shouldAnimate, setShouldAnimate] = useState(false);
    const [gameMode, setGameMode] = useState("1v1");
    const [crateCounter, setCrateCounter] = useState(0);
    const [cratesNames, setCratesNames] = useState([]);
    const [crateGameState, setCrateGameState] = useState("not playing");
    const [prizeSum, setPrizeSum] = useState(0);

    const resetEverything = () => {
        setCratesNames([]);
        setCrateGameState("not playing");
        setPrizeSum(0);
        setSlotsOrders([[], [], [], []]);
        setItemsWon([[], [], [], []]);
        setSelectedCrates([]);
        setCratesOrder([]);
        setShouldAnimate(false);
        setGameMode("1v1");
        setCrateCounter(0);
    };

    const playGame = (num) => {
        if (num <= cratesOrder.length) {
            setCrateGameState("playing");
            setShouldAnimate(true);
            setCrateCounter(num + 1);
            for (let i = 0; i < 4; i++) {
                let itemsList = [];
                let won = [];
                for (let j = 0; j < 42; j++) {
                    const item = pickRandomItem(cratesOrder[num]);

                    itemsList.push(
                        <img
                            key={j}
                            className="item-image"
                            src={`/Skins/${item?.name}.png`}
                            alt={item?.name}
                        />
                    );
                    if (j === 41) {
                        won = pickRandomItem(cratesOrder[num]);
                        console.log(won);
                        itemsList.splice(
                            -3,
                            1,
                            <img
                                key={42}
                                className="item-image won-item"
                                src={`/Skins/${won.name}.png`}
                                alt={won.name}
                            />
                        );
                    }
                }
                setSlotsOrders((prevState) => {
                    const newState = [...prevState];
                    newState[i] = itemsList;
                    return newState;
                });

                setTimeout(() => {
                    setItemsWon((prevState) => {
                        const newState = [...prevState];
                        newState[i].push(won);
                        return newState;
                    });
                }, 5200);
            }

            setTimeout(() => {
                setShouldAnimate(false);
            }, 5200);
        } else {
            setCrateCounter(0);
        }
    };

    const pickRandomItem = (crate) => {
        const number = Math.floor(Math.random() * crate[crate.length - 1].range[1]);
        for (let i = 0; i < crate.length; i++) {
            const range = crate[i].range;
            if (number >= range[0] && number <= range[1]) {
                const item = { name: crate[i].name, price: crate[i].price, color: crate[i].color };
                return item;
            }
        }
    };

    return (
        <CrateBattleContext.Provider
            value={{
                itemsWon,
                setItemsWon,
                slotsOrders,
                shouldAnimate,
                setShouldAnimate,
                playGame,
                selectedCrates,
                setSelectedCrates,
                cratesOrder,
                setCratesOrder,
                gameMode,
                setGameMode,
                crateCounter,
                cratesNames,
                setCratesNames,
                crateGameState,
                setCrateGameState,
                prizeSum,
                setPrizeSum,
                resetEverything,
            }}
        >
            {children}
        </CrateBattleContext.Provider>
    );
};

export default CrateBattleContextProvider;
