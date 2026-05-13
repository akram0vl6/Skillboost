// Превращаем строку JS в файл, из которого можно создать Worker
const blob = new Blob([workerCode], { type: 'application/javascript' });
const workerUrl = URL.createObjectURL(blob);
const worker = new Worker(workerUrl);


// Код, который будет выполняться в Worker'е
const workerCode = `
  self.onmessage = function(e) {
    const { userCode, testCases } = e.data;
    
    try {
      // 1. Создаём функцию из строки кода пользователя
      const userFunction = new Function('return ' + userCode)();
      
      // 2. Прогоняем тесты
      const results = testCases.map(test => {
        const result = userFunction(...test.input);
        return {
          passed: JSON.stringify(result) === JSON.stringify(test.expected),
          input: test.input,
          expected: test.expected,
          got: result
        };
      });
      
      // 3. Отправляем результат обратно
      self.postMessage({ success: true, results });
      
    } catch (error) {
      // Если код с ошибкой — отправляем ошибку
      self.postMessage({ success: false, error: error.message });
    }
  };
`;

worker.postMessage({
    userCode: code,  // код из редактора
    testCases: taskData.testCases  // тесты из данных задачи
  });

  worker.onmessage = (e) => {
    const data = e.data;
    // data.success — успешно ли выполнился код
    // data.results — массив результатов тестов
    // data.error — текст ошибки, если была
    setResults(data);
  };

  const timeout = setTimeout(() => {
    worker.terminate();  // убиваем Worker
    setResults({ 
      success: false, 
      error: 'Превышено время выполнения (3 секунды)' 
    });
  }, 3000);
  
  // Если Worker ответил раньше — очищаем таймер
  worker.onmessage = (e) => {
    clearTimeout(timeout);
    // ... обрабатываем результат
  };

  {
    success: true,
    results: [
      { 
        passed: true, 
        input: [[8, 3, 5], [5, 6]], 
        expected: 1, 
        got: 1 
      },
      { 
        passed: false, 
        input: [[1, 2, 3], [2, 3, 4]], 
        expected: 0, 
        got: 2 
      }
    ]
  }