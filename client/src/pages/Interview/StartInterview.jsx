import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { 
  DATA_STRUCTURE, 
  LEVELS, 
  getLanguagesForCategory, 
  getFrameworksForLanguage 
} from "../../shared/data/categoryData";

const StartInterview = () => {
  const [questionCount] = useState(5);
  const [category, setCategory] = useState(null);
  const [technology, setTechnology] = useState(null); // переименовал для ясности
  const [framework, setFramework] = useState(null);
  const [level, setLevel] = useState(null);

  const navigate = useNavigate();

  // Получаем языки для выбранной категории
  const languages = useMemo(() => 
    getLanguagesForCategory(category), 
    [category]
  );

  // Получаем фреймворки для выбранного языка
  const frameworks = useMemo(() => 
    getFrameworksForLanguage(category, technology), 
    [category, technology]
  );

  const isFormComplete = category && technology && framework && level;

  const startInterview = () => {
    navigate(
      `/interview?count=${questionCount}&category=${category}&technologies=${technology}&frameworks=${framework}&level=${level}`
    );
  };

  return (
    <div className="min-h-screen bg-[var(--bg-main)] py-5 px-4">
      <h1 className="text-4xl font-bold text-[var(--color-text)]">Тренажёр собеседований</h1>
      <p className="text-[var(--color-text)] mt-3">
        Практикуйте технические собеседования с реальными вопросами из IT-компаний
      </p>

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
                  setTechnology(null); // Сброс языка
                  setFramework(null);   // Сброс фреймворка
                }}
                className="sr-only peer"
              />
              <span className="w-5 h-5 rounded-full border-2 border-gray-300 peer-checked:bg-[#049666] relative"></span>
              <span className="ml-3 text-lg">{label}</span>
            </label>
          ))}
        </div>

        {/* ВЫБОР ЯЗЫКА */}
        {category && languages.length > 0 && (
          <>
            <h1 className="block text-[var(--color-text)] my-4 text-lg">Выбери язык</h1>
            <div className="flex flex-wrap gap-4 sm:gap-6">
              {languages.map((lang) => (
                <label key={lang} className="flex items-center cursor-pointer text-[var(--color-text)]">
                  <input
                    type="radio"
                    name="technology"
                    checked={technology === lang}
                    onChange={() => {
                      setTechnology(lang);
                      setFramework(null); // Сброс фреймворка при смене языка
                    }}
                    className="sr-only peer"
                  />
                  <span className="w-5 h-5 rounded-full border-2 border-gray-300 peer-checked:bg-[#049666] relative"></span>
                  <span className="ml-3 text-lg">{lang}</span>
                </label>
              ))}
            </div>
          </>
        )}

        {/* ВЫБОР ФРЕЙМВОРКА */}
        {technology && frameworks.length > 0 && (
          <>
            <h1 className="block text-[var(--color-text)] my-4 text-lg">Выбери фреймворк</h1>
            <div className="flex flex-wrap gap-4 sm:gap-6">
              {frameworks.map((fw) => (
                <label key={fw} className="flex items-center cursor-pointer text-[var(--color-text)]">
                  <input
                    type="radio"
                    name="framework"
                    checked={framework === fw}
                    onChange={() => setFramework(fw)}
                    className="sr-only peer"
                  />
                  <span className="w-5 h-5 rounded-full border-2 border-gray-300 peer-checked:bg-[#049666] relative"></span>
                  <span className="ml-3 text-lg">{fw}</span>
                </label>
              ))}
            </div>
          </>
        )}

        {/* Если для языка нет фреймворков */}
        {technology && frameworks.length === 0 && (
          <p className="text-gray-500 mt-4">Для этого языка пока нет доступных фреймворков</p>
        )}

        {/* ВЫБОР УРОВНЯ */}
        {framework && (
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