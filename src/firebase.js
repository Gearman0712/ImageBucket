import firebase from "firebase/app"
import "firebase/auth"
import "firebase/storage";

const app = firebase.initializeApp({

    apiKey: "AIzaSyCPEq-w_XssCbWbvAYZ1DZ6N83gAnP4ouM",
    authDomain: "imagebucket-9f80b.firebaseapp.com",
    projectId: "imagebucket-9f80b",
    storageBucket: "imagebucket-9f80b.appspot.com",
    messagingSenderId: "307774631160",
    appId: "1:307774631160:web:5108aa2662fec83121df0d",
    measurementId: "G-RFB3SNVXRX"
})
export const auth = app.auth()
export const storage = firebase.storage(); 
export default app;