import { useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { CrateBattleContext } from "../../../../Context/CratebattlesContext";

const CrateCard = (props) => {
    const { cratesOrder, setCratesOrder, cratesNames, setCratesNames } = useContext(CrateBattleContext);
    const { name, price, displayName } = props;
    return (
        <div className="crateCard">
            <img src={`/Crates/${displayName}.png`} />
            <p>{displayName}</p>
            <div
                className="addButton"
                onClick={() => {
                    setCratesOrder([...cratesOrder, name]);
                    setCratesNames([...cratesNames, { displayName, price }]);
                }}
            >
                <AiOutlinePlus />
                <img src="/Skins/Scrap.png" />
                <p>{price}</p>
            </div>
        </div>
    );
};

export default CrateCard;
