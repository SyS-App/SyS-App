"use client"

// Admin.tsx
import { useEffect, useState } from "react";
import { LogOut, Settings2, User } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface AdminProps {
    status?: boolean;
    mobile: boolean;
}

function Admin({ status = false, mobile }: AdminProps) {
    const { data: session } = useSession();
    const [showAdminPanel, setShowAdminPanel] = useState(status);

    const handleAdminPanel = (event: KeyboardEvent) => {
        if (event.altKey && event.key === "a") {
            setShowAdminPanel(prev => !prev);
        }
    };

    useEffect(() => {
        if (session) {
            setShowAdminPanel(true);
        }
    }, [session]);

    useEffect(() => {
        window.addEventListener("keydown", handleAdminPanel);
        return () => {
            window.removeEventListener("keydown", handleAdminPanel);
        };
    }, []);

    const router = useRouter();

    const UserItem = () => {
        if (!session) {
            return (
                <Button variant="default" size="sm" onClick={() => signIn()} >
                    <span className="h-[1.2rem]">
                        Sign In
                    </span>
                </Button>
            );
        }

        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                        <User className="w-[1.2rem] h-[1.2rem]" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="font-sans">
                    <DropdownMenuLabel className="font-semibold">My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => router.push("/dashboard")}>
                        <Settings2 className="mr-2 h-4 w-4" />
                        <span>Dashboard</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => signOut()}>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span className="text-primary">Log out</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        );
    };

    if (mobile) {
        return (
            <div className="px-4 py-2 rounded-lg bg-secondary flex justify-between flex-row items-center">
                {mobile && <span className="text-sm">
                    My account
                </span>}
                {UserItem()}
            </div>
        );
    }

    return (
        <>
            {showAdminPanel && UserItem()}
        </>
    );
}

export { Admin };