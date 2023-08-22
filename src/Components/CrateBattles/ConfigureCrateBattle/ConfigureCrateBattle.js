import "./ConfigureCrateBattle.css";
import { useNavigate } from "react-router-dom";
import { RiSwordFill } from "react-icons/ri";
import { FaSkullCrossbones, FaHandHoldingHeart, FaLock, FaPlusCircle, FaUsers, FaBox } from "react-icons/fa";
import CrateModeCard from "./CrateModeCard/CrateModeCard";
import SpacialModeCard from "./SpacialModeCard/SpacialModeCard";
import { useContext } from "react";
import { CrateBattleContext } from "../../../Context/CratebattlesContext";
import CratePreviewCard from "./CrateModeCard/CratePreviewCard/CratePreviewCard";

const ConfigureCrateBattle = () => {
    const { gameMode, cratesNames } = useContext(CrateBattleContext);
    const navigate = useNavigate();

    const counts = cratesNames.reduce((acc, item) => {
        if (!acc[item.displayName]) {
            acc[item.displayName] = {
                count: 1,
                price: [item.price],
            };
        } else {
            acc[item.displayName].count++;
        }
        return acc;
    }, {});

    console.log(Object.keys(counts));
    console.log(Object.values(counts));

    return (
        <div className="crateConfigureContainer">
            <div className="crateConfigureGrid">
                <a className="backButton" onClick={() => navigate("/crateBattles")}>
                    BACK TO BATTLES
                </a>
                <h3 className="crateConfigureTitle"> Configure Crate Battle</h3>

                <div className="teamConfigurationTitle">
                    <div>
                        <h3>Team configuration</h3>
                        <h5>Select game mode and how many players you want</h5>
                    </div>
                </div>
                <CrateModeCard
                    name={"Regular Battle"}
                    icon={<RiSwordFill />}
                    mode={1}
                    modes={["1v1", "1v1v1", "4-way"]}
                />
                <CrateModeCard name={"Team Battle"} icon={<FaUsers />} mode={2} modes={["2v2"]} />
                <CrateModeCard name={"Group Unbox"} icon={<FaBox />} mode={3} modes={["2p", "3p", "4p"]} />

                <h3 className="battleRounds">Add battle rounds</h3>
                <div className="cratesPreviewContainer">
                    {cratesNames.length > 0
                        ? Object.keys(counts).map((crate, index) => {
                              const values = Object.values(counts);
                              return (
                                  <CratePreviewCard
                                      key={index}
                                      crateName={crate}
                                      count={values[index].count}
                                      price={values[index].price}
                                  />
                              );
                          })
                        : ""}
                    <div
                        className="addCrateButton"
                        onClick={() => navigate("/crateBattles/ConfigureCrateBattle/addCrates")}
                    >
                        <div className="plusSquare">
                            <FaPlusCircle />
                        </div>
                        <h4>ADD CRATE</h4>
                    </div>
                </div>
                {gameMode === "2p" || gameMode === "3p" || gameMode === "4p" ? null : (
                    <SpacialModeCard
                        name={"Cursed Mode"}
                        info={"The team with the lowest amount opened wins - loser wins!"}
                        icon={<FaSkullCrossbones />}
                        card={1}
                        color={"#d76755"}
                    />
                )}
                <SpacialModeCard
                    name={"Partial slot funding"}
                    icon={<FaHandHoldingHeart />}
                    card={2}
                    info={"Choose to pay a percent of other players' slots."}
                    color={"#bbe571"}
                />
                <SpacialModeCard
                    name={"Private game"}
                    icon={<FaLock />}
                    card={3}
                    color={"#8cc2e7"}
                    info={"Hide this game from the battles page. Only joinable via link. "}
                />
                <button className="startBattleButton" onClick={() => navigate("/crateBattles/battleNumber")}>
                    START BATTLE
                </button>
            </div>
        </div>
    );
};

export default ConfigureCrateBattle;
