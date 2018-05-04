import * as firebase from 'firebase';

const devConfig = {
    apiKey: "AIzaSyBeSC5Jl57LD1M4b_KG80Rifta8QYUdGkM",
    authDomain: "beauty-in-branches.firebaseapp.com",
    databaseURL: "https://beauty-in-branches.firebaseio.com",
    projectId: "beauty-in-branches",
    storageBucket: "",
    messagingSenderId: "638205423881"
};

const prodConfig = {
    apiKey: "AIzaSyBGeDVEL9Ukym-JYso-8NMNGjdwZ7BR8zo",
    authDomain: "bloom-family-tree.firebaseapp.com",
    databaseURL: "https://bloom-family-tree.firebaseio.com",
    projectId: "bloom-family-tree",
    storageBucket: "bloom-family-tree.appspot.com",
    messagingSenderId: "20110881278"
};

const devDb = 'beauty-in-branches';
const prodDb = 'bloom';

const config = process.env.NODE_ENV === 'production'
    ? prodConfig
    : devConfig;

const dbName = process.env.NODE_ENV === 'production'
    ? prodDb
    : devDb;

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {
    auth,
    provider,
    db,
    dbName,
};