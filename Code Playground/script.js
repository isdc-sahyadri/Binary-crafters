import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

document.getElementById("google-login").addEventListener("click", () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      alert("Welcome, " + result.user.displayName);
      document.getElementById("logout").style.display = "block";
    })
    .catch((error) => {
      console.error(error);
    });
});

document.getElementById("email-login").addEventListener("click", () => {
  const email = prompt("Enter email:");
  const password = prompt("Enter password:");
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Logged in as: " + userCredential.user.email);
      document.getElementById("logout").style.display = "block";
    })
    .catch((error) => {
      console.error(error);
    });
});

document.getElementById("logout").addEventListener("click", () => {
  signOut(auth).then(() => {
    alert("Logged out");
    document.getElementById("logout").style.display = "none";
  });
});

require.config({ paths: { vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.33.0/min/vs" } });

require(["vs/editor/editor.main"], function () {
  monaco.editor.create(document.getElementById("editor"), {
    value: "// Start coding here...",
    language: "javascript",
    theme: "vs-dark",
  });
});
document.getElementById("toggle-editor").addEventListener("click", function () {
    const editorContainer = document.getElementById("editor-container");
    if (editorContainer.style.display === "none") {
        editorContainer.style.display = "block";
        this.innerText = "Close Code Editor";

        // Initialize Monaco Editor only when opened
        if (!window.editor) {
            require.config({ paths: { vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.33.0/min/vs" } });

            require(["vs/editor/editor.main"], function () {
                window.editor = monaco.editor.create(document.getElementById("editor"), {
                    value: "// Write your code here...",
                    language: "javascript",
                    theme: "vs-dark",
                });
            });
        }
    } else {
        editorContainer.style.display = "none";
        this.innerText = "Open Code Editor";
    }
});

function runCode() {
    let code = editor.getValue().trim();  // Get user code
    let language = document.getElementById("languageSelector").value;

    console.log("User Code Before Processing:\n", code); // ✅ Debugging log

    let finalCode = code;

    // Fix for C and C++ (if user didn't add main() and header)
    if (language === "c" || language === "cpp") {
        let hasMain = /int\s+main\s*\(/.test(code);
        let hasHeader = /#include\s+<.*?>/.test(code);

        if (!hasMain || !hasHeader) {
            if (language === "c") {
                finalCode = `#include <stdio.h>\n\nint main() {\n\t${code}\n\treturn 0;\n}`;
            } else if (language === "cpp") {
                finalCode = `#include <iostream>\nusing namespace std;\n\nint main() {\n\t${code}\n\treturn 0;\n}`;
            }
        }
    }

    console.log("Final Code Sent to Compiler:\n", finalCode); // ✅ Debugging log

    executeCode(finalCode, language);
}


// Open Code Writer
document.getElementById("openCodeWriter").addEventListener("click", function () {
    window.open("codewriter.html", "_blank");
});

// Start Learning
document.getElementById("startCoding").addEventListener("click", function () {
    window.location.href = "tutorials.html";
});
