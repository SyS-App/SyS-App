import React from "react";
import { Nav } from "@/config/default";
import Link from "next/link";
import Image from "next/image";
import { ThemeComponent } from "@/components/theme-provider";
import { Button, buttonVariants } from "@/components/ui/button";
import { Ellipsis } from "lucide-react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";


const HomeLogo = () => {
    return (
        <Image src={"/logo.svg"} alt={"Logo"} width={36} height={36} className="mx-2" />
    )
}


const AllLinks = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="ghost">
                    <Ellipsis className="w-[1.2rem] h-[1.2rem]" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Links</DialogTitle>
                    <br />
                    <DialogDescription>
                        ...
                    </DialogDescription>
                </DialogHeader>

                <DialogClose asChild>
                    <Button type="button" variant="secondary">
                        Close
                    </Button>
                </DialogClose>
            </DialogContent>
        </Dialog>
    )
}


export default function index() {

    return (
        <header className="py-2 sticky top-0 w-full rounded-xl backdrop-blur-2xl">
            <nav className="m-3 mx-4 flex justify-between items-center">
                <div className="navleft flex items-center">
                    <div className="navbrand">
                        <Link href="/" className="flex justify-center items-center font-bold">
                            <HomeLogo />
                            <span className="text-xl">SyS App</span>
                        </Link>
                    </div>
                </div>
                <div className="navright flex items-center gap-5">
                    <ul className='navlinks flex items-center'>
                        {
                            Nav.links.map((link, index) => {
                                return (
                                    <li key={index} className="mx-[0.5px]">
                                        <Link className={buttonVariants({ variant: 'ghost', size: 'sm' })} href={link.url} title={link.label}>
                                            {link.Image}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                        <li className="mx-[0.5px]">
                            <AllLinks />
                        </li>
                        <li className="mx-[0.5px]">
                            <ThemeComponent />
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
