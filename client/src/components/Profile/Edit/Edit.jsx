import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Edit.css";

const Edit = () => {
  const navigate = useNavigate();
  const storedData = JSON.parse(localStorage.getItem("data")) || {};

  const [name, setName] = useState(storedData.fullName || "");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(storedData.avatarUrl || "");

  // Обрабатываем загрузку фото
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);

    // Создаем превью фото
    const reader = new FileReader();
    reader.onload = () => setPreview(reader.result);
    reader.readAsDataURL(file);
  };

  // Отправляем данные на сервер
  const handleSave = async () => {
    const formData = new FormData();
    formData.append("fullName", name);
    if (image) formData.append("avatarUrl", image);

    try {
      const res = await axios.put(
        "http://localhost:4444/api/profile/edit",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${storedData.token}`,
          },
          withCredentials: true,
        }
      );

      // Обновляем данные в localStorage
      const updatedData = {
        ...storedData,
        fullName: res.data.fullName,
        avatarUrl: res.data.avatarUrl,
      };
      localStorage.setItem("data", JSON.stringify(updatedData));

      navigate("/home/profile");
    } catch (error) {
      console.error("Ошибка сохранения:", error);
    }
  };

  return (
    <div className="edit-container">
      <h2>Редактирование профиля</h2>
      <div className="profile-image">
        {preview ? (
          <img src={preview} alt="Аватар" />
        ) : (
          <div className="placeholder">Фото</div>
        )}
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Введите имя"
      />
      <button className="button" onClick={handleSave}>
        Сохранить
      </button>
    </div>
  );
};

export default Edit;
