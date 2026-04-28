import React, { useState } from 'react'
import { testTasks } from '../data/testTaskData';
const TestTasks = () => {
  const [expanded, setExpanded] = useState(false);

  const specialties = [
    { name: "Python разработчик", count: 1, icon: "https://cdn.solvit.space/topics/python.svg" },
    { name: "Frontend разработчик", count: 4, icon: null },
    { name: "Backend разработчик", count: 21, icon: null },
    { name: "Продуктовый аналитик", count: 4, icon: null },
    { name: "Data Scientist", count: 1, icon: null },
    { name: "iOS разработчик", count: 1, icon: null },
    { name: "Аналитик данных", count: 5, icon: null },
    { name: "BI аналитик", count: 1, icon: null },
  ];

  const totalCount = specialties.reduce((sum, s) => sum + s.count, 0);
  console.log(testTasks)
  return (
    <div className='text-[var(--color-text)]'>
      <h1 className="lg:text-3xl text-2xl font-bold">Тестовые задания</h1>
      <div className="flex flex-col  rounded-2xl  pt-4 pb-2 w-full bg-[var(--bg-02]">
        <header className="flex justify-between">
          <h3 className="font-semibold text-xl">Выберите специальность</h3>
          <div className="flex flex-wrap">
            <button className="py-[5px] flex items-center rounded-full px-2 text-center border hover:shadow transition-all">
              Все
              <span className="text-xs text-gray-500 ml-3 px-1.5 py-[1px] bg-gray-100 rounded-full transition-colors">
                {totalCount}
              </span>
            </button>
          </div>
        </header>

        <div
          className="overflow-hidden transition-all duration-300"
          style={{ maxHeight: expanded ? "500px" : "60px" }}
        >
          <div className="flex gap-2 flex-wrap py-2 px-1">
            {specialties.map((spec) => (
              <button
                key={spec.name}
                className="py-[5px] flex items-center rounded-full px-2 text-center border hover:shadow transition-all"
              >
                {spec.icon && (
                  <span className="flex mr-1 bg-gray-100 rounded-full p-1 min-w-6 min-h-6 items-center justify-around">
                    <img src={spec.icon} alt={spec.name} width="16" height="16" />
                  </span>
                )}
                {spec.name}
                <span className="text-xs text-gray-500 ml-3 px-1.5 py-[1px] bg-gray-100 rounded-full transition-colors">
                  {spec.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="inline-flex items-center gap-3 mt-2 w-fit mx-auto hover:scale-105 transition-transform duration-300"
        >
          {expanded ? "Свернуть" : "Развернуть"}
          <svg
            width="14"
            height="15.08"
            viewBox="0 0 13 14"
            className="transition-transform duration-300"
            style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
          >
            <g fill="none">
              <path
                d="M6.5 14.0016L0.5 8.00156L1.9 6.60156L6.5 11.1766L11.1 6.60156L12.5 8.00156L6.5 14.0016ZM6.5 8.00156L0.5 2.00156L1.9 0.601562L6.5 5.17656L11.1 0.601562L12.5 2.00156L6.5 8.00156Z"
                fill="currentColor"
              />
            </g>
          </svg>
        </button>
      </div>
      <div>
        {testTasks.map((task) => (
          <section key={task.id} className="relative w-full flex flex-col p-4 my-4 gap-4 rounded-2xl cursor-pointer border shadow transition-colors">
            <header className="flex flex-col gap-1">
              <section className="flex justify-between text-sm">
                <p>
                  <span className="font-medium">{task.company}</span>
                </p>
              </section>
              <h2 className="font-semibold transition-colors">
                {task.title}
              </h2>
            </header>
            <section className="flex justify-between items-center">
              <section className="flex items-end gap-1">
                <span className="text-xs text-gray-500">{task.difficulty}</span>
                <span className="text-xs text-gray-500">•</span>
                <span className="text-xs text-gray-500">{task.tech}</span>
              </section>
              <p className="text-xs">17 ноября 2025</p>
            </section>
          </section>
        ))}
      </div>
    </div>
  )
}

export default TestTasks