import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";
import { getFirestore, setDoc, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCtqBMFAPKwws1RSF4ni9CNTTtb6D1MeBw",
    authDomain: "code-playground-d37c9.firebaseapp.com",
    projectId: "code-playground-d37c9",
    storageBucket: "code-playground-d37c9.appspot.com",
    messagingSenderId: "812688408929",
    appId: "1:812688408929:web:0a09c5e6a195aa3d80c520"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Show Login Modal
document.getElementById("signInBtn").addEventListener("click", function () {
    document.getElementById("loginModal").style.display = "block";
});

// Close Modal
function closeModal() {
    document.getElementById("loginModal").style.display = "none";
}

// Register User with Username
async function register() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const email = username + "@codeplayground.com"; // Fake email for Firebase

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Store username in Firestore
        await setDoc(doc(db, "users", user.uid), { username });

        alert("Account Created Successfully!");
        closeModal();
        checkAuth();
    } catch (error) {
        alert("Error: " + error.message);
    }
}

// Sign In User
async function signIn() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const email = username + "@codeplayground.com"; // Convert username to email

    try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login Successful!");
        closeModal();
        checkAuth();
    } catch (error) {
        alert("Error: " + error.message);
    }
}

// Sign Out User
document.getElementById("signOutBtn").addEventListener("click", async function () {
    await signOut(auth);
    alert("Signed Out Successfully!");
    checkAuth();
});

// Check Auth State
function checkAuth() {
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            const userDoc = await getDoc(doc(db, "users", user.uid));
            const username = userDoc.exists() ? userDoc.data().username : "Guest";

            document.getElementById("signInBtn").style.display = "none";
            document.getElementById("signOutBtn").style.display = "block";
            alert("Welcome, " + username + "!");
        } else {
            document.getElementById("signInBtn").style.display = "block";
            document.getElementById("signOutBtn").style.display = "none";
        }
    });
}

checkAuth();
