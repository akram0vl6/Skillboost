import React, { useState, useRef, useEffect } from 'react';
import { workerCode } from '../../shared/data/codingTaskData';
import { TaskTags } from '../../widgets/Coding/CodingTaskTags';
import { CodingEditorPanel } from '../../widgets/Coding/CodingEditorPanel';
import { useParams } from 'react-router-dom';
import { tasksData } from '../../shared/data/codingData';

export const CodingPage = () => {
  // 1. Получаем id из URL
  const { id } = useParams();
  console.log(id);

  // 2. Состояния
  const [activeTab, setActiveTab] = useState('description');
  const [currentTaskId, setCurrentTaskId] = useState(Number(id));
  const [code, setCode] = useState('');  // ← БЫЛО ПОТЕРЯНО!
  const [results, setResults] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [bottomTab, setBottomTab] = useState('result');

  // 3. Находим текущую задачу (после того как currentTaskId установлен)
  const taskData = tasksData.find(t => t.id === currentTaskId)

  // 4. Обновляем код при смене задачи
  useEffect(() => {
    if (taskData) {
      setCode(taskData.starterCode);
    }
  }, [currentTaskId]);  // ← зависимость!

  // 5. Синхронизация id из URL → currentTaskId
  useEffect(() => {
    if (id) {
      setCurrentTaskId(Number(id));  // ← преобразуем в число
    }
  }, [id]);  // ← зависимость!

  const workerRef = useRef(null);

  const handleRun = () => {
    if (isRunning) return;

    setIsRunning(true);
    setResults(null);
    setBottomTab('result');

    if (workerRef.current) {
      workerRef.current.terminate();
    }

    const blob = new Blob([workerCode], { type: 'application/javascript' });
    const workerUrl = URL.createObjectURL(blob);
    const worker = new Worker(workerUrl);
    workerRef.current = worker;

    const timeout = setTimeout(() => {
      worker.terminate();
      workerRef.current = null;
      setIsRunning(false);
      setResults({
        success: false,
        error: 'Превышено время выполнения (10 секунд). Возможно, бесконечный цикл.',
      });
      URL.revokeObjectURL(workerUrl);
    }, 10000);

    worker.onmessage = (e) => {
      clearTimeout(timeout);
      setResults(e.data);
      setIsRunning(false);

      worker.terminate();
      workerRef.current = null;
      URL.revokeObjectURL(workerUrl);
    };

    worker.onerror = (error) => {
      clearTimeout(timeout);
      setResults({
        success: false,
        error: error.message || 'Неизвестная ошибка в Worker',
      });
      setIsRunning(false);
      worker.terminate();
      workerRef.current = null;
      URL.revokeObjectURL(workerUrl);
    };

    worker.postMessage({
      userCode: code,
      testCases: taskData.testCases,
    });
  };

  // Очистка при размонтировании
  useEffect(() => {
    return () => {
      if (workerRef.current) {
        workerRef.current.terminate();
      }
    };
  }, []);

  // Если задача не найдена
  if (!taskData) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-400">
        Задача не найдена
      </div>
    );
  }
  console.log(taskData);

  return (
    <div className="text-[var(--color-text)] flex flex-col h-screen mb-10">
      {/* Header */}
      <header className="px-4 py-2 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-lg font-semibold">Coding Challenge</h1>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleRun}
              disabled={isRunning}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${isRunning
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-gray-700 hover:bg-gray-600'
                }`}
            >
              {isRunning ? 'Выполняется...' : '▶ Запустить'}
            </button>
            <button className="px-4 py-1.5 bg-green-600 hover:bg-green-500 rounded-md text-sm font-medium transition-colors">
              Отправить
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-1/3 min-w-[400px] h-[90%] border-r border-gray-700 flex flex-col overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-gray-700">
            {[
              { key: 'description', label: 'Описание' },
              { key: 'my-solutions', label: 'Мои решения' },
              { key: 'solutions', label: 'Решения' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${activeTab === tab.key
                    ? 'border-[var(--color-main)] text-[var(--color-main)]'
                    : 'border-transparent text-gray-400 hover:text-gray-300'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Problem Content */}
          <div className="flex-1 overflow-y-auto p-4">
            {activeTab === 'description' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">{taskData.title}</h2>
                  <button className="text-gray-400 hover:text-gray-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  </button>
                </div>

                <TaskTags
                  difficulty={taskData.difficulty}
                  status={taskData.status}
                  companies={taskData.companies}
                  extraCompanies={taskData.extraCompanies}
                  solvedPercent={taskData.solvedPercent}
                  languages={taskData.languages}
                />

                <div className="prose prose-invert prose-sm max-w-none space-y-3">
                  {taskData.description.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}

                  {taskData.requirements && (
                    <div className="mt-4 space-y-2">
                      {taskData.requirements.map((item, idx) => (
                        <p key={idx}>{item}</p>
                      ))}
                    </div>
                  )}

                  {taskData.examples.map((example, idx) => (
                    <div key={idx} className="mt-4 space-y-3">
                      <h3 className="font-semibold">Пример {idx + 1}:</h3>
                      <div>
                        <p className="text-gray-400 mb-2">Ввод:</p>
                        <div className="bg-[var(--bg-03)] rounded-lg p-3 font-mono text-sm whitespace-pre">
                          {example.input}
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-400 mb-2">Вывод:</p>
                        <div className="bg-[var(--bg-03)] rounded-lg p-3 font-mono text-sm">
                          {example.output}
                        </div>
                      </div>
                      {example.explanation && (
                        <div className="text-gray-500 text-xs space-y-1">
                          {example.explanation.map((line, i) => (
                            <div key={i}>{line}</div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'my-solutions' && (
              <div className="text-center text-gray-400 py-8">У вас пока нет решений</div>
            )}

            {activeTab === 'solutions' && (
              <div className="text-center text-gray-400 py-8">Решения других пользователей</div>
            )}
          </div>
        </div>

        {/* Right Side - Code Editor Panel */}
        <CodingEditorPanel
          Language={taskData.languages}
          code={code}
          onCodeChange={setCode}
          results={results}
          isRunning={isRunning}
          bottomTab={bottomTab}
          onBottomTabChange={setBottomTab}
          testCases={taskData.testCases}
        />
      </div>
    </div>
  );
};