import { useContext, useState, useEffect } from "react";
import { MinefieldMaddnessContext } from "../../../Context/MinefieldMadnessContext";

const MinefieldBoard = () => {
    const { minefieldOrder, gameState, good, bad, flippedTiles, setFailed, failed, restartEverything } =
        useContext(MinefieldMaddnessContext);
    let tilesOrder = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 3, 2, 3, 4, 5, 6, 7, 8, 5, 6, 4, 3, 1];

    useEffect(() => {
        return () => {
            restartEverything();
        };
    }, []);

    return (
        <div className="minefieldTiles">
            {minefieldOrder.map((tile, index) => {
                return (
                    <div className="tile">
                        {failed === false ? (
                            <img
                                className={`cover ${flippedTiles.includes(index) ? "reveald" : ""}`}
                                src="/MinefieldMadnessImages/Stone.png"
                            />
                        ) : tile === 0 ? (
                            <img className={`cover reveald`} src="/MinefieldMadnessImages/Stone.png" />
                        ) : tile === 1 ? (
                            <img className={`coverMine revealdMine`} src="/MinefieldMadnessImages/Mine.png" />
                        ) : (
                            ""
                        )}
                        <img
                            key={index}
                            onClick={
                                gameState === "playing"
                                    ? tile === 0
                                        ? () => good(index)
                                        : () => {
                                              bad();
                                              setFailed(true);
                                          }
                                    : null
                            }
                            className={`${gameState === "playing" ? "mine" : "preGameMine"} ${
                                flippedTiles.includes(index) ? "flipped" : failed === true ? "endReveal" : ""
                            }`}
                            src={`/MinefieldMadnessImages/tile${tilesOrder[index]}.png`}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default MinefieldBoard;
