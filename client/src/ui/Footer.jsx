import React from "react";

const Footer = () => {
  return (
    <div className="">
      <footer className="application-footer md:flex hidden w-full justify-center pb-0 py-6">
        <section className="text-white text-sm bg-[var(--bg-footer)] dark:bg-st-white-T5 px-10 pt-10 pb-6 rounded-t-[40px] h-full">
          <section className="flex max-[750px]:flex-col lg:gap-24 gap-5">
            <h3 className="text-3xl font-bold mr-52">Skillboost</h3>

            {/* Обучение */}
            <section className="flex flex-col gap-4">
              <header className="font-semibold text-xl flex max-[750px]:hidden">
                Обучение
              </header>
              <section className="hidden max-[750px]:block">
                <span>Обучение</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z"
                  />
                </svg>
              </section>
              <nav className="flex-col flex gap-3">
                <section className="text-sm">
                  <a
                    href="/roadmaps"
                    className="hover:text-white dark:text-st-gray-40 dark:hover:text-white transition-colors"
                  >
                    Роадмапы
                  </a>
                </section>
                <section className="text-sm">
                  <a
                    href="/podborki_voprosov"
                    className="hover:text-white dark:text-st-gray-40 dark:hover:text-white transition-colors"
                  >
                    Топ вопросов
                  </a>
                </section>
                <section className="text-sm">
                  <a
                    href="/baza_voprosov"
                    className="hover:text-white dark:text-st-gray-40 dark:hover:text-white transition-colors"
                  >
                    База вопросов
                  </a>
                </section>
                <section className="text-sm">
                  <a
                    href="/interviews"
                    className="hover:text-white dark:text-st-gray-40 dark:hover:text-white transition-colors"
                  >
                    Собеседование
                  </a>
                </section>
                <section className="text-sm">
                  <a
                    href="/profile"
                    className="hover:text-white dark:text-st-gray-40 dark:hover:text-white transition-colors"
                  >
                    Профиль
                  </a>
                </section>
              </nav>
            </section>

            {/* Связаться с нами */}
            <section className="flex flex-col gap-4">
              <header className="font-semibold text-xl flex max-[750px]:hidden">
                Связаться с нами
              </header>
              <section className="hidden max-[750px]:block">
                <span>Связаться с нами</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z"
                  />
                </svg>
              </section>
              <nav className="flex-col flex gap-3">
                <section className="text-sm">
                  <a
                    href="https://t.me/solvit_support"
                    rel="noopener noreferrer"
                    className="hover:text-white dark:text-st-gray-40 dark:hover:text-white transition-colors"
                  >
                    Поддержка (Телеграм)
                  </a>
                </section>
                <section className="text-sm">
                  <a
                    href="/support"
                    className="hover:text-white dark:text-st-gray-40 dark:hover:text-white transition-colors"
                  >
                    Поддержка
                  </a>
                </section>
              </nav>
            </section>

            {/* Медиа */}
            <section className="flex flex-col gap-4">
              <header className="font-semibold text-xl flex max-[750px]:hidden">
                Медиа
              </header>
              <section className="hidden max-[750px]:block">
                <span>Медиа</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z"
                  />
                </svg>
              </section>
              <nav className="flex-row flex gap-3">
                <section className="text-sm">
                  <a
                    href="https://t.me/solvit_edu"
                    target="_blank"
                    aria-label="Ссылка на Телеграм"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 48 48"
                      className="border rounded-full p-1 w-7 h-7 dark:border-st-gray-40 hover:text-white dark:text-st-gray-40 dark:hover:text-white dark:hover:border-white transition-colors"
                    >
                      <path
                        fill="currentColor"
                        d="M41.42 7.309s3.885-1.515 3.56 2.164c-.107 1.515-1.078 6.818-1.834 12.553l-2.59 16.99s-.216 2.489-2.159 2.922c-1.942.432-4.856-1.515-5.396-1.948c-.432-.325-8.094-5.195-10.792-7.575c-.756-.65-1.62-1.948.108-3.463L33.649 18.13c1.295-1.3 2.59-4.33-2.806-.65l-15.11 10.28s-1.727 1.083-4.964.109l-7.016-2.165s-2.59-1.623 1.835-3.246c10.793-5.086 24.068-10.28 35.831-15.15"
                      />
                    </svg>
                  </a>
                </section>
              </nav>
            </section>
          </section>

          <div
            className="p-divider p-component p-divider-horizontal p-divider-solid p-divider-left"
            role="separator"
            aria-orientation="horizontal"
          ></div>

          <section className="flex gap-5 justify-end mt-5">
            <a
              href="/privacy"
              className="underline text-base hover:text-surface-600 transition-colors"
            >
              Правовая информация
            </a>
            <a
              href="/terms-of-usage"
              className="underline text-base hover:text-surface-600 transition-colors"
            >
              Оферта
            </a>
          </section>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
