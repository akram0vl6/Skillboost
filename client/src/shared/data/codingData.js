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

export const tasksData = [
    {
      // ═══════════ ПОЛЯ ДЛЯ СПИСКА (из твоего первого массива) ═══════════
      id: 1,
      title: "Поиск ближайшего товара",
      difficulty: "Средняя",
      companies: ["Авито"],
      extraCompanies: 0,          // если >0, показываем "+N"
      solvedPercent: 100,         // процент решивших
      languages: ["JS"],          // доступные языки
      isPremium: false,           // платная задача?
      status: "Не решено",        // "Решено" | "Не решено" | "Попытка"
  
      // ═══════════ ПОЛЯ ДЛЯ ДЕТАЛЬНОЙ СТРАНИЦЫ (из taskDataItem) ═══════════
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
      testCases: [
        { input: [[8, 3, 5], [5, 6]], expected: 1 },
        { input: [[1, 2, 3], [2, 3, 4]], expected: 1 },
        { input: [[10, 20, 30], [15, 25]], expected: 10 },
      ],
    },
    
    // Вторая задача (можно наполнить позже)
    {
      id: 2,
      title: "Декодирование строки",
      difficulty: "Средняя",
      companies: ["Т-Банк"],
      extraCompanies: 1,
      solvedPercent: 47,
      languages: ["GO", "C"],
      isPremium: false,
      status: "Не решено",
      
      description: [
        "Дана закодированная строка. Правило кодирования: k[encoded_string]...",
        // ... добавь описание
      ],
      requirements: ["Напишите функцию...", "..."],
      examples: [],
      starterCode: "func decodeString(s string) string {\n  // ваш код\n}",
      testCases: [],
    },
    
    // ... остальные задачи
  ];