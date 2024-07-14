// Announcement

"use client"

import Link from "next/link"
import { ArrowRightIcon } from "lucide-react";
import { PieChart } from "lucide-react"

import { Separator } from "./ui/separator";
import { useRouter } from "next/navigation";

export function Announcement() {
    const router = useRouter();
    return (
        <Link
            href="/docs/"
            className="group inline-flex items-center px-0.5 text-sm font-medium"
            onClick={(event) => {
                router.push("/docs/");
                event.preventDefault()
            }}
        >
            <PieChart className="h-4 w-4" />{" "}
            <Separator className="mx-2 h-4" orientation="vertical" />{" "}
            <span className="underline-offset-4 group-hover:underline">
                SyS App launched
            </span>
            <ArrowRightIcon className="ml-1 h-4 w-4" />
        </Link>
    )
}