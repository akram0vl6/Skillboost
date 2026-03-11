import React from "react";
import { Link } from "react-router-dom";

export default function QuestionsSection({}) {
  const backendCards = [
  { name: "Python", path: "Python", title: "Один из самых популярных языков программирования. Легок в изучении и прост в применении.", img: "./img/tehnalogi/python.svg"  },
  { name: "Java", path: "Java", title: " Кроссплатформенный язык программирования для разработки мобильных и веб-приложений", img: "./img/tehnalogi/java.webp"  },
  { name: "C#", path: "Csharp", title: "C# — универсальный язык программирования от Microsoft, используемый для разработки приложений, игр и веб-сервисов на платформе .NET", img: "./img/tehnalogi/csharp.svg"  },
  { name: "C++", path: "Cpp", title: "Мощный, универсальный язык для высокопроизводительных систем и приложений", img: "./img/tehnalogi/cpp.webp"  },
  { name: "Golang", path: "Golang", title: "Быстрый, простой, безопасный язык для серверных приложений и микросервисов", img: "./img/tehnalogi/golang.webp" },
];

  const OtherTechnologies = [
    { name: 'Git', path: 'git', title: 'Программа для отслеживания и ведения истории изменения файлов в вашем проекте.', img: './img/tehnalogi/git.webp' },
    { name: 'Docker', path: 'docker', title: 'Самая популярная программа для разработки, доставки и запуска контейнерных приложений.', img: './img/tehnalogi/docker.webp' },
    { name: 'Computer Science', path: 'computer_science', title: 'Базовые знания по устройству компьютера, интернета и алгоритмов.', img: './img/tehnalogi/computer_science.webp' },
  ]

  const frontendCards = [
  { name: "Frontend", path: "Frontend", img: "frontend",  title: "Подборка самых частых вопросов на собеседованиях фронтенд разработчикам" },
];

  return (
    <section className="w-full m-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden [&::webkit-scrollbar]:w-0">
      {/* Loading Indicator */}
      <div
        className="nuxt-loading-indicator"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          pointerEvents: "none",
          width: "auto",
          height: "3px",
          opacity: 0,
          background:
            "repeating-linear-gradient(to right, rgb(0, 220, 130) 0%, rgb(52, 205, 254) 50%, rgb(0, 71, 225) 100%)",
          transform: "scaleX(0)",
          transformOrigin: "left center",
          transition: "transform 0.1s, height 0.4s, opacity 0.4s",
          zIndex: 999999,
        }}
      />

      <div className="lg:px-0 max-w-5xl mx-auto px-4 py-5">
        <div className="flex flex-col md:items-start items-center">
          <div className="mb-5">
            <h1 className="lg:text-5xl text-4xl font-bold mb-5">
              База вопросов
            </h1>
            <h2 className="text-xl leading-7">
              Изучай нужные тебе технологии. Отвечай на вопросы и <br />
              отслеживай{" "}
              <Link to="/profile" className="text-[#09B87E]">
                свой прогресс
              </Link>
            </h2>
          </div>

           <div className="mb-10 w-full relative">
            <h2 className="lg:text-4xl text-3xl font-bold mb-5">Backend</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {backendCards.map((card) => (

              <Link
                to={`/baza_voprosov/${card.path}`}
                className="group/link duration-150"
                aria-label={`Перейти на базу вопросов по теме ${card.name}`}
              >
                <section className="min-w-[328px] sm:w-full h-[112px] bg-[var(--bg-03)] dark:bg-st-white-T5 rounded-2xl gap-2 p-3 sm:gap-4 sm:px-4 sm:py-4 flex justify-between">
                  <section className="flex gap-4">
                    <div className="bg-st-black-10 dark:bg-st-white-T10 w-20 h-20 rounded-[20px] flex justify-center items-center p-1.5">
                      <img
                        className="w-full h-full object-contain"
                        src={`${card.img}`}
                        alt="Python"
                      />
                    </div>
                    <div className="max-w-[275px] flex-1">
                      <h3 className="font-bold text-base sm:text-xl mb-2 line-clamp-1">
                        {card.name}
                      </h3>
                      <p className="text-st-gray-65 text-sm sm:text-base dark:text-st-gray-45 group-hover/link:text-st-green-90 transition-colors line-clamp-2">
                        {card.title}
                      </p>
                    </div>
                  </section>

                </section>
              </Link>
              ))}



            </div>

          </div> 

          {/* Frontend Section  */}
          <div className="mb-10 w-full relative">
            <h2 className="lg:text-4xl text-3xl font-bold mb-5">Frontend</h2>
            {frontendCards.map((card) => (
              
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Frontend Card */}
              <Link
                to={`/baza_voprosov/${card.path}`}
                className="group/link duration-150"
                aria-label={`Перейти на базу вопросов по теме ${card.name}`}
              >
                <section className="min-w-[328px] sm:w-full h-[112px] bg-[var(--bg-03)] dark:bg-st-white-T5 rounded-2xl gap-2 p-3 sm:gap-4 sm:px-4 sm:py-4 flex justify-between">
                  <section className="flex gap-4">
                    <div className="bg-st-black-10 dark:bg-st-white-T10 w-20 h-20 rounded-[20px] flex justify-center items-center p-1.5">
                      <img
                        className="w-full h-full object-contain"
                        src={`./img/tehnalogi/${card.img}.webp`}
                        alt={card.name}
                      />
                    </div>
                    <div className="max-w-[275px] flex-1">
                      <h3 className="font-bold text-base sm:text-xl mb-2 line-clamp-1">
                        {card.name}
                      </h3>
                      <p className="text-st-gray-65 text-sm sm:text-base dark:text-st-gray-45 group-hover/link:text-st-green-90 transition-colors line-clamp-2">
                        {card.title}
                      </p>
                    </div>
                  </section>

                </section>
              </Link>
            </div>
            ))}
          </div>

          {/* Database Section */}
          <div className="mb-10 w-full relative">
            <h2 className="lg:text-4xl text-3xl font-bold mb-5">Базы данных</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Link
                to="/baza_voprosov/sql"
                className="group/link duration-150"
                aria-label="Перейти на базу вопросов по теме SQL"
              >
                <section className="min-w-[328px] sm:w-full h-[112px] bg-[var(--bg-03)] dark:bg-st-white-T5 rounded-2xl gap-2 p-3 sm:gap-4 sm:px-4 sm:py-4 flex justify-between">
                  <section className="flex gap-4">
                    <div className="bg-st-black-10 dark:bg-st-white-T10 w-20 h-20 rounded-[20px] flex justify-center items-center p-1.5">
                      <img
                        className="w-full h-full object-contain"
                        src="./img/tehnalogi/database.webp"
                        alt="SQL"
                      />
                    </div>
                    <div className="max-w-[275px] flex-1">
                      <h3 className="font-bold text-base sm:text-xl mb-2 line-clamp-1">
                        SQL
                      </h3>
                      <p className="text-st-gray-65 text-sm sm:text-base dark:text-st-gray-45 group-hover/link:text-st-green-90 transition-colors line-clamp-2">
                        Язык запросов, использующийся для работы с базой данных.
                      </p>
                    </div>
                  </section>

                </section>
              </Link>
            </div>
          </div>

          {/* Other Technologies Section */}
          <div className="mb-10 w-full relative">
            <h2 className="lg:text-4xl text-3xl font-bold mb-5">
              Другие технологии
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {OtherTechnologies.map((card) => (

              <Link
                to={`/baza_voprosov/${card.path}`}
                className="group/link duration-150"
                aria-label={`Перейти на базу вопросов по теме ${card.name}`}
              >
                <section className="min-w-[328px] sm:w-full h-[112px] bg-[var(--bg-03)] dark:bg-st-white-T5 rounded-2xl gap-2 p-3 sm:gap-4 sm:px-4 sm:py-4 flex justify-between">
                  <section className="flex gap-4">
                    <div className="bg-st-black-10 dark:bg-st-white-T10 w-20 h-20 rounded-[20px] flex justify-center items-center p-1.5">
                      <img
                        className="w-full h-full object-contain"
                        src={`${card.img}`}
                        alt={card.name}
                      />
                    </div>
                    <div className="max-w-[275px] flex-1">
                      <h3 className="font-bold text-base sm:text-xl mb-2 line-clamp-1">
                        {card.name}
                      </h3>
                      <p className="text-st-gray-65 text-sm sm:text-base dark:text-st-gray-45 group-hover/link:text-st-green-90 transition-colors line-clamp-2">
                        {card.title}
                      </p>
                    </div>
                  </section>

                </section>
              </Link>
              ))}
       
            </div>
          </div>

          {/* Recruiter Questions Section */}
          <div className="mb-10 w-full relative">
            <h2 className="lg:text-4xl text-3xl font-bold mb-5">
              Вопросы рекрутеров
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Link
                to="/baza_voprosov/hr"
                className="group/link duration-150"
                aria-label="Перейти на базу вопросов по теме Вопросы рекрутеров"
              >
                <section className="min-w-[328px] sm:w-full h-[112px] bg-[var(--bg-03)] dark:bg-st-white-T5 rounded-2xl gap-2 p-3 sm:gap-4 sm:px-4 sm:py-4 flex justify-between">
                  <section className="flex gap-4">
                    <div className="bg-st-black-10 dark:bg-st-white-T10 w-20 h-20 rounded-[20px] flex justify-center items-center p-1.5">
                      <img
                        className="w-full h-full object-contain"
                        src="./img/tehnalogi/recruitment.webp"
                        alt="recruitment"
                      />
                    </div>
                    <div className="max-w-[275px] flex-1">
                      <h3 className="font-bold text-base sm:text-xl mb-2 line-clamp-1">
                        Вопросы рекрутеров
                      </h3>
                      <p className="text-st-gray-65 text-sm sm:text-base dark:text-st-gray-45 group-hover/link:text-st-green-90 transition-colors line-clamp-2">
                        Как правильно отвечать на вопросы рекрутеров. Самые
                        хитрые и заковыристые вопросы.
                      </p>
                    </div>
                  </section>

                </section>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
