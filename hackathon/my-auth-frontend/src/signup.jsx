import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [focus, setFocus] = useState(null); // Keeps track of focused input

  const handleFocus = (input) => setFocus(input);
  const handleBlur = () => setFocus(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      alert("All fields are required!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Signup successful:", data);
        navigate("/signin");
      } else {
        console.error("Signup failed:", data.message);
        alert(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const inputStyle = (input) => ({
    backgroundColor: focus === input ? "#ffffff" : "#1c1c1e", // Change background color on focus
    color: focus === input ? "#000000" : "#ffffff", // Change text color on focus
    borderColor: "#ffcc00",
  });

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(-45deg, #ff9a9e, #fad0c4, #fbc2eb, #a18cd1)",
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
            color: white;
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
            <h2 className="text-center mb-4" style={{ color: "#ffcc00" }}>
              Sign Up
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="name" style={{ fontWeight: "bold" }}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Enter your name"
                  style={inputStyle("name")}
                  value={name}
                  onFocus={() => handleFocus("name")}
                  onBlur={handleBlur}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
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
              <div className="form-group mb-3">
                <label htmlFor="confirmPassword" style={{ fontWeight: "bold" }}>
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="form-control"
                  placeholder="Confirm your password"
                  style={inputStyle("confirmPassword")}
                  value={confirmPassword}
                  onFocus={() => handleFocus("confirmPassword")}
                  onBlur={handleBlur}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="btn w-100"
                style={{
                  backgroundColor: "#ffcc00",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Sign Up
              </button>
            </form>
            <p className="mt-3 text-center">
              Already have an account?{" "}
              <a
                href="/signin"
                style={{
                  color: "#00d9ff",
                  textDecoration: "underline",
                  fontWeight: "bold",
                }}
              >
                Click here to sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
