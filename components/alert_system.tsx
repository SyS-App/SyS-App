import React, { useState } from "react";

interface AlertProps {
    text: string,
    type: string
}

const Alert: React.FC<AlertProps> = ({ text, type }) => {
    const [ShowAlerts, SetShowAlerts] = useState(true);

    const handleCloseAlert = () => {
        SetShowAlerts(false);
    };

    type = "alert-container " + type;
    return ShowAlerts ? (
        <div className={type}>
            <div className="alert-text">
                <p>{text}</p>
            </div>
            <button
                className="alert-close-button"
                title="Close."
                onClick={handleCloseAlert}
            >
                &#x2715;
            </button>
        </div>
    ) : null;
}

export default Alert;