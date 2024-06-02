const firebase = require("firebase/app");
require("firebase/storage");
require("firebase/auth");
require("firebase/firestore");
require("firebase/database");
const admin = require("firebase-admin");

const serviceAccount = require("/home/dnys/Downloads/pawties-df230-firebase-adminsdk-enlw1-9c04b092bc.json");

// Configurar a aplicação Firebase
firebase.initializeApp({
  apiKey: "AIzaSyCBy6o98knqZHNjoGxcK1qUsABAcpQr1Dc",
  authDomain: "pawties-df230.firebaseapp.com",
  projectId: "pawties-df230",
  storageBucket: "pawties-df230.appspot.com",
  messagingSenderId: "14868287114",
  appId: "1:14868287114:web:8366aaa4038eea51a0e773",
});

// Inicializar o admin do Firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "pawties-df230.appspot.com",
});

const bucket = admin.storage().bucket();

module.exports = { bucket };
