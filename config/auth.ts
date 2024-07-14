// Auth configuration
import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import { FirestoreAdapter } from "@/lib/auth";
import { firestore } from "./firebase";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Github
    ],
    adapter: FirestoreAdapter(firestore),
    callbacks: {
        async session({ session, user }) {
            session.userId = user.id;
            return session;
        }
    },
    session: {
        strategy: "database",
        maxAge: 2 * 24 * 60 * 60,
        updateAge: 24 * 60 * 60,
    },
    debug: process.env.NODE_ENV !== "production",
    logger: {
        error(code, ...message) {
            console.error(code, message)
        },
        warn(code, ...message) {
            console.warn(code, message)
        },
        debug(code, ...message) {
            console.debug(code, message)
        }
    },
});