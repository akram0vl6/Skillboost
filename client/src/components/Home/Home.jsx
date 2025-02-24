import React from "react";
import "./Home.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Interview from "../Interview/Interview";
import Profile from "../Profile/Profile";
import Edit from "../Profile/Edit/Edit";
import StartInterview from "../StartInterview/StartInterview";
import Results from "../Results/Results";
import Questions from "../Questions/Questions";
import Education from "../Education/Education";

const Home = () => {
  return (
    <div className="home">
      <Routes>
        <Route path="/" element={<Navigate to="dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
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
