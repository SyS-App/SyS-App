// Custom link
import React from "react";
import Link, { LinkProps } from "next/link";
import { ExternalLink } from "lucide-react";
import { CLinkProps } from "@/types/CLink";

const CLink: React.FC<CLinkProps & LinkProps> = ({ children, href, isExternal = false, ...linkProps }) => {
    const ExternalIcon = isExternal && <ExternalLink className="w-4 h-4" />

    if (isExternal) {
        return (
            <Link href={href} {...linkProps} rel="noopener noreferrer" target="_blank">
                <span className="inline-flex items-center gap-1">
                    {children}
                    {ExternalIcon}
                </span>
            </Link>
        )
    }

    return (
        <Link href={href} {...linkProps}>
            <span className="inline-flex items-center gap-1">
                {children}
                {ExternalIcon}
            </span>
        </Link>
    )
}

export { CLink };