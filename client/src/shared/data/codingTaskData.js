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
    const logs = [];
    console.log = (...args) => {
      logs.push(args.map(a => 
        typeof a === 'object' ? JSON.stringify(a) : String(a)
      ).join(' '));
    };
  
    self.onmessage = function(e) {
      const { userCode, testCases } = e.data;
      
      try {
        // Пытаемся извлечь функцию разными способами
        let userFunction;
        
        // Способ 1: function declaration — function name(...) { ... }
        const funcDeclMatch = userCode.match(/function\\s+(\\w+)\\s*\\(/);
        
        // Способ 2: var/let/const name = function(...) { ... }
        const varAssignMatch = userCode.match(/(?:var|let|const)\\s+(\\w+)\\s*=\\s*function\\s*\\(/);
        
        // Способ 3: var/let/const name = (...) => { ... }
        const arrowMatch = userCode.match(/(?:var|let|const)\\s+(\\w+)\\s*=\\s*\\(/);
        
        // Способ 4: name = function(...) без var/let/const
        const assignMatch = userCode.match(/(\\w+)\\s*=\\s*function\\s*\\(/);
        
        let funcName = null;
        
        if (funcDeclMatch) {
          funcName = funcDeclMatch[1];
        } else if (varAssignMatch) {
          funcName = varAssignMatch[1];
        } else if (arrowMatch) {
          funcName = arrowMatch[1];
        } else if (assignMatch) {
          funcName = assignMatch[1];
        }
        
        if (!funcName) {
          throw new Error(
            'Не удалось найти функцию. Используйте один из форматов:\\n' +
            '• function имяФункции(...) { ... }\\n' +
            '• var имяФункции = function(...) { ... }\\n' +
            '• const имяФункции = (...) => { ... }'
          );
        }
        
        // Выполняем код пользователя, чтобы функция стала доступна
        eval(userCode);
        
        // Получаем функцию по имени
        userFunction = eval(funcName);
        
        if (typeof userFunction !== 'function') {
          throw new Error('Переменная "' + funcName + '" найдена, но она не является функцией. Найдено: ' + typeof userFunction);
        }
        
        // Прогоняем тесты
        const results = testCases.map((test, index) => {
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
              got: 'Ошибка: ' + testError.message,
              error: testError.message
            };
          }
        });
        
        self.postMessage({ 
          success: true, 
          results,
          logs 
        });
        
      } catch (error) {
        self.postMessage({ 
          success: false, 
          error: error.message,
          logs 
        });
      }
    };
  `;