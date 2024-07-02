"use client"

// All components for errors like 404 or access not authorized.
import React from "react";
import { BaseErrorComponentProps, BaseErrorComponentTitleProps } from "@/types/base/errors/BaseErrorComponent";
import { title } from "process";

const BaseErrorComponent: React.FC<BaseErrorComponentProps> = ({ children, ...props }) => {
    return (
        <div className="w-full h-[500px] flex justify-center items-center" {...props}>
            <div className="flex flex-col space-y-4 px-8">
                {children}
            </div>
        </div>
    );
};

const BaseErrorComponentTitle: React.FC<BaseErrorComponentTitleProps> = ({ children, titleSizePX = "32", ...props }) => {
    const textSizeClass = `text-${titleSizePX}`;
    const lineHeightClass = `leading-${titleSizePX}`;

    return (
        <span 
            className={`${textSizeClass} ${lineHeightClass} h-auto text-center font-bold`} 
            {...props}
        >
            {children}
        </span>
    );
};

const BaseErrorComponentDescription: React.FC<BaseErrorComponentProps> = ({ children, ...props }) => {
    return (
        <span className="text-center" {...props}>
            {children}
        </span>
    );
};

const BaseErrorComponentContent: React.FC<BaseErrorComponentProps> = ({ children, ...props }) => {
    return (
        <div className="flex justify-center items-center" {...props}>
            {children}
        </div>
    );
};

export { BaseErrorComponent, BaseErrorComponentTitle, BaseErrorComponentDescription, BaseErrorComponentContent };
