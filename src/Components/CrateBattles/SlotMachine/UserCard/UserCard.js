import { FaRobot } from "react-icons/fa";
import "./UserCard.css";
const UserCard = () => {
    return (
        <div className="userCardContainer">
            <div className="userPictureBackground">
                <div className="userPicture"></div>
            </div>

            <div className="userName">
                <FaRobot />
                <h4 style={{ color: "white" }}>Pat Fenis</h4>
            </div>
        </div>
    );
};

export default UserCard;
