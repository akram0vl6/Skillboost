import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { roadmaps } from '../data/roadmapData';
import {Link} from 'react-router-dom'

const Roadmap = () => {
    const [data, setData] = useState(null);
    const { tech } = useParams();

    useEffect(() => {
        const found = roadmaps.find(item => item.path === tech);
        setData(found || null);
    }, [tech, roadmaps]);

    useEffect(() => {
        if (data) {
            console.log('Данные загружены:', data);
        } else {
            console.log('Карта не найдена для:', tech);
        }
    }, [data]);

    if (!data) {
        return <div>Загрузка или карта не найдена...</div>;
    }

    return (
        <div className='text-[var(--color-text)]'>
                      <Link to={"/roadmaps"} className="truncate">
                <button className="flex items-center gap-1 text-sm text-st-gray-60   cursor-pointer mb-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--st-icons"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        style={{ fontSize: "16px" }}
                    >
                        <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m15 6l-6 6l6 6"
                        ></path>
                    </svg>
                    Вернуться к списку роадмапов
                </button>
            </Link>
            <h1 className="lg:text-5xl text-4xl font-bold mb-5">{data.name}</h1>
            <p className='text-xl' >{data.title}</p>
            <img className='bg-black border-2 rounded-2xl my-10' src={data.roadmap} alt={data.name} />
        </div>
    );
};

export default Roadmap;