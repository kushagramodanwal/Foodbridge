// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5O1NWQLqAU61nHoOSttyq_9YajqkGMvs",
  authDomain: "foodbridge-3ec96.firebaseapp.com",
  projectId: "foodbridge-3ec96",
  storageBucket: "foodbridge-3ec96.firebasestorage.app",
  messagingSenderId: "58383652509",
  appId: "1:58383652509:web:18dbb82613755b7cdb6674",
  measurementId: "G-CF55EVFWF7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

const submit = document.getElementById('submit');
submit.addEventListener("click",function(event){
  event.preventDefault()
  alert(5)

})