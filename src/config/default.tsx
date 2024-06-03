import { Github } from "lucide-react"
import Image from "next/image"

export const Nav = {
    links: [
        // Not implemented.
        // {
        //     label: "Change logs",
        //     url: "",
        //     Image: <ScrollText className="w-[1.2rem] h-[1.2rem]" />
        // },
        {
            label: "Github",
            url: "https://github.com/SyS-App/SyS-App",
            Image: <Github className="w-[1.2rem] h-[1.2rem]"/>
        }
    ]
}

export const Links = [
    {
        label: "Github",
        url: "https://github.com/SyS-App/",
        Image: <Github className="w-[1.2rem] h-[1.2rem]"/>
    },
    {
        label: "Discord",
        url: "https://discord.gg/",
        Image: <Image src="/discord-mark-blue.svg" alt="Discord" width={0} height={0} className="w-[1.2rem] h-[1.2rem]" />
    },
    
]