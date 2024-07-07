// Custom buttons
"use client"
// Import (Internal)
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
// Import (External)
import { Button } from "@/components/ui/button";

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