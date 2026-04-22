import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Auth from "../pages/Auth/Auth.jsx";
import Home from "../pages/Home.jsx";
import Register from "../pages/Auth/Register.jsx";
import Header from "./Header.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import Footer from "../ui/Footer.jsx";
import Subscription from "../pages/Subscription.jsx";
import StartInterview from "../pages/StartInterview.jsx";
import QuestionsSection from "../pages/QuestionsSection.js";
import Profile from "../pages/Profile/Profile.jsx";
import Interview from "../pages/Interview.jsx";
import Results from "../pages/Results.jsx";
import QuestionsPage from "../pages/QuestionsPage.jsx";

const App = () => {

  return (
    <div className="bg-[var(--bg-main)] text-black dark:text-white">
      <div className="sticky top-0 z-50 bg-[var(--bg-main)] border-b-3 border-b-[var(--color-accent)]">
        <div className="w-full max-w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <Header />
        </div>
      </div>
      <div className="min-h-[100vh] w-full max-w-full sm:max-w-[640px] pt-5 md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/startInterview" element={<StartInterview />} />
          <Route path="/baza_voprosov" element={<QuestionsSection />} />
          <Route path="/baza_voprosov/:tech" element={<QuestionsPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/interview" element={<Interview />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </div>  

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
