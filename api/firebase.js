// Import the functions you need from the SDKs you need
const { initializeApp } =require( "firebase/app");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjQGB8bgQFdwu98F3isMuF2he6XCMaSF8",
  authDomain: "iridescence-page.firebaseapp.com",
  projectId: "iridescence-page",
  storageBucket: "iridescence-page.appspot.com",
  messagingSenderId: "353853960233",
  appId: "1:353853960233:web:9314ffc594041692356c38"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 module.exports={app};
