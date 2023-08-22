import jwt_decode from "jwt-decode";
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const CrateBattleContext = createContext();

const CrateBattleContextProvider = (props) => {
    const { children } = props;
    const Navigate = useNavigate();

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
    const [battles, setBattles] = useState([]);

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

    //? client side functions================================

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

    //? server side functions================================

    const getUserInfo = () => {
        console.log("user info requested");
    };

    const getUserId = () => {
        const userId = jwt_decode(localStorage.getItem("userToken")).userId;
        console.log(userId);
    };

    const getAllBattles = async () => {
        const battles = await axios.get("http://localhost:4000/crateBattle");
        console.log(battles.data);
        setBattles(battles.data);
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
                //! server things ===============

                getUserInfo,
                getUserId,
                getAllBattles,
                battles,
            }}
        >
            {children}
        </CrateBattleContext.Provider>
    );
};

export default CrateBattleContextProvider;
