import React from "react";
import "./Profile.css";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Profile = () => {
  const storedData = JSON.parse(localStorage.getItem("data")) || {};
  const username = storedData.fullName || "Гость";
  const avatarUrl = storedData.avatarUrl ? storedData.avatarUrl : null;

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="header-blok">
          <div className="avatar">
            <span className="avatar-icon">
              {avatarUrl ? (
                <img src={`http://localhost:4444${avatarUrl}`} alt="Аватар" />
              ) : (
                <FaUser />
              )}
            </span>
          </div>

          <div className="profile-info">
            <h2>{username}</h2>
            <p className="email-confirm">🔗 Подтвердить e-mail</p>
          </div>
        </div>
        <Link to="/home/profile/edit" className="edit-button">
          Редактировать
        </Link>
      </div>

      <div className="profile-section">
        <h3>Обо мне</h3>
        <p className="placeholder-text">Нет описания</p>
        <button className="edit-button">Редактировать</button>
      </div>

      <div className="profile-section">
        <h3>Навыки</h3>
        <p className="placeholder-text">Не выбраны навыки</p>
        <button className="edit-button">Редактировать</button>
      </div>
    </div>
  );
};

export default Profile;
