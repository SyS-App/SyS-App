// Footer component
import Link from "next/link";
import { FooterConfig, FooterConfigItems } from "@/config/footer";
import { CLink } from "@/components/ui/CLink";
import { LogoWithText } from "@/components/logo/default";
import { GithubLogo } from "@/components/logo/github";
import { SocialProps } from "@/types/social";
import { DiscordLogo } from "@/components/logo/discord";

interface ReverseProps {
    reverse: Boolean
}

// All social links (External)
const SocialList: SocialProps[] = [
    {
        image: <GithubLogo width={17.5} height={17.5} />,
        url: "https://github.com/SyS-App/"
    },
    {
        image: <DiscordLogo width={17.5} height={17.5} />,
        url: "https://discord.gg/KMtzeUQzbm"
    }
]

const SocialLinks = ({ reverse }: ReverseProps) => {
    return (
        <div className={`${!reverse ? "md:flex hidden items-center space-x-2" : "md:hidden flex items-center space-x-2"}`}>
            {SocialList.map((social, idx) => (
                <Link href={social.url} key={idx} rel="noopener noreferrer" target="_blank">
                    {social.image}
                </Link>
            ))}
        </div>
    )
}

const Footer = () => {

    return (
        // Footer
        <footer className="z-30 w-full p-4 border-t bg-background flex flex-col space-y-8">
            <div className="w-full block md:grid grid-cols-4 p-4 gap-8 justify-start items-start">
                {/* Logo with text in footer */}
                <section className="flex justify-between items-center md:justify-start md:items-start md:flex-col min-h-[64px]">
                    <LogoWithText width={30} height={30} />
                    <SocialLinks reverse={true} />
                </section>
                {/* Footer sections with links */}
                {FooterConfig.map((section) => (
                    <section className="flex flex-col min-h-[64px] mb-8 md:mb-0 space-y-4 text-sm" id={section.id} key={section.id}>
                        <span className="text-primary font-[500]">{section.label}</span>
                        <div className="flex-1 flex flex-col space-y-2">
                            {FooterConfigItems.map((item, idx) => {
                                if (item.to === section.id) {
                                    return (
                                        <div key={idx}>
                                            <CLink href={item.href} isExternal className="text-muted-foreground transition-colors hover:text-primary">
                                                {item.label}
                                            </CLink>
                                        </div>
                                    )
                                }
                                return
                            })}
                        </div>
                    </section>
                )
                )}
            </div>
            {/* Copyright & Social links */}
            <div className="flex justify-center items-center md:justify-between">
                <span className="font-sans text-balance text-sm leading-loose text-muted-foreground text-center md:text-left underline-offset-4">
                    <span>Build by <CLink href="https://github.com/Runkang10" isExternal>Runkang10</CLink>. The source code is available on <CLink href="https://github.com/SyS-App/sys-app" isExternal>Github</CLink>.</span>
                </span>
                <SocialLinks reverse={false} />
            </div>
        </footer>
    )
}

export default Footer;