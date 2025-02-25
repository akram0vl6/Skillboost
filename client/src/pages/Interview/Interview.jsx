import { useState, useEffect } from "react";
import './Interview.css'
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Interview = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const questionCount = Number(searchParams.get("count")) || 5;
  const category = searchParams.get("category") || "Frontend";

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [stats, setStats] = useState({ know: 0, dontKnow: 0 });

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const res = await axios.get(
        `http://localhost:4444/api/questions?count=${questionCount}&category=${category}`
      );
      setQuestions(res.data);
      setCurrentIndex(0);
      setStats({ know: 0, dontKnow: 0 });
    } catch (error) {
      console.error("Ошибка загрузки вопросов", error);
    }
  };

  const handleAnswer = (know) => {
    const updatedStats = {
      know: know ? stats.know + 1 : stats.know,
      dontKnow: !know ? stats.dontKnow + 1 : stats.dontKnow,
    };
    setStats(updatedStats);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setShowAnswer(false);
    } else {
      localStorage.setItem("stats", JSON.stringify(updatedStats));
      navigate("/home/results"); // Перенаправление на страницу статистики
    }
  };

  const open = () => {
    setShowAnswer(true)

  }

  if (questions.length === 0) {
    return <p>Загрузка вопросов...</p>;
  }

  return (
    <div className="interview">
      <div className="interview-contain">
        <h2>
          Вопрос {currentIndex + 1} из {questions.length}
        </h2>
        <p className="interview-p">{questions[currentIndex].question}</p>

        <button
          className="btn"
          onClick={() => setShowAnswer(true)}
          style={{ display: showAnswer ? "none" : "block" }}
        >
          Посмотреть ответ
        </button>
        {showAnswer && (
          <div className="answer-box">
            <p>
              <strong>Ответ:</strong> {questions[currentIndex].answer}
            </p>
            <button className="btn" onClick={() => setShowAnswer(false)}>
              Скрыть ответ
            </button>
          </div>
          
        )}

        <div className="button-group">
          <button className="know-btn know" onClick={() => handleAnswer(true)}>
            <AiFillLike className="btn-icon" />
            Знаю
          </button>
          <button
            className="dont-know-btn know"
            onClick={() => handleAnswer(false)}
          >
            <AiFillDislike className="btn-icon" />
            Не знаю
          </button>
        </div>
      </div>
    </div>
  );
};

export default Interview;
