import { useState } from "react";
import { useNavigate } from "react-router-dom";


const StartInterview = () => {
  const [questionCount, setQuestionCount] = useState(5);
  const [category, setCategory] = useState(null);
  const [tehnalogies, setTechnologies] = useState(null);
  const [frameworks, setFrameworks] = useState(null);
  const [level, setLevel] = useState(null);

  const navigate = useNavigate();

  const isFormComplete = category && tehnalogies && frameworks && level;


  const startInterview = () => {
    navigate(
      `/interview?count=${questionCount}&category=${category}&technologies=${tehnalogies}&frameworks=${frameworks}&level=${level}`
    );
  };

  return (
    <div className="min-h-screen bg-[var(--bg-main)] py-5">
      <h1 className="text-4xl font-bold">Тренажёр собеседований</h1>
      <ul className="my-5 list-decimal list-inside text-[var(--color-text)] text-[18px] marker:text-[#049666] marker:font-bold marker:text-[22px] space-y-2">
        <li>
          Получи аналитику по собеседованию: найди свои слабые и сильные места
        </li>
        <li>Отвечай на вопросы и оценивай качество своих ответов</li>
        <li>
          Получи аналитику по собеседованию: найди свои слабые и сильные места
        </li>
      </ul>

      <div className="mt-10">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">
          Пройти собеседование
        </h2>
        <span className="block text-[var(--color-text)] mb-4 text-lg">
          Выбери направление
        </span>

<div className="flex flex-wrap gap-4 sm:gap-6">
  {["Backend", "Frontend", "Fullstack"].map((label) => (
    <label
      key={label}
      className="flex items-center w-full sm:w-auto cursor-pointer select-none text-[var(--color-text)]"
    >
      <input
        type="radio"
        name="category"
        value={label}
        checked={category === label}
        onChange={() => setCategory(label)}
        className="sr-only peer"
      />
      <span
        className="w-5 h-5 inline-block rounded-full border-2 border-gray-300 dark:border-gray-600
        bg-white dark:bg-gray-800
        peer-checked:bg-[#049666] peer-checked:border-[#049666]
        transition-colors duration-200 relative"
      >
        <svg
          className="hidden peer-checked:block absolute top-[2px] left-[2px] w-4 h-4 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
      </span>
      <span className="ml-3 text-lg">{label}</span>
    </label>
  ))}
</div>



        {category === "Frontend" && (
          <>
          <h1 className="block text-[var(--color-text)] my-4 text-lg">Выбери язык</h1>
          <div className="flex gap-6">
          {["JavaScript"].map((label) => (
            <label
              key={label}
              className="flex items-center cursor-pointer select-none text-[var(--color-text)]"
            >
              <input
                type="radio"
                name="tehnalogies"
                value={label}
                checked={tehnalogies === label}
                onChange={() => setTechnologies(label)}
                className="sr-only peer"
              />
              <span
                className="w-5 h-5 inline-block rounded-full border-2 border-gray-300 dark:border-gray-600
        bg-white dark:bg-gray-800
        peer-checked:bg-[#049666] peer-checked:border-[#049666]
        transition-colors duration-200 relative"
              >
                <svg
                  className="hidden peer-checked:block absolute top-[2px] left-[2px] w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="ml-3 text-lg">{label}</span>
            </label>
          ))}
        </div>
          </>

        )}

        {category === 'Frontend' && tehnalogies === "JavaScript" && (
          <>
            <h1 className="block text-[var(--color-text)] my-4 text-lg">Выбери фреймворки</h1>
          <div className="flex gap-6">
          {["Vue.js", "React", "Angular"].map((label) => (
            <label
              key={label}
              className="flex items-center cursor-pointer select-none text-[var(--color-text)]"
            >
              <input
                type="radio"
                name="frameworks"
                value={label}
                checked={frameworks === label}
                onChange={() => setFrameworks(label)}
                className="sr-only peer"
              />
              <span
                className="w-5 h-5 inline-block rounded-full border-2 border-gray-300 dark:border-gray-600
        bg-white dark:bg-gray-800
        peer-checked:bg-[#049666] peer-checked:border-[#049666]
        transition-colors duration-200 relative"
              >
                <svg
                  className="hidden peer-checked:block absolute top-[2px] left-[2px] w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="ml-3 text-lg">{label}</span>
            </label>
          ))}
        </div>
          </>
        )}

        {category === 'Frontend' && tehnalogies && frameworks && (
          <>
            <h1 className="block text-[var(--color-text)] my-4 text-lg">Выбери уровень</h1>
          <div className="flex flex-wrap gap-4 sm:gap-6">
          {["Стажер", "Junior", "Middle", "Senior"].map((label) => (
            <label
              key={label}
              className="flex items-center cursor-pointer select-none text-[var(--color-text)]"
            >
              <input
                type="radio"
                name="level"
                value={label}
                checked={level === label}
                onChange={() => setLevel(label)}
                className="sr-only peer"
              />
              <span
                className="w-5 h-5 inline-block rounded-full border-2 border-gray-300 dark:border-gray-600
        bg-white dark:bg-gray-800
        peer-checked:bg-[#049666] peer-checked:border-[#049666]
        transition-colors duration-200 relative"
              >
                <svg
                  className="hidden peer-checked:block absolute top-[2px] left-[2px] w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="ml-3 text-lg">{label}</span>
            </label>
          ))}
        </div>
          </>
        )}


        
      </div>

<button
  onClick={isFormComplete ? startInterview : undefined}
  disabled={!isFormComplete}
  className={`w-full mt-10 flex items-center justify-center gap-2 px-12 py-2 rounded-md max-[480px]:text-xs ring-transparent active:scale-[0.98] transition-transform dark:text-surface-300 dark:bg-surface-600
    ${isFormComplete ? "bg-[var(--color-main)] cursor-pointer" : "bg-gray-400 cursor-not-allowed"}`}
>
  Начать собеседование
</button>


      {/* <div className="interview-settings">
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
      </div> */}
    </div>
  );
};

export default StartInterview;
