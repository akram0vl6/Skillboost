import React, { useRef } from "react";
import { Link } from "react-router-dom";

export default function PopularQuestionsCarousel() {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const container = carouselRef.current;
    if (!container) return;
    const scrollAmount = container.clientWidth; // прокрутка на ширину видимой области
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="flex flex-col gap-4 w-full my-[50px]">
      <header className="flex flex-col gap-3">
        <h2 className="font-bold leading-10 text-2xl sm:text-5xl text-[var(--color-text)]">
          Повторяйте самые популярные вопросы на собеседованиях
        </h2>
        <h3 className="text-gray-400 text-base md:text-xl max-w-[500px]">
          Быстро освежайте знания через наши подборки вопросов
        </h3>
      </header>

      {/* Кнопки навигации */}
      <article className="hidden sm:flex place-self-end gap-2">
        <button
          onClick={() => scroll("left")}
          className="click-effect flex items-center justify-center w-10 h-10 border dark:border-st-gray-60 bg-[var(--bg-03)] cursor-pointer hover:bg-[var(--bg-02)]  dark:bg-st-white-T10 dark:hover:bg-st-white-T50 rounded-lg focus-visible:ring"
          aria-label="Предыдущий слайд"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="text-[#87898F] dark:text-st-gray-20"
            width="24"
            height="24"
          >
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 6L9 12L15 18" />
          </svg>
        </button>
        <button
          onClick={() => scroll("right")}
          className="click-effect flex items-center justify-center w-10 h-10 border dark:border-st-gray-60 bg-[var(--bg-03)] cursor-pointer hover:bg-[var(--bg-02)] dark:bg-st-white-T10 dark:hover:bg-st-white-T50 rounded-lg focus-visible:ring"
          aria-label="Следующий слайд"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="text-[#87898F] rotate-180"
            width="24"
            height="24"
          >
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 6L9 12L15 18" />
          </svg>
        </button>
      </article>

      {/* Карточки */}
      <section
        ref={carouselRef}
        className=" flex gap-5 pb-4 sm:pb-0 overflow-x-auto sm:overflow-x-hidden scrollbar-hide"
        aria-label="Список баз вопросов"
      >
        {[
          {
            id: 24,
            title: "Computer Science",
            img: "../../public/img/tehnalogi/computer_science.webp",
            desc: "Компьютерные науки помогают создавать, анализировать и оптимизировать технологии.",
          },
          {
            id: 23,
            title: "Docker",
            img: "../../public/img/tehnalogi/docker.webp",
            desc: "Топ вопросов для понимания Docker и ключевых концепций контейнеризации.",
          },
          {
            id: 28,
            title: "C++",
            img: "/cplusplus.webp",
            desc: "Топ вопросов по C++ для быстрого освоения ключевых концепций.",
          },
          {
            id: 19,
            title: "Python",
            img: "../../public/img/tehnalogi/python.svg",
            desc: "Часто задаваемые вопросы, ответы на которые обязан знать каждый Python разработчик.",
          },
          {
            id: 21,
            title: "Frontend",
            img: "../../public/img/tehnalogi/frontend.webp",
            desc: "Подборка самых частых вопросов на собеседованиях фронтенд разработчикам.",
          },
          {
            id: 26,
            title: "Java",
            img: "../../public/img/tehnalogi/java.webp",
            desc: "Лучшие вопросы по Java для подготовки к собеседованиям и изучения.",
          },
          {
            id: 25,
            title: "Golang",
            img: "../../public/img/tehnalogi/golang.webp",
            desc: "Список популярных вопросов по Go для подготовки к техническим интервью.",
          },
          {
            id: 27,
            title: "C#",
            img: "../../public/img/tehnalogi/csharp.svg",
            desc: "Топ вопросов по C# для подготовки и углубления знаний в программировании.",
          },
          {
            id: 20,
            title: "SQL",
            img: "../../public/img/tehnalogi/database.webp",
            desc: "SQL — мощный язык запросов для работы с СУБД. Каждый бэкендер должен знать эти вопросы.",
          },
          {
            id: 22,
            title: "Git",
            img: "../../public/img/tehnalogi/git.webp",
            desc: "Основные вопросы по Git для успешного прохождения технического собеседования.",
          },
        ].map(({ id, title, img, desc }) => (
          <article
            key={id}
            className=" flex relative min-w-[240px] md:min-w-[330px] md:w-1/3 h-[232px] rounded-[20px] bg-[var(--bg-02)] dark:bg-st-white-T5 p-5 flex-col justify-between"
          >
            <header className="flex flex-col gap-4">
              <div className="flex justify-between items-center gap-2">
                <h2 className="font-bold text-2xl sm:text-xl md:text-3xl text-[var(--color-text)] break-words">
                  {title}
                </h2>
                <div className="w-10 h-10 rounded-lg bg-st-black-10 dark:bg-gray-700 p-1 flex items-center justify-around">
                  <img src={img} alt={title} className="max-w-full max-h-full" />
                </div>
              </div>
              <p className="text-[#87898F] dark:text-gray-400 text-sm line-clamp-2">{desc}</p>
            </header>
            <Link
              to={`/podborki_voprosov/${id}`}
              className="w-full text-xs md:text-sm text-white rounded-xl px-5 py-3 bg-st-green-90 bg-[#049666] text-center"
            >
              Перейти к вопросам
            </Link>
          </article>
        ))}
      </section>
    </section>
  );
}
