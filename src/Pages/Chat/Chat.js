import ChatMessage from "../../Components/Chat/ChatMessage/ChatMessage";
import "./Chat.css";

const Chat = () => {
    const chatMessages = [
        { userName: "John", level: "1", content: "free pls im poor" },
        { userName: "John", level: "1", content: "let me call it next time" },
        { userName: "John", level: "1", content: "man you always pull so much" },
        { userName: "John", level: "1", content: "stop begging for frees you cheeps" },
        { userName: "John", level: "1", content: "this is a beautiful day for gambling all my goods" },
        { userName: "John", level: "1", content: "free in 3 2 1" },
        { userName: "John", level: "1", content: "this is a" },
        { userName: "John", level: "1", content: "please do 12+ free case" },
        { userName: "John", level: "1", content: "2 rusty angelo 1 valentines" },
        { userName: "John", level: "1", content: "this is a beautiful" },
        { userName: "John", level: "1", content: "this is a beautiful day for gambling all my goods" },
        { userName: "John", level: "1", content: "this is a beautiful day for gambling all my goods" },
        { userName: "John", level: "1", content: "this is a beautiful day for gambling all my goods" },
        { userName: "John", level: "1", content: "this is a beautiful day for gambling all my goods" },
        { userName: "John", level: "1", content: "this is a beautiful day for gambling all my goods" },
        { userName: "John", level: "1", content: "this is a beautiful day for gambling all my goods" },
        { userName: "John", level: "1", content: "this is a beautiful day for gambling all my goods" },
        { userName: "John", level: "1", content: "this is a beautiful day for gambling all my goods" },
        { userName: "John", level: "1", content: "this is a beautiful day for gambling all my goods" },
        { userName: "John", level: "1", content: "this is a beautiful day for gambling all my goods" },
        { userName: "John", level: "1", content: "this is a beautiful day for gambling all my goods" },
        { userName: "John", level: "1", content: "this is a beautiful day for gambling all my goods" },
        { userName: "John", level: "1", content: "this is a beautiful day for gambling all my goods" },
        { userName: "John", level: "1", content: "this is a beautiful day for gambling all my goods" },
    ];
    return (
        <div className="chat-container">
            <div className="chat">
                {chatMessages.map((chatMessage, index) => {
                    return (
                        <ChatMessage
                            userName={chatMessage.userName}
                            level={chatMessage.level}
                            content={chatMessage.content}
                            key={index}
                        />
                    );
                })}
            </div>
            <div className="text-area">
                <textarea className="chat-input" placeholder="Tell us how was your wipe..."></textarea>
                <button className="chat-send-button">SEND</button>
            </div>
        </div>
    );
};

export default Chat;
