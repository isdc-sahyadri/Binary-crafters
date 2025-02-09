import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const token = localStorage.getItem("token");

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Function to handle navigation when clicking "Start Learning" or a course
  const handleStart = (coursePath) => {
    if (token) {
      navigate(coursePath);
    } else {
      navigate("/signup");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    navigate("/"); // Redirect to homepage
  };

  return (
    <div className={darkMode ? "bg-dark text-light" : "bg-light text-dark"} style={{ minHeight: "100vh" }}>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top shadow" style={{ backgroundColor: darkMode ? "#111827" : "#1E293B" }}>
  <div className="container">
    <a className="navbar-brand fw-bold" style={{ color: "#0EA5E9" }} href="#">
      CodePlayground
    </a>
    <div className="ml-auto">
      {token ? (
        <button className="btn btn-outline-danger mx-2" onClick={handleLogout}>Logout</button>
      ) : (
        <>
          <button className="btn btn-outline-light mx-2" onClick={() => navigate("/signin")}>Sign In</button>
          <button className="btn btn-outline-light" onClick={() => navigate("/signup")}>Sign Up</button>
        </>
      )}
    </div>
    <div className="mt-3">
      <button className="btn btn-outline-light" onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  </div>
</nav>


      {/* Hero Section */}
      <header className="text-center py-5" style={{ backgroundColor: "#0EA5E9", color: "#FFFFFF", marginTop: "56px" }}>
        <div className="container">
          <h2 className="fw-bold display-5">Code. Build. Repeat.</h2>
          <h1 className="fw-bold display-4 mt-3">Learn to code for free.</h1>
        </div>
      </header>

      {/* Start Your Coding Journey Section */}
      <section className="container my-5 text-center">
        <h2 className="fw-bold display-5" style={{ color: darkMode ? "#CBD5E1" : "#1E293B" }}>Start Your Coding Journey</h2>
        <button 
            className="btn btn-lg fw-bold shadow-sm" 
            style={{ backgroundColor: "#2563EB", color: "#FFFFFF" }}
            onClick={() => window.location.href = "http://127.0.0.1:5500/hackathon/my-auth-frontend/src/code%20playground%202/index.html"}

          >
            Programming Languages
          </button>
        <p className="lead" style={{ color: darkMode ? "#94A3B8" : "#64748B" }}>Join us to learn, practice, and grow as a developer.</p>
        <div className="mt-4">
          <button 
            className="btn btn-lg fw-bold shadow-sm" 
            style={{ backgroundColor: "#2563EB", color: "#FFFFFF" }}
            onClick={() => handleStart("/courses")}
          >
            Start Learning →
          </button>
          
        </div>
      </section>

      {/* Language Selection */}
      <div className="container my-5">
        <div className="row g-4">
          {[
            { name: "HTML", desc: "Learn the basics of web structure.", img: "https://cdn-icons-png.flaticon.com/512/919/919827.png", path: "/courses/html" },
            { name: "CSS", desc: "Style your webpages like a pro.", img: "https://cdn-icons-png.flaticon.com/512/919/919826.png", path: "/courses/css" },
            { name: "JavaScript", desc: "Make your website interactive.", img: "https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png", path: "/courses/javascript" },
            { name: "MongoDB", desc: "Master NoSQL databases for backend storage.", img: "https://cdn.iconscout.com/icon/free/png-256/mongodb-5-1175140.png", path: "/courses/mongodb" },
            { name: "React", desc: "Build modern UI components and web apps.", img: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png", path: "/courses/react" },
            { name: "Node.js", desc: "Create powerful backend applications.", img: "https://cdn-icons-png.flaticon.com/512/919/919825.png", path: "/courses/nodejs" },
          ].map((lang, index) => (
            <div key={index} className="col-md-4">
              <div className="card shadow-sm h-100 text-center" style={{ backgroundColor: darkMode ? "#1E293B" : "#FFFFFF", border: "1px solid #CBD5E1" }}>
                <img src={lang.img} alt={lang.name} className="card-img-top p-3" style={{ height: "150px", objectFit: "contain" }} />
                <div className="card-body">
                  <h5 className="card-title fw-bold" style={{ color: "#0EA5E9" }}>{lang.name}</h5>
                  <p className="card-text" style={{ color: darkMode ? "#E2E8F0" : "#475569" }}>{lang.desc}</p>
                  <button 
                    className="btn" 
                    style={{ backgroundColor: "#2563EB", color: "#FFFFFF" }}
                    onClick={() => handleStart(lang.path)}
                  >
                    Start
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="text-light text-center py-3" style={{ backgroundColor: darkMode ? "#111827" : "#1E293B" }}>
        <p>© 2025 CodePlayground. Learn & Code Together.</p>
        <div>
          <a href="#" className="mx-2" style={{ color: "#CBD5E1" }}>Privacy</a> | 
          <a href="#" className="mx-2" style={{ color: "#CBD5E1" }}>Terms</a> | 
          <a href="#" className="mx-2" style={{ color: "#CBD5E1" }}>Contact</a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
