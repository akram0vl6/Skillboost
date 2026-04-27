import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {dataCorusel} from '../data/technologies'

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
        {dataCorusel.map(({ id, title, img, desc,path }) => (
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
              to={`/baza_voprosov/${path}`}
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
