import { useState, useContext, useEffect } from "react";
import "./ResultDisplay.css";
import { CrateBattleContext } from "../../../Context/CratebattlesContext";
import ResultCard from "./ResultCard/ResultCard";

const ResultDisplay = (props) => {
    const { prizeNumber } = props;
    const { itemsWon, setItemsWon, crateCoutner } = useContext(CrateBattleContext);
    console.log(itemsWon);

    useEffect(() => {
        return console.log("unmount");
    }, []);
    return (
        <div className="resultDisplay">
            {itemsWon[prizeNumber]?.map((item, index) => {
                return <ResultCard key={index} item={item} index={index + 1} color={item.color} />;
            })}
        </div>
    );
};

export default ResultDisplay;
