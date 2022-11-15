import firebase from 'firebase/app';
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBR9iSmQb2lbGk3kSNGI8cgjOfI7vOQRAA",
    authDomain: "fireblogsyt-dd7da.firebaseapp.com",
    projectId: "fireblogsyt-dd7da",
    storageBucket: "fireblogsyt-dd7da.appspot.com",
    messagingSenderId: "218563439787",
    appId: "1:218563439787:web:74816d4f5b90ce13ad5bee"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };

export default firebaseApp.firestore();