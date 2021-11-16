import React, { useState } from "react";

const UseStateBasics = () => {
    const [name, setName] = useState("Ritu");
    const title = `I love you ${name}`;
    const handleClick = () => {
        name === "Ritu" ? setName("Nikesh") : setName("Ritu");
    };
    return (
        <React.Fragment>
            <h2>{title}</h2>
            <button className="btn" onClick={handleClick}>
                Click Me
            </button>
        </React.Fragment>
    );
};

export default UseStateBasics;
