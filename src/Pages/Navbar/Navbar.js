import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { IoGameController } from "react-icons/io5";
import { FaFlagCheckered, FaUsers, FaCoins } from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";

import NavbarItem from "../../Components/Navbar/MenuItem/NavbarItem";
const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className="navbar">
            <img onClick={() => navigate("/")} className="mainLogo" src="/Logo/logo.png" />
            <div className="navbarMenus">
                <NavbarItem icon={<IoGameController style={{ fontSize: "25px" }} />} name={"Games"} />
                <NavbarItem icon={<FaFlagCheckered style={{ fontSize: "25px" }} />} name={"Races"} />
                <NavbarItem icon={<FaUsers style={{ fontSize: "25px" }} />} name={"Top Bandits"} />
                <NavbarItem icon={<MdHelpCenter style={{ fontSize: "25px" }} />} name={"Help"} />
            </div>
            <div className="balance">
                <img src="/Skins/Scrap.png" style={{ width: "20px" }} />
                <h4>100.03</h4>
                <button className="WalletButton">
                    <FaCoins />
                    Wallet
                </button>
            </div>
        </div>
    );
};

export default Navbar;
