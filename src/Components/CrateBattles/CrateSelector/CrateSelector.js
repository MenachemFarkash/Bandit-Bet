import { CrateBattleContext } from "../../../Context/CratebattlesContext";
import "./CrateSelector.css";
import { useContext } from "react";
import { cratesList } from "../../../Data/CratesList/CratesList";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import CrateCard from "./crateCard/CrateCard";

const CrateSelector = () => {
    const navigate = useNavigate();
    const { selectedCrates, setSelectedCrates, setCratesOrder } = useContext(CrateBattleContext);
    return (
        <div className="backgroundBlocker">
            <h1> Choose Crates</h1>
            <div className="cratesSelector">
                {cratesList.map((crate, index) => {
                    return (
                        <CrateCard
                            key={index}
                            displayName={crate.dispalyName}
                            price={crate.price}
                            name={crate.name}
                        />
                    );
                })}
            </div>
            <button onClick={() => navigate("/crateBattles/ConfigureCrateBattle")}>Return</button>
        </div>
    );
};

export default CrateSelector;
