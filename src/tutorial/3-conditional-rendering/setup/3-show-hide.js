import React, { useState, useEffect } from "react";

const ShowHide = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <h2>show/hide</h2>{" "}
            <button className="btn" onClick={() => setShow(!show)}>
                Show / Hide
            </button>
            {show && <WindowComponent />}
        </>
    );
};

const WindowComponent = () => {
    const [size, setSize] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener("resize", () => {
            setSize(window.innerWidth);
        });
        return () => {
            window.removeEventListener("resize", () => {
                setSize(window.innerWidth);
            });
        };
    }, []);
    return (
        <div style={{ marginTop: "2rem" }}>
            <h1>Window</h1>
            <h2>size : {size}</h2>
        </div>
    );
};

export default ShowHide;
