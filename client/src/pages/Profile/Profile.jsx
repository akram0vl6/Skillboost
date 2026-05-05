import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { IoMdBookmark } from "react-icons/io";
import { BsBookmark } from "react-icons/bs";
import Edit from "./Edit/Edit";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [edit, setEdit] = useState(false);
  const [activeTab, setActiveTab] = useState(0); // 0 - Информация, 1 - Избранное
  const [visibleAnswerIndex, setVisibleAnswerIndex] = useState(null);
  const [bookmarks, setBookmarks] = useState([]);
  
  const storedData = JSON.parse(localStorage.getItem("data")) || {};
  const avatarUrl = storedData.avatarUrl ? storedData.avatarUrl : null;
  
  const navigate = useNavigate();

  // Загружаем избранное из localStorage при монтировании
  useEffect(() => {
    const savedBookmarks = localStorage.getItem("bookmarks");
    if (savedBookmarks) {
      setBookmarks(JSON.parse(savedBookmarks));
    }
  }, []);

  // Функция для удаления вопроса из избранного
  const removeBookmark = (questionId) => {
    const updatedBookmarks = bookmarks.filter(item => item._id !== questionId);
    setBookmarks(updatedBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
  };

  const handleLogout = () => {
    localStorage.removeItem("data");
    localStorage.clear();
    navigate('/auth');
  };

  // Данные для вкладок
  const tabs = [
    { id: 0, title: "Информация" },
    { id: 1, title: "Избранное" },
  ];

  // Контент для вкладок
  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return (
          <div>
            {/* Информация о пользователе */}
            <section className="w-full flex flex-col gap-3">
              <section className="flex flex-col gap-3 border border-[var(--color-text)] p-3 md:p-4 dark:bg-st-white-T5 rounded-2xl sm:flex-row">
                <section className="flex justify-between items-start gap-1.5">
                  <button className="relative w-fit h-fit" disabled>
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden">
                      {avatarUrl ? (
                        <img
                          src={`http://localhost:4444${avatarUrl}`}
                          alt="Аватар"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <FaUser className="w-full h-full text-[#6e8a9e] dark:text-st-gray-60" />
                      )}
                    </div>
                  </button>
                </section>
                <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <section className="flex flex-col gap-1">
                    <p className="text-[#6e8a9e]">Имя</p>
                    <p className="text-xl font-bold text-[var(--color-text)]">
                      {storedData.fullName}
                    </p>
                  </section>
                  <section className="flex flex-col gap-1">
                    <p className="text-[#6e8a9e]">Никнейм</p>
                    <p className="transition-colors text-xl font-bold w-fit text-[var(--color-text)]">
                      {storedData.username || "Не указан"}
                    </p>
                  </section>
                  <section className="flex flex-col gap-1">
                    <p className="text-[#6e8a9e]">Страна, город</p>
                    <p className="text-xl font-bold text-[var(--color-text)]">
                      {storedData.location || "Не указан"}
                    </p>
                  </section>
                  <section className="flex flex-col gap-1 lg:col-span-2">
                    <p className="text-[#6e8a9e]">Email</p>
                    <p className="text-xl font-bold text-wrap break-words text-[var(--color-text)]">
                      {storedData.email || "Не указан"}
                    </p>
                  </section>
                </section>
              </section>

              <section className="flex flex-col gap-3 border border-[var(--color-text)] p-3 md:p-4 dark:bg-st-white-T5 rounded-2xl">
                <h3 className="text-2xl font-bold text-[var(--color-text)]">О себе</h3>
                <p className="text-[#6e8a9e]">
                  {storedData.bio || "Биография не указана"}
                </p>
              </section>

              <section className="flex flex-col gap-3 border border-[var(--color-text)] p-3 md:p-4 dark:bg-st-white-T5 rounded-2xl">
                <h3 className="text-2xl font-bold text-[var(--color-text)]">Опыт</h3>
                <section className="flex flex-col gap-4">
                  <p className="text-[#6e8a9e]">
                    {storedData.specialization || "Специализация не указана"}
                  </p>
                </section>
              </section>

              <div className="flex justify-end gap-5">
                <button
                  onClick={handleLogout}
                  className="border border-[#ff0000] text-[#ff0000] p-2 rounded-lg cursor-pointer self-end"
                >
                  Выйти из аккаунта
                </button>
                <button
                  onClick={() => setEdit(true)}
                  className="border border-[var(--color-main)] text-[var(--color-main)] p-2 rounded-lg cursor-pointer self-end"
                >
                  Редактировать
                </button>
              </div>
            </section>
          </div>
        );
      case 1:
        return (
          <div className="p-4">
            <h3 className="text-xl font-bold mb-3 text-[var(--color-text)]">Избранное</h3>
            <div className="space-y-2">
              {bookmarks.length > 0 ? (
                bookmarks.map((item, index) => (
                  <section key={item._id} className="scroll-my-[75px] shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1),_0_10px_15px_-3px_rgba(0,0,0,0.1)] dark:shadow-none dark:border dark:border-surface-500 w-full py-2 px-4 rounded-2xl my-4">
                    <section className="relative w-full">
                      <section className="flex flex-col gap-3 pt-4 pb-2">
                        <section className="flex flex-col gap-2 text-sm">
                          <header className="text-xl font-medium flex gap-2 items-center">
                            <span className="min-w-[10px] min-h-[10px] inline-block rounded-full bg-gray-300"></span>
                            <section className="flex items-center gap-2 relative support-selectable">
                              <section>
                                <h2 className="font-normal">{item.title}</h2>
                              </section>
                            </section>
                            <section className="relative inline-flex ml-auto">
                              <button
                                onClick={() => removeBookmark(item._id)}
                                aria-label="Удалить из избранного"
                                className="relative flex items-center justify-center text-[var(--color-main)]"
                              >
                                <IoMdBookmark className="text-[20px] cursor-pointer" />
                              </button>
                            </section>
                          </header>

                          <div className="rounded-2xl p-0.5 px-3 w-fit font-medium text-base bg-[var(--bg-02)]">
                            {item.difficulty || "Без уровня"}
                          </div>
                          <div>
                            Рейтинг вопроса:
                            <span className="font-medium">
                              {" "}{item.rating || "Нет оценки"}
                            </span>
                          </div>
                        </section>

                        {visibleAnswerIndex === index ? (
                          <div className="answer-box">
                            <p>
                              <strong>Ответ:</strong> {item.answer}
                            </p>
                            <button
                              className="flex gap-1 items-center text-slate-500 dark:text-slate-400 hover:underline hover:decoration-1 hover:decoration-slate-300 hover:underline-offset-4 mt-2"
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
                ))
              ) : (
                <div className="text-center py-8 text-gray-400">
                  <svg
                    className="w-16 h-16 mx-auto mb-4 opacity-50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                  <p>Пока ничего не добавлено в избранное</p>
                  <p className="text-sm mt-1">Добавляйте вопросы во время собеседований</p>
                </div>
              )}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {edit ? (
        <div>
          <Edit setEdit={setEdit} />
        </div>
      ) : (
        <div className="pb-5">
          {/* Табы */}
          <div className="p-tabview-tablist-scroll-container" data-pc-section="navcontent">
            <ul className="p-tabview-tablist relative flex gap-10" data-pc-section="nav">
              {tabs.map((tab) => (
                <li
                  key={tab.id}
                  className={`p-tabview-tablist-item ${activeTab === tab.id ? 'p-tabview-tablist-item-active' : ''}`}
                  role="presentation"
                  data-pc-section="header"
                  data-pc-name="tabpanel"
                  data-p-active={activeTab === tab.id}
                  data-pc-index={tab.id}
                >
                  <a
                    className="p-tabview-tab-header text-lg cursor-pointer"
                    tabIndex={activeTab === tab.id ? 0 : -1}
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    data-pc-section="headeraction"
                  >
                    <span className="p-tabview-tab-title" data-pc-section="headertitle">
                      {tab.title}
                    </span>
                  </a>
                </li>
              ))}
              {/* Индикатор активной вкладки */}
              <li
                className="p-tabview-ink-bar !h-1 absolute bottom-0 transition-all duration-300"
                role="presentation"
                aria-hidden="true"
                data-pc-section="inkbar"
                style={{
                  marginTop: '32px',
                  width: `${25 / tabs.length}%`,
                  left: `${(activeTab / tabs.length) * 29}%`,
                  backgroundColor: 'var(--color-main)'
                }}
              />
            </ul>
          </div>

          <h1 className="font-bold text-[32px] px-2 md:px-0 my-5 text-[var(--color-text)]">
            Мой профиль
          </h1>

          {/* Контент активной вкладки */}
          <div>
            {renderTabContent()}
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;