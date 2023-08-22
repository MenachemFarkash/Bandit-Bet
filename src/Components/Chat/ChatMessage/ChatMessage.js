import "./ChatMessage.css";

const ChatMessage = ({ userName, level, content }) => {
    return (
        <div className="chat-message-container">
            <img style={{ width: "35px" }} src="/Bots/P01SeN.png" />
            <img style={{ width: "25px" }} src="/Levels/Four.png" />

            <p style={{ color: "grey", margin: 0, display: "flex", gap: "0.2em" }}>
                <h4 style={{ margin: 0, color: "yellow" }}>{userName}: </h4>
                {content}
            </p>
        </div>
    );
};

export default ChatMessage;
