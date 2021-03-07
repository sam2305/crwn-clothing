import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBw46nBUVzE24MTre23699MF3ZRb0qmuus",
    authDomain: "crwn-db-e5dac.firebaseapp.com",
    projectId: "crwn-db-e5dac",
    storageBucket: "crwn-db-e5dac.appspot.com",
    messagingSenderId: "852508052052",
    appId: "1:852508052052:web:864354a216ead0c5eebbc1",
    measurementId: "G-0D0H9TBFK1"
};

export const createUserProfielDocument = async (userAuth,additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    
    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });    
        }catch(error){
            console.log('error creating user', error.message)
        }
        
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;