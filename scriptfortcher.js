import { auth, db } from "./firebasetcher.js";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
    collection,
    addDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";



const registerBtn = document.getElementById("registerBtn");

if (registerBtn) {
    registerBtn.addEventListener("click", function () {

        const email = document.getElementById("regEmail").value;
        const password = document.getElementById("regPassword").value;

        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                alert("Registration Successful");
            })
            .catch(error => alert(error.message));
    });
}



const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {
    loginBtn.addEventListener("click", function () {

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                alert("Login Successful");
                window.location.href = "dashboardtcher.html";
            })
            .catch(error => alert(error.message));
    });
}



const bookBtn = document.getElementById("bookBtn");

if (bookBtn) {
    bookBtn.addEventListener("click", async function () {

        const teacher = document.getElementById("teacherName").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const message = document.getElementById("message").value;

        try {
            await addDoc(collection(db, "appointments"), {
                teacher: teacher,
                date: date,
                time: time,
                message: message
            });

            alert("Appointment Booked Successfully!");

        } catch (error) {
            alert("Error booking appointment");
            console.error(error);
        }
    });
}


const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {

        signOut(auth)
            .then(() => {
                alert("Logged Out Successfully");
                window.location.href = "indexteacher.html";
            })
            .catch(error => alert(error.message));
    });
}