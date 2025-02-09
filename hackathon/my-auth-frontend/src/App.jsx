// App.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Home";
import SignIn from "./Signin";
import SignUp from "./signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
