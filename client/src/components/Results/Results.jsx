import { useEffect, useState } from "react";
import "./Results.css";
import { useNavigate } from "react-router-dom";

const Results = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({ know: 0, dontKnow: 0 });

  useEffect(() => {
    const storedStats = JSON.parse(localStorage.getItem("stats"));
    if (storedStats) {
      setStats(storedStats);
    }
  }, []);

  // Настройки для круглого прогресс-бара
  const radius = 80; // Радиус круга (размер)
  const circumference = 2 * Math.PI * radius; // Полная длина окружности

  // Вычисляем процент правильных и неправильных ответов
  const total = stats.know + stats.dontKnow; // Общее количество вопросов
  const knowPercent = (stats.know / total) * 100; // Процент правильных ответов
  const knowOffset = circumference - (knowPercent / 100) * circumference; // Смещение для отображения прогресса

  return (
    <div className="main">
      <div className="results-container">
        <h1 className="h1">Результат собеседования</h1>

        <div className="row">
          <div className="circular-progress">
            <svg width="200" height="200" className="svg">
              <circle className="circle-bg" cx="100" cy="100" r={radius} />
              <circle
                className="circle know"
                cx="100"
                cy="100"
                r={radius}
                strokeDasharray={circumference}
                strokeDashoffset={knowOffset}
              />
            </svg>
            <span className="percentage">{Math.round(knowPercent)}%</span>
          </div>
          <div>
            <p className="p">Знаю: {stats.know}</p>
            <p className="p">Не знаю: {stats.dontKnow}</p>
          </div>
        </div>

        <div className="btn-results">
          <button
            className="butn"
            onClick={() => navigate("/home/startInterview")}
          >
            Пройти заново
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;
