import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Home";
import SignIn from "./signin";
import SignUp from "./signup";
import HtmlCourse from "./HtmlCourse"; 
import CSSCourse from "./CSSCourse";   
import JavaScriptCourse from "./JavaScriptCourse"; 
import MongodbCourse from "./Mongodb"; 
import ReactCourse from "./ReactCourse"; 
import NodejsCourse from "./NodejsCourse"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/courses/html" element={<HtmlCourse />} /> 
        <Route path="/courses/css" element={<CSSCourse />} />   
        <Route path="/courses/javascript" element={<JavaScriptCourse />} /> 
        <Route path="/courses/mongodb" element={<MongodbCourse />} /> 
        <Route path="/courses/react" element={<ReactCourse />} /> 
        <Route path="/courses/nodejs" element={<NodejsCourse />} /> 
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
