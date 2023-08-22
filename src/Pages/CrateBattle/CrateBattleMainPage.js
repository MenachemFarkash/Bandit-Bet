import CrateSelector from "../../Components/CrateBattles/CrateSelector/CrateSelector";
import ResultDisplay from "../../Components/CrateBattles/ResultDisplay/ResultDisplay";
import SlotMachine from "../../Components/CrateBattles/SlotMachine/SlotMachine";
import { CrateBattleContext } from "../../Context/CratebattlesContext";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CrateBattleMainPage.css";
import BattleCard from "../../Components/CrateBattles/BattleCard/BattleCard";
import { battle } from "../../Data/CrateBattle/BattlesInfo";

const HomePage = () => {
    const navigate = useNavigate();
    const { pickRandomItem, getAllBattles, battles } = useContext(CrateBattleContext);

    useEffect(() => {
        getAllBattles();
    }, []);

    return (
        <div className="crateBattle">
            <div className="infoAndCreateBattle">
                <div className="infoTitle">
                    <h3>Crate Battles</h3>
                    <h4>Battle against other bandits or unbox crates together. </h4>
                </div>
                <button onClick={() => navigate("/crateBattles/ConfigureCrateBattle")}>CREATE BATTLE</button>
            </div>
            {battles.map((battle, index) => {
                return (
                    <BattleCard key={index} type={battle.type} price={battle.price} crates={battle.crates} />
                );
            })}
            {/* <BattleCard
                type={"group unbox"}
                price={"0.60"}
                crates={[{ name: "Rusty Angelo" }, { name: "valentines" }, { name: "Dreamer" }]}
            /> */}
        </div>
    );
};

export default HomePage;
