// ModalGraph.jsx
import React, { useEffect } from 'react';

const ModalGraph = ({ isOpen, onClose, nodeData }) => {
  // Блокируем скролл тела при открытом модальном окне
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Закрытие по Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Данные узла (с защитой от undefined)
  const nodeInfo = nodeData?.data || nodeData || {};
  const {
    label,
    description,
    difficulty,
    duration,
    tasks = [],
    resources = []
  } = nodeInfo;

  return (
    <>
      {/* Затемнённый фон (оверлей) */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Модальное окно (выезжает справа) */}
      <div
        className={`
          fixed top-0 right-0 h-full w-full sm:w-96 md:w-[450px] 
          bg-[var(--bg-03)]
          text-[var(--color-text)]
          shadow-2xl z-50 
          flex flex-col
          transform transition-transform duration-300 ease-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Заголовок с кнопкой закрытия */}
        <div className="flex items-center justify-between p-5 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-[var(--color-text)]">
            {label || 'Информация'}
          </h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <svg
              className="w-6 h-6 text-gray-500 dark:text-gray-400"
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

        {/* Контент */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {/* Теги (уровень сложности + время изучения) */}
          <div className="flex flex-wrap gap-2">
            {difficulty && (
              <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-[var(--color-text)] dark:bg-blue-900/30 ">
                🎯 {difficulty}
              </span>
            )}
            {duration && (
              <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-green-100 --color-text dark:bg-green-900/30 ">
                ⏱️ {duration}
              </span>
            )}
          </div>

          {/* Описание */}
          {description && (
            <div>
              <h3 className="text-sm font-semibold mb-2 uppercase tracking-wide">
                Описание
              </h3>
              <p className=" leading-relaxed">
                {description}
              </p>
            </div>
          )}

          {/* Задачи (tasks) */}
          {tasks.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold  mb-2 uppercase tracking-wide">
                Что нужно сделать
              </h3>
              <ul className="space-y-2">
                {tasks.map((task, idx) => (
                  <li key={idx} className="flex items-start gap-2 ">
                    <span className="text-[var(--color-main)] mt-0.5">✓</span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Ресурсы (resources) */}
          {resources.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold mb-2 uppercase tracking-wide">
                Полезные ссылки
              </h3>
              <ul className="space-y-2">
                {resources.map((resource, idx) => (
                  <li key={idx}>
                    <a
                      href={resource.url || resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-main)] hover:underline flex items-center gap-1 text-sm"
                    >
                      {resource.title || resource.name || 'Ссылка'}
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Если нет никакой информации */}
          {!description && tasks.length === 0 && resources.length === 0 && (
            <div className="text-center text-gray-400 py-8">
              <svg
                className="w-12 h-12 mx-auto mb-3 opacity-50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-sm">Подробная информация о теме скоро появится</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ModalGraph;