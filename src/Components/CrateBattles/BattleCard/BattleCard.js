import "./BattleCard.css";
import { MdCleaningServices, MdLogin, MdVisibility } from "react-icons/md";

const BattleCard = (props) => {
    const { type, price, crates } = props;
    return (
        <div className="battleCardContainer">
            <div>
                <div className="priceAndType">
                    <div className="price">
                        <img src="Skins/scrap.png" />
                        <h4>{price}</h4>
                    </div>
                    <h5>{type}</h5>
                </div>
                <div className="joinButtons">
                    <button>
                        <span>
                            <MdLogin />
                        </span>
                    </button>
                    <button>
                        <span>
                            <MdLogin />
                        </span>
                    </button>
                    <button>
                        <span>
                            <MdLogin />
                        </span>
                    </button>
                    <button>
                        <span>
                            <MdLogin />
                        </span>
                    </button>
                </div>
            </div>
            <div className="cratesList">
                {crates.map((crate, index) => {
                    return <img key={index} src={`Crates/${crate.name}.png`} />;
                })}
            </div>
            <div className="joinAndRounds">
                <p>{crates.length} rounds</p>
                <button className="watchBattle">
                    <MdVisibility />
                </button>
                <button className="joinBattle">JOIN BATTLE</button>
            </div>
        </div>
    );
};

export default BattleCard;
