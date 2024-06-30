"use client"

import { Skeleton } from "@/components/ui/skeleton";
import { GetServerSideProps, Metadata } from "next";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Page() {
    const { data: session, status } = useSession();
    const router = useRouter();

    if (status === "loading") {
        return (
            <Skeleton className="flex-1" />
        )
    }

    if (!session) {
        router.push('/api/auth/signin');
        return null;
    }

    return (
        <>
            Dashboard
            {session.user?.name}
        </>
    )
}