import { FaRobot } from "react-icons/fa";
import "./UserCard.css";
const UserCard = ({ name, level, bot }) => {
    return (
        <div className="userCardContainer">
            <div className="userPictureBackground">
                <div className="userPicture">
                    <img style={{ width: "100%" }} src={`/Bots/${name}.png`} />
                </div>
            </div>

            <div className="userName">
                {bot === true ? <FaRobot /> : <img src="/Levels/Four.png" />}

                <h4 style={{ color: "white" }}>{name}</h4>
            </div>
        </div>
    );
};

export default UserCard;
