// Список компаний (все, как на первом скриншоте)
export const allCompanies = [
    { name: 'Т-Банк', count: 11 },
    { name: 'Ozon', count: 16 },
    { name: 'Сбер', count: 14 },
    { name: 'Яндекс', count: 29 },
    { name: 'Авито', count: 6 },
    { name: 'VK', count: 12 },
    { name: 'Альфа-Банк', count: 4 },
    { name: 'Самокат', count: 3 },
    { name: 'Островок', count: 2 },
    { name: 'Домклик', count: 8 },
    { name: 'X5 Group', count: 1 },
    { name: 'Додо', count: 1 },
    { name: 'T1', count: 1 },
    { name: 'Wildberries', count: 2 },
    { name: '2ГИС', count: 1 },
    { name: 'Нетология', count: 1 },
    { name: 'Спортмастер', count: 1 },
    { name: 'Google', count: 5 },
    { name: 'Amazon', count: 8 },
    { name: 'Microsoft', count: 4 },
    { name: 'Meta', count: 1 },
    { name: 'Uber', count: 2 },
    { name: 'Apple', count: 4 },
    { name: 'Airbnb', count: 4 },
    { name: 'Магнит', count: 5 },
    { name: 'Yadro', count: 1 },
    { name: 'IT_One', count: 1 },
    { name: 'M-Холдинг', count: 1 },
    { name: 'ЦРТ', count: 2 },
    { name: 'EdgeЦентр', count: 1 },
    { name: 'Ваш Инвестор', count: 2 },
    { name: 'Fingular', count: 2 },
    { name: 'BalancePlatform', count: 1 },
    { name: 'Код открытия', count: 1 },
    { name: 'ТехЛАБ', count: 1 },
    { name: 'Актив', count: 1 },
    { name: 'Idea Platform', count: 1 },
    { name: 'Nvidia', count: 1 },
    { name: 'Sportradar', count: 1 },

];

// Данные задач (основные из скриншотов)
// export const tasksData = [
//     {
//         id: 1,
//         title: 'Декодирование строки',
//         difficulty: 'Средняя',
//         companies: ['Т-Банк'],
//         extraCompanies: 1, // для отображения "+1"
//         solvedPercent: 47,
//         languages: ['GO', 'C'],
//         isPremium: false,
//     },
//     {
//         id: 2,
//         title: 'Доступно по подписке',
//         difficulty: 'Средняя',
//         companies: ['Т-Банк'],
//         extraCompanies: 1,
//         solvedPercent: 59,
//         languages: [],
//         isPremium: true,
//     },
//     {
//         id: 3,
//         title: 'Поиск последних известных значений',
//         difficulty: 'Средняя',
//         companies: ['Самокат'],
//         extraCompanies: 0,
//         solvedPercent: 41,
//         languages: ['SQL'],
//         isPremium: false,
//     },
//     {
//         id: 4,
//         title: 'Поиск рублей',
//         difficulty: 'Легкая',
//         companies: ['Т-Банк'],
//         extraCompanies: 0,
//         solvedPercent: 62,
//         languages: ['SQL'],
//         isPremium: false,
//     },
//     {
//         id: 5,
//         title: 'Самый популярный промокод',
//         difficulty: 'Средняя',
//         companies: ['Т-Банк'],
//         extraCompanies: 1,
//         solvedPercent: 57,
//         languages: ['SQL'],
//         isPremium: false,
//     },
//     {
//         id: 6,
//         title: 'Опытные пилоты на пассажирских рейсах',
//         difficulty: 'Средняя',
//         companies: ['Т-Банк'],
//         extraCompanies: 0,
//         solvedPercent: 58,
//         languages: ['SQL'],
//         isPremium: false,
//     },
//     {
//         id: 7,
//         title: 'Генератор событий на JavaScript',
//         difficulty: 'Сложная',
//         companies: ['Яндекс'], // предположим, для разнообразия
//         extraCompanies: 0,
//         solvedPercent: 72,
//         languages: ['JS'],
//         isPremium: false,
//     },
// ];

// export const tasksData = [
//     {
//       // ═══════════ ПОЛЯ ДЛЯ СПИСКА (из твоего первого массива) ═══════════
//       id: 1,
//       title: "Поиск ближайшего товара",
//       companies: ["Авито"],
//       extraCompanies: 0,          // если >0, показываем "+N"
//       solvedPercent: 100,         // процент решивших
//       languages: ["JS"],          // доступные языки
//       isPremium: false,           // платная задача?
      
//       difficulty: "Средняя",
//       status: "Не решено",
//       acceptance: "100%",


//       // ═══════════ ПОЛЯ ДЛЯ ДЕТАЛЬНОЙ СТРАНИЦЫ (из taskDataItem) ═══════════
//       description: [
//         "На Авито размещено множество товаров, каждый из которых представлен числом.",
//         "У каждого покупателя есть потребность в товаре, также выраженная числом.",
//         "Если точного товара нет, покупатель выбирает ближайший по значению товар, что вызывает неудовлетворённость, равную разнице между потребностью и купленным товаром.",
//         "Количество каждого товара неограничено, и один товар могут купить несколько покупателей.",
//         "Рассчитайте суммарную неудовлетворённость всех покупателей.",
//       ],
//       requirements: [
//         "Нужно написать функцию, которая примет на вход два массива:",
//         "массив товаров;",
//         "массив потребностей покупателей.",
//         "Функция должна вычислить сумму неудовлетворённостей всех покупателей и вернуть результат в виде числа.",
//       ],
//       examples: [
//         {
//           input: `goods = [8, 3, 5];\nbuyerNeeds = [5, 6];`,
//           output: "1",
//           explanation: [
//             "// Первый покупатель покупает товар 5, и его неудовлетворённость = 0",
//             "// Второй также покупает товар 5, и его неудовлетворённость = 6 - 5 = 1",
//           ],
//         },
//       ],
//       starterCode: `function findMinDissatisfaction(goods, buyerNeeds) {\n  // Ваш код здесь\n  \n}`,
//       testCases: [
//         { input: [[8, 3, 5], [5, 6]], expected: 1 },
//         { input: [[1, 2, 3], [2, 3, 4]], expected: 1 },
//         { input: [[10, 20, 30], [15, 25]], expected: 10 },
//       ],
//     },
    
//     // Вторая задача (можно наполнить позже)
//     {
//       id: 2,
//       title: "Декодирование строки",
//       difficulty: "Средняя",
//       companies: ["Т-Банк"],
//       extraCompanies: 1,
//       solvedPercent: 47,
//       languages: ["GO", "C"],
//       isPremium: false,
//       status: "Не решено",
      
//       description: [
//         "Дана закодированная строка. Правило кодирования: k[encoded_string]...",
//         // ... добавь описание
//       ],
//       requirements: ["Напишите функцию...", "..."],
//       examples: [],
//       starterCode: "func decodeString(s string) string {\n  // ваш код\n}",
//       testCases: [],
//     },
    
//     // ... остальные задачи
//   ];

export const tasksData = [
    {
      // ═══════════ ПОЛЯ ДЛЯ СПИСКА ═══════════
      id: 1,
      title: "Поиск ближайшего товара",
      companies: ["Авито"],
      extraCompanies: 0,
      solvedPercent: 100,
      languages: ["JS"],
      isPremium: false,
      difficulty: "Средняя",
      status: "Не решено",
      acceptance: "100%",
  
      // ═══════════ ПОЛЯ ДЛЯ ДЕТАЛЬНОЙ СТРАНИЦЫ ═══════════
      description: [
        "На Авито размещено множество товаров, каждый из которых представлен числом.",
        "У каждого покупателя есть потребность в товаре, также выраженная числом.",
        "Если точного товара нет, покупатель выбирает ближайший по значению товар, что вызывает неудовлетворённость, равную разнице между потребностью и купленным товаром.",
        "Количество каждого товара неограничено, и один товар могут купить несколько покупателей.",
        "Рассчитайте суммарную неудовлетворённость всех покупателей.",
      ],
      requirements: [
        "Нужно написать функцию, которая примет на вход два массива:",
        "• массив товаров (числа);",
        "• массив потребностей покупателей (числа).",
        "Функция должна вычислить сумму неудовлетворённостей всех покупателей и вернуть результат в виде числа.",
      ],
      examples: [
        {
          input: `goods = [8, 3, 5];\nbuyerNeeds = [5, 6];`,
          output: "1",
          explanation: [
            "// Первый покупатель покупает товар 5 → неудовлетворённость = 0",
            "// Второй покупатель выбирает товар 5 → неудовлетворённость = |6 - 5| = 1",
            "// Итого: 0 + 1 = 1",
          ],
        },
      ],
      starterCode: `/**
   * @param {number[]} goods
   * @param {number[]} buyerNeeds
   * @return {number}
   */
  var totalDissatisfaction = function(goods, buyerNeeds) {
      // Ваш код здесь
      
  };`,
      testCases: [
        { input: [[8, 3, 5], [5, 6]], expected: 1 },
        { input: [[1, 2, 3], [2, 3, 4]], expected: 1 },
        { input: [[10, 20, 30], [15, 25]], expected: 10 },
        { input: [[100], [1, 2, 3]], expected: 294 },
      ],
    },
  
    {
      // ═══════════ ПОЛЯ ДЛЯ СПИСКА ═══════════
      id: 2,
      title: "Декодирование строки",
      companies: ["Т-Банк"],
      extraCompanies: 1,
      solvedPercent: 47,
      languages: ["GO", "C"],
      isPremium: false,
      difficulty: "Средняя",
      status: "Попытка",
      acceptance: "47%",
  
      // ═══════════ ПОЛЯ ДЛЯ ДЕТАЛЬНОЙ СТРАНИЦЫ ═══════════
      description: [
        "Дана закодированная строка вида k[encoded_string], где encoded_string повторяется ровно k раз.",
        "k — положительное целое число. Гарантируется, что строка корректна: нет лишних пробелов, скобки правильно расставлены.",
        "Исходная строка не содержит цифр, кроме тех, что используются для повторений.",
      ],
      requirements: [
        "Реализуйте функцию, которая декодирует строку и возвращает результат.",
        "Поддерживайте вложенные конструкции: например, 3[a2[c]] → accaccacc",
      ],
      examples: [
        {
          input: `s = "3[a]2[bc]"`,
          output: '"aaabcbc"',
          explanation: ['// 3[a] → aaa, 2[bc] → bcbc, результат: aaabcbc'],
        },
        {
          input: `s = "3[a2[c]]"`,
          output: '"accaccacc"',
          explanation: ['// 2[c] → cc, затем 3[acc] → accaccacc'],
        },
      ],
      starterCode: `/**
   * @param {string} s
   * @return {string}
   */
  var decodeString = function(s) {
      // Ваш код здесь
      
  };`,
      testCases: [
        { input: ["3[a]2[bc]"], expected: "aaabcbc" },
        { input: ["3[a2[c]]"], expected: "accaccacc" },
        { input: ["2[abc]3[cd]ef"], expected: "abcabccdcdcdef" },
        { input: ["10[a]"], expected: "aaaaaaaaaa" },
      ],
    },
  
    {
      // ═══════════ ПОЛЯ ДЛЯ СПИСКА ═══════════
      id: 3,
      title: "Доступно по подписке",
      companies: ["Т-Банк"],
      extraCompanies: 1,
      solvedPercent: 59,
      languages: [],
      isPremium: true,
      difficulty: "Средняя",
      status: "Не решено",
      acceptance: "59%",
  
      // ═══════════ ПОЛЯ ДЛЯ ДЕТАЛЬНОЙ СТРАНИЦЫ ═══════════
      description: [
        "В системе есть пользователи с подписками разных типов: free, pro, premium.",
        "Каждая подписка имеет дату начала и дату окончания.",
        "Необходимо определить, доступна ли функция пользователю в заданный момент времени.",
        "Функция доступна, если у пользователя есть активная подписка уровня pro или premium на указанную дату.",
      ],
      requirements: [
        "Функция принимает: массив подписок пользователя, дату проверки (строка в формате YYYY-MM-DD), минимальный требуемый уровень подписки.",
        "Вернуть true, если функция доступна, иначе false.",
        "Учитывать, что подписки могут пересекаться по времени — брать максимальный уровень.",
      ],
      examples: [
        {
          input: `subscriptions = [
    { level: "pro", start: "2024-01-01", end: "2024-06-30" },
    { level: "free", start: "2024-07-01", end: "2024-12-31" }
  ];
  checkDate = "2024-03-15";
  requiredLevel = "pro";`,
          output: "true",
          explanation: ["// На дату 2024-03-15 активна подписка pro"],
        },
      ],
      starterCode: `/**
   * @param {Array} subscriptions
   * @param {string} checkDate
   * @param {string} requiredLevel
   * @return {boolean}
   */
  var isFeatureAvailable = function(subscriptions, checkDate, requiredLevel) {
      // Ваш код здесь
      
  };`,
      testCases: [
        {
          input: [
            [{ level: "pro", start: "2024-01-01", end: "2024-06-30" }, { level: "free", start: "2024-07-01", end: "2024-12-31" }],
            "2024-03-15",
            "pro"
          ],
          expected: true
        },
        {
          input: [
            [{ level: "free", start: "2024-01-01", end: "2024-12-31" }],
            "2024-06-01",
            "pro"
          ],
          expected: false
        },
      ],
    },
  
    {
      // ═══════════ ПОЛЯ ДЛЯ СПИСКА ═══════════
      id: 4,
      title: "Поиск последних известных значений",
      companies: ["Самокат"],
      extraCompanies: 0,
      solvedPercent: 41,
      languages: ["SQL"],
      isPremium: false,
      difficulty: "Средняя",
      status: "Решено",
      acceptance: "41%",
  
      // ═══════════ ПОЛЯ ДЛЯ ДЕТАЛЬНОЙ СТРАНИЦЫ ═══════════
      description: [
        "В базе данных хранятся измерения параметров с временными метками.",
        "Некоторые значения могут отсутствовать (NULL).",
        "Необходимо для каждой строки подставить последнее известное (не NULL) значение параметра, встреченное ранее по времени.",
        "Это классическая задача «forward fill» или «last known value».",
      ],
      requirements: [
        "Напишите SQL-запрос, который для каждой записи в таблице measurements подставит последнее не-NULL значение параметра value.",
        "Используйте оконные функции или само-соединение.",
        "Результат должен содержать: id, timestamp, value (заполненный).",
      ],
      examples: [
        {
          input: `-- Таблица measurements:
  id | timestamp           | value
  1  | 2024-01-01 10:00:00 | 100
  2  | 2024-01-01 11:00:00 | NULL
  3  | 2024-01-01 12:00:00 | NULL
  4  | 2024-01-01 13:00:00 | 200
  5  | 2024-01-01 14:00:00 | NULL`,
          output: `id | timestamp           | value
  1  | 2024-01-01 10:00:00 | 100
  2  | 2024-01-01 11:00:00 | 100
  3  | 2024-01-01 12:00:00 | 100
  4  | 2024-01-01 13:00:00 | 200
  5  | 2024-01-01 14:00:00 | 200`,
          explanation: ["// Значение 100 распространяется вперёд до появления 200"],
        },
      ],
      starterCode: `-- Напишите ваш SQL-запрос здесь
  SELECT 
      id,
      timestamp,
      -- ваше выражение для заполнения value
  FROM measurements
  ORDER BY timestamp;`,
      testCases: [],
    },
  
    {
      // ═══════════ ПОЛЯ ДЛЯ СПИСКА ═══════════
      id: 5,
      title: "Поиск рублей",
      companies: ["Т-Банк"],
      extraCompanies: 0,
      solvedPercent: 62,
      languages: ["SQL"],
      isPremium: false,
      difficulty: "Легкая",
      status: "Не решено",
      acceptance: "62%",
  
      // ═══════════ ПОЛЯ ДЛЯ ДЕТАЛЬНОЙ СТРАНИЦЫ ═══════════
      description: [
        "В текстовом поле хранятся описания транзакций в свободной форме.",
        "Необходимо найти все строки, где упоминается сумма в рублях.",
        "Сумма может быть записана как: 100 руб., 1 500 рублей, ₽2500, 3000р.",
        "Извлеките числовое значение суммы и верните его.",
      ],
      requirements: [
        "Напишите SQL-запрос или функцию, которая извлекает первую найденную сумму в рублях из строки.",
        "Поддерживайте форматы: цифры + пробел(ы) + руб/руб./рублей/р/₽",
        "Если сумма не найдена — вернуть NULL.",
      ],
      examples: [
        {
          input: `text = "Перевод на сумму 1 500 рублей за услуги"`,
          output: "1500",
          explanation: ["// Извлечено число 1500 (пробелы в числе игнорируются)"],
        },
        {
          input: `text = "Оплата: ₽2500, комиссия 50р"`,
          output: "2500",
          explanation: ["// Возвращаем первую найденную сумму: 2500"],
        },
      ],
      starterCode: `/**
   * @param {string} text
   * @return {number|null}
   */
  var extractRubles = function(text) {
      // Ваш код здесь
      
  };`,
      testCases: [
        { input: ["Перевод 100 руб."], expected: 100 },
        { input: ["Оплата: ₽2500, комиссия 50р"], expected: 2500 },
        { input: ["Сумма: 1 500 рублей"], expected: 1500 },
        { input: ["Нет суммы здесь"], expected: null },
      ],
    },
  
    {
      // ═══════════ ПОЛЯ ДЛЯ СПИСКА ═══════════
      id: 6,
      title: "Самый популярный промокод",
      companies: ["Т-Банк"],
      extraCompanies: 1,
      solvedPercent: 57,
      languages: ["SQL"],
      isPremium: false,
      difficulty: "Средняя",
      status: "Не решено",
      acceptance: "57%",
  
      // ═══════════ ПОЛЯ ДЛЯ ДЕТАЛЬНОЙ СТРАНИЦЫ ═══════════
      description: [
        "В таблице orders хранятся заказы с применёнными промокодами.",
        "Необходимо найти промокод, который был использован наибольшее количество раз за указанный период.",
        "Если таких несколько — вернуть все в алфавитном порядке.",
      ],
      requirements: [
        "Напишите SQL-запрос, который возвращает самый популярный промокод(ы) за период с :start_date по :end_date.",
        "Учитывать только заказы со статусом 'completed'.",
        "Если промокодов нет — вернуть пустой результат.",
      ],
      examples: [
        {
          input: `-- Таблица orders:
  order_id | promo_code | status    | created_at
  1        | SALE20     | completed | 2024-01-15
  2        | SALE20     | completed | 2024-01-16
  3        | WELCOME    | completed | 2024-01-17
  4        | SALE20     | cancelled | 2024-01-18
  
  :start_date = '2024-01-01'
  :end_date = '2024-01-31'`,
          output: `promo_code | usage_count
  SALE20     | 2`,
          explanation: ["// SALE20 использован 2 раза в завершённых заказах"],
        },
      ],
      starterCode: `-- Напишите ваш SQL-запрос здесь
  -- Параметры: :start_date, :end_date
  
  SELECT 
      promo_code,
      COUNT(*) as usage_count
  FROM orders
  -- ваш код
  ;`,
      testCases: [],
    },
  
    {
      // ═══════════ ПОЛЯ ДЛЯ СПИСКА ═══════════
      id: 7,
      title: "Опытные пилоты на пассажирских рейсах",
      companies: ["Т-Банк"],
      extraCompanies: 0,
      solvedPercent: 58,
      languages: ["SQL"],
      isPremium: false,
      difficulty: "Средняя",
      status: "Не решено",
      acceptance: "58%",
  
      // ═══════════ ПОЛЯ ДЛЯ ДЕТАЛЬНОЙ СТРАНИЦЫ ═══════════
      description: [
        "В авиакомпании нужно найти пилотов, которые имеют опыт работы на пассажирских рейсах не менее 5 лет.",
        "Данные хранятся в двух таблицах: pilots (пилоты) и flights (рейсы).",
        "Необходимо вернуть список пилотов с указанием общего стажа на пассажирских рейсах.",
      ],
      requirements: [
        "Напишите SQL-запрос, который возвращает: pilot_id, pilot_name, total_passenger_years.",
        "Учитывать только рейсы с type = 'passenger'.",
        "Стаж считать как разницу между датами первого и последнего пассажирского рейса в годах.",
        "Отфильтровать пилотов со стажем >= 5 лет.",
      ],
      examples: [
        {
          input: `-- pilots:
  pilot_id | name
  1        | Иванов
  2        | Петров
  
  -- flights:
  flight_id | pilot_id | type       | flight_date
  1         | 1        | passenger  | 2018-01-15
  2         | 1        | passenger  | 2024-01-15
  3         | 2        | cargo      | 2020-01-01
  4         | 2        | passenger  | 2023-06-01`,
          output: `pilot_id | name   | total_passenger_years
  1        | Иванов | 6`,
          explanation: ["// У Иванова пассажирские рейсы с 2018 по 2024 = 6 лет"],
        },
      ],
      starterCode: `-- Напишите ваш SQL-запрос здесь
  
  SELECT 
      p.pilot_id,
      p.name,
      -- ваш код для расчёта стажа
      AS total_passenger_years
  FROM pilots p
  JOIN flights f ON p.pilot_id = f.pilot_id
  -- ваш код
  ;`,
      testCases: [],
    },
  
    {
      // ═══════════ ПОЛЯ ДЛЯ СПИСКА ═══════════
      id: 8,
      title: "Генератор событий на JavaScript",
      companies: ["Яндекс"],
      extraCompanies: 0,
      solvedPercent: 72,
      languages: ["JS"],
      isPremium: false,
      difficulty: "Сложная",
      status: "Не решено",
      acceptance: "72%",
  
      // ═══════════ ПОЛЯ ДЛЯ ДЕТАЛЬНОЙ СТРАНИЦЫ ═══════════
      description: [
        "Реализуйте класс EventEmitter, который поддерживает подписку на события и их генерацию.",
        "Поддерживайте методы: on(event, callback), off(event, callback), emit(event, ...args), once(event, callback).",
        "Метод once должен выполнить колбэк только один раз, после чего автоматически отписаться.",
      ],
      requirements: [
        "on(event, callback) — подписывает колбэк на событие, возвращает функцию для отписки.",
        "off(event, callback) — отписывает конкретный колбэк от события.",
        "emit(event, ...args) — вызывает все колбэки события с переданными аргументами.",
        "once(event, callback) — подписывает колбэк, который выполнится один раз и отпишется.",
      ],
      examples: [
        {
          input: `const emitter = new EventEmitter();
  const log = (data) => console.log('logged:', data);
  
  emitter.on('data', log);
  emitter.emit('data', { id: 1 });
  // logged: { id: 1 }
  
  emitter.off('data', log);
  emitter.emit('data', { id: 2 });
  // ничего не выведено`,
          output: "logged: { id: 1 }",
          explanation: ["// Колбэк выполнен один раз, затем отписан"],
        },
      ],
      starterCode: `class EventEmitter {
    constructor() {
      // Ваш код здесь
    }
    
    on(event, callback) {
      // Ваш код здесь
    }
    
    off(event, callback) {
      // Ваш код здесь
    }
    
    emit(event, ...args) {
      // Ваш код здесь
    }
    
    once(event, callback) {
      // Ваш код здесь
    }
  }`,
      testCases: [],
    },
  ];