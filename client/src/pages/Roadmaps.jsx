import React from 'react'
import { Link } from 'react-router-dom';
import { roadmaps } from '../data/roadmapData';

const Roadmaps = () => {

  return (
    <div>
        <div className="mb-5">
            <h1 className="lg:text-5xl text-4xl font-bold mb-5">
            Роадмапы
            </h1>
            <h2 className="text-xl leading-7">
            1. Ознакомьтесь с планом своего развития в составленных роадмапах
            </h2>
            <h2 className="text-xl leading-7">
            2. Проверяйте свои знания, отвечая на вопросы
            </h2>
          </div>
          <div className="mb-10 mt-10 w-full relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {roadmaps.map((card) => (

              <Link
                to={`/roadmaps/${card.path}`}
                className="group/link duration-150"
                aria-label={`Перейти на базу вопросов по теме ${card.name}`}
              >
                <section className="min-w-[328px] sm:w-full h-[112px] bg-[var(--bg-03)] dark:bg-st-white-T5 rounded-2xl gap-2 p-3 sm:gap-4 sm:px-4 sm:py-4 flex justify-between">
                  <section className="flex gap-4">
                    <div className="bg-st-black-10 dark:bg-st-white-T10 w-20 h-20 rounded-[20px] flex justify-center items-center p-1.5">
                      <img
                        className="w-full h-full object-contain"
                        src={`${card.img}`}
                        alt="Python"
                      />
                    </div>
                    <div className="max-w-[275px] flex-1">
                      <h3 className="font-bold text-base sm:text-xl mb-2 line-clamp-1">
                        {card.name}
                      </h3>
                      <p className="text-st-gray-65 text-sm sm:text-base dark:text-st-gray-45 group-hover/link:text-st-green-90 transition-colors line-clamp-2">
                        {card.title}
                      </p>
                    </div>
                  </section>

                </section>
              </Link>
              ))}



            </div>

          </div> 
    </div>

  )
}

export default Roadmaps