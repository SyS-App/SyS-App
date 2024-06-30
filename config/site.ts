import Link from "@/types/NavLink";

const MetaConfig = () => {
    return {
        title: "SyS App",
        description: "Developed and maintained since age 14 for passion."
    }
}

const NavConfig = async (): Promise<Link[]> => {
    const response = await fetch("/api/db/sysapp/nav");
    const result: Link[] = await response.json();
    return result
}

const FooterConfig = {
    sections: [
        {
            label: "Projects",
            id: "projects"
        },
        {
            label: "About",
            id: "about"
        },
        {
            label: "Network",
            id: "network"
        },
        {
            label: "Community",
            id: ""
        },
        {
            label: "Community",
            id: ""
        },
        {
            label: "Community",
            id: ""
        }
    ],
    items: [

    ]
}

export { MetaConfig, NavConfig, FooterConfig }
export { type Link }