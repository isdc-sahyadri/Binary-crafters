import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focus, setFocus] = useState(null); // Keeps track of focused input

  const handleFocus = (input) => setFocus(input);
  const handleBlur = () => setFocus(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Email and password are required!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("✅ Login successful:", data);
        alert("Login successful!");

        localStorage.setItem("token", data.token);

        window.location.href = "/dashboard";
      } else {
        console.error("❌ Login failed:", data.message);
        alert(data.message);
      }
    } catch (error) {
      console.error("❌ Error:", error);
      alert("Something went wrong! Please try again.");
    }
  };

  const inputStyle = (input) => ({
    backgroundColor: focus === input ? "#ffffff" : "#1c1c1e", // Change background color on focus
    color: focus === input ? "#000000" : "#ffffff", // Change text color on focus
    borderColor: "#ffd700",
    transition: "background-color 0.3s ease, color 0.3s ease", // Smooth transition
  });

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(-45deg, #4facfe, #00f2fe, #43e97b, #fa709a)",
        backgroundSize: "400% 400%",
        animation: "gradientBG 12s ease infinite",
      }}
    >
      <style>
        {`
          @keyframes gradientBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          ::placeholder {
            color: white; /* Style the placeholder text in white */
          }
        `}
      </style>
      <div className="col-md-4">
        <div
          className="card shadow-lg"
          style={{
            background: "rgba(0, 0, 0, 0.8)",
            color: "white",
            borderRadius: "1rem",
          }}
        >
          <div className="card-body">
            <h2 className="text-center mb-4" style={{ color: "#ffd700" }}>
              Sign In
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="email" style={{ fontWeight: "bold" }}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter your email"
                  style={inputStyle("email")}
                  value={email}
                  onFocus={() => handleFocus("email")}
                  onBlur={handleBlur}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="password" style={{ fontWeight: "bold" }}>
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter your password"
                  style={inputStyle("password")}
                  value={password}
                  onFocus={() => handleFocus("password")}
                  onBlur={handleBlur}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="btn w-100"
                style={{
                  backgroundColor: "#ffd700",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Sign In
              </button>
            </form>
            <p className="mt-3 text-center">
              Don't have an account?{" "}
              <a
                href="/signup"
                style={{
                  color: "#00d9ff",
                  textDecoration: "underline",
                  fontWeight: "bold",
                }}
              >
                Click here to sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
