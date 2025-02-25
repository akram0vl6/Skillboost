import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StartInterview.css"; // Подключаем стили

const StartInterview = () => {
  const [questionCount, setQuestionCount] = useState(5);
  const [category, setCategory] = useState("Frontend");
  const navigate = useNavigate();

  const startInterview = () => {
    navigate(`/home/interview?count=${questionCount}&category=${category}`);
  };

  return (
    <div className="interview-container">
      <div className="interview-settings">
        <h1 className="interview-title">Подготовка к собеседованию</h1>
        <p className="interview-description">
          Выбери параметры, и мы подберем для тебя вопросы!
        </p>

        <div className="settings-option">
          <span className="option-title">Направление:</span>
          <div className="category-options">
            {["Frontend", "Backend", "Fullstack"].map((item) => (
              <button
                key={item}
                className={`category-button ${
                  category === item ? "active" : ""
                }`}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="settings-option">
          <span className="option-title">Количество вопросов:</span>
          <div className="counter">
            <button
              className="counter-button"
              onClick={() => setQuestionCount((prev) => Math.max(1, prev - 1))}
            >
              −
            </button>
            <span className="counter-value">{questionCount}</span>
            <button
              className="counter-button"
              onClick={() => setQuestionCount((prev) => Math.min(50, prev + 1))}
            >
              +
            </button>
          </div>
        </div>

        <button onClick={startInterview} className="start-button">
          Начать собеседование
        </button>
      </div>
    </div>
  );
};

export default StartInterview;
