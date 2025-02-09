// signup.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Signing up with:", email, password);
    // Here, you would send API request to register the user
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-80">
        <input 
          type="email" placeholder="Email" 
          value={email} onChange={(e) => setEmail(e.target.value)} 
          className="border p-2 rounded" required 
        />
        <input 
          type="password" placeholder="Password" 
          value={password} onChange={(e) => setPassword(e.target.value)} 
          className="border p-2 rounded" required 
        />
        <input 
          type="password" placeholder="Confirm Password" 
          value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} 
          className="border p-2 rounded" required 
        />
        <button className="bg-blue-500 text-white p-2 rounded" type="submit">Sign Up</button>
      </form>
      <p className="mt-3">Already have an account? <span className="text-blue-500 cursor-pointer" onClick={() => navigate("/signin")}>Sign In</span></p>
    </div>
  );
};

export default SignUp;
