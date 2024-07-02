// Nav types
import { AnchorHTMLAttributes } from "react";

interface NavLinksProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    label: string,
    href: string,
    useRouter: boolean,
}

export type { NavLinksProps };