import { useState, useContext } from "react";
import { CrateBattleContext } from "../../../../Context/CratebattlesContext";
import "./Slot.css";
import { MdCleaningServices } from "react-icons/md";

const Slot = (props) => {
    const { slotNumber } = props;
    const { slotsOrders, shouldAnimate, crateCounter, itemsWon, prizeSum, setPrizeSum } =
        useContext(CrateBattleContext);
    const itemWon = itemsWon[slotNumber];

    return (
        <div className="slot1">
            <div className={shouldAnimate === true ? "scroll" : "items"}>
                {slotsOrders[slotNumber]?.map((item, index) => {
                    return (
                        <>
                            <div
                                key={index}
                                className={
                                    index === 39 && shouldAnimate === false
                                        ? "wonItem"
                                        : index === 38 && shouldAnimate === false
                                        ? "aboveWinItem"
                                        : index === 40 && shouldAnimate === false
                                        ? "belowWinItem"
                                        : ""
                                }
                            >
                                {item}
                                {index === 39 && shouldAnimate === false ? (
                                    <h2 className="slotItemPrice">${itemWon[crateCounter - 1]?.price}</h2>
                                ) : (
                                    ""
                                )}
                            </div>
                        </>
                    );
                })}
            </div>
        </div>
    );
};

export default Slot;
