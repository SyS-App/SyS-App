// // Auth configuration
// import NextAuth from "next-auth";
// import Github from "next-auth/providers/github";
// import PostgresAdapter from "@auth/pg-adapter";
// import Pool from "@";

// export const { handlers, signIn, signOut, auth } = NextAuth({
//     providers: [
//         Github({
//             clientId: process.env.AUTH_GITHUB_ID,
//             clientSecret: process.env.AUTH_GITHUB_SECRET
//         })
//     ],
//     adapter: ,
//     callbacks: {
//         async signIn({ user, account, profile }) {
//             return true
//         },
//         async session({ session, user }) {
//             session.user.id = user.id;
//             return session;
//         }
//     },
//     session: {
//         strategy: "database",
//         maxAge: 2 * 24 * 60 * 60,
//         updateAge: 24 * 60 * 60,
//     },
//     debug: process.env.NODE_ENV !== "production",
//     logger: {
//         error(code, ...message) {
//             console.error(code, message)
//         },
//         warn(code, ...message) {
//             console.warn(code, message)
//         },
//         debug(code, ...message) {
//             console.debug(code, message)
//         }
//     },
// });