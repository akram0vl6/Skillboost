import React, { useState, useRef, useEffect } from 'react';

const LanguageSelect = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { name: 'all', label: 'Язык программирования', icon: null },
    { name: 'JS', label: 'JS', icon: '' },
    { name: 'GO', label: 'GO', icon: '' },
    { name: 'SQL', label: 'SQL', icon: '' },
    { name: 'C', label: 'C', icon: '' },
    { name: 'Python', label: 'Python', icon: '' },
  ];

  const selectedLanguage = languages.find(lang => lang.name === value);
  const displayText = selectedLanguage?.label || 'Язык программирования';
  const displayIcon = selectedLanguage?.icon;
  const hasValue = value !== 'all' && value !== '';

  // Закрытие при клике вне
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (langName) => {
    onChange({ target: { value: langName } });
    setIsOpen(false);
  };

  const handleClear = (e) => {
    e.stopPropagation();
    onChange({ target: { value: 'all' } });
  };

  return (
    <div ref={dropdownRef} className="relative">
      {/* Основной контейнер - имитация select */}
      <div
        className="flex items-center border border-gray-700 rounded-lg  min-w-[200px]"
        onClick={() => setIsOpen(!isOpen)}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setIsOpen(!isOpen);
          }
        }}
      >
        {/* Лейбл */}
        <span className="flex items-center gap-2 px-4 py-2.5 flex-1 ">
          {displayIcon && (
            <img src={displayIcon} alt="" className="h-4 w-4" />
          )}
          <span className={!hasValue ? 'text-gray-500' : ''}>
            {displayText}
          </span>
        </span>

        {/* Кнопка очистки */}
        {hasValue && (
          <button
            onClick={handleClear}
            className="p-1 hover:bg-gray-700 rounded mr-1"
            aria-label="Очистить"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-400 hover:text-gray-300"
            >
              <path
                d="M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z"
                fill="currentColor"
              />
            </svg>
          </button>
        )}

        {/* Стрелка */}
        <div className="px-2">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          >
            <path
              d="M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      {/* Выпадающий список */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-[var(--bg-02)] border border-gray-700 rounded-lg shadow-lg z-50 overflow-hidden">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className={`flex items-center gap-2 px-4 py-2.5 cursor-pointer text-sm transition-colors
                ${lang.name === value 
                  ? 'bg-[var(--bg-03)] ' 
                  : 'text-gray-400 hover:bg-[var(--bg-03)]'
                }
                ${lang.name === 'all' ? 'text-gray-500' : ''}
              `}
              onClick={() => handleSelect(lang.name)}
            >
              {lang.icon && (
                <img src={lang.icon} alt="" className="h-4 w-4" />
              )}
              <span>{lang.label}</span>
              {lang.name === value && (
                <svg
                  className="ml-auto w-4 h-4 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelect;