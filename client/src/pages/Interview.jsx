import { useState, useEffect } from "react";
import { IoMdBookmark } from "react-icons/io";
import { BsBookmark } from "react-icons/bs";

import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Interview = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  // const questionCount = Number(searchParams.get("count")) || 5;
  const category = searchParams.get("category") || "Frontend";
  const tehnalogies = searchParams.get("technologies") || "React";
  const frameworks = searchParams.get("frameworks") || "JavaScript";
  const level = searchParams.get("level") || "Junior";

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
const [bookmarks, setBookmarks] = useState(() => {
  // Загружаем из localStorage при первом рендере
  const saved = localStorage.getItem("bookmarks");
  return saved ? JSON.parse(saved) : [];
});

const toggleBookmark = (question) => {
  const id = question._id;
  let updated;
  if (bookmarks.includes(id)) {
    updated = bookmarks.filter(qid => qid !== id);
  } else {
    updated = [...bookmarks, id];
  }
  setBookmarks(updated);
  localStorage.setItem("bookmarks", JSON.stringify(updated));
};


const currentQuestion = questions[currentIndex];
const isBookmarked = currentQuestion ? bookmarks.includes(currentQuestion._id) :true;

  // const [bookmark, setBookmark] = useState([]);
  const [stats, setStats] = useState({ know: 0, dontKnow: 0 });
  const [knowQuestions, setKnowQuestions] = useState([]);
  const [dontKnowQuestions, setDontKnowQuestions] = useState([]);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const res = await axios.get(
        `http://localhost:4444/api/questions?category=${category}&technologies=${tehnalogies}&frameworks=${frameworks}&level=${level}`
      );
      setQuestions(res.data);
      setCurrentIndex(0);
      setStats({ know: 0, dontKnow: 0 });
    } catch (error) {
      console.error("Ошибка загрузки вопросов", error);
    }
  };
// console.log(stats);

useEffect(() => {
  console.log("Обновлён knowQuestions:", knowQuestions);
}, [knowQuestions]);

useEffect(() => {
  console.log("Обновлён dontKnowQuestions:", dontKnowQuestions);
}, [dontKnowQuestions]);


  const handleAnswer = ({know, question}) => {
    const updatedStats = {
      know: know ? stats.know + 1 : stats.know,
      dontKnow: !know ? stats.dontKnow + 1 : stats.dontKnow,
      questions: [...stats.question || [], question.question]
    };

 if (know) {
    setKnowQuestions(prev => [...prev, question]); // ✅ всегда добавит к актуальному массиву
  } else {
    setDontKnowQuestions(prev => [...prev, question]); // ✅ аналогично
  }

    
    setStats(updatedStats);
    
  console.log(`Вопрос: ${question.question}, Ответ: ${know ? "Знаю" : "Не знаю"}`);


    //   console.log(knowQuestions);
    // console.log(dontKnowQuestions);
    

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setShowAnswer(false);
    } else {
      localStorage.setItem("stats", JSON.stringify(updatedStats));
    localStorage.setItem("know", JSON.stringify([...knowQuestions, know ? question : null].filter(Boolean)));
    localStorage.setItem("dontKnow", JSON.stringify([...dontKnowQuestions, !know ? question : null].filter(Boolean)));
    navigate("/results");
    }
  };

  console.log(isBookmarked);
  

  const open = () => {
    setShowAnswer(true);
  };

  if (questions.length === 0) {
    return <p>Загрузка вопросов...</p>;
  }

  return (
    <div className="flex flex-col items-center h-screen ">
      <div className="w-full max-w-2xl px-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-[var(--color-text)] ">
            Вопрос {currentIndex + 1} из {questions.length}
          </h2>
          {isBookmarked ? (
            <IoMdBookmark
              onClick={() => toggleBookmark(questions[currentIndex])}
              className={`text-[20px] cursor-pointer text-[var(--color-main)]`}
            />
          ) : (
            <BsBookmark
              className="text-[20px] cursor-pointer"
              onClick={() => toggleBookmark(questions[currentIndex])}
            />
            
          )}
        </div>
        <p className="mb-2 text-[var(--color-text)]">{questions[currentIndex].question}</p>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center cursor-pointer mb-2 gap-2"
        >
          <button
            className="text-[#94A3B8] "
            onClick={() => setShowAnswer(!showAnswer)}
            // style={{ display: showAnswer ? "none" : "block" }}
          >
            {showAnswer ? "Скрыть ответ" : "Показать ответ"}
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`fill-st-black dark:fill-white icon mt-1 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            width="13"
            height="8"
            viewBox="0 0 13 8"
          >
            <path d="M6.5 7.4L0.5 1.4L1.9 0L6.5 4.6L11.1 0L12.5 1.4L6.5 7.4Z" />
          </svg>
        </div>
        {showAnswer && (
          <div className="answer-box">
            <p className="text-[var(--color-text)]">
              <strong>Ответ:</strong> {questions[currentIndex].answer}
            </p>
          </div>
        )}

        <div className="flex gap-5 mt-4">
          <button
            className="  text-[var(--color-text)] flex items-center gap-2 border-2 border-[var(--color-text)] rounded-lg px-2 py-1 cursor-pointer hover:border-[var(--color-main)] hover:text-[var(--color-main)] duration-300 "
            onClick={() => handleAnswer({ know: true, question: currentQuestion })}
          >
            <AiFillLike className="btn-icon" />
            Знаю
          </button>
          <button
            className=" text-[var(--color-text)]  flex items-center gap-2 border-2 border-[var(--color-text)] rounded-lg px-2 py-1 cursor-pointer hover:border-[red] hover:text-[red] duration-300 "
            onClick={() => handleAnswer({ know: false, question: currentQuestion })}
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
