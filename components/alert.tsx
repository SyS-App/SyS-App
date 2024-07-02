"use client"

// Import (External)
import { X } from "lucide-react";
import { useState } from "react";
// Import (Internal)
import AlertData from "@/alert.json";
import { AlertProps } from "@/types/alert";

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
                    <div className={`h-[60px] flex justify-between items-center px-4 text-sm danger ${alert.type}`} key={alert.id}>
                        <div>{alert.message}</div>
                        <div>
                            <div onClick={() => alert.id && changeCurrentAlertVisibility(alert.id)} className="cursor-pointer p-1 hover:bg-primary-foreground rounded-[100%]">
                                <X className="w-[1.2rem] h-[1.2rem]" />
                            </div>
                        </div>
                    </div>
                )
            ))}
        </>
    )
}

export default AlertCore;