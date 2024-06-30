"use client"

import Link from "next/link";
import { ModeToggle, ModeToggleSec } from "./theme-provider";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { HeartHandshake, Menu } from "lucide-react";
import { NavConfig } from "@/config/site";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Logo } from "./logo";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Admin } from "./auth/admin";
import { useEffect, useState } from "react";
import NavLink from "@/types/NavLink";

function Donate() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="ghost" size="sm">
                    <HeartHandshake className="w-[1.2rem] h-[1.rem]" />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>

                </DialogTitle>
            </DialogContent>
        </Dialog>
    )
}


function NavBar() {
    const [NavLinks, setNavLinks] = useState<NavLink[]>([]);
    const pathname = usePathname();

    useEffect(() => {
        const fetchNavLinks = async () => {
            try {
                const links = await NavConfig();
                setNavLinks(links);
            } catch (error) {
                console.error('Error fetching navigation links:', error);
            }
        };

        fetchNavLinks();
    }, [])

    return (
        <header className="sticky top-0 left-0 z-40 font-sans w-full h-[60px] px-2 border-b backdrop-blur-lg grid place-items-center">
            <nav className="flex justify-between w-[97.5%]">
                <div className="flex max-h-8 space-x-8">
                    <div className="flex justify-center items-center space-x-2 text-xl">
                        <Link href="/" className="m-0 p-0">
                            <Logo width={32} height={32} />
                        </Link>
                        {/* <svg height="32" role="separator" viewBox="0 0 32 32" width="32">
                            <path d="M22 5L9 28" stroke="hsl(var(--accent))" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p>{}</p> */}

                    </div>
                    <div className="hidden md:flex items-center justify-end text-sm space-x-8">
                        {NavLinks.map((link, idx) => {
                            return (
                                <Link className={`${pathname === link.href ? "text-primary" : "text-muted-foreground transition-colors hover:text-primary"}`} key={idx} href={link.href}>{link.label}</Link>
                            )
                        })}
                    </div>
                </div>
                <ul className="hidden md:flex space-x-2">
                    <li><Donate /></li>
                    <li><ModeToggle /></li>
                    <li><Admin mobile={false} /></li>
                </ul>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button className="block md:hidden" variant="ghost" size="sm" >
                            <Menu />
                        </Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle className="flex items-center">
                                <span className="font-bold text-center align-middle">
                                    SyS App
                                </span>
                                {/* <svg height="32" role="separator" viewBox="0 0 32 32" width="32">
                                    <path d="M22 5L9 28" stroke="hsl(var(--muted))" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>Test</span> */}
                            </SheetTitle>
                            <SheetDescription>

                            </SheetDescription>
                        </SheetHeader>
                        <div className="flex flex-col m-8">
                            {/* Links */}
                            {NavLinks.map((link, idx) => {
                                return (
                                    <div key={idx} className="py-4 border-b font-sans">
                                        <Link className={`mx-4 text-sm ${pathname === link.href ? "underline-offset-4 underline" : "font-normal"}`} href={link.href}>{link.label}</Link>
                                    </div>
                                )
                            })}

                            {/* Social links & Buttons */}
                            <div className="mt-4 space-y-2">
                                <div className="px-4 py-2 rounded-lg bg-secondary flex justify-between items-center">
                                    <span className="text-sm">Appearance</span>
                                    <ModeToggle />
                                </div>
                                <div className="px-4 py-2 rounded-lg bg-secondary flex justify-between items-center">
                                    <span className="text-sm">Donate</span>
                                    <Donate />
                                </div>
                                <Admin mobile={true} />
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </nav>

        </header>
    )
}

export default NavBar;