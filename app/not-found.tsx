
import * as React from "react"

import { Metadata } from "next";
import { buttonVariants } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link";

export const metadata: Metadata = {
    title: "404",
    description: "Page not found.",
    openGraph: {
        description: "Page not found."
    }
}

function E404() {

    return (
        <div className="flex md:justify-center md:items-center flex-col h-[500px]">
            <Card className="flex-1 border-none rounded-none md:rounded-lg md:flex-[0] md:w-[350px] px-4 py-8">
                <CardHeader className="text-center font-sans">
                    <CardTitle className="text-[64px]">404</CardTitle>
                    <CardDescription className="text-[32px]">Page not found</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center items-center">
                    <Link href="/" className={buttonVariants({ variant: "outline" })}>Take me home</Link>
                </CardContent>
            </Card>
        </div>
    )
}

export default E404;