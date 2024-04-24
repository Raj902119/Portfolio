import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import "./app.scss"
import ProjectDetail from "./components/project/ProjectDetails/ProjectDetail";
import ProjectDetail2 from "./components/project/ProjectDetails/ProjectDetail2";
import ProjectDetail3 from "./components/project/ProjectDetails/ProjectDetail3";
import ProjectDetail4 from "./components/project/ProjectDetails/ProjectDetail4";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project1" element={<ProjectDetail />} />
        <Route path="/project2" element={<ProjectDetail2 />} />
        <Route path="/project3" element={<ProjectDetail3 />} />
        <Route path="/project4" element={<ProjectDetail4 />} />
      </Routes>
    </Router>
  );
};

export default App;