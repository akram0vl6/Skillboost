import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {DATA_STRUCTURE, LEVELS} from "../data/categoryData"



const StartInterview = () => {
  const [questionCount] = useState(5);
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
    <div className="min-h-screen bg-[var(--bg-main)] py-5 px-4">
      <h1 className="text-4xl font-bold text-[var(--color-text)]">Тренажёр собеседований</h1>
      {/* ... (текст описания оставляем как есть) ... */}

      <div className="mt-10">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Пройти собеседование</h2>
        
        {/* ВЫБОР КАТЕГОРИИ */}
        <span className="block text-[var(--color-text)] mb-4 text-lg">Выбери направление</span>
        <div className="flex flex-wrap gap-4 sm:gap-6">
          {Object.keys(DATA_STRUCTURE).map((label) => (
            <label key={label} className="flex items-center cursor-pointer text-[var(--color-text)]">
              <input
                type="radio"
                name="category"
                checked={category === label}
                onChange={() => {
                    setCategory(label);
                    setTechnologies(null); // Сброс при смене категории
                    setFrameworks(null);
                }}
                className="sr-only peer"
              />
              <span className="w-5 h-5 rounded-full border-2 border-gray-300 peer-checked:bg-[#049666] relative"></span>
              <span className="ml-3 text-lg">{label}</span>
            </label>
          ))}
        </div>

        {/* ВЫБОР ЯЗЫКА (Динамический) */}
        {category && (
          <>
            <h1 className="block text-[var(--color-text)] my-4 text-lg">Выбери язык</h1>
            <div className="flex gap-6">
              {DATA_STRUCTURE[category].languages.map((label) => (
                <label key={label} className="flex items-center cursor-pointer text-[var(--color-text)]">
                  <input
                    type="radio"
                    name="tehnalogies"
                    checked={tehnalogies === label}
                    onChange={() => {
                        setTechnologies(label);
                        setFrameworks(null); // Сброс при смене языка
                    }}
                    className="sr-only peer"
                  />
                  <span className="w-5 h-5 rounded-full border-2 border-gray-300 peer-checked:bg-[#049666] relative"></span>
                  <span className="ml-3 text-lg">{label}</span>
                </label>
              ))}
            </div>
          </>
        )}

        {/* ВЫБОР ФРЕЙМВОРКА (Динамический) */}
        {tehnalogies && (
          <>
            <h1 className="block text-[var(--color-text)] my-4 text-lg">Выбери фреймворк</h1>
            <div className="flex gap-6">
              {DATA_STRUCTURE[category].frameworks.map((label) => (
                <label key={label} className="flex items-center cursor-pointer text-[var(--color-text)]">
                  <input
                    type="radio"
                    name="frameworks"
                    checked={frameworks === label}
                    onChange={() => setFrameworks(label)}
                    className="sr-only peer"
                  />
                  <span className="w-5 h-5 rounded-full border-2 border-gray-300 peer-checked:bg-[#049666] relative"></span>
                  <span className="ml-3 text-lg">{label}</span>
                </label>
              ))}
            </div>
          </>
        )}

        {/* ВЫБОР УРОВНЯ */}
        {frameworks && (
          <>
            <h1 className="block text-[var(--color-text)] my-4 text-lg">Выбери уровень</h1>
            <div className="flex flex-wrap gap-4 sm:gap-6">
              {LEVELS.map((label) => (
                <label key={label} className="flex items-center cursor-pointer text-[var(--color-text)]">
                  <input
                    type="radio"
                    name="level"
                    checked={level === label}
                    onChange={() => setLevel(label)}
                    className="sr-only peer"
                  />
                  <span className="w-5 h-5 rounded-full border-2 border-gray-300 peer-checked:bg-[#049666] relative"></span>
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
        className={`w-full mt-10 p-2 rounded-md transition-all ${
          isFormComplete ? "bg-[var(--color-main)] text-white" : "bg-gray-400"
        }`}
      >
        Начать собеседование
      </button>
    </div>
  );
};

export default StartInterview;
