import { auth } from "./firebasetcher.js";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// REGISTER
const registerBtn = document.getElementById("registerBtn");

if (registerBtn) {
    registerBtn.addEventListener("click", function () {
        const email = document.getElementById("regEmail").value;
        const password = document.getElementById("regPassword").value;

        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                alert("Registration Successful");
                console.log("User Registered");
            })
            .catch(error => alert(error.message));
    });
}

// LOGIN
const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {
    loginBtn.addEventListener("click", function () {
        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                console.log("User Logged In");
                window.location.href = "dashboardtcher.html";
            })
            .catch(error => alert(error.message));
    });
}
// 🔥 FIRESTORE IMPORTS
import { db } from "./firebasetcher.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔥 BOOK APPOINTMENT
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
            console.log("Appointment Saved");

        } catch (error) {
            console.error(error);
            alert("Error booking appointment");
        }
    });
}