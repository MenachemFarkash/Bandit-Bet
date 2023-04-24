import GameModeCard from "../../Components/MainPage/GameModes/GameModeCard/GameModeCard";
import "./MainPage.css";

const MainPage = () => {
    return (
        <div className="mainPageContainer">
            <div className="gameModesContainer">
                <GameModeCard
                    bottom={"1.6em"}
                    topName={"CRATE"}
                    bottomName={"BATTLES"}
                    img={"crateBattleLogo"}
                    backgroundImage={"crateBattleBackground"}
                />
                <GameModeCard
                    top={"1.6em"}
                    bottom={"1.7em"}
                    topName={"MINEFIELD"}
                    bottomName={"MADNESS"}
                    img={"minefieldMadnessLogo"}
                    backgroundImage={"minefieldMadnessBackground"}
                />
                <GameModeCard
                    top={"1.7em"}
                    bottom={"1.7em"}
                    topName={"WHEEL OF"}
                    bottomName={"FORTUNE"}
                    img={"wheelOfFortuneLogo"}
                    backgroundImage={"wheelOfFortuneBackground"}
                />
            </div>
        </div>
    );
};

export default MainPage;
