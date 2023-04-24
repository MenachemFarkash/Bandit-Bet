import "./GameModeCard.css";
import { useNavigate } from "react-router-dom";

const GameModeCard = (props) => {
    const navigate = useNavigate();
    const { top, bottom, topName, bottomName, img, backgroundImage } = props;
    return (
        <div
            onClick={() => navigate(topName + bottomName)}
            className="cardContainer"
            style={{ backgroundImage: `url('GameModes/${backgroundImage}.jpg')` }}
        >
            <img src={`GameModes/${img}.png`} />
            <h4 style={{ fontSize: top }}>{topName}</h4>
            <h4 style={{ fontSize: bottom }}>{bottomName}</h4>
        </div>
    );
};

export default GameModeCard;
