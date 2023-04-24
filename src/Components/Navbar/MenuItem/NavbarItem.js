import { useNavigate } from "react-router-dom";
import "./NavbarItem.css";
import { IoGameController } from "react-icons/io5";
// FaFlagCheckered
// FaUsers

const NavbarItem = (props) => {
    const { icon, name } = props;
    const navigate = useNavigate();
    return (
        <div className="navbarItem">
            {icon}

            <h4>{name}</h4>
        </div>
    );
};

export default NavbarItem;
