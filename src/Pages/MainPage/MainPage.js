import { useNavigate } from "react-router-dom";
import BigCarousel from "../../Components/MainPage/Carousels/BigCarousel/BigCarousel";
import TopCarousel from "../../Components/MainPage/Carousels/TopCarousel/TopCarousel";
import GameModeCard from "../../Components/MainPage/GameModes/GameModeCard/GameModeCard";
import { CrateBattleContext } from "../../Context/CratebattlesContext";
import freeScrap from "../../Data/MainPage/FreeScrap/freeScrapList";
import "./MainPage.css";
import { useEffect } from "react";
import { useContext } from "react";

const MainPage = () => {
    const { getUserId } = useContext(CrateBattleContext);
    const { Navigate } = useNavigate;

    return (
        <div className="mainPageContainer">
            <div className="welcomeHadline">
                <h3>Welcome back, P01SeN!</h3>
                <h5>1,754 bandits online</h5>
            </div>
            <TopCarousel />
            <BigCarousel />
            <h3 style={{ alignSelf: "flex-start", color: "white", paddingLeft: "10em" }}>
                Our exciting games
            </h3>
            <div className="gameModesContainer">
                <GameModeCard
                    bottom={"1.6em"}
                    topName={"CRATE"}
                    bottomName={"BATTLES"}
                    img={"crateBattleLogo"}
                    backgroundImage={"crateBattleBackground"}
                    color={"#e67e22"}
                    underDevelopment={false}
                />
                <GameModeCard
                    top={"1.6em"}
                    bottom={"1.7em"}
                    topName={"MINEFIELD"}
                    bottomName={"MADNESS"}
                    img={"minefieldMadnessLogo"}
                    backgroundImage={"minefieldMadnessBackground"}
                    color={"#ff5252"}
                    underDevelopment={false}
                />
                <GameModeCard
                    top={"1.7em"}
                    bottom={"1.7em"}
                    topName={"WHEEL OF"}
                    bottomName={"FORTUNE"}
                    img={"wheelOfFortuneLogo"}
                    backgroundImage={"wheelOfFortuneBackground"}
                    color={"#cd412b"}
                    underDevelopment={true}
                />
                <GameModeCard
                    top={"1.7em"}
                    bottom={"1.7em"}
                    topName={"SCRAP"}
                    bottomName={"UPGRADER"}
                    img={"scrapUpgraderLogo"}
                    backgroundImage={"scrapUpgraderBackground"}
                    color={"#3ae374"}
                    underDevelopment={true}
                />
                <GameModeCard
                    top={"1.7em"}
                    bottom={"1.7em"}
                    topName={"CRATE"}
                    bottomName={"UNBOXING"}
                    img={"crateUnboxingLogo"}
                    backgroundImage={"crateUnboxingBackground"}
                    color={"#aade4e"}
                    underDevelopment={true}
                />
                <GameModeCard
                    top={"1.7em"}
                    bottom={"1.7em"}
                    topName={"BEANCAN"}
                    bottomName={"BLAST"}
                    img={"beancanBlastLogo"}
                    backgroundImage={"beancanBlastBackground"}
                    color={"#ffb8b8"}
                    underDevelopment={true}
                />
                <GameModeCard
                    top={"1.7em"}
                    bottom={"1.7em"}
                    topName={"COINFLIP"}
                    bottomName={"DUELS"}
                    img={"coinflipDuelsLogo"}
                    backgroundImage={"coinflipDuelsBackground"}
                    color={"#f1c40f"}
                    underDevelopment={true}
                />
                <GameModeCard
                    top={"1.7em"}
                    bottom={"1.7em"}
                    topName={"SPINNER"}
                    bottomName={"BATTLES"}
                    img={"spinnerBattlesLogo"}
                    backgroundImage={"spinnerBattlesBackground"}
                    color={"#3f99d7"}
                    underDevelopment={true}
                />
            </div>
            <h3>Get free money</h3>
            <div className="freeScrapContainer">
                {freeScrap.map((item, index) => {
                    return (
                        <div
                            className="freeScrapCard"
                            style={{
                                background: `url(/MainPage/${item.background})`,
                                backgroundSize: "cover",
                            }}
                        >
                            <img style={{ width: "45px" }} src={`MainPage/${item.image}`} />
                            <h4 style={{ margin: 0 }}>{item.name}</h4>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MainPage;
