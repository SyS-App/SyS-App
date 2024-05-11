import React from "react";

interface AlertProps {
    text: string,
    type: string
}

const Alert: React.FC<AlertProps> = ({ text, type }) => {
    type = "alert-container " + type;
    return (
        <div className={type}>
            <div className="alert-text">
                <p>{text}</p>
            </div>
            <button className="alert-close-button" title="Close.">&#x2715;</button>
        </div>
    )
}

export default Alert;