import "./CratePreviewCard.css";

const CratePreviewCard = (props) => {
    const { crateName, count, price } = props;
    return (
        <div className="cratesListPreview">
            <img src={`/Crates/${crateName}.png`} />
            <h4 style={{ margin: "2px" }}>{crateName}</h4>
            <div style={{ display: "flex", alignItems: "center", margin: "4px" }}>
                <img style={{ width: "25px" }} src="/Skins/Scrap.png" />
                <h5 style={{ margin: "2px" }}>{price}</h5>
            </div>
            <div className="addAndRemoveCrate">
                <button>-</button>
                <div className="crateAmount">{count}X</div>
                <button>+</button>
            </div>
        </div>
    );
};

export default CratePreviewCard;
