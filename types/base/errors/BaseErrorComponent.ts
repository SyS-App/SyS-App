// Error types

import { HTMLAttributes, ReactNode } from "react"

interface BaseErrorComponentProps extends HTMLAttributes<HTMLDivElement & HTMLSpanElement> {
    children: ReactNode
}

interface BaseErrorComponentTitleProps {
    children: ReactNode,
    titleSizePX?: string | number
}

export type { BaseErrorComponentProps, BaseErrorComponentTitleProps }