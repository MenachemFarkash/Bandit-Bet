import { useContext } from "react";
import "./MinefieldGameControls.css";
import { MinefieldMaddnessContext } from "../../../Context/MinefieldMadnessContext";
import prizes from "../../../Data/Minefield Maddness/prizes";
import PrizeBox from "./prizeBox/PrizeBox";

const InfoBox = ({ name, img, number }) => {
    return (
        <div className="infoBox">
            <h6>{name}</h6>
            <div className="info">
                <img src={`/MinefieldMadnessImages/${img}.png`} alt="" />
                <h5>{number}</h5>
            </div>
        </div>
    );
};

const MinefieldGameControls = () => {
    const { numberOfMines, flippedTiles } = useContext(MinefieldMaddnessContext);
    console.log(numberOfMines);
    return (
        <div className="MinefieldGameControls">
            <div className="gameInfo">
                <InfoBox name={"LOOT LEFT"} img={"C4"} number={25 - numberOfMines - flippedTiles.length} />
                <InfoBox name={"LANDMINES"} img={"mine"} number={numberOfMines} />
                <InfoBox name={"LOOT COLLECTED"} img={"Scrap"} number={25} />
            </div>
            <div className="multipliersList">
                <h6>YOUR MULTIPLIER</h6>
                <div className="prizesList">
                    {prizes[numberOfMines - 1].map((item, index) => {
                        return <PrizeBox number={item} index={index + 1} />;
                    })}
                </div>
            </div>
            <div className="actionButtons">
                <button>CASHOUT</button>
                <button>Pick random</button>
            </div>
        </div>
    );
};

export default MinefieldGameControls;
