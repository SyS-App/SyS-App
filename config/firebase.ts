import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";

let app;

if (!getApps().length) {
    app = initializeApp({
        credential: cert({
            clientEmail: process.env.AUTH_FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.AUTH_FIREBASE_PRIVATE_KEY,
            projectId: process.env.AUTH_FIREBASE_PROJECT_ID
        })
    });
} else {
    app = getApps()[0];
}

const firestore = getFirestore(app);
const storage = getStorage(app)

export { app, firestore, storage };