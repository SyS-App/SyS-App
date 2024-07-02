"use client"

// Custom buttons
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

const TakeMeHomeButton = ({ to="/" }) => {
    const router = useRouter();

    return (
        <Button onClick={() => router.push(to)} variant="default">
            Take me home
        </Button>
    )
}

const SignInButton = () => (
    <Button onClick={() => signIn()}>
        Sign In
    </Button>
)

export { TakeMeHomeButton, SignInButton };