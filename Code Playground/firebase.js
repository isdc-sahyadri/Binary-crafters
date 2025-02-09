// Firebase Configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Google Login
document.getElementById("google-login").addEventListener("click", function () {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then(result => {
            document.getElementById("google-login").style.display = "none";
            document.getElementById("logout").style.display = "inline-block";
            alert("Logged in as " + result.user.displayName);
        })
        .catch(error => {
            console.error(error.message);
        });
});

// Logout
document.getElementById("logout").addEventListener("click", function () {
    auth.signOut().then(() => {
        document.getElementById("google-login").style.display = "inline-block";
        document.getElementById("logout").style.display = "none";
    });
});
