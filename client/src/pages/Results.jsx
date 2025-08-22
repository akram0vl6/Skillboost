import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Results = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({ know: 0, dontKnow: 0, questions: [] });
  const [openAnswers, setOpenAnswers] = useState({});
  const [loading, setLoading] = useState(true); // показываем лоадер пока идёт анимация
  const [animatedPercent, setAnimatedPercent] = useState(0); // анимированный процент

  // Загружаем статистику
  useEffect(() => {
    const storedStats = JSON.parse(localStorage.getItem("stats"));
    if (storedStats) {
      // гарантируем наличие поля questions
      setStats({
        know: storedStats.know || 0,
        dontKnow: storedStats.dontKnow || 0,
        questions: storedStats.questions || [],
      });
    }
  }, []);

  // Вычисляем целевой процент (защита от деления на 0)
  const total = stats.know + stats.dontKnow;
  const targetPercent =
    total === 0 ? 0 : Math.round((stats.know / total) * 100);

  // Анимируем прогресс от 0 до targetPercent
  useEffect(() => {
    // если нет данных, не анимируем
    if (targetPercent === 0 && total === 0) {
      // короткая задержка чтобы не мерцать
      const t = setTimeout(() => {
        setAnimatedPercent(0);
        setLoading(false);
      }, 400);
      return () => clearTimeout(t);
    }

    setLoading(true);
    setAnimatedPercent(0);
    let current = 0;
    const step = targetPercent > 20 ? 2 : 1; // шаг анимации
    const interval = setInterval(() => {
      current += step;
      if (current >= targetPercent) {
        current = targetPercent;
        setAnimatedPercent(current);
        clearInterval(interval);
        // небольшая задержка чтобы показать полный прогресс
        setTimeout(() => setLoading(false), 250);
      } else {
        setAnimatedPercent(current);
      }
    }, 20); // частота обновления
    return () => clearInterval(interval);
  }, [targetPercent, total]);

  return (
    <div className="main">
      <div className="results-container max-w-4xl mx-auto p-6">
        <h1 className="h1 text-3xl font-bold mb-6 text-[var(--color-text)]">Результат собеседования</h1>

        <div className="row flex flex-col md:flex-row items-center gap-6 mb-6">
          {/* Лоадер + прогресс-бар (пока loading=true) */}
          <div className="flex-1 flex flex-col items-center">
            {loading ? (
              <div className="w-full flex flex-col items-center gap-4">
                {/* Spinner */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 border-4 border-[rgba(255,255,255,0.12)] border-t-[var(--color-main)] rounded-full animate-spin"></div>
                  <div className="text-lg font-medium  text-[var(--color-text)] ">{animatedPercent}%</div>
                </div>

                <div className="text-sm text-[#94A3B8] mt-1">
                  Загружаем результаты...
                </div>
              </div>
            ) : (
              <>
                <div className="flex flex-col items-center text-[var(--color-text)]">
                  <div className="text-5xl font-bold mb-2">
                    {targetPercent}%
                  </div>
                  <div className="text-sm text-[#94A3B8]">
                    Правильных ответов
                  </div>
                </div>
                {/* Linear progress bar */}

                {/* <div className="w-full max-w-xl bg-[#262840] rounded-full h-3 overflow-hidden">
                  <div
                    style={{ width: `${animatedPercent}%` }}
                    className="h-full rounded-full transition-all duration-150"
                  />
                </div> */}
              </>
              // Отображаем итоговый процент и простую графику (замена круга)
            )}
          </div>

          {/* Краткая статистика (всегда видна справа от лоадера/процента) */}
         { !loading && (

          <div className="mb-2 px-4 py-3 border-2 border-[#262840] rounded-lg text-[var(--color-text)]">
            <p className="p">
              Знаю: <span className="font-semibold">{stats.know}</span>
            </p>
            <p className="p">
              Не знаю: <span className="font-semibold">{stats.dontKnow}</span>
            </p>
            <p className="p">
              Всего: <span className="font-semibold">{total}</span>
            </p>
          </div>
          )}
        </div>

        {/* Список вопросов — показывается только когда анимация закончилась */}
        {!loading && (
          <div className="flex justify-center">
            <div className="w-full max-w-3xl text-[var(--color-text)]">
              <h2 className="text-3xl text-[var(--color-text)] font-bold mb-4">
                Список вопросов
              </h2>

              {stats.questions.length === 0 && (
                <div className="p-4 border-2 border-[#262840] rounded-lg">
                  Вопросы отсутствуют.
                </div>
              )}

              {stats.questions.map((q, index) => (
                <div
                  key={q.id ?? index}
                  className="my-2 p-4 border-2 border-[#262840] rounded-lg"
                >
                  <div className="flex mb-2 items-center gap-3">
                    <span
                      className={`inline-block w-4 h-4 rounded-full ${
                        q.stats === "know"
                          ? "bg-[var(--color-main)]"
                          : "bg-[#ff0000]"
                      }`}
                    />
                    <h3 className="text-2xl">{q.question.title}</h3>
                  </div>

                  <span
                    className={`py-1 px-2 rounded-2xl ${
                      q.question.level === "Junior"
                        ? "bg-[#02263F] text-[#01B0BB]"
                        : q.question.level === "Middle"
                        ? "bg-[#021E4D] text-[#0085F4]"
                        : q.question.level === "Senior"
                        ? "bg-[#1F034D] text-[#B348F9]"
                        : "bg-[#351F1A] text-[#DE8A00]"
                    }`}
                  >
                    {q.question.level}
                  </span>

                  <p className="mt-2">{q.question.question}</p>

                  <div>
                    <div
                      onClick={() =>
                        setOpenAnswers((prev) => ({
                          ...prev,
                          [index]: !prev[index],
                        }))
                      }
                      style={{ width: "150px" }}
                      className="flex items-center cursor-pointer mb-2 gap-2"
                    >
                      <button className="text-[#94A3B8]">
                        {openAnswers[index] ? "Скрыть ответ" : "Показать ответ"}
                      </button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`fill-st-black dark:fill-white icon mt-1 transition-transform duration-300 ${
                          openAnswers[index] ? "rotate-180" : ""
                        }`}
                        width="13"
                        height="8"
                        viewBox="0 0 13 8"
                      >
                        <path d="M6.5 7.4L0.5 1.4L1.9 0L6.5 4.6L11.1 0L12.5 1.4L6.5 7.4Z" />
                      </svg>
                    </div>
                    {openAnswers[index] && (
                      <div className="answer-box">
                        <p className="text-[var(--color-text)]">
                          <strong>Ответ:</strong> {q.question.answer}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="btn-results mt-6">
          <button
            className="w-full mt-10 flex items-center justify-center gap-2 px-12 py-2 rounded-md max-[480px]
    bg-[var(--color-main)] cursor-pointer"
            onClick={() => navigate("/startInterview")}
          >
            Пройти заново
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;
