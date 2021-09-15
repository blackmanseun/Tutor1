import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDrVGrA8mEehUoaZcthg3HpTzOyJRhuyT0",
    authDomain: "shopping-app-503e6.firebaseapp.com",
    projectId: "shopping-app-503e6",
    storageBucket: "shopping-app-503e6.appspot.com",
    messagingSenderId: "482615464713",
    appId: "1:482615464713:web:e2fa3af5a0bc6db61eb9d8",
    measurementId: "G-D9WXT3YMM9"
  };
export const createUserProfileDocument = async (userAuth, additionalData) =>{
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }
    catch(error){
      console.log("Error creating user ", error.message)
    }
  }
  return userRef
}

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'})

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase