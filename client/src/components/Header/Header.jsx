import {
  FaHome,
  FaCog,
  FaGraduationCap,
  FaUserTie,
  FaRegUserCircle,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation(); // Получаем текущий URL

  const storedData = JSON.parse(localStorage.getItem("data")) || {};
  const avatarUrl = storedData.avatarUrl ? storedData.avatarUrl : null;

  return (
    <div className="header">
      <h1>YeaHub</h1>
      <ul>
        <li className={location.pathname === "/home/dashboard" ? "active" : ""}>
          <Link to="/home/dashboard">
            <FaHome />
            <span>Главная</span>
          </Link>
        </li>
        <li className={location.pathname === "/home/settings" ? "active" : ""}>
          <Link to="/home/settings">
            <FaCog />
            <span>Настройки</span>
          </Link>
        </li>
        <li className={location.pathname === "/home/learning" ? "active" : ""}>
          <Link to="/home/education">
            <FaGraduationCap />
            <span>Обучение</span>
          </Link>
        </li>
        <li
          className={
            location.pathname === "/home/startInterview" ? "active" : ""
          }
        >
          <Link to="/home/startInterview">
            <FaUserTie />
            <span>Собеседование</span>
          </Link>
        </li>
      </ul>
      <div className="user">
        <Link to="/home/profile">
          {avatarUrl ? (
            <img src={`http://localhost:4444${avatarUrl}`} alt="Аватар" />
          ) : (
            <FaRegUserCircle />
          )}
        </Link>
      </div>
    </div>
  );
};

export default Header;
