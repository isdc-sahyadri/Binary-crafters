// Load Video Based on Selected Language
const urlParams = new URLSearchParams(window.location.search);
const lang = urlParams.get("lang");

const videos = {
    c: "https://www.youtube.com/embed/KJgsSFOSQv0",
    cpp: "https://www.youtube.com/embed/vLnPwxZdW4Y",
    python: "https://www.youtube.com/embed/rfscVS0vtbw",
    javascript: "https://www.youtube.com/embed/PkZNo7MFNFg",
};

document.getElementById("video").src = videos[lang] || videos["c"];

// Initialize Monaco Editor
require.config({ paths: { vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.33.0/min/vs" } });

require(["vs/editor/editor.main"], function () {
    window.editor = monaco.editor.create(document.getElementById("editor"), {
        value: "// Start coding...",
        language: lang || "javascript",
        theme: "vs-dark",
    });
});

// Run Code Function
function runCode() {
    try {
        const output = eval(editor.getValue());
        document.getElementById("output").innerText = output;
    } catch (error) {
        document.getElementById("output").innerText = "Error: " + error;
    }
}
