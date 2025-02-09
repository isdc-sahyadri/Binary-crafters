// signin.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("Signing in with:", email, password);


  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Sign In</h2>
      

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
        <button className="bg-blue-500 text-white p-2 rounded" type="submit">
          Sign In
        </button>
      </form>

      <p className="mt-3">
        Don't have an account? 
        <span className="text-blue-500 cursor-pointer" onClick={() => navigate("/signup")}>
          Sign Up
        </span>
      </p>
    </div>
  );
};

export default SignIn;



