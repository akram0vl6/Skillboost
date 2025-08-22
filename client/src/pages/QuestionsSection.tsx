import React from 'react';
import { Link } from 'react-router-dom';

export default function QuestionsSection({ routes02, currentPath, isOpen, setIsOpen }) {
  return (
    <section className="w-full m-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden [&::webkit-scrollbar]:w-0">
      {/* Loading Indicator */}
      <div
        className="nuxt-loading-indicator"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          left: 0,
          pointerEvents: 'none',
          width: 'auto',
          height: '3px',
          opacity: 0,
          background: 'repeating-linear-gradient(to right, rgb(0, 220, 130) 0%, rgb(52, 205, 254) 50%, rgb(0, 71, 225) 100%)',
          transform: 'scaleX(0)',
          transformOrigin: 'left center',
          transition: 'transform 0.1s, height 0.4s, opacity 0.4s',
          zIndex: 999999,
        }}
      />

      <div className="lg:px-0 max-w-5xl mx-auto px-4 py-5">
        <div className="flex flex-col md:items-start items-center">
          <div className="mb-5">
            <h1 className="lg:text-5xl text-4xl font-bold mb-5">База вопросов</h1>
            <h2 className="text-xl leading-7">
              Изучай нужные тебе технологии. Отвечай на вопросы и <br />
              отслеживай{' '}
              <Link to="/profile" className="text-[#09B87E]">
                свой прогресс
              </Link>
            </h2>
          </div>

          <div className="mb-10 w-full relative">
            <h2 className="lg:text-4xl text-3xl font-bold mb-5">Backend</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Example Python Card */}
              <Link to="/baza_voprosov/python" className="group/link duration-150" aria-label="Перейти на базу вопросов по теме ">
                <section className="min-w-[328px] sm:w-full h-[112px] bg-[var(--bg-03)] dark:bg-st-white-T5 rounded-2xl gap-2 p-3 sm:gap-4 sm:px-4 sm:py-4 flex justify-between">
                  <section className="flex gap-4">
                    <div className="bg-st-black-10 dark:bg-st-white-T10 w-20 h-20 rounded-[20px] flex justify-center items-center p-1.5">
                      <img className="w-full h-full object-contain" src="./img/tehnalogi/python.svg" alt="Python" />
                    </div>
                    <div className="max-w-[275px] flex-1">
                      <h3 className="font-bold text-base sm:text-xl mb-2 line-clamp-1">Python</h3>
                      <p className="text-st-gray-65 text-sm sm:text-base dark:text-st-gray-45 group-hover/link:text-st-green-90 transition-colors line-clamp-2">
                        Один из самых популярных языков программирования. Легок в изучении и прост в применении.
                      </p>
                    </div>
                  </section>
                  <section className="w-20 h-20 flex justify-center items-center relative">
                    <svg className="transform -rotate-90 w-20 h-20">
                      <circle cx="40" cy="40" r="32" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-white dark:text-gray-300" />
                      <circle
                        cx="40"
                        cy="40"
                        r="32"
                        stroke="currentColor"
                        strokeWidth="12"
                        fill="transparent"
                        strokeDasharray="201.06192982974676"
                        strokeDashoffset="201.06192982974676"
                        strokeLinecap="round"
                        className="text-[#09B87E]"
                      />
                    </svg>
                    <span className="absolute text-xl text-st-black font-bold dark:text-gray-300">0</span>
                  </section>
                </section>
              </Link>

              <Link to="/baza_voprosov/java" className="group/link duration-150" aria-label="Перейти на базу вопросов по теме ">
                <section className="min-w-[328px] sm:w-full h-[112px] bg-[var(--bg-03)] dark:bg-st-white-T5 rounded-2xl gap-2 p-3 sm:gap-4 sm:px-4 sm:py-4 flex justify-between">
                  <section className="flex gap-4">
                    <div className="bg-st-black-10 dark:bg-st-white-T10 w-20 h-20 rounded-[20px] flex justify-center items-center p-1.5">
                      <img className="w-full h-full object-contain" src="./img/tehnalogi/java.webp" alt="Python" />
                    </div>
                    <div className="max-w-[275px] flex-1">
                      <h3 className="font-bold text-base sm:text-xl mb-2 line-clamp-1">Java</h3>
                      <p className="text-st-gray-65 text-sm sm:text-base dark:text-st-gray-45 group-hover/link:text-st-green-90 transition-colors line-clamp-2">
                        Кроссплатформенный язык программирования для разработки мобильных и веб-приложений
                      </p>
                    </div>
                  </section>
                  <section className="w-20 h-20 flex justify-center items-center relative">
                    <svg className="transform -rotate-90 w-20 h-20">
                      <circle cx="40" cy="40" r="32" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-white dark:text-gray-300" />
                      <circle
                        cx="40"
                        cy="40"
                        r="32"
                        stroke="currentColor"
                        strokeWidth="12"
                        fill="transparent"
                        strokeDasharray="201.06192982974676"
                        strokeDashoffset="201.06192982974676"
                        strokeLinecap="round"
                        className="text-[#09B87E]"
                      />
                    </svg>
                    <span className="absolute text-xl text-st-black font-bold dark:text-gray-300">0</span>
                  </section>
                </section>
              </Link>

              <Link to="/baza_voprosov/csharp" className="group/link duration-150" aria-label="Перейти на базу вопросов по теме ">
                <section className="min-w-[328px] sm:w-full h-[112px] bg-[var(--bg-03)] dark:bg-st-white-T5 rounded-2xl gap-2 p-3 sm:gap-4 sm:px-4 sm:py-4 flex justify-between">
                  <section className="flex gap-4">
                    <div className="bg-st-black-10 dark:bg-st-white-T10 w-20 h-20 rounded-[20px] flex justify-center items-center p-1.5">
                      <img className="w-full h-full object-contain" src="./img/tehnalogi/csharp.svg" alt="Python" />
                    </div>
                    <div className="max-w-[275px] flex-1">
                      <h3 className="font-bold text-base sm:text-xl mb-2 line-clamp-1">C#</h3>
                      <p className="text-st-gray-65 text-sm sm:text-base dark:text-st-gray-45 group-hover/link:text-st-green-90 transition-colors line-clamp-2">
                        C# — универсальный язык программирования от Microsoft, используемый для разработки приложений, игр и веб-сервисов на платформе .NET
                      </p>
                    </div>
                  </section>
                  <section className="w-20 h-20 flex justify-center items-center relative">
                    <svg className="transform -rotate-90 w-20 h-20">
                      <circle cx="40" cy="40" r="32" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-white dark:text-gray-300" />
                      <circle
                        cx="40"
                        cy="40"
                        r="32"
                        stroke="currentColor"
                        strokeWidth="12"
                        fill="transparent"
                        strokeDasharray="201.06192982974676"
                        strokeDashoffset="201.06192982974676"
                        strokeLinecap="round"
                        className="text-[#09B87E]"
                      />
                    </svg>
                    <span className="absolute text-xl text-st-black font-bold dark:text-gray-300">0</span>
                  </section>
                </section>
              </Link>

              <Link to="/baza_voprosov/cpp" className="group/link duration-150" aria-label="Перейти на базу вопросов по теме ">
                <section className="min-w-[328px] sm:w-full h-[112px] bg-[var(--bg-03)] dark:bg-st-white-T5 rounded-2xl gap-2 p-3 sm:gap-4 sm:px-4 sm:py-4 flex justify-between">
                  <section className="flex gap-4">
                    <div className="bg-st-black-10 dark:bg-st-white-T10 w-20 h-20 rounded-[20px] flex justify-center items-center p-1.5">
                      <img className="w-full h-full object-contain" src="./img/tehnalogi/cpp.webp" alt="Cpp" />
                    </div>
                    <div className="max-w-[275px] flex-1">
                      <h3 className="font-bold text-base sm:text-xl mb-2 line-clamp-1">C++</h3>
                      <p className="text-st-gray-65 text-sm sm:text-base dark:text-st-gray-45 group-hover/link:text-st-green-90 transition-colors line-clamp-2">
                        Мощный, универсальный язык для высокопроизводительных систем и приложений
                      </p>
                    </div>
                  </section>
                  <section className="w-20 h-20 flex justify-center items-center relative">
                    <svg className="transform -rotate-90 w-20 h-20">
                      <circle cx="40" cy="40" r="32" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-white dark:text-gray-300" />
                      <circle
                        cx="40"
                        cy="40"
                        r="32"
                        stroke="currentColor"
                        strokeWidth="12"
                        fill="transparent"
                        strokeDasharray="201.06192982974676"
                        strokeDashoffset="201.06192982974676"
                        strokeLinecap="round"
                        className="text-[#09B87E]"
                      />
                    </svg>
                    <span className="absolute text-xl text-st-black font-bold dark:text-gray-300">0</span>
                  </section>
                </section>
              </Link>

              <Link to="/baza_voprosov/golang" className="group/link duration-150" aria-label="Перейти на базу вопросов по теме">
                <section className="min-w-[328px] sm:w-full h-[112px] bg-[var(--bg-03)] dark:bg-st-white-T5 rounded-2xl gap-2 p-3 sm:gap-4 sm:px-4 sm:py-4 flex justify-between">
                  <section className="flex gap-4">
                    <div className="bg-st-black-10 dark:bg-st-white-T10 w-20 h-20 rounded-[20px] flex justify-center items-center p-1.5">
                      <img className="w-full h-full object-contain" src="./img/tehnalogi/golang.webp" alt="Golang" />
                    </div>
                    <div className="max-w-[275px] flex-1">
                      <h3 className="font-bold text-base sm:text-xl mb-2 line-clamp-1">Python</h3>
                      <p className="text-st-gray-65 text-sm sm:text-base dark:text-st-gray-45 group-hover/link:text-st-green-90 transition-colors line-clamp-2">
                        Быстрый, простой, безопасный язык для серверных приложений и микросервисов
                      </p>
                    </div>
                  </section>
                  <section className="w-20 h-20 flex justify-center items-center relative">
                    <svg className="transform -rotate-90 w-20 h-20">
                      <circle cx="40" cy="40" r="32" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-white dark:text-gray-300" />
                      <circle
                        cx="40"
                        cy="40"
                        r="32"
                        stroke="currentColor"
                        strokeWidth="12"
                        fill="transparent"
                        strokeDasharray="201.06192982974676"
                        strokeDashoffset="201.06192982974676"
                        strokeLinecap="round"
                        className="text-[#09B87E]"
                      />
                    </svg>
                    <span className="absolute text-xl text-st-black font-bold dark:text-gray-300">0</span>
                  </section>
                </section>
              </Link>

              {/* Repeat similar Link-components for Java, C#, C++, Golang, etc. */}
            </div>

            {/* <div className="relative mt-4 flex justify-center w-full">
              <button
                className="bg-[#EEFFF2] text-st-green-90 dark:bg-[rgba(37,65,52,1)] text-sm font-medium flex items-center justify-center gap-2 px-12 py-2 rounded-md ring-transparent active:scale-[0.98] transition-transform disabled:bg-[var(--color-grays-25)] disabled:text-st-gray-60 disabled:dark:text-surface-300 disabled:dark:bg-surface-600 disabled:hover:bg-[var(--color-grays-25)] disabled:dark:hover:bg-surface-600"
                onClick={() => setIsOpen(!isOpen)}
                disabled={!isOpen}
              >
                <span>Скрыть</span>
              </button>
            </div> */}
          </div>

          {/* Frontend Section (JavaScript, HTML, CSS) */}
          <div className="mb-10 w-full relative">
            <h2 className="lg:text-4xl text-3xl font-bold mb-5">Frontend</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* JavaScript Card */}
              <Link to="/baza_voprosov/javascript" className="group/link duration-150" aria-label="Перейти на базу вопросов по теме JavaScript"> 
                                <section className="min-w-[328px] sm:w-full h-[112px] bg-[var(--bg-03)] dark:bg-st-white-T5 rounded-2xl gap-2 p-3 sm:gap-4 sm:px-4 sm:py-4 flex justify-between">
                  <section className="flex gap-4">
                    <div className="bg-st-black-10 dark:bg-st-white-T10 w-20 h-20 rounded-[20px] flex justify-center items-center p-1.5">
                      <img className="w-full h-full object-contain" src="./img/tehnalogi/javascript.webp" alt="JavaScript" />
                    </div>
                    <div className="max-w-[275px] flex-1">
                      <h3 className="font-bold text-base sm:text-xl mb-2 line-clamp-1">JavaScript</h3>
                      <p className="text-st-gray-65 text-sm sm:text-base dark:text-st-gray-45 group-hover/link:text-st-green-90 transition-colors line-clamp-2">
                        Язык программирования, который используют для создания интерактивных веб-страниц.
                      </p>
                    </div>
                  </section>
                  <section className="w-20 h-20 flex justify-center items-center relative">
                    <svg className="transform -rotate-90 w-20 h-20">
                      <circle cx="40" cy="40" r="32" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-white dark:text-gray-300" />
                      <circle
                        cx="40"
                        cy="40"
                        r="32"
                        stroke="currentColor"
                        strokeWidth="12"
                        fill="transparent"
                        strokeDasharray="201.06192982974676"
                        strokeDashoffset="201.06192982974676"
                        strokeLinecap="round"
                        className="text-[#09B87E]"
                      />
                    </svg>
                    <span className="absolute text-xl text-st-black font-bold dark:text-gray-300">0</span>
                  </section>
                </section>
              </Link>
              {/* HTML Card */}
              <Link to="/baza_voprosov/html" className="group/link duration-150" aria-label="Перейти на базу вопросов по теме HTML">
                                                <section className="min-w-[328px] sm:w-full h-[112px] bg-[var(--bg-03)] dark:bg-st-white-T5 rounded-2xl gap-2 p-3 sm:gap-4 sm:px-4 sm:py-4 flex justify-between">
                  <section className="flex gap-4">
                    <div className="bg-st-black-10 dark:bg-st-white-T10 w-20 h-20 rounded-[20px] flex justify-center items-center p-1.5">
                      <img className="w-full h-full object-contain" src="./img/tehnalogi/html.webp" alt="html" />
                    </div>
                    <div className="max-w-[275px] flex-1">
                      <h3 className="font-bold text-base sm:text-xl mb-2 line-clamp-1">HTML</h3>
                      <p className="text-st-gray-65 text-sm sm:text-base dark:text-st-gray-45 group-hover/link:text-st-green-90 transition-colors line-clamp-2">
                        Код, использующийся для структурирования и отображения веб-страницы и её контента.
                      </p>
                    </div>
                  </section>
                  <section className="w-20 h-20 flex justify-center items-center relative">
                    <svg className="transform -rotate-90 w-20 h-20">
                      <circle cx="40" cy="40" r="32" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-white dark:text-gray-300" />
                      <circle
                        cx="40"
                        cy="40"
                        r="32"
                        stroke="currentColor"
                        strokeWidth="12"
                        fill="transparent"
                        strokeDasharray="201.06192982974676"
                        strokeDashoffset="201.06192982974676"
                        strokeLinecap="round"
                        className="text-[#09B87E]"
                      />
                    </svg>
                    <span className="absolute text-xl text-st-black font-bold dark:text-gray-300">0</span>
                  </section>
                </section>
                </Link>
                <Link to="/baza_voprosov/css" className="group/link duration-150" aria-label="Перейти на базу вопросов по теме  CSS">  
                
                                              <section className="min-w-[328px] sm:w-full h-[112px] bg-[var(--bg-03)] dark:bg-st-white-T5 rounded-2xl gap-2 p-3 sm:gap-4 sm:px-4 sm:py-4 flex justify-between">
                  <section className="flex gap-4">
                    <div className="bg-st-black-10 dark:bg-st-white-T10 w-20 h-20 rounded-[20px] flex justify-center items-center p-1.5">
                      <img className="w-full h-full object-contain" src="./img/tehnalogi/css.webp" alt="CSS" />
                    </div>
                    <div className="max-w-[275px] flex-1">
                      <h3 className="font-bold text-base sm:text-xl mb-2 line-clamp-1">CSS</h3>
                      <p className="text-st-gray-65 text-sm sm:text-base dark:text-st-gray-45 group-hover/link:text-st-green-90 transition-colors line-clamp-2">
                        Позволяет стилизовать и форматировать содержимое сайта в любом порядке, форме и размере.
                      </p>
                    </div>
                  </section>
                  <section className="w-20 h-20 flex justify-center items-center relative">
                    <svg className="transform -rotate-90 w-20 h-20">
                      <circle cx="40" cy="40" r="32" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-white dark:text-gray-300" />
                      <circle
                        cx="40"
                        cy="40"
                        r="32"
                        stroke="currentColor"
                        strokeWidth="12"
                        fill="transparent"
                        strokeDasharray="201.06192982974676"
                        strokeDashoffset="201.06192982974676"
                        strokeLinecap="round"
                        className="text-[#09B87E]"
                      />
                    </svg>
                    <span className="absolute text-xl text-st-black font-bold dark:text-gray-300">0</span>
                  </section>
                </section>
                </Link>
              
            </div>
          </div>

          {/* Database Section */}
          <div className="mb-10 w-full relative">
            <h2 className="lg:text-4xl text-3xl font-bold mb-5">Базы данных</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Link to="/baza_voprosov/sql" className="group/link duration-150" aria-label="Перейти на базу вопросов по теме SQL">
                                                <section className="min-w-[328px] sm:w-full h-[112px] bg-[var(--bg-03)] dark:bg-st-white-T5 rounded-2xl gap-2 p-3 sm:gap-4 sm:px-4 sm:py-4 flex justify-between">
                  <section className="flex gap-4">
                    <div className="bg-st-black-10 dark:bg-st-white-T10 w-20 h-20 rounded-[20px] flex justify-center items-center p-1.5">
                      <img className="w-full h-full object-contain" src="./img/tehnalogi/database.webp" alt="SQL" />
                    </div>
                    <div className="max-w-[275px] flex-1">
                      <h3 className="font-bold text-base sm:text-xl mb-2 line-clamp-1">SQL</h3>
                      <p className="text-st-gray-65 text-sm sm:text-base dark:text-st-gray-45 group-hover/link:text-st-green-90 transition-colors line-clamp-2">
                        Язык запросов, использующийся для работы с базой данных.
                      </p>
                    </div>
                  </section>
                  <section className="w-20 h-20 flex justify-center items-center relative">
                    <svg className="transform -rotate-90 w-20 h-20">
                      <circle cx="40" cy="40" r="32" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-white dark:text-gray-300" />
                      <circle
                        cx="40"
                        cy="40"
                        r="32"
                        stroke="currentColor"
                        strokeWidth="12"
                        fill="transparent"
                        strokeDasharray="201.06192982974676"
                        strokeDashoffset="201.06192982974676"
                        strokeLinecap="round"
                        className="text-[#09B87E]"
                      />
                    </svg>
                    <span className="absolute text-xl text-st-black font-bold dark:text-gray-300">0</span>
                  </section>
                </section>
              </Link>
            </div>
          </div>

          {/* Other Technologies Section */}
          <div className="mb-10 w-full relative">
            <h2 className="lg:text-4xl text-3xl font-bold mb-5">Другие технологии</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Link to="/baza_voprosov/git" className="group/link duration-150" aria-label="Перейти на базу вопросов по теме Git">
                                                <section className="min-w-[328px] sm:w-full h-[112px] bg-[var(--bg-03)] dark:bg-st-white-T5 rounded-2xl gap-2 p-3 sm:gap-4 sm:px-4 sm:py-4 flex justify-between">
                  <section className="flex gap-4">
                    <div className="bg-st-black-10 dark:bg-st-white-T10 w-20 h-20 rounded-[20px] flex justify-center items-center p-1.5">
                      <img className="w-full h-full object-contain" src="./img/tehnalogi/git.webp" alt="GIT" />
                    </div>
                    <div className="max-w-[275px] flex-1">
                      <h3 className="font-bold text-base sm:text-xl mb-2 line-clamp-1">Git</h3>
                      <p className="text-st-gray-65 text-sm sm:text-base dark:text-st-gray-45 group-hover/link:text-st-green-90 transition-colors line-clamp-2">
                        Программа для отслеживания и ведения истории изменения файлов в вашем проекте.
                      </p>
                    </div>
                  </section>
                  <section className="w-20 h-20 flex justify-center items-center relative">
                    <svg className="transform -rotate-90 w-20 h-20">
                      <circle cx="40" cy="40" r="32" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-white dark:text-gray-300" />
                      <circle
                        cx="40"
                        cy="40"
                        r="32"
                        stroke="currentColor"
                        strokeWidth="12"
                        fill="transparent"
                        strokeDasharray="201.06192982974676"
                        strokeDashoffset="201.06192982974676"
                        strokeLinecap="round"
                        className="text-[#09B87E]"
                      />
                    </svg>
                    <span className="absolute text-xl text-st-black font-bold dark:text-gray-300">0</span>
                  </section>
                </section>
              </Link>
              <Link to="/baza_voprosov/docker" className="group/link duration-150" aria-label="Перейти на базу вопросов по теме Docker">
                                                <section className="min-w-[328px] sm:w-full h-[112px] bg-[var(--bg-03)] dark:bg-st-white-T5 rounded-2xl gap-2 p-3 sm:gap-4 sm:px-4 sm:py-4 flex justify-between">
                  <section className="flex gap-4">
                    <div className="bg-st-black-10 dark:bg-st-white-T10 w-20 h-20 rounded-[20px] flex justify-center items-center p-1.5">
                      <img className="w-full h-full object-contain" src="./img/tehnalogi/docker.webp" alt="docker" />
                    </div>
                    <div className="max-w-[275px] flex-1">
                      <h3 className="font-bold text-base sm:text-xl mb-2 line-clamp-1">Docker</h3>
                      <p className="text-st-gray-65 text-sm sm:text-base dark:text-st-gray-45 group-hover/link:text-st-green-90 transition-colors line-clamp-2">
                        Самая популярная программа для разработки, доставки и запуска контейнерных приложений.
                      </p>
                    </div>
                  </section>
                  <section className="w-20 h-20 flex justify-center items-center relative">
                    <svg className="transform -rotate-90 w-20 h-20">
                      <circle cx="40" cy="40" r="32" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-white dark:text-gray-300" />
                      <circle
                        cx="40"
                        cy="40"
                        r="32"
                        stroke="currentColor"
                        strokeWidth="12"
                        fill="transparent"
                        strokeDasharray="201.06192982974676"
                        strokeDashoffset="201.06192982974676"
                        strokeLinecap="round"
                        className="text-[#09B87E]"
                      />
                    </svg>
                    <span className="absolute text-xl text-st-black font-bold dark:text-gray-300">0</span>
                  </section>
                </section>
              </Link>
              <Link to="/baza_voprosov/computer_science" className="group/link duration-150" aria-label="Перейти на базу вопросов по теме Computer Science">
                                                <section className="min-w-[328px] sm:w-full h-[112px] bg-[var(--bg-03)] dark:bg-st-white-T5 rounded-2xl gap-2 p-3 sm:gap-4 sm:px-4 sm:py-4 flex justify-between">
                  <section className="flex gap-4">
                    <div className="bg-st-black-10 dark:bg-st-white-T10 w-20 h-20 rounded-[20px] flex justify-center items-center p-1.5">
                      <img className="w-full h-full object-contain" src="./img/tehnalogi/computer_science.webp" alt="computer_science" />
                    </div>
                    <div className="max-w-[275px] flex-1">
                      <h3 className="font-bold text-base sm:text-xl mb-2 line-clamp-1">Computer Science</h3>
                      <p className="text-st-gray-65 text-sm sm:text-base dark:text-st-gray-45 group-hover/link:text-st-green-90 transition-colors line-clamp-2">
                        Базовые знания по устройству компьютера, интернета и алгоритмов.
                      </p>
                    </div>
                  </section>
                  <section className="w-20 h-20 flex justify-center items-center relative">
                    <svg className="transform -rotate-90 w-20 h-20">
                      <circle cx="40" cy="40" r="32" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-white dark:text-gray-300" />
                      <circle
                        cx="40"
                        cy="40"
                        r="32"
                        stroke="currentColor"
                        strokeWidth="12"
                        fill="transparent"
                        strokeDasharray="201.06192982974676"
                        strokeDashoffset="201.06192982974676"
                        strokeLinecap="round"
                        className="text-[#09B87E]"
                      />
                    </svg>
                    <span className="absolute text-xl text-st-black font-bold dark:text-gray-300">0</span>
                  </section>
                </section>
              </Link>
            </div>
          </div>

          {/* Recruiter Questions Section */}
          <div className="mb-10 w-full relative">
            <h2 className="lg:text-4xl text-3xl font-bold mb-5">Вопросы рекрутеров</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Link to="/baza_voprosov/hr" className="group/link duration-150" aria-label="Перейти на базу вопросов по теме Вопросы рекрутеров">
                                                <section className="min-w-[328px] sm:w-full h-[112px] bg-[var(--bg-03)] dark:bg-st-white-T5 rounded-2xl gap-2 p-3 sm:gap-4 sm:px-4 sm:py-4 flex justify-between">
                  <section className="flex gap-4">
                    <div className="bg-st-black-10 dark:bg-st-white-T10 w-20 h-20 rounded-[20px] flex justify-center items-center p-1.5">
                      <img className="w-full h-full object-contain" src="./img/tehnalogi/recruitment.webp" alt="recruitment" />
                    </div>
                    <div className="max-w-[275px] flex-1">
                      <h3 className="font-bold text-base sm:text-xl mb-2 line-clamp-1">Вопросы рекрутеров</h3>
                      <p className="text-st-gray-65 text-sm sm:text-base dark:text-st-gray-45 group-hover/link:text-st-green-90 transition-colors line-clamp-2">
                        Как правильно отвечать на вопросы рекрутеров. Самые хитрые и заковыристые вопросы.
                      </p>
                    </div>
                  </section>
                  <section className="w-20 h-20 flex justify-center items-center relative">
                    <svg className="transform -rotate-90 w-20 h-20">
                      <circle cx="40" cy="40" r="32" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-white dark:text-gray-300" />
                      <circle
                        cx="40"
                        cy="40"
                        r="32"
                        stroke="currentColor"
                        strokeWidth="12"
                        fill="transparent"
                        strokeDasharray="201.06192982974676"
                        strokeDashoffset="201.06192982974676"
                        strokeLinecap="round"
                        className="text-[#09B87E]"
                      />
                    </svg>
                    <span className="absolute text-xl text-st-black font-bold dark:text-gray-300">0</span>
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
