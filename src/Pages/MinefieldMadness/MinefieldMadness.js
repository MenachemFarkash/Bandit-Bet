import { useContext } from "react";
import "./MinefieldMadness.css";
import { MinefieldMaddnessContext } from "../../Context/MinefieldMadnessContext";
import MinefieldBoard from "../../Components/MinefieldMadness/MinefieldBoard/MinefieldBoard";

const MinefieldMandness = () => {
    const { minefieldOrder, startGame, flippedTiles, failed } = useContext(MinefieldMaddnessContext);

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
                        <h5>BET AMOUNT</h5>
                        <div className="betButtons">
                            <div className="betAmountInput">
                                <img className="scrapLogo" src="/Skins/scrap.png" />
                                <input style={{ width: "210px", height: "20px" }} />
                            </div>
                            <div style={{ width: "48px", height: "48px" }}>1/2</div>
                            <div style={{ width: "48px", height: "48px" }}>X2</div>
                            <div style={{ width: "54px", height: "48px" }}>MAX</div>
                        </div>
                    </div>
                    <div className="landminesSettings">
                        <h5>HOW MANY LANDMINES?</h5>
                        <div>
                            <input />
                            <button>x3</button>
                            <button>x5</button>
                            <button>x16</button>
                            <button>x24</button>
                        </div>
                    </div>
                    <button onClick={() => startGame()}>START NEW GAME</button>
                </div>
            </div>
            <div className="minesBoard">
                <MinefieldBoard />
            </div>
            <div className={failed === true ? "flash" : "flashOff"}></div>
        </div>
    );
};

export default MinefieldMandness;
