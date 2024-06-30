import NextAuth from "next-auth";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { firestore } from "./firebase";

export const { auth, handlers, signIn, signOut } = NextAuth({
    providers: [
        Google,
        Github
    ],
    adapter: FirestoreAdapter(firestore),
    callbacks: {
        async signIn({ user, account, profile }) {
            const allowedEmails = process.env.EMAILS?.split(",");
            const email = user.email || profile?.email;

            let emailVerified = false;

            if (!account) {
                return false;
            }

            // Check if the email is verified, for Google we use profile.email_verified
            if (account.provider === 'google') {
                emailVerified = profile?.email_verified || false;
            } else if (account.provider === 'github') {
                emailVerified = true;
            }

            const isAllowedToSignIn = allowedEmails?.includes(email as string);

            console.log(`Email: ${email}, Email Verified: ${emailVerified}, Is Allowed: ${isAllowedToSignIn}`);

            if (isAllowedToSignIn && emailVerified) {
                return true;
            } else {
                return false;
            }
        },
        session({ session, user }) {
            session.user.id = user.id
            return session
        },
    },
    session: {
        strategy: 'database',
        maxAge: 2 * 24 * 60 * 60,
        updateAge: 24 * 60 * 60,
    },
    debug: process.env.NODE_ENV !== 'production',
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
    }
})