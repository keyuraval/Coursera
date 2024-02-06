import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import AppNavBar from "./components/AppNavBar";
import AddCourse from "./components/AddCourse";
import Courses from "./components/Courses";
import Course from "./components/Course";

function App() {
  return (
    <Router>
      <AppNavBar />
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/addcourse" element={<AddCourse />}></Route>
        <Route path="/courses" element={<Courses />}></Route>
        <Route path="/courses/:courseID" element={<Course />}></Route>

      </Routes>
    </Router>
  );
}

export default App;
