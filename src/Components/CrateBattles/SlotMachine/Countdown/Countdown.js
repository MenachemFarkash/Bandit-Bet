import React, { useState, useEffect } from "react";

const Countdown = ({ seconds }) => {
    const [count, setCount] = useState(seconds);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prevCount) => prevCount - 1);
        }, 1100);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (count === 0) {
            // Do something when the countdown is complete
        }
    }, [count]);

    return <div style={{ textAlign: "center" }}>00:0{count}</div>;
};

export default Countdown;
