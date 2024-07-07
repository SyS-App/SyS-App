"use client"

// Import (External)
import { useRouter, usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

// Import (Internal)
import { NavLinks } from "@/config/navbar.config";
import { ModeToggle } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { LogoWithText } from "@/components/logo/default";
// import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { CLink } from "@/components/ui/CLink";
import { Admin } from "@/components/auth/admin";

// Not implemented
// const Donate = () => {
//     return (
//         <Dialog>
//             <DialogTrigger asChild>
//                 <Button variant="ghost" size="sm">
//                     <HeartHandshake className="w-[1.2rem] h-[1.rem]" />
//                 </Button>
//             </DialogTrigger>
//             <DialogContent className="w-[90%] h-[80%]">
//                 <DialogTitle className="font-bold">
//                     Donate
//                 </DialogTitle>
//             </DialogContent>
//         </Dialog>
//     )
// }


const NavBar = () => {
    // Initialize router
    const router = useRouter();
    // Initialize pathname
    const pathname = usePathname();

    // useState for navbar in mobile devices.
    const [isSheetOpen, setIsSheetOpen] = useState(false);

    // useState and useEffect for navbar when scrolling in to the bottom of page.
    const [InSticky, setInSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 0) {
                setInSticky(true);
            } else {
                setInSticky(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [])

    const handleLinkClick = (href: string, useRouter: boolean) => {
        if (useRouter) {
            router.push(href);
        }
        setIsSheetOpen(false);
    };

    return (
        <header className={`sticky top-0 left-0 z-40 font-sans w-full h-[60px] px-2 ${InSticky && "border-b"} bg-background grid place-items-center`}>
            <nav className="flex justify-between w-[97.5%]">
                <div className="flex max-h-8 space-x-12">
                    <div className="flex justify-center items-center space-x-2 text-xl">
                        <div onClick={() => router.push("/")} className="m-0 p-0 cursor-pointer flex justify-start items-center gap-2">
                            <LogoWithText width={32} height={32} />
                        </div>
                    </div>
                    <div className="hidden md:flex items-center justify-end text-sm space-x-8">
                        {/* Get all links */}
                        {NavLinks.map((link, idx) => {
                            // For external links (Eg. https://example.com)
                            if (!link.useRouter) {
                                return (
                                    <CLink key={idx} href={link.href} className={`${pathname === link.href ? "text-primary" : "text-muted-foreground transition-all hover:text-primary"}`} isExternal >{link.label}</CLink>
                                )
                            }
                            // For internal links (Eg. /, /docs, /blog)
                            return (
                                <Button onClick={() => router.push(link.href)} key={idx} variant="link" className={`${pathname === link.href ? "text-primary" : "text-muted-foreground transition-all hover:text-primary"} p-0`} >
                                    {link.label}
                                </Button>
                            )
                        })}
                    </div>
                </div>
                <ul className="hidden md:flex space-x-2">
                    {/* <li><Donate /></li> */}
                    <li><ModeToggle /></li>
                    <li><Admin mobile={false} /></li>
                </ul>
                {/* Mobile navbar using Sheet */}
                <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                    <SheetTrigger asChild>
                        <Button className="block md:hidden" variant="ghost" size="sm" >
                            <Menu />
                        </Button>
                    </SheetTrigger>
                    <SheetContent className="flex flex-col">
                        <SheetHeader>
                            <SheetTitle className="flex items-center">
                                <span className="font-bold text-center align-middle">
                                    SyS App
                                </span>
                            </SheetTitle>
                            <SheetDescription>

                            </SheetDescription>
                        </SheetHeader>
                        {/* Main */}
                        <div className="flex flex-col space-y-4">
                            {/* Get all links */}
                            {NavLinks.map((link, idx) => {
                                if (!link.useRouter) {
                                    return (
                                        // For external links (Eg. https://example.com)
                                        <div className="px-4 py-2 border-b-[1px]" key={idx} onClick={() => handleLinkClick(link.href, link.useRouter)}>
                                            <CLink href={link.href} className={`${pathname === link.href ? "text-primary" : "text-muted-foreground transition-all hover:text-primary"}`} isExternal >{link.label}</CLink>
                                        </div>
                                    )
                                }

                                return (
                                    // For internal links (Eg. /, /docs, /blog)
                                    <div className="px-4 py-2 border-b-[1px]" key={idx} onClick={() => handleLinkClick(link.href, link.useRouter)}>
                                        <Button onClick={() => router.push(link.href)} key={idx} variant="link" className={`${pathname === link.href ? "text-primary" : "text-muted-foreground transition-all hover:text-primary"} p-0`} >
                                            {link.label}
                                        </Button>
                                    </div>
                                )
                            })}
                        </div>
                        {/* Social links & Buttons */}
                        <div className="mt-4 space-y-2">
                            <div className="px-4 py-2 rounded-lg bg-secondary flex justify-between items-center">
                                <span className="text-sm">Appearance</span>
                                <ModeToggle />
                            </div>
                            {/* <div className="px-4 py-2 rounded-lg bg-secondary flex justify-between items-center">
                                <span className="text-sm">Donate</span>
                                <Donate />
                            </div> */}
                            {/* Admin options */}
                            <Admin mobile={true} />
                        </div>
                        <br className="my-2" />
                    </SheetContent>
                </Sheet>
            </nav>

        </header>
    )
}

export default NavBar;