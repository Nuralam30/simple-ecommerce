import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, FacebookAuthProvider } from 'firebase/auth';
import firebaseConfig from './firebase.config';


export const initializeUserLogin = () =>{
    const app = initializeApp(firebaseConfig);
}


// FIREBASE GOOGLE SIGN IN
export const handleGoogleSignIn = () =>{
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider)
    .then(res => {
        const { displayName, email, photoURL, phoneNumber} = res.user;
        const signedInUser = {
            isSignedIn : true,
            name : displayName,
            email : email,
            userImage : photoURL,
            success : true,
            phone : phoneNumber
        }
    return signedInUser;
    })
    .catch( err => console.log(err))
}


// FIREBASE GOOGLE SIGN OUT
export const handleGoogleSignOut = () =>{
    const auth = getAuth()
    return signOut(auth)
    .then(res => {
        const signedOutUser = {
            isSignedIn : false,
            name : '',
            email : '',
            userImage : '',
            success : false
        }
    return signedOutUser;
    })
    .catch( err => console.log(err))
} 

// FIREBASE FB SIGN IN
export const handleFbSignIn = () =>{
    const fbProvider = new FacebookAuthProvider();
    const auth = getAuth();
    return signInWithPopup(auth, fbProvider)
    .then((result) => {
        const user = result.user;
        user.success = true;
        return user;
    })
    .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage)
    });
}

// USER SIGN UP FORM SUBMIT
export const userSignUpForm = (name, email, password) =>{
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then( res =>{
        const newUserInfo = res.user;
        newUserInfo.error = '';
        newUserInfo.success = true;
        updateUserInfo(name)
        return newUserInfo;
    })
    .catch( err => {
        var errMessage = err.message;
        const newUserInfo = {};
        newUserInfo.error = errMessage;
        newUserInfo.success = false;
        return newUserInfo;
    })
}

// USER SIGN IN FORM SUBMIT
export const userSignInForm = ( email, password) =>{
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password)
    .then(res =>{
        const userSignIn = res.user;
        userSignIn.error = '';
        userSignIn.success = true;
        return userSignIn;
    })
    .catch(err =>{
        var errMessage = err.message;
        const userSignIn = {};
        userSignIn.error = errMessage;
        userSignIn.success = false;
        return userSignIn;
    })
}


// USER INFO UPDATED
const updateUserInfo = (name) =>{
    const auth = getAuth();
    updateProfile(auth.currentUser, {
    displayName : name
    })
    .then(res => {
    console.log('user info updated successfully');
    })
    .catch((err) => {
    const errMessage = err.message;
    console.log(errMessage)
    });
}

