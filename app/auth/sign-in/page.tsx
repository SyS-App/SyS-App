"use client"

import { Button } from "@/components/ui/button";
import { LogoSM } from "@/components/logo/default";
import { useState, useEffect, useCallback } from "react";
import { providerMap } from "@/config/auth.config";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

type ErrorMsg = {
    msg: string
}

const AuthErrorComponent = ({ msg }: ErrorMsg) => {
    return (
        <div className="bg-destructive rounded p-2 text-sm">
            <span>{msg}</span>
        </div>
    )
}

// Custom hook for managing error state
const useError = (duration = 5000) => {
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => setError(null), duration);
            return () => clearTimeout(timer);
        }
    }, [error, duration]);

    const showError = useCallback((msg: string) => {
        setError(msg);
    }, []);

    return { error, showError };
};

const SignIn = () => {
    const { error, showError } = useError();
    const router = useRouter();

    const handleSignIn = async (providerId: string) => {
        try {
            const result = await signIn(providerId, { callbackUrl: "/dashboard", redirect: false });
            if (result?.error) {
                showError(result.error);
            } else if (result?.url) {
                router.push(result.url);
            }
        } catch (err) {
            showError("An unexpected error occurred. Please try again.");
        }
    };

    return (
        <div className="w-full lg:grid min-h-[500px] lg:grid-cols-2 xl:min-h-[700px]">
            <div className="flex items-center justify-center py-12">
                <div className="mx-auto grid w-[350px] gap-6">
                    <div className="grid gap-2 text-center">
                        <h1 className="text-3xl font-bold">Login</h1>
                        <p className="text-balance text-muted-foreground">
                            Choose your auth provider below to login.
                        </p>
                        {error && <AuthErrorComponent msg={error} />}
                    </div>
                    <div className="grid border rounded-lg p-4 gap-4">
                        {providerMap.map(provider => (
                            <Button
                                variant="outline"
                                key={provider.id}
                                onClick={() => handleSignIn(provider.id)}
                            >
                                Sign In with {provider.name}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="hidden lg:flex justify-center items-center">
                <LogoSM width={400} height={400} />
            </div>
        </div>
    )
}

export default SignIn;