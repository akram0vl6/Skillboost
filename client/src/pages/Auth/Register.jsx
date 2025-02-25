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
    <div className="login-container">
      <div className="login-left">
        <h1 className="logo">EasyDev</h1>
        <p className="tagline">EasyDev connects IT specialists</p>
        <ul className="benefits">
          <li>✓ Step-by-step learning plan</li>
          <li>✓ Career growth</li>
          <li>✓ Large community of specialists</li>
          <li>✓ Learning with a mentor</li>
          <li>✓ Internship opportunities</li>
        </ul>
      </div>
      <div className="login-right">
        <h2>Register</h2>
        <form className="login-form" method="POST" onSubmit={handlePost}>
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </label>
          <label>
            Name
            <input
              type="text"
              value={fullName} // Исправлено: теперь используем fullName
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your name"
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </label>
          <div className="error">{error}</div>
          <button type="submit" className="login-button">
            Register
          </button>
        </form>
        <div className="register-link">
          Already have an account? <a href="/auth">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Register;
