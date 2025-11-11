import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function QuestionsPage() {
  const { tech } = useParams(); // например, "python"
  const navigate = useNavigate();
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const [questions, setQuestions] = useState([]);
  const [visibleAnswerIndex, setVisibleAnswerIndex] = useState(null);
  
  // Инициализируем difficulty из URL, если есть
  const [difficulty, setDifficulty] = useState(params.get("difficulty") || null);

  const difficultyLevels = ["Стажёр", "Junior", "Middle", "Senior"];

  const fetchQuestions = async () => {
    try {
      const query = new URLSearchParams({ tech });
      if (difficulty) query.set("difficulty", difficulty);

      const response = await fetch(`http://localhost:4444/api/questionsTech?${query.toString()}`);
      const data = await response.json();
      console.log("Вопросы по технологии:", data);
      setQuestions(data);
    } catch (error) {
      console.error("Ошибка при получении вопросов:", error);
    }
  };

  // Вызываем при изменении tech или difficulty
  useEffect(() => {
    fetchQuestions();
  }, [tech, difficulty]);

  const handleDifficultyClick = (level) => {
    setDifficulty(level); // useEffect автоматически вызовет fetchQuestions
    navigate(`?difficulty=${encodeURIComponent(level)}`); // обновляем URL
  };
  return (
    <div>
      <a href="/baza_voprosov" className="truncate">
        <button className="flex items-center gap-1 text-sm text-st-gray-60 text-[var(--color-text)] cursor-pointer mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            className="iconify iconify--st-icons"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            style={{ fontSize: "16px" }}
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m15 6l-6 6l6 6"
            ></path>
          </svg>
          Вернуться к базаву вопросов
        </button>
      </a>

      <div>
        <h1 className="lg:text-5xl text-3xl font-bold mb-4 text-[var(--color-text)]">
          ТОП вопросов по {tech}
        </h1>
        <div className="text-xl text-[var(--color-text)]">
          Подборка самых частых вопросов на собеседованиях {tech} разработчикам
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <p className="text-md font-medium text-[var(--color-text)]">
          Выберите грейды
        </p>
        <div className="flex items-center gap-2 flex-wrap">
          {difficultyLevels.map((level) => (
            <div onClick={() => handleDifficultyClick(level)} className="rounded-2xl p-1 px-3 text-md text-[var(--color-text)] bg-[var(--bg-03)] cursor-pointer hover:bg-[var(--bg-02)] flex gap-1 items-center transition-colors">
              <span>{level}</span>
            </div>
          ))}
        </div>
      </div>

      <section className="relative w-full my-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          className="absolute top-2 left-2 iconify iconify--ic"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          style={{ fontSize: "32px" }}
        >
          <path
            fill="currentColor"
            d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"
          ></path>
        </svg>

        <input
          type="text"
          className="p-inputtext p-component !px-10 w-full border border-[var(--color-border)] rounded-lg bg-[var(--bg-03)] text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent"
          placeholder="Введите название или содержание вопроса"
        />
      </section>

      <div>
        <h2 className="text-2xl font-bold mb-4">Вопросы</h2>
        {questions.length === 0 && <p>Загрузка вопросов...</p>}
        {questions.map((question, index) => (
          <section className="scroll-my-[75px] shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1),_0_10px_15px_-3px_rgba(0,0,0,0.1)] dark:shadow-none dark:border dark:border-surface-500 w-full py-2 px-4 rounded-2xl my-4">
            <section className="relative w-full">
              <section className="flex flex-col gap-3 pt-4 pb-2">
                <section className="flex flex-col gap-2 text-sm">
                  <header className="text-xl font-medium flex gap-2 items-center">
                    <span className="min-w-[10px] min-h-[10px] inline-block rounded-full bg-gray-300"></span>
                    <section className="flex items-center gap-2 relative support-selectable">
                      <section>
                        <h2 className="font-normal">{question.title}</h2>
                      </section>
                    </section>
                    <section className="relative inline-flex ml-auto">
                      <button
                        aria-label="Добавить в избранное"
                        className="relative flex items-center justify-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="img"
                          className="text-st-gray-40 iconify iconify--st-icons"
                          width="0.91em"
                          height="1em"
                          viewBox="0 0 20 22"
                          style={{ fontSize: "20px" }}
                        >
                          <g fill="none">
                            <path
                              d="M14.8193 1.00391H5.17934C3.04934 1.00391 1.31934 2.74391 1.31934 4.86391V18.9539C1.31934 20.7539 2.60934 21.5139 4.18934 20.6439L9.06934 17.9339C9.58934 17.6439 10.4293 17.6439 10.9393 17.9339L15.8193 20.6439C17.3993 21.5239 18.6893 20.7639 18.6893 18.9539V4.86391C18.6793 2.74391 16.9493 1.00391 14.8193 1.00391Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </g>
                        </svg>
                      </button>
                    </section>
                  </header>

                  <div className="rounded-2xl p-0.5 px-3 w-fit font-medium text-base bg-[var(--bg-02)] text-[var(--color-text)]">
                    {question.difficulty}
                  </div>
                  <div>
                    Рейтинг вопроса:
                    <span className="font-medium text-[var(--color-text)]">
                      {question.rating}
                    </span>
                  </div>
                </section>

                {visibleAnswerIndex === index ? (
                  <div className="answer-box ">
                    <p>
                      <strong>Ответ:</strong> {question.answer}
                    </p>
                    <button
                      className="flex gap-1 items-center text-slate-500 dark:text-slate-400 hover:underline hover:decoration-1 hover:decoration-slate-300 hover:underline-offset-4"
                      onClick={() => setVisibleAnswerIndex(null)}
                    >
                      Скрыть ответ
                    </button>
                  </div>
                ) : (
                  <button
                    className="flex gap-1 items-center text-slate-500 dark:text-slate-400 hover:underline hover:decoration-1 hover:decoration-slate-300 hover:underline-offset-4"
                    onClick={() => setVisibleAnswerIndex(index)}
                  >
                    Посмотреть ответ
                  </button>
                )}
              </section>
            </section>
          </section>
        ))}
      </div>
    </div>
  );
}

export default QuestionsPage;
