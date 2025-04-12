import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const GetScreenDimensions = () => {
    const [viewportDimensions, setViewportDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setViewportDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div style={{fontSize: "20px"}}>
            <h1>Your Screen's Dimensions</h1>
            <p>
                <strong>Viewport Dimensions:</strong> {viewportDimensions.width} x{" "}
                {viewportDimensions.height}
            </p>
            <p>
                <strong>Actual Screen Dimensions:</strong> {window.screen.width} x{" "}
                {window.screen.height}
            </p>
            <Link to={"/"}><button>Go back to homepage</button></Link>
        </div>
    );
};
