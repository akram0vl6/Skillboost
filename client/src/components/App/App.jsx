import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import "./App.css";
import Auth from "../Auth/Auth";
import Home from "../Home/Home";
import Register from "../Auth/Register";
import Header from "../Header/Header";

const App = () => {
  const location = useLocation();
  const hideHeaderPaths = ["/auth", "/auth/register"]; // Пути, где не показываем Header

  return (
    <div className="">
      {!hideHeaderPaths.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<Navigate to="/auth" replace />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/auth/register" element={<Register />} />
        {/* Home теперь включает в себя Dashboard */}
        <Route path="/home/*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
