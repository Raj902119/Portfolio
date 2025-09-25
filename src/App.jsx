import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import "./app.scss";
import ProjectDetail from "./components/project/ProjectDetails/ProjectDetail.jsx";
import ProjectDetail2 from "./components/project/ProjectDetails/ProjectDetail2.jsx";
import ProjectDetail3 from "./components/project/ProjectDetails/ProjectDetail3.jsx";
import ProjectDetail4 from "./components/project/ProjectDetails/ProjectDetail4.jsx";

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