import { useContext } from "react";
import "./MinefieldMadness.css";
import { MinefieldMaddnessContext } from "../../Context/MinefieldMadnessContext";
import MinefieldBoard from "../../Components/MinefieldMadness/MinefieldBoard/MinefieldBoard";
import MinefieldGameControls from "../../Components/MinefieldMadness/MinefieldGameControls/MinefieldGameControls";

const MinefieldMandness = () => {
    const { minefieldOrder, startGame, flippedTiles, failed, setNumberOfMines, numberOfMines, gameState } =
        useContext(MinefieldMaddnessContext);

    return (
        <div className="minefieldContainer">
            <div className="gameSettings">
                <div className="infoCard">
                    <img src="/MinefieldMadnessImages/minefieldLogo.png" />
                    <div>
                        <h4>Minefield Madness</h4>
                        <p>Boost your bonus each time you avoid a mine </p>
                    </div>
                </div>
                <div className="settings">
                    <div className="betSettings">
                        <h4>BET AMOUNT</h4>
                        <div className="betButtons">
                            <div className="betAmountInput">
                                <img className="scrapLogo" src="/Skins/scrap.png" />
                                <input
                                    disabled={gameState === "playing" && true}
                                    defaultValue={(0.1).toFixed(2)}
                                    style={{ width: "210px", height: "20px" }}
                                />
                            </div>
                            <div className="amountButton" style={{ width: "48px", height: "48px" }}>
                                1/2
                            </div>
                            <div className="amountButton" style={{ width: "48px", height: "48px" }}>
                                X2
                            </div>
                            <div className="amountButton" style={{ width: "54px", height: "48px" }}>
                                MAX
                            </div>
                        </div>
                    </div>
                    <div className="minesSettings">
                        <h4>HOW MANY LANDMINES?</h4>
                        <div className="minesButtons">
                            <div className="minesAmountInput">
                                <img className="scrapLogo" src="/MinefieldMadnessImages/Mine.png" />
                                <input
                                    disabled={gameState === "playing" && true}
                                    onChange={(e) => setNumberOfMines(e.target.value)}
                                    defaultValue={numberOfMines}
                                    value={numberOfMines}
                                    style={{ width: "160px", height: "20px" }}
                                />
                            </div>
                            <div
                                onClick={() => {
                                    !gameState === "playing" && setNumberOfMines(3);
                                }}
                                className="amountButton"
                                style={{ width: "48px", height: "48px" }}
                            >
                                X3
                            </div>
                            <div
                                onClick={() => {
                                    !gameState === "playing" && setNumberOfMines(5);
                                }}
                                className="amountButton"
                                style={{ width: "48px", height: "48px" }}
                            >
                                X5
                            </div>
                            <div
                                onClick={() => {
                                    !gameState === "playing" && setNumberOfMines(16);
                                }}
                                className="amountButton"
                                style={{ width: "48px", height: "48px" }}
                            >
                                X16
                            </div>
                            <div
                                onClick={() => {
                                    !gameState === "playing" && setNumberOfMines(24);
                                }}
                                className="amountButton"
                                style={{ width: "54px", height: "48px" }}
                            >
                                X24
                            </div>
                        </div>
                    </div>
                    <button className="minesStartGame" onClick={() => startGame()}>
                        START NEW GAME
                    </button>
                </div>
                {gameState === "playing" && <MinefieldGameControls />}
            </div>
            <div className="minesBoard">
                <MinefieldBoard />
            </div>
            <div className={failed === true ? "flash" : "flashOff"}></div>
        </div>
    );
};

export default MinefieldMandness;
