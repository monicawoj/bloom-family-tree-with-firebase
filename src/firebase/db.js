import { db, dbName } from './firebase';

// User API

export const doCreateUser = (userId, username, email, data) =>
    db.ref(`users/${userId}`).set({
        username,
        email,
        data,
    });

export const onceGetUserInfo = (userId) =>
    db.ref(`users/${userId}`).once('value');

export const removeItemFromDatabase = (userId, itemValue) => {
    let ref = db.ref(`users/${userId}/data`);
    ref.orderByValue().equalTo(itemValue).on('child_added', function(snapshot) {
        snapshot.ref().remove();
    });
};

export const createItemInDatabase = (userId, itemObject) => {
    let ref = db.ref(`users/${userId}`);
    ref.child('data').push(itemObject);
};

export const getCurrentData = (userId) =>
    db.ref(`users/${userId}/data`).on('value', function(snapshot) {
        const data = snapshot.val();
        console.log(...data);
        return data;
    });