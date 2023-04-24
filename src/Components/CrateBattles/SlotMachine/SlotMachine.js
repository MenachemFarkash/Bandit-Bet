import { useState, useContext, useEffect } from "react";
import { CrateBattleContext } from "../../../Context/CratebattlesContext";
import "./SlotMachine.css";
import Slot from "./Slot/Slot";
import ResultDisplay from "../ResultDisplay/ResultDisplay";
import UserCard from "./UserCard/UserCard";
import BattleInfo from "./BattleInfo/BattleInfo";
import Countdown from "./Countdown/Countdown";

const SlotMachine = () => {
    const {
        playGame,
        cratesOrder,
        cratesNames,
        crateGameState,
        setCrateGameState,
        itemsWon,
        resetEverything,
    } = useContext(CrateBattleContext);
    let num = 0;

    const calcSum = () => {
        let sum = 0;
        itemsWon.map((item) => {
            item.map((prize) => {
                sum += prize.price;
            });
        });
        console.log(sum);
        return sum;
    };

    useEffect(() => {
        console.log("crateGameState before");
        setCrateGameState("pre game");
        playGameLoop();
        return () => {
            resetEverything();
        };
    }, []);
    const playGameLoop = () => {
        let loopPlay = setInterval(() => {
            if (num < cratesOrder.length) {
                playGame(num);
                num++;
            } else {
                // num = 0;
                clearInterval(loopPlay);
                setCrateGameState("not playing");
            }
        }, 6300);
    };

    return (
        <div className="slotMachineContainer">
            <BattleInfo cratesNames={cratesNames} />
            {crateGameState === "playing" ? (
                <div className="slotMachine">
                    <div className="redLines">
                        <img className="leftArrow" src="/Crates/redArrow.png" />
                        <div className="redLine line1"></div>
                        <div className="redLine line2"></div>
                        <div className="redLine line3"></div>
                        <div className="redLine line4"></div>
                        <img className="rightArrow" src="/Crates/redArrow.png" />
                    </div>
                    <Slot slotNumber={0} />
                    <Slot slotNumber={1} />
                    <Slot slotNumber={2} />
                    <Slot slotNumber={3} />
                </div>
            ) : crateGameState === "not playing" ? (
                <div className="slotMachine">
                    <h1 className="prizeSumCounter">{calcSum().toFixed(2)}</h1>
                </div>
            ) : crateGameState === "pre game" ? (
                <div className="slotMachine">
                    <h1 className="prizeSumCounter">
                        Game Starting
                        <Countdown seconds={5} />
                    </h1>
                </div>
            ) : (
                ""
            )}
            <div className="usersCardList">
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
            </div>
            <div className="gameResultDisplay">
                <ResultDisplay prizeNumber={0} />
                <ResultDisplay prizeNumber={1} />
                <ResultDisplay prizeNumber={2} />
                <ResultDisplay prizeNumber={3} />
            </div>
        </div>
    );
};

export default SlotMachine;
