import { Icons } from "@/components/icons";

interface NavItem {
    title: string
    href?: string
    disabled?: boolean
    external?: boolean
    icon?: keyof typeof Icons
    label?: string
}

interface NavItemWithChildren extends NavItem {
    items: NavItemWithChildren[]
}

interface MainNavItem extends NavItem { }

interface SidebarNavItem extends NavItemWithChildren { }

export type { NavItem, NavItemWithChildren, MainNavItem, SidebarNavItem };