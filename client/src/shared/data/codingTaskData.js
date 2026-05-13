export const taskDataItem =[ {
    id: 1,
    title: "Поиск ближайшего товара",
    difficulty: "Средняя",
    status: "Не решено",
    company: "Авито",
    acceptance: "100%",
    language: "JS",
    description: [
      "На Авито размещено множество товаров, каждый из которых представлен числом.",
      "У каждого покупателя есть потребность в товаре, также выраженная числом.",
      "Если точного товара нет, покупатель выбирает ближайший по значению товар, что вызывает неудовлетворённость, равную разнице между потребностью и купленным товаром.",
      "Количество каждого товара неограничено, и один товар могут купить несколько покупателей.",
      "Рассчитайте суммарную неудовлетворённость всех покупателей.",
    ],
    requirements: [
      "Нужно написать функцию, которая примет на вход два массива:",
      "массив товаров;",
      "массив потребностей покупателей.",
      "Функция должна вычислить сумму неудовлетворённостей всех покупателей и вернуть результат в виде числа.",
    ],
    examples: [
      {
        input: `goods = [8, 3, 5];\nbuyerNeeds = [5, 6];`,
        output: "1",
        explanation: [
          "// Первый покупатель покупает товар 5, и его неудовлетворённость = 0",
          "// Второй также покупает товар 5, и его неудовлетворённость = 6 - 5 = 1",
        ],
      },
    ],
    starterCode: `function findMinDissatisfaction(goods, buyerNeeds) {\n  // Ваш код здесь\n  \n}`,
    // Тесты для проверки
    testCases: [
      { input: [[8, 3, 5], [5, 6]], expected: 1 },
      { input: [[1, 2, 3], [2, 3, 4]], expected: 1 },
      { input: [[10, 20, 30], [15, 25]], expected: 10 },
    ],
  },]

      // ============================================
    // КОД WORKER'А (как строка)
    // ============================================
export const workerCode = `
      // Перехватываем console.log, чтобы вернуть в основной поток
      const logs = [];
      const originalLog = console.log;
      console.log = (...args) => {
        logs.push(args.map(a => 
          typeof a === 'object' ? JSON.stringify(a) : String(a)
        ).join(' '));
      };

      self.onmessage = function(e) {
        const { userCode, testCases } = e.data;
        
        try {
          // Пытаемся создать функцию из кода пользователя
          let userFunction;
          
          // Проверяем, содержит ли код объявление функции
          if (userCode.includes('function')) {
            // Извлекаем имя функции из кода
            const match = userCode.match(/function\\s+(\\w+)/);
            if (match) {
              const funcName = match[1];
              // Выполняем код, чтобы функция стала доступна
              eval(userCode);
              userFunction = eval(funcName);
            } else {
              throw new Error('Не удалось найти имя функции');
            }
          } else {
            throw new Error('Код должен содержать объявление функции');
          }
          
          if (typeof userFunction !== 'function') {
            throw new Error('Код не является функцией');
          }
          
          // Прогоняем тесты
          const results = testCases.map(test => {
            try {
              const result = userFunction(...test.input);
              const passed = JSON.stringify(result) === JSON.stringify(test.expected);
              return {
                passed,
                input: test.input,
                expected: test.expected,
                got: result
              };
            } catch (testError) {
              return {
                passed: false,
                input: test.input,
                expected: test.expected,
                got: 'Ошибка: ' + testError.message
              };
            }
          });
          
          // Отправляем результат обратно
          self.postMessage({ 
            success: true, 
            results,
            logs 
          });
          
        } catch (error) {
          // Если код с ошибкой — отправляем ошибку
          self.postMessage({ 
            success: false, 
            error: error.message,
            logs 
          });
        }
      };
    `;