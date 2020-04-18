const functions = require("firebase-functions");
const express = require("express");
const app = express();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

app.get("/home", (req, res) => {
    res.send("Hello from Firebase!");
});

exports.app = functions.https.onRequest(app);
