import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard.jsx";
import Interview from "./Interview.jsx";
import Profile from "./Profile/Profile.jsx";
import Edit from "./Profile/Edit/Edit.jsx";
import StartInterview from "./StartInterview.jsx";
import Results from "./Results.jsx";
import Questions from "./Questions.jsx";
import Education from "./Education.jsx";

const Home = () => {
  return (
    <div className="home">
      <Routes>
        <Route path="/" element={<Navigate to="dashboard" replace />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/startInterview" element={<StartInterview />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<Edit />} />
        <Route path="/results" element={<Results />} />
        <Route path="/education" element={<Education />} />
        <Route path="/questions" element={<Questions />} />
      </Routes>
    </div>
  );
};

export default Home;
