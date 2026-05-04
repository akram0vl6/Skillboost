// === ДАННЫЕ ГРАФА ===
export const EDGES = [
  { d: "M-110.17,-90.77 C-110.17,-13.27 -110.17,-13.27 -110.17,64.23" },
  { d: "M-246.17,91.73 C-296.07,91.73 -296.07,13.79 -345.97,13.79", dashed: true },
  { d: "M-246.17,91.73 C-296.07,91.73 -296.07,66.79 -345.97,66.79", dashed: true },
  { d: "M-246.17,91.73 C-296.07,91.73 -296.07,119.79 -345.97,119.79", dashed: true },
  { d: "M-246.17,91.73 C-296.07,91.73 -296.07,172.79 -345.97,172.79", dashed: true },
  { d: "M25.83,91.73 C77.33,91.73 77.33,-13.77 128.83,-13.77", dashed: true },
  { d: "M25.83,91.73 C77.33,91.73 77.33,39.23 128.83,39.23", dashed: true },
  { d: "M25.83,91.73 C77.33,91.73 77.33,92.23 128.83,92.23", dashed: true },
  { d: "M25.83,91.73 C77.83,91.73 77.83,145.23 129.83,145.23", dashed: true },
  { d: "M25.83,91.73 C77.33,91.73 77.33,198.23 128.83,198.23", dashed: true },
  { d: "M-109.67,268.71 C-109.67,291.22 -110.17,291.22 -110.17,313.73", dashed: true },
  { d: "M27.33,241.21 C93.75,241.21 93.75,370.23 160.16,370.23" },
  { d: "M-251.17 682.23L-271.17 682.23L -373.28,682.23Q -378.28,682.23 -378.28,677.23L-378.28 497.76L-378.28 477.76" },
  { d: "M-378.28,422.76 C-378.28,405.76 -378.28,405.76 -378.28,388.76", dashed: true },
  { d: "M-110.17,119.23 C-110.17,166.47 -109.67,166.47 -109.67,213.71" },
  { d: "M284.16 609.73L284.16 629.73L 284.16,677.23Q 284.16,682.23 279.16,682.23L49.83 682.23L29.83 682.23" },
  { d: "M-361.73,1007.03 C-282.92,1007.03 -282.92,1007.03 -204.1,1007.03" },
  { d: "M-110.67,709.73 C-110.67,720.73 -110.67,720.73 -110.67,731.73", dashed: true },
  { d: "M-98.6,1034.53 C-98.6,1054.56 -98.6,1054.56 -98.6,1074.59", dashed: true },
  { d: "M361.33,975.45 C361.33,970.5 360.97,970.5 360.97,965.55", dashed: true },
  { d: "M257.33,1131.21 C217.8,1131.21 217.8,1077.64 178.27,1077.64", dashed: true },
  { d: "M257.33,1131.21 C217.8,1131.21 217.8,1130.64 178.27,1130.64", dashed: true },
  { d: "M257.33,1131.21 C217.8,1131.21 217.8,1183.64 178.27,1183.64", dashed: true },
  { d: "M262.33 1280.47L242.33 1280.47L 88.33,1280.47Q 83.33,1280.47 83.33,1285.47L83.33 1424.01L83.33 1444.01" },
  { d: "M166.83,1471.51 C215.45,1471.51 215.45,1387.75 264.08,1387.75", dashed: true },
  { d: "M166.83,1471.51 C215.45,1471.51 215.45,1440.75 264.08,1440.75", dashed: true },
  { d: "M166.83,1471.51 C215.45,1471.51 215.45,1493.75 264.08,1493.75", dashed: true },
  { d: "M166.83,1471.51 C215.45,1471.51 215.45,1546.75 264.08,1546.75", dashed: true },
];

export const NODES = [
    // Заголовки
    {
      left: -173.17, top: -161.77, width: 126, height: 68, fontSize: 28, text: "Python", type: "header",
      data: {
        label: 'Python Roadmap',
        description: 'Полный путь изучения языка программирования Python от основ до продвинутых тем',
        duration: '6-12 месяцев',
        resources: [
          { title: 'Официальный сайт', url: 'https://www.python.org/' },
          { title: 'Python Tutor', url: 'https://pythontutor.com/' }
        ],
        tasks: ['Установить Python', 'Настроить окружение', 'Написать первый скрипт'],
        difficulty: 'Стартовый'
      }
    },
    {
      left: 281.1, top: 1291.47, width: 145, height: 36, fontSize: 17, text: "Документация", type: "header",
      data: {
        label: 'Документация',
        description: 'Инструменты для создания и поддержки документации проекта',
        duration: '1 неделя',
        resources: [
          { title: 'Sphinx Docs', url: 'https://www.sphinx-doc.org/' },
          { title: 'Markdown Guide', url: 'https://www.markdownguide.org/' }
        ],
        tasks: ['Изучить reStructuredText', 'Настроить Sphinx', 'Сгенерировать docs'],
        difficulty: 'Средний'
      }
    },
    {
      left: -578.31, top: 619.08, width: 143, height: 36, fontSize: 17, text: "Конфигурация", type: "header",
      data: {
        label: 'Конфигурация',
        description: 'Файлы конфигурации и настройки проекта',
        duration: '3 дня',
        resources: [
          { title: 'pyproject.toml spec', url: 'https://peps.python.org/pep-0621/' }
        ],
        tasks: ['Создать pyproject.toml', 'Настроить зависимости'],
        difficulty: 'Начинающий'
      }
    },
    {
      left: 83.62, top: 991.06, width: 145, height: 34, fontSize: 17, text: "Окружение", type: "header",
      data: {
        label: 'Окружение',
        description: 'Управление виртуальными окружениями и версиями Python',
        duration: '1 неделя',
        resources: [
          { title: 'venv docs', url: 'https://docs.python.org/3/library/venv.html' },
          { title: 'pyenv GitHub', url: 'https://github.com/pyenv/pyenv' }
        ],
        tasks: ['Создать venv', 'Установить pyenv', 'Настроить autoenv'],
        difficulty: 'Начинающий'
      }
    },
    
    // Темы (зелёные)
    {
      left: -243.17, top: 67.23, width: 266, height: 49, text: "Изучение основ", type: "topic",
      data: {
        label: 'Основы Python',
        description: 'Синтаксис, переменные, типы данных, условия и циклы',
        duration: '2 недели',
        resources: [
          { title: 'Python Tutorial', url: 'https://docs.python.org/3/tutorial/' },
          { title: 'W3Schools Python', url: 'https://www.w3schools.com/python/' }
        ],
        tasks: ['Установка Python', 'Hello World', 'Работа с input/output'],
        difficulty: 'Начинающий'
      }
    },
    {
      left: -243.67, top: 216.71, width: 268, height: 49, text: "Структуры данных и Алгоритмы", type: "topic",
      data: {
        label: 'Структуры данных и Алгоритмы',
        description: 'Коллекции, алгоритмы поиска и сортировки, сложность',
        duration: '3-4 недели',
        resources: [
          { title: 'LeetCode', url: 'https://leetcode.com/' },
          { title: 'Big-O Cheat Sheet', url: 'https://www.bigocheatsheet.com/' }
        ],
        tasks: ['Реализовать сортировку', 'Решить 10 задач на массивы'],
        difficulty: 'Средний'
      }
    },
    {
      left: 163.16, top: 345.73, width: 242, height: 49, text: "Модули", type: "topic",
      data: {
        label: 'Модули и пакеты',
        description: 'Создание, импорт и организация кода в модули',
        duration: '1 неделя',
        resources: [
          { title: 'Python Modules', url: 'https://docs.python.org/3/tutorial/modules.html' }
        ],
        tasks: ['Создать свой модуль', 'Написать __init__.py', 'Публикация на PyPI'],
        difficulty: 'Средний'
      }
    },
    {
      left: 163.16, top: 398.73, width: 242, height: 49, text: "Лямбда выражения", type: "topic",
      data: {
        label: 'Лямбда выражения',
        description: 'Анонимные функции, map, filter, reduce',
        duration: '3 дня',
        resources: [
          { title: 'Lambda Functions', url: 'https://realpython.com/python-lambda/' }
        ],
        tasks: ['Переписать функции через lambda', 'Использовать с map/filter'],
        difficulty: 'Средний'
      }
    },
    {
      left: 163.16, top: 451.73, width: 242, height: 49, text: "Декораторы", type: "topic",
      data: {
        label: 'Декораторы',
        description: 'Функции высшего порядка, модификация поведения функций',
        duration: '1 неделя',
        resources: [
          { title: 'Primer on Python Decorators', url: 'https://realpython.com/primer-on-python-decorators/' }
        ],
        tasks: ['Написать декоратор логирования', 'Реализовать @cached'],
        difficulty: 'Продвинутый'
      }
    },
    {
      left: 163.16, top: 504.73, width: 242, height: 49, text: "Генераторы", type: "topic",
      data: {
        label: 'Генераторы и итераторы',
        description: 'yield, генераторные выражения, ленивые вычисления',
        duration: '1 неделя',
        resources: [
          { title: 'Generator Expressions', url: 'https://docs.python.org/3/howto/functional.html#generators' }
        ],
        tasks: ['Создать генератор чисел Фибоначчи', 'Реализовать свой итератор'],
        difficulty: 'Средний'
      }
    },
    {
      left: 163.16, top: 557.73, width: 242, height: 49, text: "Регулярные выражения", type: "topic",
      data: {
        label: 'Регулярные выражения',
        description: 'Модуль re, паттерны, поиск и замена текста',
        duration: '1 неделя',
        resources: [
          { title: 'Regex101', url: 'https://regex101.com/' },
          { title: 'Python re module', url: 'https://docs.python.org/3/library/re.html' }
        ],
        tasks: ['Валидация email', 'Парсинг логов', 'Замена текста по паттерну'],
        difficulty: 'Средний'
      }
    },
    {
      left: -248.17, top: 657.73, width: 275, height: 49, text: "ООП", type: "topic",
      data: {
        label: 'Объектно-ориентированное программирование',
        description: 'Классы, объекты, наследование, полиморфизм, инкапсуляция',
        duration: '2-3 недели',
        resources: [
          { title: 'OOP in Python', url: 'https://realpython.com/python3-object-oriented-programming/' }
        ],
        tasks: ['Спроектировать иерархию классов', 'Реализовать магические методы'],
        difficulty: 'Средний'
      }
    },
    {
      left: -475.28, top: 425.76, width: 194, height: 49, text: "Пакетные менеджеры", type: "topic",
      data: {
        label: 'Пакетные менеджеры',
        description: 'Управление зависимостями: pip, poetry, conda',
        duration: '1 неделя',
        resources: [
          { title: 'Python Packaging Guide', url: 'https://packaging.python.org/' }
        ],
        tasks: ['Установить зависимости через pip', 'Создать проект с Poetry'],
        difficulty: 'Начинающий'
      }
    },
    {
      left: -616.81, top: 982.53, width: 252, height: 49, text: "Фреймворки", type: "topic",
      data: {
        label: 'Веб-фреймворки',
        description: 'Django, Flask, FastAPI для создания веб-приложений',
        duration: '3-4 недели',
        resources: [
          { title: 'Django Docs', url: 'https://docs.djangoproject.com/' },
          { title: 'FastAPI Tutorial', url: 'https://fastapi.tiangolo.com/tutorial/' }
        ],
        tasks: ['Создать REST API', 'Реализовать аутентификацию'],
        difficulty: 'Продвинутый'
      }
    },
    {
      left: -201.1, top: 982.53, width: 205, height: 49, text: "Конкурентность", type: "topic",
      data: {
        label: 'Конкурентность и параллелизм',
        description: 'asyncio, threading, multiprocessing, GIL',
        duration: '2-3 недели',
        resources: [
          { title: 'Asyncio Docs', url: 'https://docs.python.org/3/library/asyncio.html' }
        ],
        tasks: ['Написать асинхронный запрос', 'Реализовать многопоточный скрейпер'],
        difficulty: 'Продвинутый'
      }
    },
    {
      left: 283.33, top: 978.45, width: 156, height: 49, text: "Статическая типизация", type: "topic",
      data: {
        label: 'Статическая типизация',
        description: 'Type hints, mypy, pyright, Pydantic',
        duration: '1-2 недели',
        resources: [
          { title: 'Type Hints Docs', url: 'https://docs.python.org/3/library/typing.html' },
          { title: 'Pydantic Docs', url: 'https://docs.pydantic.dev/' }
        ],
        tasks: ['Добавить type hints в проект', 'Настроить mypy'],
        difficulty: 'Средний'
      }
    },
    {
      left: 260.33, top: 1106.71, width: 179, height: 49, text: "Форматирование кода", type: "topic",
      data: {
        label: 'Форматирование и линтинг',
        description: 'black, ruff, yapf, flake8 для чистого кода',
        duration: '3-5 дней',
        resources: [
          { title: 'Black Formatter', url: 'https://black.readthedocs.io/' },
          { title: 'Ruff', url: 'https://docs.astral.sh/ruff/' }
        ],
        tasks: ['Настроить pre-commit hooks', 'Отформатировать проект'],
        difficulty: 'Начинающий'
      }
    },
    {
      left: 2.83, top: 1447.01, width: 161, height: 49, text: "Тестирование", type: "topic",
      data: {
        label: 'Тестирование',
        description: 'unittest, pytest, doctest, tox для надёжного кода',
        duration: '2 недели',
        resources: [
          { title: 'pytest Docs', url: 'https://docs.pytest.org/' },
          { title: 'Testing Best Practices', url: 'https://docs.python-guide.org/writing/tests/' }
        ],
        tasks: ['Написать модульные тесты', 'Настроить CI с tox'],
        difficulty: 'Средний'
      }
    },
    {
      left: -621.17, top: 498.73, width: 221, height: 49, text: "Стандартные пакеты", type: "topic",
      data: {
        label: 'Стандартная библиотека',
        description: 'os, sys, json, datetime, collections и другие встроенные модули',
        duration: '2 недели',
        resources: [
          { title: 'Python Library Reference', url: 'https://docs.python.org/3/library/' }
        ],
        tasks: ['Изучить collections.Counter', 'Работа с pathlib'],
        difficulty: 'Начинающий'
      }
    },
  
    // Подтемы (жёлтые) — примеры для нескольких ключевых
    {
      left: -615.97, top: -11.21, width: 267, height: 49, text: "Базовый синтаксис", type: "subtopic",
      data: {
        label: 'Базовый синтаксис',
        description: 'Отступы, комментарии, строки, операторы',
        duration: '2-3 дня',
        resources: [{ title: 'Python Syntax', url: 'https://www.w3schools.com/python/python_syntax.asp' }],
        tasks: ['Написать скрипт с комментариями', 'Использовать f-strings'],
        difficulty: 'Начинающий'
      }
    },
    {
      left: -615.97, top: 41.79, width: 267, height: 49, text: "Переменные и Типы данных", type: "subtopic",
      data: {
        label: 'Переменные и типы данных',
        description: 'int, float, str, bool, None, динамическая типизация',
        duration: '2 дня',
        resources: [{ title: 'Python Data Types', url: 'https://docs.python.org/3/library/stdtypes.html' }],
        tasks: ['Создать переменные всех типов', 'Преобразование типов'],
        difficulty: 'Начинающий'
      }
    },
    {
      left: -615.97, top: 94.79, width: 267, height: 49, text: "Условные выражения", type: "subtopic",
      data: {
        label: 'Условные выражения',
        description: 'if/elif/else, тернарный оператор, логические операции',
        duration: '1-2 дня',
        resources: [{ title: 'Control Flow', url: 'https://docs.python.org/3/tutorial/controlflow.html' }],
        tasks: ['Написать калькулятор с условиями', 'Реализовать валидацию'],
        difficulty: 'Начинающий'
      }
    },
    {
      left: 131.83, top: -38.77, width: 360, height: 50, text: "Приведение типов", type: "subtopic",
      data: {
        label: 'Приведение типов',
        description: 'int(), str(), float(), isinstance(), type hints',
        duration: '1 день',
        resources: [{ title: 'Type Conversion', url: 'https://realpython.com/python-data-types/#type-conversion' }],
        tasks: ['Преобразовать типы данных', 'Обработать ошибки приведения'],
        difficulty: 'Начинающий'
      }
    },
    {
      left: 131.83, top: 14.23, width: 360, height: 50, text: "Исключения", type: "subtopic",
      data: {
        label: 'Исключения',
        description: 'try/except/finally, создание своих исключений, контекстные менеджеры',
        duration: '2-3 дня',
        resources: [{ title: 'Errors and Exceptions', url: 'https://docs.python.org/3/tutorial/errors.html' }],
        tasks: ['Обработать FileNotFoundError', 'Создать кастомное исключение'],
        difficulty: 'Средний'
      }
    },
    {
      left: 131.83, top: 67.23, width: 360, height: 50, text: "Функции, Встроенные функции", type: "subtopic",
      data: {
        label: 'Функции',
        description: 'def, *args, **kwargs, lambda, built-in функции',
        duration: '3-4 дня',
        resources: [{ title: 'Defining Functions', url: 'https://docs.python.org/3/tutorial/controlflow.html#defining-functions' }],
        tasks: ['Написать функцию с *args', 'Использовать map/filter'],
        difficulty: 'Начинающий'
      }
    },
    {
      left: 132.83, top: 120.23, width: 100, height: 50, text: "Списки", type: "subtopic",
      data: {
        label: 'Списки',
        description: 'list, методы, list comprehensions, slicing',
        duration: '2 дня',
        resources: [{ title: 'Lists Tutorial', url: 'https://docs.python.org/3/tutorial/datastructures.html#more-on-lists' }],
        tasks: ['Реализовать сортировку списка', 'Использовать list comprehension'],
        difficulty: 'Начинающий'
      }
    },
    {
      left: 240.06, top: 120.23, width: 116, height: 50, text: "Кортежи", type: "subtopic",
      data: {
        label: 'Кортежи',
        description: 'tuple, неизменяемость, распаковка, named tuples',
        duration: '1 день',
        resources: [{ title: 'Tuples Docs', url: 'https://docs.python.org/3/tutorial/datastructures.html#tuples-and-sequences' }],
        tasks: ['Использовать распаковку', 'Создать namedtuple'],
        difficulty: 'Начинающий'
      }
    },
    {
      left: 362.44, top: 120.23, width: 129, height: 50, text: "Множества", type: "subtopic",
      data: {
        label: 'Множества',
        description: 'set, frozenset, операции над множествами',
        duration: '1-2 дня',
        resources: [{ title: 'Sets Tutorial', url: 'https://docs.python.org/3/tutorial/datastructures.html#sets' }],
        tasks: ['Найти уникальные элементы', 'Реализовать пересечение множеств'],
        difficulty: 'Начинающий'
      }
    },
    {
      left: 131.83, top: 173.23, width: 360, height: 50, text: "Словари", type: "subtopic",
      data: {
        label: 'Словари',
        description: 'dict, методы, dict comprehensions, defaultdict',
        duration: '2-3 дня',
        resources: [{ title: 'Dictionaries', url: 'https://docs.python.org/3/tutorial/datastructures.html#dictionaries' }],
        tasks: ['Сгруппировать данные в dict', 'Использовать get() и setdefault()'],
        difficulty: 'Начинающий'
      }
    },
    
  {
    left: -615.97, top: 147.79, width: 267, height: 49, text: "Циклы", type: "subtopic",
    data: {
      label: 'Циклы',
      description: 'for, while, break, continue, else в циклах, вложенные циклы',
      duration: '3 дня',
      resources: [
        { title: 'Циклы в Python', url: 'https://docs.python.org/3/tutorial/controlflow.html#for-statements' }
      ],
      tasks: ['Написать цикл for для перебора списка', 'Реализовать цикл while с условием выхода'],
      difficulty: 'Начинающий'
    }
  },
  {
    left: -243.67, top: 316.73, width: 267, height: 49, text: "Массивы и Связные списки", type: "subtopic",
    data: {
      label: 'Массивы и Списки',
      description: 'list, операции со списками, списковые включения, связные списки',
      duration: '4 дня',
      resources: [
        { title: 'Списки в Python', url: 'https://docs.python.org/3/tutorial/datastructures.html#more-on-lists' }
      ],
      tasks: ['Создать список и выполнить основные операции', 'Реализовать односвязный список'],
      difficulty: 'Начинающий'
    }
  },
  {
    left: -243.67, top: 369.73, width: 267, height: 49, text: "Хеш таблицы", type: "subtopic",
    data: {
      label: 'Хеш-таблицы',
      description: 'dict, set, хеш-функции, коллизии, сложность операций',
      duration: '4 дня',
      resources: [
        { title: 'Словари в Python', url: 'https://docs.python.org/3/tutorial/datastructures.html#dictionaries' }
      ],
      tasks: ['Создать словарь и выполнить поиск по ключу', 'Реализовать простую хеш-таблицу'],
      difficulty: 'Средний'
    }
  },
  {
    left: -243.67, top: 422.73, width: 267, height: 49, text: "Очереди, Стеки и Деки", type: "subtopic",
    data: {
      label: 'Структуры данных',
      description: 'collections.deque, LIFO, FIFO, реализация стека и очереди',
      duration: '3 дня',
      resources: [
        { title: 'collections.deque', url: 'https://docs.python.org/3/library/collections.html#collections.deque' }
      ],
      tasks: ['Реализовать стек на основе списка', 'Создать очередь с использованием deque'],
      difficulty: 'Средний'
    }
  },
  {
    left: -243.67, top: 475.73, width: 267, height: 49, text: "Двоичное дерево поиска", type: "subtopic",
    data: {
      label: 'Деревья',
      description: 'BST, обходы дерева, вставка, поиск, удаление узлов',
      duration: '5 дней',
      resources: [
        { title: 'Деревья в Python', url: 'https://www.geeksforgeeks.org/binary-search-tree-data-structure/' }
      ],
      tasks: ['Реализовать вставку в BST', 'Написать функцию обхода дерева'],
      difficulty: 'Средний'
    }
  },
  {
    left: -243.67, top: 528.73, width: 267, height: 49, text: "Рекурсия", type: "subtopic",
    data: {
      label: 'Рекурсия',
      description: 'базовый случай, рекурсивный вызов, стек вызовов, оптимизация',
      duration: '4 дня',
      resources: [
        { title: 'Рекурсия в Python', url: 'https://realpython.com/python-thinking-recursively/' }
      ],
      tasks: ['Написать рекурсивную функцию факториала', 'Реализовать рекурсивный обход списка'],
      difficulty: 'Средний'
    }
  },
  {
    left: -243.67, top: 581.73, width: 267, height: 49, text: "Алгоритмы сортировки", type: "subtopic",
    data: {
      label: 'Сортировка',
      description: 'bubble, selection, insertion, merge, quick sort, сложность алгоритмов',
      duration: '5 дней',
      resources: [
        { title: 'Алгоритмы сортировки', url: 'https://realpython.com/sorting-algorithms-python/' }
      ],
      tasks: ['Реализовать сортировку пузырьком', 'Сравнить производительность разных алгоритмов'],
      difficulty: 'Средний'
    }
  },
  {
    left: 130.36, top: 263.92, width: 141, height: 50, text: "Встроенные", type: "subtopic",
    data: {
      label: 'Встроенные модули',
      description: 'os, sys, math, datetime, random и другие стандартные библиотеки',
      duration: '3 дня',
      resources: [
        { title: 'Python Standard Library', url: 'https://docs.python.org/3/library/' }
      ],
      tasks: ['Импортировать и использовать модуль math', 'Работать с датой и временем'],
      difficulty: 'Начинающий'
    }
  },
  {
    left: 279.46, top: 263.23, width: 196, height: 50, text: "Пользовательские", type: "subtopic",
    data: {
      label: 'Свои модули',
      description: 'создание модулей, пакеты, __init__.py, относительные импорты',
      duration: '3 дня',
      resources: [
        { title: 'Модули и пакеты', url: 'https://docs.python.org/3/tutorial/modules.html' }
      ],
      tasks: ['Создать собственный модуль', 'Организовать пакет с подмодулями'],
      difficulty: 'Средний'
    }
  },
  {
    left: -202.67, top: 734.73, width: 184, height: 49, text: "Классы", type: "subtopic",
    data: {
      label: 'Классы',
      description: 'определение класса, __init__, self, атрибуты и методы экземпляра',
      duration: '4 дня',
      resources: [
        { title: 'Классы в Python', url: 'https://docs.python.org/3/tutorial/classes.html' }
      ],
      tasks: ['Создать класс с конструктором', 'Добавить методы к классу'],
      difficulty: 'Начинающий'
    }
  },
  {
    left: -202.67, top: 787.73, width: 184, height: 49, text: "Наследование", type: "subtopic",
    data: {
      label: 'Наследование',
      description: 'базовые и производные классы, super(), множественное наследование, MRO',
      duration: '4 дня',
      resources: [
        { title: 'Наследование', url: 'https://docs.python.org/3/tutorial/classes.html#inheritance' }
      ],
      tasks: ['Создать иерархию классов', 'Использовать super() для вызова родительского метода'],
      difficulty: 'Средний'
    }
  },
  {
    left: -202.67, top: 840.73, width: 184, height: 49, text: "Методы", type: "subtopic",
    data: {
      label: 'Методы',
      description: 'instance methods, @staticmethod, @classmethod, магические методы',
      duration: '3 дня',
      resources: [
        { title: 'Методы классов', url: 'https://realpython.com/instance-class-and-static-methods-demystified/' }
      ],
      tasks: ['Реализовать статический и классовый метод', 'Переопределить __str__ и __repr__'],
      difficulty: 'Средний'
    }
  },
  {
    left: -475.28, top: 229.76, width: 100, height: 49, text: "PyPI", type: "subtopic",
    data: {
      label: 'PyPI',
      description: 'Python Package Index — репозиторий сторонних пакетов',
      duration: '1 день',
      resources: [
        { title: 'PyPI Official Site', url: 'https://pypi.org/' }
      ],
      tasks: ['Найти пакет на PyPI', 'Изучить документацию популярного пакета'],
      difficulty: 'Начинающий'
    }
  },
  {
    left: -371.28, top: 229.76, width: 90, height: 49, text: "Pip", type: "subtopic",
    data: {
      label: 'Pip',
      description: 'установка, обновление, удаление пакетов, requirements.txt',
      duration: '2 дня',
      resources: [
        { title: 'Pip Documentation', url: 'https://pip.pypa.io/' }
      ],
      tasks: ['Установить пакет через pip', 'Создать requirements.txt для проекта'],
      difficulty: 'Начинающий'
    }
  },
  {
    left: -475.28, top: 282.76, width: 100, height: 49, text: "Conda", type: "subtopic",
    data: {
      label: 'Conda',
      description: 'менеджер пакетов и сред, работа с окружениями, каналы',
      duration: '3 дня',
      resources: [
        { title: 'Conda Docs', url: 'https://docs.conda.io/' }
      ],
      tasks: ['Создать окружение conda', 'Установить пакет в изолированное окружение'],
      difficulty: 'Средний'
    }
  },
  {
    left: -371.28, top: 282.76, width: 90, height: 49, text: "uv", type: "subtopic",
    data: {
      label: 'uv',
      description: 'быстрый менеджер пакетов и проектов для Python от Astral',
      duration: '2 дня',
      resources: [
        { title: 'uv GitHub', url: 'https://github.com/astral-sh/uv' }
      ],
      tasks: ['Установить uv', 'Создать проект с помощью uv'],
      difficulty: 'Средний'
    }
  },
  {
    left: -475.28, top: 335.76, width: 194, height: 49, text: "Poetry", type: "subtopic",
    data: {
      label: 'Poetry',
      description: 'управление зависимостями и сборка пакетов, pyproject.toml',
      duration: '3 дня',
      resources: [
        { title: 'Poetry Documentation', url: 'https://python-poetry.org/docs/' }
      ],
      tasks: ['Инициализировать проект Poetry', 'Добавить зависимости через poetry add'],
      difficulty: 'Средний'
    }
  },
  {
    left: -601.89, top: 1088.88, width: 109, height: 49, text: "FastAPI", type: "subtopic",
    data: {
      label: 'FastAPI',
      description: 'современный фреймворк для создания API с аннотациями типов',
      duration: '5 дней',
      resources: [
        { title: 'FastAPI Docs', url: 'https://fastapi.tiangolo.com/' }
      ],
      tasks: ['Создать простой REST API', 'Добавить валидацию данных с Pydantic'],
      difficulty: 'Средний'
    }
  },
  {
    left: -489.39, top: 1088.88, width: 122, height: 49, text: "Django", type: "subtopic",
    data: {
      label: 'Django',
      description: 'полноценный веб-фреймворк, ORM, админ-панель, аутентификация',
      duration: '2 недели',
      resources: [
        { title: 'Django Documentation', url: 'https://docs.djangoproject.com/' }
      ],
      tasks: ['Создать модель и миграцию', 'Настроить маршруты и представления'],
      difficulty: 'Продвинутый'
    }
  },
  {
    left: -363.89, top: 1088.88, width: 102, height: 49, text: "Flask", type: "subtopic",
    data: {
      label: 'Flask',
      description: 'микрофреймворк для веб-разработки, гибкость и простота',
      duration: '4 дня',
      resources: [
        { title: 'Flask Documentation', url: 'https://flask.palletsprojects.com/' }
      ],
      tasks: ['Запустить простое веб-приложение', 'Добавить маршруты и шаблоны'],
      difficulty: 'Начинающий'
    }
  },
  {
    left: -596.78, top: 1154.08, width: 100, height: 49, text: "aiohttp", type: "subtopic",
    data: {
      label: 'aiohttp',
      description: 'асинхронный HTTP-клиент/сервер для asyncio',
      duration: '4 дня',
      resources: [
        { title: 'aiohttp Docs', url: 'https://docs.aiohttp.org/' }
      ],
      tasks: ['Сделать асинхронный HTTP-запрос', 'Создать простой асинхронный сервер'],
      difficulty: 'Продвинутый'
    }
  },
  {
    left: -201.1, top: 1077.59, width: 205, height: 49, text: "Пуллинг", type: "subtopic",
    data: {
      label: 'Polling',
      description: 'опрос ресурсов, периодические запросы, долгосрочное опрашивание',
      duration: '2 дня',
      resources: [
        { title: 'Polling Patterns', url: 'https://microservices.io/patterns/data/polling.html' }
      ],
      tasks: ['Реализовать простой polling-механизм', 'Оптимизировать интервалы опроса'],
      difficulty: 'Средний'
    }
  },
  {
    left: -201.1, top: 1130.59, width: 205, height: 49, text: "Асинхронность", type: "subtopic",
    data: {
      label: 'Async/Await',
      description: 'asyncio, корутины, event loop, асинхронные операции ввода-вывода',
      duration: '5 дней',
      resources: [
        { title: 'asyncio Documentation', url: 'https://docs.python.org/3/library/asyncio.html' }
      ],
      tasks: ['Написать асинхронную функцию', 'Запустить несколько корутин параллельно'],
      difficulty: 'Продвинутый'
    }
  },
  {
    left: -201.1, top: 1183.59, width: 205, height: 49, text: "GIL", type: "subtopic",
    data: {
      label: 'GIL',
      description: 'Global Interpreter Lock, влияние на многопоточность, обходные пути',
      duration: '3 дня',
      resources: [
        { title: 'Understanding GIL', url: 'https://realpython.com/python-gil/' }
      ],
      tasks: ['Продемонстрировать ограничение GIL', 'Использовать multiprocessing для обхода'],
      difficulty: 'Продвинутый'
    }
  },
  {
    left: -201.1, top: 1236.59, width: 205, height: 49, text: "Многопоточность", type: "subtopic",
    data: {
      label: 'Threading',
      description: 'threading, Lock, RLock, Queue, проблемы синхронизации',
      duration: '4 дня',
      resources: [
        { title: 'Threading in Python', url: 'https://docs.python.org/3/library/threading.html' }
      ],
      tasks: ['Создать потоки для параллельной работы', 'Реализовать безопасный доступ к общим данным'],
      difficulty: 'Продвинутый'
    }
  },
  {
    left: 281.08, top: 753.47, width: 156, height: 49, text: "Pydantic", type: "subtopic",
    data: {
      label: 'Pydantic',
      description: 'валидация данных через аннотации типов, настройки, сериализация',
      duration: '3 дня',
      resources: [
        { title: 'Pydantic Docs', url: 'https://docs.pydantic.dev/' }
      ],
      tasks: ['Создать модель с валидацией', 'Настроить кастомные валидаторы'],
      difficulty: 'Средний'
    }
  },
  {
    left: 282.33, top: 806.55, width: 156, height: 49, text: "typing", type: "subtopic",
    data: {
      label: 'typing',
      description: 'аннотации типов, Generic, Protocol, TypedDict, Union, Optional',
      duration: '3 дня',
      resources: [
        { title: 'typing Module', url: 'https://docs.python.org/3/library/typing.html' }
      ],
      tasks: ['Добавить аннотации к функциям', 'Использовать Generic для универсальных классов'],
      difficulty: 'Средний'
    }
  },
  {
    left: 282.33, top: 859.55, width: 156, height: 49, text: "mypy", type: "subtopic",
    data: {
      label: 'mypy',
      description: 'статический анализатор типов, конфигурация, игнорирование ошибок',
      duration: '2 дня',
      resources: [
        { title: 'mypy Documentation', url: 'https://mypy.readthedocs.io/' }
      ],
      tasks: ['Запустить mypy на проекте', 'Настроить mypy.ini для гибкой проверки'],
      difficulty: 'Средний'
    }
  },
  {
    left: 282.98, top: 912.55, width: 156, height: 49, text: "pyright", type: "subtopic",
    data: {
      label: 'pyright',
      description: 'быстрый статический тип-чекер от Microsoft, интеграция с VS Code',
      duration: '2 дня',
      resources: [
        { title: 'pyright GitHub', url: 'https://github.com/microsoft/pyright' }
      ],
      tasks: ['Установить pyright', 'Настроить проверку в CI/CD'],
      difficulty: 'Средний'
    }
  },
  {
    left: 68.27, top: 1052.64, width: 107, height: 49, text: "yapf", type: "subtopic",
    data: {
      label: 'yapf',
      description: 'форматирование кода в стиле Google, настройка через .style.yapf',
      duration: '1 день',
      resources: [
        { title: 'yapf GitHub', url: 'https://github.com/google/yapf' }
      ],
      tasks: ['Отформатировать файл через yapf', 'Настроить стиль форматирования'],
      difficulty: 'Начинающий'
    }
  },
  {
    left: 68.27, top: 1105.64, width: 107, height: 49, text: "black", type: "subtopic",
    data: {
      label: 'Black',
      description: 'безкомпромиссный форматировщик кода, совместимость с pre-commit',
      duration: '1 день',
      resources: [
        { title: 'Black Documentation', url: 'https://black.readthedocs.io/' }
      ],
      tasks: ['Применить black к проекту', 'Настроить интеграцию с редактором'],
      difficulty: 'Начинающий'
    }
  },
  {
    left: 68.27, top: 1158.64, width: 107, height: 49, text: "ruff", type: "subtopic",
    data: {
      label: 'ruff',
      description: 'сверхбыстрый линтер и форматировщик, замена flake8 + black + isort',
      duration: '2 дня',
      resources: [
        { title: 'Ruff Documentation', url: 'https://docs.astral.sh/ruff/' }
      ],
      tasks: ['Запустить ruff check', 'Настроить правила в pyproject.toml'],
      difficulty: 'Средний'
    }
  },
  {
    left: 281.1, top: 1236.59, width: 145, height: 46, text: "Sphinx", type: "subtopic",
    data: {
      label: 'Sphinx',
      description: 'генератор документации, reStructuredText, авто-документирование',
      duration: '4 дня',
      resources: [
        { title: 'Sphinx Documentation', url: 'https://www.sphinx-doc.org/' }
      ],
      tasks: ['Создать базовую документацию', 'Настроить авто-генерацию из docstrings'],
      difficulty: 'Средний'
    }
  },
  {
    left: 267.08, top: 1415.75, width: 171, height: 49, text: "unittest", type: "subtopic",
    data: {
      label: 'unittest',
      description: 'стандартная библиотека для тестирования, TestCase, assert-методы',
      duration: '3 дня',
      resources: [
        { title: 'unittest Docs', url: 'https://docs.python.org/3/library/unittest.html' }
      ],
      tasks: ['Написать тест для функции', 'Использовать setUp и tearDown'],
      difficulty: 'Начинающий'
    }
  },
  {
    left: 338.08, top: 1362.75, width: 100, height: 49, text: "nose", type: "subtopic",
    data: {
      label: 'nose',
      description: 'расширение unittest с авто-поиском тестов (устаревший)',
      duration: '2 дня',
      resources: [
        { title: 'nose GitHub', url: 'https://github.com/nose-devs/nose' }
      ],
      tasks: ['Запустить тесты через nosetests', 'Мигрировать на pytest при необходимости'],
      difficulty: 'Средний'
    }
  },
  {
    left: 267.08, top: 1362.75, width: 67, height: 49, text: "tox", type: "subtopic",
    data: {
      label: 'tox',
      description: 'автоматизация тестирования в разных окружениях Python',
      duration: '3 дня',
      resources: [
        { title: 'tox Documentation', url: 'https://tox.wiki/' }
      ],
      tasks: ['Настроить tox.ini для нескольких версий Python', 'Запустить тесты в изолированных env'],
      difficulty: 'Продвинутый'
    }
  },
  {
    left: 267.08, top: 1468.75, width: 171, height: 49, text: "doctest", type: "subtopic",
    data: {
      label: 'doctest',
      description: 'тестирование через примеры в docstring, интеграция с документацией',
      duration: '2 дня',
      resources: [
        { title: 'doctest Module', url: 'https://docs.python.org/3/library/doctest.html' }
      ],
      tasks: ['Добавить doctest в функцию', 'Запустить проверку через python -m doctest'],
      difficulty: 'Начинающий'
    }
  },
  {
    left: 267.08, top: 1521.75, width: 171, height: 49, text: "pytest", type: "subtopic",
    data: {
      label: 'pytest',
      description: 'мощный фреймворк для тестов, фикстуры, параметризация, плагины',
      duration: '4 дня',
      resources: [
        { title: 'pytest Documentation', url: 'https://docs.pytest.org/' }
      ],
      tasks: ['Написать параметризованный тест', 'Использовать фикстуры для setup/teardown'],
      difficulty: 'Средний'
    }
  },
  {
    left: -611.73, top: 565.08, width: 203, height: 49, text: "pyproject.toml", type: "subtopic",
    data: {
      label: 'pyproject.toml',
      description: 'стандартный конфиг-файл проекта, зависимости, инструменты, метаданные',
      duration: '2 дня',
      resources: [
        { title: 'PEP 518', url: 'https://peps.python.org/pep-0518/' }
      ],
      tasks: ['Создать pyproject.toml для проекта', 'Настроить зависимости и скрипты'],
      difficulty: 'Средний'
    }
  },
  {
    left: 81.05, top: 822.15, width: 145, height: 49, text: "Pipenv", type: "subtopic",
    data: {
      label: 'Pipenv',
      description: 'менеджер зависимостей с виртуальными окружениями, Pipfile',
      duration: '3 дня',
      resources: [
        { title: 'Pipenv Docs', url: 'https://pipenv.pypa.io/' }
      ],
      tasks: ['Инициализировать проект с Pipenv', 'Добавить зависимости в Pipfile'],
      difficulty: 'Средний'
    }
  },
  {
    left: 81.05, top: 875.15, width: 145, height: 49, text: "virtualenv", type: "subtopic",
    data: {
      label: 'virtualenv',
      description: 'создание изолированных окружений Python, активация, управление',
      duration: '2 дня',
      resources: [
        { title: 'virtualenv Documentation', url: 'https://virtualenv.pypa.io/' }
      ],
      tasks: ['Создать виртуальное окружение', 'Активировать и установить пакеты'],
      difficulty: 'Начинающий'
    }
  },
  {
    left: 81.05, top: 928.15, width: 145, height: 46, text: "pyenv", type: "subtopic",
    data: {
      label: 'pyenv',
      description: 'управление несколькими версиями Python, установка, переключение',
      duration: '2 дня',
      resources: [
        { title: 'pyenv GitHub', url: 'https://github.com/pyenv/pyenv' }
      ],
      tasks: ['Установить pyenv', 'Переключиться между версиями Python'],
      difficulty: 'Средний'
    }
  }
  ];

// export const NODES = [
//   // Заголовки
//   { left: -173.17, top: -161.77, width: 126, height: 68, fontSize: 28, text: "Python", type: "header" },
//   { left: 281.1, top: 1291.47, width: 145, height: 36, fontSize: 17, text: "Документация", type: "header" },
//   { left: -578.31, top: 619.08, width: 143, height: 36, fontSize: 17, text: "Конфигурация", type: "header" },
//   { left: 83.62, top: 991.06, width: 145, height: 34, fontSize: 17, text: "Окружение", type: "header" },
  
//   // Темы (зелёные)
//   { left: -243.17, top: 67.23, width: 266, height: 49, text: "Изучение основ", type: "topic" },
//   { left: -243.67, top: 216.71, width: 268, height: 49, text: "Структуры данных и Алгоритмы", type: "topic" },
//   { left: 163.16, top: 345.73, width: 242, height: 49, text: "Модули", type: "topic" },
//   { left: 163.16, top: 398.73, width: 242, height: 49, text: "Лямбда выражения", type: "topic" },
//   { left: 163.16, top: 451.73, width: 242, height: 49, text: "Декораторы", type: "topic" },
//   { left: 163.16, top: 504.73, width: 242, height: 49, text: "Генераторы", type: "topic" },
//   { left: 163.16, top: 557.73, width: 242, height: 49, text: "Регулярные выражения", type: "topic" },
//   { left: -248.17, top: 657.73, width: 275, height: 49, text: "ООП", type: "topic" },
//   { left: -475.28, top: 425.76, width: 194, height: 49, text: "Пакетные менеджеры", type: "topic" },
//   { left: -616.81, top: 982.53, width: 252, height: 49, text: "Фреймворки", type: "topic" },
//   { left: -201.1, top: 982.53, width: 205, height: 49, text: "Конкурентность", type: "topic" },
//   { left: 283.33, top: 978.45, width: 156, height: 49, text: "Статическая типизация", type: "topic" },
//   { left: 260.33, top: 1106.71, width: 179, height: 49, text: "Форматирование кода", type: "topic" },
//   { left: 2.83, top: 1447.01, width: 161, height: 49, text: "Тестирование", type: "topic" },
//   { left: -621.17, top: 498.73, width: 221, height: 49, text: "Стандартные пакеты", type: "topic" },

//   // Подтемы (жёлтые)
//   { left: -615.97, top: -11.21, width: 267, height: 49, text: "Базовый синтаксис", type: "subtopic" },
//   { left: -615.97, top: 41.79, width: 267, height: 49, text: "Переменные и Типы данных", type: "subtopic" },
//   { left: -615.97, top: 94.79, width: 267, height: 49, text: "Условные выражения", type: "subtopic" },
//   { left: 131.83, top: -38.77, width: 360, height: 50, text: "Приведение типов", type: "subtopic" },
//   { left: 131.83, top: 14.23, width: 360, height: 50, text: "Исключения", type: "subtopic" },
//   { left: 131.83, top: 67.23, width: 360, height: 50, text: "Функции, Встроенные функции", type: "subtopic" },
//   { left: 132.83, top: 120.23, width: 100, height: 50, text: "Списки", type: "subtopic" },
//   { left: 240.06, top: 120.23, width: 116, height: 50, text: "Кортежи", type: "subtopic" },
//   { left: 362.44, top: 120.23, width: 129, height: 50, text: "Множества", type: "subtopic" },
//   { left: 131.83, top: 173.23, width: 360, height: 50, text: "Словари", type: "subtopic" },
//   { left: -615.97, top: 147.79, width: 267, height: 49, text: "Циклы", type: "subtopic" },
//   { left: -243.67, top: 316.73, width: 267, height: 49, text: "Массивы и Связные списки", type: "subtopic" },
//   { left: -243.67, top: 369.73, width: 267, height: 49, text: "Хеш таблицы", type: "subtopic" },
//   { left: -243.67, top: 422.73, width: 267, height: 49, text: "Очереди, Стеки и Деки", type: "subtopic" },
//   { left: -243.67, top: 475.73, width: 267, height: 49, text: "Двоичное дерево поиска", type: "subtopic" },
//   { left: -243.67, top: 528.73, width: 267, height: 49, text: "Рекурсия", type: "subtopic" },
//   { left: -243.67, top: 581.73, width: 267, height: 49, text: "Алгоритмы сортировки", type: "subtopic" },
//   { left: 130.36, top: 263.92, width: 141, height: 50, text: "Встроенные", type: "subtopic" },
//   { left: 279.46, top: 263.23, width: 196, height: 50, text: "Пользовательские", type: "subtopic" },
//   { left: -202.67, top: 734.73, width: 184, height: 49, text: "Классы", type: "subtopic" },
//   { left: -202.67, top: 787.73, width: 184, height: 49, text: "Наследование", type: "subtopic" },
//   { left: -202.67, top: 840.73, width: 184, height: 49, text: "Методы", type: "subtopic" },
//   { left: -475.28, top: 229.76, width: 100, height: 49, text: "PyPI", type: "subtopic" },
//   { left: -371.28, top: 229.76, width: 90, height: 49, text: "Pip", type: "subtopic" },
//   { left: -475.28, top: 282.76, width: 100, height: 49, text: "Conda", type: "subtopic" },
//   { left: -371.28, top: 282.76, width: 90, height: 49, text: "uv", type: "subtopic" },
//   { left: -475.28, top: 335.76, width: 194, height: 49, text: "Poetry", type: "subtopic" },
//   { left: -601.89, top: 1088.88, width: 109, height: 49, text: "FastAPI", type: "subtopic" },
//   { left: -489.39, top: 1088.88, width: 122, height: 49, text: "Django", type: "subtopic" },
//   { left: -363.89, top: 1088.88, width: 102, height: 49, text: "Flask", type: "subtopic" },
//   { left: -596.78, top: 1154.08, width: 100, height: 49, text: "aiohttp", type: "subtopic" },
//   { left: -201.1, top: 1077.59, width: 205, height: 49, text: "Пуллинг", type: "subtopic" },
//   { left: -201.1, top: 1130.59, width: 205, height: 49, text: "Асинхронность", type: "subtopic" },
//   { left: -201.1, top: 1183.59, width: 205, height: 49, text: "GIL", type: "subtopic" },
//   { left: -201.1, top: 1236.59, width: 205, height: 49, text: "Многопоточность", type: "subtopic" },
//   { left: 281.08, top: 753.47, width: 156, height: 49, text: "Pydantic", type: "subtopic" },
//   { left: 282.33, top: 806.55, width: 156, height: 49, text: "typing", type: "subtopic" },
//   { left: 282.33, top: 859.55, width: 156, height: 49, text: "mypy", type: "subtopic" },
//   { left: 282.98, top: 912.55, width: 156, height: 49, text: "pyright", type: "subtopic" },
//   { left: 68.27, top: 1052.64, width: 107, height: 49, text: "yapf", type: "subtopic" },
//   { left: 68.27, top: 1105.64, width: 107, height: 49, text: "black", type: "subtopic" },
//   { left: 68.27, top: 1158.64, width: 107, height: 49, text: "ruff", type: "subtopic" },
//   { left: 281.1, top: 1236.59, width: 145, height: 46, text: "Sphinx", type: "subtopic" },
//   { left: 267.08, top: 1415.75, width: 171, height: 49, text: "unittest", type: "subtopic" },
//   { left: 338.08, top: 1362.75, width: 100, height: 49, text: "nose", type: "subtopic" },
//   { left: 267.08, top: 1362.75, width: 67, height: 49, text: "tox", type: "subtopic" },
//   { left: 267.08, top: 1468.75, width: 171, height: 49, text: "doctest", type: "subtopic" },
//   { left: 267.08, top: 1521.75, width: 171, height: 49, text: "pytest", type: "subtopic" },
//   { left: -611.73, top: 565.08, width: 203, height: 49, text: "pyproject.toml", type: "subtopic" },
//   { left: 81.05, top: 822.15, width: 145, height: 49, text: "Pipenv", type: "subtopic" },
//   { left: 81.05, top: 875.15, width: 145, height: 49, text: "virtualenv", type: "subtopic" },
//   { left: 81.05, top: 928.15, width: 145, height: 46, text: "pyenv", type: "subtopic" },
// ];