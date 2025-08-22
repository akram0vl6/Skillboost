import React, { useState, useEffect } from "react";
import "./Auth.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState(""); // Исправлено: используем fullName
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleForm = () => {
    if (!email) {
      setError("Пожалуйста, введите email.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Некорректный формат email.");
      return false;
    }
    if (!fullName) {
      setError("Пожалуйста, введите имя.");
      return false;
    }
    if (password.length < 6) {
      setError("Пароль должен содержать минимум 6 символов.");
      return false;
    }
    setError(""); // Очищаем ошибку при успешной валидации
    return true;
  };

  useEffect(() => {
    const storedData = localStorage.getItem("data");
    if (storedData) {
      navigate("/home"); // Если данные есть, сразу перенаправляем на главную
    }
  }, []);

  const handlePost = async (e) => {
    e.preventDefault();
    if (!handleForm()) {
      return;
    }

    try {
      const res = await fetch("http://localhost:4444/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, fullName, password }), // Исправлено: теперь используем fullName
      });

      const data = await res.json();
      if (res.ok) {
        console.log("Success");
        localStorage.setItem("data", JSON.stringify(data));
        navigate("/home");
      } else {
        setError(data.message);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
<div className="min-h-screen flex items-center justify-center bg-[var(--bg-main)] px-4 py-12">
  <div className="w-full max-w-md bg-[var(--bg-02)] rounded-2xl shadow-xl p-8">
    <h1 className="text-3xl font-bold text-center text-[var(--color-text)]">
      Добро пожаловать в <span className="text-[#049666]">Skillboost</span>
    </h1>

    <h2 className="text-lg font-semibold text-center text-gray-600 dark:text-gray-300 mt-6 mb-4">
      Регистрация
    </h2>

    <form onSubmit={handlePost} method="POST" className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Email
        </label>
        <input
          type="email"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Введите ваш email"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-[var(--color-text)] bg-[var(--bg-03)] focus:outline-none focus:ring-2 focus:ring-[#049666]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Имя
        </label>
        <input
          type="text"
          name="name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Введите ваше имя"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-[var(--color-text)] bg-[var(--bg-03)] focus:outline-none focus:ring-2 focus:ring-[#049666]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Пароль
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Придумайте пароль"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-[var(--color-text)] bg-[var(--bg-03)] focus:outline-none focus:ring-2 focus:ring-[#049666]"
        />
      </div>

      {error && (
        <div className="text-sm text-red-500 font-medium">{error}</div>
      )}

      <button
        type="submit"
        className="w-full py-3 mt-2 rounded-xl bg-[#049666] hover:bg-[#037a53] text-white font-semibold transition duration-300"
      >
        Зарегистрироваться
      </button>
    </form>

    <p className="text-sm text-center mt-6 text-gray-500 dark:text-gray-400">
      Уже есть аккаунт?{" "}
      <a
        href="/auth"
        className="text-[#049666] hover:underline font-semibold"
      >
        Войти
      </a>
    </p>
  </div>
</div>

  );
};

export default Register;
