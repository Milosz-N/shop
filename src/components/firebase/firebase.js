import {initializeApp} from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore' 
const firebaseConfig = {

    apiKey: "AIzaSyCcwO8i5uJ7jk26hnjc2cdvayWzTrUYKKI",
  
    authDomain: "udemy-shop-e9579.firebaseapp.com",
  
    projectId: "udemy-shop-e9579",
  
    storageBucket: "udemy-shop-e9579.appspot.com",
  
    messagingSenderId: "452425239522",
  
    appId: "1:452425239522:web:349e447c282a8eb34ac7bb"
  
  };

  
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters(
    {
        prompt: "select_account"
    }
);

export const auth = getAuth();
export const singInWithGoogle = () => signInWithPopup(auth, provider)

export const db = getFirestore();

export const createUserDocument = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    // console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot)
    if(!userSnapshot.exists()){
        //jezeli uzytkownik nie istnieje
        const {displayName, email} = userAuth;  //wartosci z uzytkownika, nazwy z obiektu
        const createdAt = new Date()
        try{
            await setDoc(userDocRef, {displayName, email, createdAt});
        }
        catch(error){
            console.log(error)
        }

    }
    return userDocRef
}