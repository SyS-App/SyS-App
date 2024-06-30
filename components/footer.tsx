import { FooterConfig } from "@/config/site";
import Link from "next/link";
import { GithubLogo, LogoWithText, XLogo } from "./logo";

interface ReverseProps {
    reverse: Boolean
}

function SocialLinks({ reverse }: ReverseProps) {
    if (!reverse) {
        return (
            <div className="md:flex hidden items-center space-x-2">
                <Link href="https://github.com/SyS-App/SyS-App">
                    <GithubLogo width={17.5} height={17.5} />
                </Link>
                <Link href="">
                    <XLogo width={17.5} height={17.5} />
                </Link>
            </div>
        )
    }

    return (
        <div className="md:hidden flex items-center space-x-2">
            <Link href="https://github.com/SyS-App/SyS-App">
                <GithubLogo width={17.5} height={17.5} />
            </Link>
            <Link href="">
                <XLogo width={17.5} height={17.5} />
            </Link>
        </div>
    )
}

function Footer() {
    // Get current year
    const currentYear = new Date().getFullYear();

    return (
        <footer className="z-40 w-full p-4 border-t bg-background flex flex-col">
            <div className="w-full block md:grid grid-cols-5 p-4 gap-8">
                <section className="flex justify-between items-center md:justify-start md:items-start md:flex-col min-h-[64px]">
                    <LogoWithText width={30} height={30} />
                    <SocialLinks reverse={true} />
                </section>
                {FooterConfig.sections.map((section, idx) => {
                    return (
                        <section className="flex flex-col min-h-[64px]" id={section.id} key={idx}>
                            <div>
                                <span className="text-sm font-semibold">{section.label}</span>
                            </div>
                            <div className="flex-1">

                            </div>
                        </section>
                    )
                })}
            </div>
            {/* Copyright & Social links */}
            <div className="flex justify-center items-center md:justify-between">
                <p className="font-sans text-balance text-sm leading-loose text-muted-foreground text-center md:text-left underline-offset-4">
                    &copy; {currentYear} <Link href="https://github.com/Runkang10" className="underline">Runkang Chen</Link>, <span className="font-semibold">MIT License</span>.
                </p>
                <SocialLinks reverse={false} />
            </div>
        </footer>
    )
}

export default Footer;