const SpacialModeCard = (props) => {
    const { name, icon, card, color, info } = props;
    return (
        <div className={`spacialModeCard card${card}`} style={{ "--color": color }}>
            <div className="spacialModeIcon">{icon}</div>
            <div className="spacialModeNameAndInfo">
                <h4>{name}</h4>
                <h5>{info}</h5>
            </div>
            <label class="switch">
                <input className="spacialInput" type="checkbox" />
                <span class="slider"></span>
            </label>
        </div>
    );
};

export default SpacialModeCard;
