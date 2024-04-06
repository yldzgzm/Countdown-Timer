import React, {useState, useEffect} from 'react';
import './index.css';

function App() {

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = "December 31, 2024";

    const getTime = (deadline) => {
        const time = Date.parse(deadline) - Date.now();
        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    };

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);

        return () => clearInterval(interval);
    }, []);


    return (
        <div className="fullscreen">
            <div className="text">
                <text className="texts">-- Countdown to --</text>
                <text className="texts">New Year</text>
            </div>

            <div className="timer">
                <div className={"times"}>
                    <text className="number">{days}</text>
                    <text className="unit">Days</text>
                </div>
                <div className={"times"}>
                    <text className="number">{hours}</text>
                    <text className="unit">Hours</text>
                </div>
                <div className={"times"}>
                    <text className="number">{minutes}</text>
                    <text className="unit">Minutes</text>
                </div>
                <div className={"times"}>
                    <text className="number">{seconds}</text>
                    <text className="unit">Seconds</text>
                </div>
            </div>
        </div>
    );
}

export default App;
