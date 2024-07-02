"use client"
// Custom link
import React from "react";
import Link, { LinkProps } from "next/link";
import { CLinkProps } from "@/types/CLink";
import { Button, ButtonProps } from "@/components/ui/button";
import { useRouter as userouter } from "next/navigation";
import { NavLinksProps } from "@/types/nav";

const CButton: React.FC<NavLinksProps & ButtonProps> = ({ label, href, useRouter, ...buttonProps }) => {
    const router = userouter();

    return (
        <Button onClick={() => router.push(href)} variant="link" {...buttonProps} >
            <span className="inline-flex items-center gap-1">
                {label}
            </span>
        </Button>
    )
}

export { CButton };