import CrateSelector from "../../Components/CrateBattles/CrateSelector/CrateSelector";
import ResultDisplay from "../../Components/CrateBattles/ResultDisplay/ResultDisplay";
import SlotMachine from "../../Components/CrateBattles/SlotMachine/SlotMachine";
import { CrateBattleContext } from "../../Context/CratebattlesContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./CrateBattleMainPage.css";
import BattleCard from "../../Components/CrateBattles/BattleCard/BattleCard";
import { battle } from "../../Data/CrateBattle/BattlesInfo";

const HomePage = () => {
    const navigate = useNavigate();
    const { pickRandomItem } = useContext(CrateBattleContext);

    return (
        <div className="crateBattle">
            <div className="infoAndCreateBattle">
                <div className="infoTitle">
                    <h3>Crate Battles</h3>
                    <h4>Battle against other bandits or unbox crates together. </h4>
                </div>
                <button onClick={() => navigate("/crateBattles/ConfigureCrateBattle")}>CREATE BATTLE</button>
            </div>
            <BattleCard
                type={"group unbox"}
                price={"0.60"}
                crates={[{ name: "Rusty Angelo" }, { name: "valentines" }, { name: "Dreamer" }]}
            />
        </div>
    );
};

export default HomePage;
