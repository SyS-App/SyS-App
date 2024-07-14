"use client"

// Import (External)
import { useRouter } from "next/navigation";
import { BookOpen, Component, FolderCode, Menu, Newspaper, Package, ReplaceAll } from "lucide-react";
import { useState } from "react";

// Import (Internal)
import { ModeToggle } from "./theme-provider";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { LogoWithText } from "./logo/default";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";
import Link from "next/link";
import { ScrollArea } from "./ui/scroll-area";


const Open_source = ({ style }: { style: string }) => {
    return (
        <ul className={style}>
            <li className="flex flex-col w-full">
                <Link
                    href="/components"
                    className="p-2 rounded-md flex items-center space-x-4 cursor-pointer hover:bg-secondary transition-all"
                >
                    <div className="hidden md:block p-3 bg-primary-foreground border rounded-sm">
                        <Component className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="font-bold">
                            Components
                        </p>
                        <p className="text-xs">
                            Next.js + TypeScript components.
                        </p>
                    </div>
                </Link>
            </li>
            <li className="flex flex-col w-full">
                <Link
                    href="/libraries"
                    className="p-2 rounded-md flex items-center space-x-4 cursor-pointer hover:bg-secondary transition-all"
                >
                    <div className="hidden md:block p-3 bg-primary-foreground border rounded-sm">
                        <Package className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="font-bold">
                            Libraries
                        </p>
                        <p className="text-xs">
                            Rust, Python and TypeScript tools.
                        </p>
                    </div>
                </Link>
            </li>
            <li className="flex flex-col w-full">
                <Link
                    href="/others"
                    className="p-2 rounded-md flex items-center space-x-4 cursor-pointer hover:bg-secondary transition-all"
                >
                    <div className="hidden md:block p-3 bg-primary-foreground border rounded-sm">
                        <FolderCode className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="font-bold">
                            Others
                        </p>
                        <p className="text-xs">
                            Other open source projects.
                        </p>
                    </div>
                </Link>
            </li>
        </ul>
    )
}

const Resources = ({ style }: { style: string }) => (
    <ul className={style}>
        <li className="flex flex-col w-full">
            <Link
                href="/docs"
                className="p-2 rounded-md flex items-center space-x-4 cursor-pointer hover:bg-secondary transition-all"
            >
                <div className="hidden md:block p-3 bg-primary-foreground border rounded-sm">
                    <BookOpen className="w-5 h-5" />
                </div>
                <div>
                    <p className="font-bold">
                        Docs
                    </p>
                    <p className="text-xs">
                        Want read all docs? Find here.
                    </p>
                </div>
            </Link>
        </li>
        <li className="flex flex-col w-full">
            <Link
                href="/blog"
                className="p-2 w-full rounded-md flex items-center space-x-4 cursor-pointer hover:bg-secondary transition-all"
            >
                <div className="hidden md:block p-3 bg-primary-foreground border rounded-sm">
                    <Newspaper className="w-5 h-5" />
                </div>
                <div>
                    <p className="font-bold">
                        Blog
                    </p>
                    <p className="text-xs">
                        Keep all updates from SyS App.
                    </p>
                </div>
            </Link>
        </li>
        <li className="flex flex-col w-full">
            <Link
                href="/submit"
                className="p-2 w-full rounded-md flex items-center space-x-4 cursor-pointer hover:bg-secondary transition-all"
            >
                <div className="hidden md:block p-3 bg-primary-foreground border rounded-sm">
                    <ReplaceAll className="w-5 h-5" />
                </div>
                <div>
                    <p className="font-bold">
                        Submit
                    </p>
                    <p className="text-xs">
                        Want add your project? Submit here.
                    </p>
                </div>
            </Link>
        </li>
    </ul>
)

const NavBar = () => {
    const router = useRouter();
    const [isSheetOpen, setIsSheetOpen] = useState(false);

    const closeSheet = () => {
        setIsSheetOpen(false);
    }

    return (
        <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <nav className="mx-4 flex justify-between items-center h-14 max-w-screen-2xl">
                <div className="flex items-center space-x-4">
                    <div className="flex justify-center items-center space-x-2 text-xl">
                        <div onClick={() => router.push("/")} className="m-0 p-0 cursor-pointer flex justify-start items-center gap-2">
                            <LogoWithText width={32} height={32} />
                        </div>
                    </div>
                    <NavigationMenu>
                        <NavigationMenuList className="hidden md:flex items-center justify-end text-sm">
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    Open source
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <Open_source style="bg-background w-[300px] p-4 flex flex-col justify-start items-start text-sm space-y-4" />
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    Resources
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <Resources style="bg-background w-[300px] p-4 flex flex-col justify-start items-start text-sm space-y-4" />
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <ul className="hidden md:flex space-x-2">
                    <li><ModeToggle /></li>
                </ul>
                <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                    <SheetTrigger asChild>
                        <Button className="block md:hidden" variant="ghost" size="sm" >
                            <Menu />
                        </Button>
                    </SheetTrigger>
                    <SheetContent className="flex flex-col">
                        <SheetHeader>
                            <SheetTitle className="flex items-center">
                                <Link href="/" onClick={closeSheet}>
                                    <span className="font-bold text-center align-middle">
                                        SyS App
                                    </span>
                                </Link>
                            </SheetTitle>
                            <SheetDescription>

                            </SheetDescription>
                        </SheetHeader>
                        <ScrollArea>
                            <div className="flex flex-col space-y-4 text-sm">
                                <div className="px-4 py-2 flex flex-col space-y-2">
                                    <p className="font-bold">
                                        Open source
                                    </p>
                                    <Open_source style="space-y-2" />
                                </div>
                                <div className="px-4 py-2 flex flex-col space-y-2">
                                    <p className="font-bold">
                                        Resources
                                    </p>
                                    <Resources style="space-y-2" />
                                </div>
                            </div>
                        </ScrollArea>
                        <div className="flex-1" />
                        <div className="mt-4 space-y-2">
                            <div className="px-4 py-2 rounded-lg bg-secondary flex justify-between items-center">
                                <span className="text-sm">Appearance</span>
                                <ModeToggle />
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </nav >
        </header >
    )
}

export default NavBar;