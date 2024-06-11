const firebase = require("firebase/app");
require("firebase/storage");
require("firebase/auth");
require("firebase/firestore");
require("firebase/database");
require("dotenv").config({ path: ".env.local" });

const apiKey = process.env.API_KEY;
const authDomain = process.env.AUTH_DOMAIN;
const projectId = process.env.PROJECT_ID;
const storageBucket = process.env.STORAGE_BUCKET;
const messagingSenderId = process.env.MESSAGING_SENDER_ID;
const appId = process.env.API_ID;
const path = process.env.SERVICE_ACCOUNT;

const admin = require("firebase-admin");

const serviceAccount = require(path);

// Configurar a aplicação Firebase
firebase.initializeApp({
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
});

// Inicializar o admin do Firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: storageBucket,
});

const bucket = admin.storage().bucket();

module.exports = { bucket };
