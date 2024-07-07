// Firebase config
import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";
import { getDatabase } from "firebase-admin/database";

let app;

if (!getApps().length) {
  app = initializeApp({
    credential: cert({
      // type: process.env.AUTH_FIREBASE_TYPE,
      // project_id: process.env.AUTH_FIREBASE_PROJECT_ID,
      // private_key_id: process.env.AUTH_FIREBASE_PRIVATE_KEY_ID,
      // private_key: process.env.AUTH_FIREBASE_PRIVATE_KEY,
      // client_email: process.env.AUTH_FIREBASE_CLIENT_EMAIL,
      // client_id: process.env.AUTH_FIREBASE_CLIENT_ID,
      // auth_uri: process.env.AUTH_FIREBASE_AUTH_URL,
      // token_uri: process.env.AUTH_FIREBASE_AUTH_URI,
      // auth_provider_x509_cert_url: process.env.AUTH_FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
      // client_x509_cert_url: process.env.AUTH_FIREBASE_CLIENT_X509_CERT_URL,
      // universe_domain: process.env.AUTH_FIREBASE_UNIVERSE_DOMAIN
      clientEmail: process.env.AUTH_FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.AUTH_FIREBASE_PRIVATE_KEY,
      projectId: process.env.AUTH_FIREBASE_PROJECT_ID
    }),
    databaseURL: process.env.AUTH_FIREBASE_DB_URL,
    storageBucket: `${process.env.AUTH_FIREBASE_PROJECT_ID}.appspot.com`,
  });
} else {
  app = getApps()[0];
}

// Firestore
const firestore = getFirestore(app);
// Storage (Out of working, will be activated after releasing other projects)
const storage = getStorage(app);

// Realtime database (Out of working, will be activated after releasing other projects)
const realtime_database = getDatabase(app);

export { app, firestore, storage, realtime_database }