// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBsLxfiicyKVOFnWUDdQERWzeqajDLzpeQ",
    authDomain: "student-teacher-booking-264cb.firebaseapp.com",
    projectId: "student-teacher-booking-264cb",
    storageBucket: "student-teacher-booking-264cb.firebasestorage.app",
    messagingSenderId: "120951035314",
    appId: "1:120951035314:web:500e346de81c3c001580ab"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);