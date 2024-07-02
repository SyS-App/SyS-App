// CLink types
import { AnchorHTMLAttributes, ReactNode } from "react"


interface CLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    children: ReactNode,
    href: string,
    isExternal?: boolean
}

export type { CLinkProps };