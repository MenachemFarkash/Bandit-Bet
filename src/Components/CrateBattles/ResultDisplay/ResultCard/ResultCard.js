import { useEffect } from "react";
import "./ResultCard.css";
import { FaHashtag } from "react-icons/fa";
const ResultCard = (props) => {
    const { item, index, color } = props;

    const scrollToElement = (elementId) => {
        const element = document.getElementById(elementId);
        element?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToElement(`scroll${index}`);
    }, [index]);
    return (
        <div id={`scroll${index}`} className="itemWonContainer" style={{ "--color": `${color}` }}>
            <div className="hashNumber">
                <FaHashtag style={{ color: "#5f615f" }} />
                <h3>{index}</h3>
            </div>
            <div className="nameAndPrice">
                <img style={{ width: "75px" }} src={`/Skins/${item.name}.png`} />
                <h5 style={{ "--color": `${color}` }} className="itemName">
                    {item.name}
                </h5>
                <div className="scrapLogoPrice">
                    <img src="/Skins/Scrap.png" />
                    <h5>{item.price}</h5>
                </div>
            </div>
        </div>
    );
};

export default ResultCard;
