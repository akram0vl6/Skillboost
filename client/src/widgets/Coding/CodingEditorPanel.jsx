import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { ResultsPanel } from './CodingResultsPanel';

export const CodingEditorPanel = ({
    code,
    onCodeChange,
    results,
    isRunning,
    bottomTab,
    onBottomTabChange,
    testCases,
  }) => {
    // 1. Инициализируем тему из localStorage при первой загрузке
    const [theme, setTheme] = useState(() => {
      return localStorage.getItem('theme') || 'light';
    });

    // 2. Подписываемся на изменения темы
    useEffect(() => {
      const handleThemeChange = (event) => {
        // Принимаем новое значение темы из события
        setTheme(event.detail);
      };

      // Слушаем кастомное событие
      window.addEventListener('themeChanged', handleThemeChange);

      // Убираем слушатель при демонтаже компонента, чтобы не было утечек памяти
      return () => {
        window.removeEventListener('themeChanged', handleThemeChange);
      };
    }, []);

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
    {/* Editor Header */}
    <div className="border-b border-gray-700 px-4 py-2 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-400">JavaScript</span>
      </div>
    </div>

    {/* Monaco Editor */}
    <div className="h-[60%]">
      <Editor
        defaultLanguage="javascript"
        value={code}
        onChange={(value) => onCodeChange(value || '')}
        // 3. Используем актуальное состояние темы
        theme={theme === 'dark' ? "vs-dark" : "light"} 
        options={{
          fontSize: 14,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          automaticLayout: true,
          padding: { top: 16 },
          fontFamily: "'Fira Code', 'Consolas', 'Monaco', monospace",
          fontLigatures: true,
          lineNumbers: 'on',
          renderLineHighlight: 'all',
          matchBrackets: 'always',
          tabSize: 2,
          wordWrap: 'on',
        }}
      />
    </div>

    {/* Bottom Panel */}
    <div className="h-[250px] border-t border-gray-700 flex flex-col">
      <div className="flex border-b border-gray-700">
        <button
          onClick={() => onBottomTabChange('result')}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
            bottomTab === 'result'
              ? 'border-[var(--color-main)] text-[var(--color-main)]'
              : 'border-transparent text-gray-400 hover:text-gray-300'
          }`}
        >
          Результат кода
        </button>
        <button
          onClick={() => onBottomTabChange('testcases')}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
            bottomTab === 'testcases'
              ? 'border-transparent text-gray-400 hover:text-gray-300'
              : 'border-transparent text-gray-400 hover:text-gray-300'
          }`}
        >
          Тест кейсы
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {bottomTab === 'result' ? (
          <ResultsPanel results={results} isRunning={isRunning} />
        ) : (
          <div className="p-4 space-y-3">
            <p className="text-gray-400 text-sm">Тесты, которые будут запущены:</p>
            {testCases.map((test, idx) => (
              <div key={idx} className="bg-[var(--bg-03)] rounded-lg p-3 font-mono text-sm">
                <div className="text-gray-400">
                  Вход: [{test.input.map(JSON.stringify).join(', ')}]
                </div>
                <div className="text-yellow-400">
                  Ожидается: {JSON.stringify(test.expected)}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
  )
}
