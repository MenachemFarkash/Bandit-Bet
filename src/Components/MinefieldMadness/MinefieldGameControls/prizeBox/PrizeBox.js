const PrizeBox = ({ number, index }) => {
    return (
        <div className="prizeBox">
            <h5>{number}x</h5>
            <h6>Loot #{index}</h6>
        </div>
    );
};

export default PrizeBox;
