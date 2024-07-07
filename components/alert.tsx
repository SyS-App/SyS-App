// Alert component (Not finished yet)
"use client"
// Import (Internal)
import AlertData from "@/alert.json";
import { AlertProps } from "@/types/alert";
// Import (External)
import { X } from "lucide-react";
import { useState } from "react";

function AlertCore() {
    const [alerts, setAlerts] = useState<AlertProps[]>(AlertData);

    const changeCurrentAlertVisibility = (alertId: string) => {
        setAlerts(alerts.map(alert => {
            if (alert.id === alertId) {
                return { ...alert, visible: !alert.visible };
            }
            return alert;
        }));
    };

    return (
        <>
            {alerts.map((alert: AlertProps) => (
                alert.visible && (
                    <div className="h-[60px] flex justify-center border items-center px-4 text-sm danger bg-background" key={alert.id}>
                        {alert.content}
                    </div>
                )
            ))}
        </>
    )
}

export default AlertCore;