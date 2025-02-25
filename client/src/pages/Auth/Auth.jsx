import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Auth = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

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
      const res = await fetch("http://localhost:4444/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log(data);
      if (res.ok) {
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
        <h2>Login to your account</h2>
        <form className="login-form" onSubmit={handlePost}>
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
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </label>
          <div className="error">{error}</div>
          <div className="forgot-password">Forgot password?</div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <div className="register-link">
          No account? <a href="/auth/register">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default Auth;
