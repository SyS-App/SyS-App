// Auth config (Providers)
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import type { NextAuthConfig } from "next-auth"
import type { OAuthConfig, OAuthUserConfig } from "next-auth/providers"

// Define a type for the provider functions
type ProviderFunction = () => OAuthConfig<any>

// Define a type for the providers array
type ProvidersArray = (ProviderFunction | OAuthConfig<any>)[]

// Notice this is only an object, not a full Auth.js instance
const providers: NextAuthConfig = {
    providers: [
        Google as ProviderFunction,
        GitHub as ProviderFunction
    ] as ProvidersArray,
}

export default providers satisfies NextAuthConfig;

// Define a type for the provider map
type ProviderMapItem = {
    id: string;
    name: string;
}

export const providerMap: ProviderMapItem[] = providers.providers.map((provider) => {
    if (typeof provider === "function") {
        const providerData = provider()
        return { id: providerData.id, name: providerData.name }
    } else {
        return { id: provider.id, name: provider.name }
    }
});