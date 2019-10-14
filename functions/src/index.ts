import * as functions from 'firebase-functions';
import * as admin from "firebase-admin";

const serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase 2!");
});


export const createUser = functions.https.onRequest((request, response) => {
    //const query = request.query;
    admin.auth().createUser({
        email: 'user@example.com',
        emailVerified: false,
        phoneNumber: '+11234567890',
        password: 'secretPassword',
        displayName: 'John Doe 5',
        //photoURL: 'http://www.example.com/12345678/photo.png',
        disabled: false
    })
        .then(function(userRecord) {
            // See the UserRecord reference doc for the contents of userRecord.
            response.send(`Successfully created new user: ${userRecord.uid}`);
        })
        .catch(function(error) {
            response.send(`Error creating new user: ${error}`);
        });
});

