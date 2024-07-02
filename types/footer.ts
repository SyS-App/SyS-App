// Footer types

// Sections
interface Footer {
    label: string,
    id: string
}

interface FooterItem {
    to: string,
    label: string,
    href: string
}

export type { Footer, FooterItem };