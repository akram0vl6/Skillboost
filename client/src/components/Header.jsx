import {
  FaHome,
  FaCog,
  FaGraduationCap,
  FaUserTie,
  FaRegUserCircle,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
// import "./Header.css";
import ThemeSwitcher from "../ui/ThemeSwitcher";
import { use, useEffect, useRef, useState } from "react";
import { IoIosContact } from "react-icons/io";

const routes = [
  {
    name: "Вопросы с собеседований",
    path: ["/baza_voprosov", "/startInterview", "/podborki_voprosov"],
  },
  { name: "Лайв кодинг", path: "/coding" },
  { name: "Обучение", path: "/podborki_voprosov" },
  { name: "Менторы", path: "/mentors" },
];
const routes02 = [
  { name: "База вопросов", path: "/baza_voprosov" },
  { name: "Тренажёр собеседований", path: "/startInterview" },
  { name: "Топы вопросов", path: "/podborki_voprosov" },
];

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const storedRaw = localStorage.getItem("data");
  const storedData = storedRaw ? JSON.parse(storedRaw) : null;

  const [routerData, setRouterData] = useState("");

  // useEffect(() => {
  //   setRouterData(location.pathname);
  // }, []);

  console.log(storedData);

  // const avatarUrl = storedData.avatarUrl ? storedData.avatarUrl : null;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const highlightPaths = [
    "/baza_voprosov",
    "/startInterview",
    "/podborki_voprosov",
  ];

  const dropdownRef = useRef(null); // для выпадающего блока

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMobileMenuOpen(false); // Закрыть, если клик вне
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

    useEffect(() => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [location.pathname])

  

  return (
    <>
      {/* <header className="bg-[var(--color-base)] text-[var(--color-text)] flex items-center justify-between px-4 ">
      
      <h1 className="text-xl font-bold mt-[5px]">
        <a href="/home">Skillboost</a>
      </h1>

      <ul className="flex gap-4 items-center">
        <li className={`py-[10px] px-[15px] rounded-md ${location.pathname === "/home/startInterview" ? "text-[var(--color-main)] bg-[var(--color-accent)]" : ""}`}>
          <Link to="/home/startInterview">Вопросы с собеседований</Link>
        </li>
        <li className={`py-[10px] px-[15px] rounded-md ${location.pathname === "/home/settings" ? "text-[var(--color-main)] bg-[#1e293b] " : ""}`}>
          <Link to="/home/settings" className="flex items-center gap-1">
            <FaCog />
            <span>Настройки</span>
          </Link>
        </li>
        <li className={`py-[10px] px-[15px] rounded-md ${location.pathname === "/home/education" ? "text-[var(--color-main)] bg-[#1e293b] " : ""}`}>
          <Link to="/home/education" className="flex items-center gap-1">
            <FaGraduationCap />
            <span>Обучение</span>
          </Link>
        </li>
      </ul>

      <div className="flex items-center gap-4">

        <Link to="/home/profile" className="text-2xl">
          {avatarUrl ? (
            <img
              src={`http://localhost:4444${avatarUrl}`}
              alt="Аватар"
              className="w-8 h-8 rounded-full object-cover"
            />
          ) : (
            <FaRegUserCircle />
          )}
        </Link>
      </div>
    </header> */}
      <section className="top-0 z-50 w-full  shadow-sm">
        <nav className="flex items-center justify-between min-h-[60px]">
          {/* Логотип */}
          <section className="text-2xl font-semibold">
            <Link to="/" className="text-[var(--color-text)]">
              Skillboost
            </Link>
          </section>

          {/* Бургер-меню (мобилка) */}
          <button
            className="lg:hidden flex items-center justify-center p-2 rounded-md text-[var(--color-text)] hover:bg-[var(--bg-02)] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--color-main)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Навигация — desktop */}
          <article className="hidden lg:flex gap-3 items-center">
            <section className="  top-0 z-50  ">
              <nav className="flex flex-row items-center justify-between p-2 min-h-[60px]">
                <section className="text-3xl font-semibold">
                  <Link to="/">
                    {/* <img
                src="/solvit_logo.svg"
                alt="логотип"
                width="220"
                className="lg:w-[220px] w-[190px] dark:hidden block"
              />
              <img
                src="/solvit_logo_dark.svg"
                alt="логотип"
                width="220"
                className="lg:w-[220px] w-[190px] hidden dark:block"
              /> */}
                    {/* <h1 className="text-[var(--color-text)]">Skillboost</h1> */}
                  </Link>
                </section>

                <article className="hidden lg:flex gap-3 items-center">
                  <div className="group relative">
                    <button
                      className={`px-3 cursor-pointer inline-flex items-center gap-1.5 py-2 rounded-lg
    hover:text-[var(--color-main)] hover:bg-[#EEFFF2] dark:hover:bg-slate-800
    ${
      ["/baza_voprosov", "/startInterview", "/podborki_voprosov"].includes(
        currentPath
      )
        ? "text-[#09B87E] bg-[var(--bg-02)]"
        : "text-[var(--color-text)]"
    }`}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      Вопросы с собеседований
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`fill-st-black dark:fill-white icon mt-1 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        width="13"
                        height="8"
                        viewBox="0 0 13 8"
                      >
                        <path d="M6.5 7.4L0.5 1.4L1.9 0L6.5 4.6L11.1 0L12.5 1.4L6.5 7.4Z" />
                      </svg>
                    </button>

                    <div
                      ref={dropdownRef}
                      className={`absolute top-12 left-0 w-full min-w-[200px] bg-[var(--bg-03)] border border-[#262840] dark:bg-surface-900 shadow-lg rounded-xl py-2 z-50 overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "opacity-100 scale-100 visible"
                          : "opacity-0 scale-95 invisible"
                      }`}
                    >
                      <ul className="flex flex-col">
                        {routes02.map(({ name, path }) => (
                          <Link
                            key={path}
                            to={path}
                            className={
                              path === currentPath
                                ? "text-[#09B87E] block font-normal px-4 py-2.5  hover:text-st-green-90 hover:bg-[var(--bg-02)] transition-colors dark:hover:text-white"
                                : "px-4 py-2.5  text-[var(--color-text)] hover:bg-[var(--bg-02)] rounded"
                            }
                          >
                            {name}
                          </Link>
                        ))}
                        {/* <li>
                          <a
                            href="/baza_voprosov"
                            className="text-[#09B87E] block font-normal px-4 py-2.5 hover:dark:bg-surface-700 hover:text-st-green-90 hover:bg-[var(--bg-02)] transition-colors dark:hover:text-white"
                          >
                            База вопросов
                          </a>
                        </li>
                        <li>
                          <a
                            href="/interviews"
                            className="block font-normal px-4 py-2.5 hover:dark:bg-surface-700 hover:text-st-green-90 hover:bg-[var(--bg-02)] transition-colors dark:hover:text-white"
                          >
                            Тренажёр собеседований
                          </a>
                        </li>
                        <li>
                          <a
                            href="/podborki_voprosov"
                            className="block font-normal px-4 py-2.5 hover:dark:bg-surface-700 hover:text-st-green-90 hover:bg-[var(--bg-02)] transition-colors dark:hover:text-white"
                          >
                            Топы вопросов
                          </a>
                        </li> */}
                      </ul>
                    </div>
                  </div>

                  <Link
                    to="/coding"
                    className={`px-3 cursor-pointer inline-flex items-center gap-1.5 py-2 rounded-lg
    hover:text-[var(--color-main)] hover:bg-[#EEFFF2] dark:hover:bg-slate-800
    ${
      currentPath === "/coding"
        ? "text-[#09B87E] bg-[var(--bg-02)]"
        : "text-[var(--color-text)]"
    }`}
                  >
                    Лайв кодинг
                  </Link>

                  <div className="group relative">
                    <button className="px-3 cursor-pointer outline-none bg-transparent text-[var(--color-text)]  hover:text-[var(--color-main)]  focus:ring-1 inline-flex items-center gap-1.5 hover:!text-st-green-90 hover:bg-[#EEFFF2] dark:hover:bg-slate-800 py-2 rounded-lg transition-colors">
                      Обучение
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-st-black dark:fill-white icon mt-1 group-hover:fill-st-green-90 transition-colors"
                        width="13"
                        height="8"
                        viewBox="0 0 13 8"
                      >
                        <path d="M6.5 7.4L0.5 1.4L1.9 0L6.5 4.6L11.1 0L12.5 1.4L6.5 7.4Z" />
                      </svg>
                    </button>
                    <ul className="absolute flex-col opacity-0 hidden transition top-12 left-0 w-full min-w-[200px] bg-white border dark:border-surface-700 dark:bg-surface-900 shadow-lg rounded-xl py-2">
                      <li>
                        <Link
                          to="/roadmaps"
                          className="block px-4 py-2.5 hover:dark:bg-surface-700 hover:text-st-green-90 hover:bg-[#EEFFF2] transition-colors"
                        >
                          Роадмапы
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/progress"
                          className="block px-4 py-2.5 hover:dark:bg-surface-700 hover:text-st-green-90 hover:bg-[#EEFFF2] transition-colors"
                        >
                          Мой прогресс
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/naparniki"
                          className="block px-4 py-2.5 hover:dark:bg-surface-700 hover:text-st-green-90 hover:bg-[#EEFFF2] transition-colors"
                        >
                          Напарники
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <Link
                    to="/mentors"
                    className={`px-3 cursor-pointer inline-flex items-center gap-1.5 py-2 rounded-lg
    hover:text-[var(--color-main)] hover:bg-[#EEFFF2] dark:hover:bg-slate-800
    ${
      currentPath === "/mentors"
        ? "text-[#09B87E] bg-[var(--bg-02)]"
        : "text-[var(--color-text)]"
    }`}
                  >
                    Менторы
                  </Link>
                </article>

                {/* <section className="hidden lg:flex items-center gap-3">
            <a href="/subscription" class="flex items-center gap-2">
              <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 fill-[#FFB800] [&amp;&gt;path]:stroke-[#FFB800]"
              >
                <path
                  d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z"
                  fill="#FFB800"
                ></path>
              </svg>
              <h3 class="font-normal text-[var(--color-text)]">Премиум</h3>
            </a>
            <section>
              <a
                href="/auth"
                class="font-medium rounded-lg px-5 py-[9px] text-center text-white bg-black hover:text-white dark:bg-white dark:text-black dark:border dark:hover:text-black"
                type="button"
              >
                {" "}
                Войти{" "}
              </a>
            </section>
            <ThemeSwitcher />
          </section> */}
              </nav>
            </section>
          </article>

          {/* Навигация — mobile (выпадает вниз) */}
          {mobileMenuOpen && (
            <div className="lg:hidden absolute top-0 left-0 w-full bg-[var(--bg-03)]  shadow-md p-4 z-40 space-y-3">
              <div className="w-full flex justify-end">
                <button
                  className="g:hidden flex items-center justify-center p-2 rounded-md text-[var(--color-text)] hover:bg-[var(--bg-02)] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--color-main)]"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex justify-between items-center  border-y-1 border-white py-2 px-3">
                {storedData ? (
                  <div className="">
                    <Link to="/profile">
                      <IoIosContact className="w-10 h-10" />
                    </Link>
                  </div>
                ) : (
                  <Link
                    to="/auth"
                    className="font-medium rounded-lg px-5 py-[9px] text-center text-white bg-black hover:text-white dark:bg-white dark:text-black dark:border dark:hover:text-black"
                  >
                    Войти
                  </Link>
                )}

                <ThemeSwitcher />
              </div>
              <Link href="/subscription" class="flex items-center gap-2">
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 fill-[#FFB800] [&amp;&gt;path]:stroke-[#FFB800]"
                >
                  <path
                    d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z"
                    fill="#FFB800"
                  ></path>
                </svg>
                <h3 class="font-normal text-[var(--color-text)]">Премиум</h3>
              </Link>
              <Link
                to="/baza_voprosov"
                className="block text-sm text-[var(--color-text)]"
              >
                База вопросов
              </Link>
              <Link
                to="/interviews"
                className="block text-sm text-[var(--color-text)]"
              >
                Тренажёр собеседований
              </Link>
              <Link
                to="/podborki_voprosov"
                className="block text-sm text-[var(--color-text)]"
              >
                Топы вопросов
              </Link>
              <Link
                to="/coding"
                className="block text-sm text-[var(--color-text)]"
              >
                Лайв кодинг
              </Link>
              <Link
                to="/roadmaps"
                className="block text-sm text-[var(--color-text)]"
              >
                Роадмапы
              </Link>
              <Link
                to="/progress"
                className="block text-sm text-[var(--color-text)]"
              >
                Мой прогресс
              </Link>
              <Link
                to="/naparniki"
                className="block text-sm text-[var(--color-text)]"
              >
                Напарники
              </Link>
              <Link
                to="/mentors"
                className="block text-sm text-[var(--color-text)]"
              >
                Менторы
              </Link>
            </div>
          )}

          {/* Справа — только для десктопа */}
          <section className="hidden lg:flex items-center gap-3">
            <a href="/subscription" class="flex items-center gap-2">
              <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 fill-[#FFB800] [&amp;&gt;path]:stroke-[#FFB800]"
              >
                <path
                  d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z"
                  fill="#FFB800"
                ></path>
              </svg>
              <h3 class="font-normal text-[var(--color-text)]">Премиум</h3>
            </a>
            {storedData ? (
              <div className="">
                <Link to="/profile">
                  <IoIosContact className="w-10 h-10" />
                </Link>
              </div>
            ) : (
              <Link
                to="/auth"
                className="font-medium rounded-lg px-5 py-[9px] text-center text-white bg-black hover:text-white dark:bg-white dark:text-black dark:border dark:hover:text-black"
              >
                Войти
              </Link>
            )}

            <ThemeSwitcher />
          </section>
        </nav>
      </section>
    </>
  );
};

export default Header;
