import { useContext } from "react";
import "./BattleInfo.css";
import { FaFileContract } from "react-icons/fa";
import { CrateBattleContext } from "../../../../Context/CratebattlesContext";
const BattleInfo = (props) => {
    const { cratesNames } = props;
    const { crateCounter } = useContext(CrateBattleContext);

    let move = "-" + (crateCounter - 1) * 45 + "px";
    let totalPrice = 0;

    cratesNames.forEach((crate) => {
        totalPrice += Number(crate.price);
    });

    return (
        <div className="battleInfoContainer">
            <h4 className="totalPrice">
                TOTAL <img className="scrapLogo" src="/Skins/Scrap.png" /> {totalPrice.toFixed(2)}
            </h4>
            <div className="cratesListInfo">
                <div className="crateNameAndPrice">
                    <h6>{cratesNames[crateCounter - 1]?.displayName}</h6>
                    <h6>
                        <img className="scrapLogo" src="/Skins/Scrap.png" />
                        {cratesNames[crateCounter - 1]?.price}
                    </h6>
                </div>
                <div className="cratesScroller">
                    <div className="cratesListImages" style={{ "--move": `${move}` }}>
                        {cratesNames.map((crate, index) => {
                            return (
                                <img
                                    key={index}
                                    style={{ width: "45px" }}
                                    src={`/Crates/${crate.displayName}.png`}
                                />
                            );
                        })}
                    </div>
                </div>
                <h5>
                    round {crateCounter}/{cratesNames.length}
                </h5>
            </div>
            <div className="furness">
                <FaFileContract />
                <h4>Furnace</h4>
            </div>
        </div>
    );
};

export default BattleInfo;
