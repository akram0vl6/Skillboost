import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DATA_STRUCTURE, LEVELS } from "../../shared/data/categoryData";

const StartInterview = () => {
  const [questionCount] = useState(15); // Увеличил с 5 до 15
  const [category, setCategory] = useState(null);
  const [technologies, setTechnologies] = useState(null);
  const [frameworks, setFrameworks] = useState(null);
  const [level, setLevel] = useState(null);

  const navigate = useNavigate();

  // 🔧 Проверяем, нужно ли выбирать фреймворк
  const needsFramework = category && 
    DATA_STRUCTURE[category]?.frameworks && 
    DATA_STRUCTURE[category].frameworks.length > 0;

  // 🔧 Форма считается заполненной если:
  // - выбрана категория
  // - выбрана технология
  // - выбран фреймворк (ЕСЛИ он нужен для этой категории)
  // - выбран уровень
  const isFormComplete = category && 
    technologies && 
    (needsFramework ? frameworks : true) && 
    level;

  const startInterview = () => {
    const params = new URLSearchParams();
    params.append('count', questionCount);
    params.append('category', category);
    params.append('technologies', technologies);
    
    // 🔧 Добавляем frameworks только если он выбран
    if (frameworks) {
      params.append('frameworks', frameworks);
    }
    
    params.append('level', level);
    
    navigate(`/interview?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-main)] py-5 px-4">
      <h1 className="text-4xl font-bold text-[var(--color-text)]">
        Тренажёр собеседований
      </h1>
      
      <p className="text-[var(--color-text)] mt-4">
        Практикуйте прохождение технических собеседований с реальными вопросами
      </p>

      <div className="mt-10">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">
          Пройти собеседование
        </h2>
        
        {/* 1️⃣ ВЫБОР НАПРАВЛЕНИЯ */}
        <span className="block text-[var(--color-text)] mb-4 text-lg">
          Выбери направление
        </span>
        <div className="flex flex-wrap gap-4 sm:gap-6">
          {Object.keys(DATA_STRUCTURE).map((label) => (
            <label key={label} className="flex items-center cursor-pointer text-[var(--color-text)]">
              <input
                type="radio"
                name="category"
                checked={category === label}
                onChange={() => {
                  setCategory(label);
                  setTechnologies(null);
                  setFrameworks(null);
                }}
                className="sr-only peer"
              />
              <span className="w-5 h-5 rounded-full border-2 border-gray-300 peer-checked:bg-[#049666] relative"></span>
              <span className="ml-3 text-lg">{label}</span>
            </label>
          ))}
        </div>

        {/* 2️⃣ ВЫБОР ТЕХНОЛОГИИ/ЯЗЫКА */}
        {category && (
          <>
            <h1 className="block text-[var(--color-text)] my-4 text-lg">
              Выбери язык/технологию
            </h1>
            <div className="flex flex-wrap gap-4 sm:gap-6">
              {DATA_STRUCTURE[category].languages.map((label) => (
                <label key={label} className="flex items-center cursor-pointer text-[var(--color-text)]">
                  <input
                    type="radio"
                    name="technologies"
                    checked={technologies === label}
                    onChange={() => {
                      setTechnologies(label);
                      setFrameworks(null);
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

        {/* 3️⃣ ВЫБОР ФРЕЙМВОРКА (только если есть) */}
        {technologies && needsFramework && (
          <>
            <h1 className="block text-[var(--color-text)] my-4 text-lg">
              Выбери фреймворк
            </h1>
            <div className="flex flex-wrap gap-4 sm:gap-6">
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

        {/* 4️⃣ ВЫБОР УРОВНЯ */}
        {(technologies && (!needsFramework || frameworks)) && (
          <>
            <h1 className="block text-[var(--color-text)] my-4 text-lg">
              Выбери уровень
            </h1>
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
        className={`w-full mt-10 p-3 rounded-md transition-all text-lg font-medium ${
          isFormComplete 
            ? "bg-[var(--color-main)] text-white hover:opacity-90 cursor-pointer" 
            : "bg-gray-400 text-gray-200 cursor-not-allowed"
        }`}
      >
        Начать собеседование
      </button>
      
      {/* 🔧 Отладка */}
      {!isFormComplete && (
        <div className="mt-4 text-sm text-gray-500">
          {!category && "• Выберите направление\n"}
          {category && !technologies && "• Выберите язык/технологию\n"}
          {technologies && needsFramework && !frameworks && "• Выберите фреймворк\n"}
          {technologies && (!needsFramework || frameworks) && !level && "• Выберите уровень\n"}
        </div>
      )}
    </div>
  );
};

export default StartInterview;