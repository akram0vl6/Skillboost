import React from "react";
import { Link } from "react-router-dom";
import { backendCards, OtherTechnologies, frontendCards } from '../shared/data/questionData'

export default function QuestionsSection({ }) {


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

      <div className="lg:px-0 max-w-5xl mx-auto px-4 py-5 text-[var(--color-text)]">
        <div className="flex flex-col md:items-start items-center">

          <div className="mb-10 w-full relative">
            <h2 className="lg:text-4xl text-3xl font-bold mb-5">Backend</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {backendCards.map((card) => (

                <Link
                  to={`/baza_voprosov/${card.path}`}
                  className="group/link duration-150"
                  aria-label={`Перейти на базу вопросов по теме ${card.name}`}
                >
                  <section className="sm:w-full h-[112px] bg-[var(--bg-03)] dark:bg-st-white-T5 rounded-2xl gap-2 p-3 sm:gap-4 sm:px-4 sm:py-4 flex justify-between">
                    <section className="flex gap-4">
                      <div className="bg-st-black-10 dark:bg-st-white-T10 w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-[15px] sm:rounded-[20px] flex justify-center items-center p-1.5">
                        <img
                          className="w-full h-full object-contain"
                          src={`${card.img}`}
                          alt="Python"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-base sm:text-xl mb-1 sm:mb-2 line-clamp-1 text-[var(--color-text)]">
                          {card.name}
                        </h3>
                        <p className="text-st-gray-65 text-xs sm:text-base dark:text-st-gray-45 group-hover/link:text-st-green-90 transition-colors line-clamp-2 leading-tight">
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
                  <section className="sm:w-full h-[112px] bg-[var(--bg-03)] dark:bg-st-white-T5 rounded-2xl gap-2 p-3 sm:gap-4 sm:px-4 sm:py-4 flex justify-between">
                    <section className="flex gap-4">
                      <div className="bg-st-black-10 dark:bg-st-white-T10 w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-[15px] sm:rounded-[20px] flex justify-center items-center p-1.5">
                        <img
                          className="w-full h-full object-contain"
                          src={`./img/tehnalogi/${card.img}.webp`}
                          alt={card.name}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-base sm:text-xl mb-1 sm:mb-2 line-clamp-1 text-[var(--color-text)]">
                          {card.name}
                        </h3>
                        <p className="text-st-gray-65 text-xs sm:text-base dark:text-st-gray-45 group-hover/link:text-st-green-90 transition-colors line-clamp-2 leading-tight">
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
                <section className=" sm:w-full h-[112px] bg-[var(--bg-03)] dark:bg-st-white-T5 rounded-2xl gap-2 p-3 sm:gap-4 sm:px-4 sm:py-4 flex justify-between">
                  <section className="flex gap-4">
                    <div className="bg-st-black-10 dark:bg-st-white-T10 w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-[15px] sm:rounded-[20px] flex justify-center items-center p-1.5">
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
                  <section className=" sm:w-full h-[112px] bg-[var(--bg-03)] dark:bg-st-white-T5 rounded-2xl gap-2 p-3 sm:gap-4 sm:px-4 sm:py-4 flex justify-between">
                    <section className="flex gap-4">
                      <div className="bg-st-black-10 dark:bg-st-white-T10 w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-[15px] sm:rounded-[20px] flex justify-center items-center p-1.5">
                        <img
                          className="w-full h-full object-contain"
                          src={`${card.img}`}
                          alt={card.name}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-base sm:text-xl mb-1 sm:mb-2 line-clamp-1 text-[var(--color-text)]">
                          {card.name}
                        </h3>
                        <p className="text-st-gray-65 text-xs sm:text-base dark:text-st-gray-45 group-hover/link:text-st-green-90 transition-colors line-clamp-2 leading-tight">
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
                <section className="sm:w-full h-[112px] bg-[var(--bg-03)] dark:bg-st-white-T5 rounded-2xl gap-2 p-3 sm:gap-4 sm:px-4 sm:py-4 flex justify-between">
                  <section className="flex gap-4">
                    <div className="bg-st-black-10 dark:bg-st-white-T10 w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-[15px] sm:rounded-[20px] flex justify-center items-center p-1.5">
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
