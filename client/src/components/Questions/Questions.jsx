import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Questions.css";

const Questions = () => {
  const [allQuestions, setAllQuestions] = useState([]);
  const [visibleAnswerIndex, setVisibleAnswerIndex] = useState(null); // Хранит индекс активного ответа

  useEffect(() => {
    fetchAllQuestions();
  }, []);

  const fetchAllQuestions = async () => {
    try {
      const res = await axios.get("http://localhost:4444/api/questionAll");
      setAllQuestions(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="questions">
      <ul>
        {allQuestions.map((question, index) => (
          <div key={index}>
            <li className="li">{question.title}</li>
            <div>
              {visibleAnswerIndex === index ? (
                <div className="answer-box">
                  <p>
                    <strong>Ответ:</strong> {question.answer}
                  </p>
                  <button
                    className="btn"
                    onClick={() => setVisibleAnswerIndex(null)}
                  >
                    Скрыть ответ
                  </button>
                </div>
              ) : (
                <button
                  className="btn"
                  onClick={() => setVisibleAnswerIndex(index)}
                >
                  Посмотреть ответ
                </button>
              )}
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Questions;
