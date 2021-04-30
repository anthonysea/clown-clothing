import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAojZaAhjadqEn9j4K98e-bw1TZu5CY9MY",
    authDomain: "clwn-clothing-db-60aec.firebaseapp.com",
    projectId: "clwn-clothing-db-60aec",
    storageBucket: "clwn-clothing-db-60aec.appspot.com",
    messagingSenderId: "617707385867",
    appId: "1:617707385867:web:629333b6f4274ea13b830e",
    measurementId: "G-S9WHRQT40J"
};


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    // If user doesn't exist, create it
    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        // Create new user
        try {
            await userRef.set({
                displayName, 
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('Error creating user', error.message)
        }
    }

    return userRef
}


export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef);

    // Batch write
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc(); // Get a new documentReference and randomly generate an ID
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollections = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items,
        }
    });

    return transformedCollections.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {})
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google auth utils
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'}); // trigger google account select popup
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;