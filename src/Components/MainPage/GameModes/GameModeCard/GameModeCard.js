import "./GameModeCard.css";
import { useNavigate } from "react-router-dom";

const GameModeCard = (props) => {
    const navigate = useNavigate();
    const { top, bottom, topName, bottomName, img, backgroundImage, color, underDevelopment } = props;
    return (
        <>
            <div
                onClick={
                    underDevelopment === false ? () => navigate(topName + bottomName) : () => navigate("/")
                }
                className="cardContainer"
                style={{ backgroundImage: `url('GameModes/${backgroundImage}.jpg')` }}
            >
                <img src={`GameModes/${img}.png`} />
                <div className="modeName">
                    <h4 style={{ fontSize: top }}>{topName}</h4>
                    <h4 style={{ fontSize: bottom }}>{bottomName}</h4>
                </div>
                <div
                    style={{ "--color": color }}
                    className={`${underDevelopment === false ? "modeCardOverlay" : "underDevelopment"}`}
                >
                    {underDevelopment === true ? (
                        <>
                            <img src="https://media.istockphoto.com/id/1192837450/vector/under-construction-site-banner-sign-vector-black-and-yellow-diagonal-stripes-under.jpg?s=612x612&w=0&k=20&c=UJl_uhpxStWki_A-rII3fG_Kjp1-KKcjhHNpkCOvYwA=" />
                        </>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </>
    );
};

export default GameModeCard;
