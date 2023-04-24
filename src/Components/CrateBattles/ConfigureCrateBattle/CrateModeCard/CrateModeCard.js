import { useContext } from "react";
import { CrateBattleContext } from "../../../../Context/CratebattlesContext";

const CrateModeCard = (props) => {
    const { setGameMode, gameMode } = useContext(CrateBattleContext);
    const { name, icon, mode, modes } = props;
    return (
        <div className={`gameModeContainer mode${mode}`}>
            <div className="gameModeIcon">{icon}</div>
            <div className="modeNameAndButtons">
                <h4>{name}</h4>
                {modes.map((mode, index) => {
                    return (
                        <button
                            key={index}
                            className={gameMode === mode ? "chosenMode" : "modeButton"}
                            onClick={() => setGameMode(mode)}
                        >
                            {mode}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default CrateModeCard;
