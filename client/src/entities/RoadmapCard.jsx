import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { roadmaps } from '../shared/data/roadmapData';
import { Link } from 'react-router-dom'

import PythonMindMap from '../widgets/PythonMindMap';
import ModalGraph from '../shared/ui/ModalGraph';

const RoadmapCard = () => {
    const [data, setData] = useState(null);
    const [isModal, setIsModal] = useState(false)
    const [selectedNode, setSelectedNode] = useState(null);
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
        <div className='flex flex-col lg:flex-row justify-between gap-6 lg:gap-8'>
            <div className='flex-1 min-w-0 text-[var(--color-text)]'>
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
                <PythonMindMap isModal={isModal} setIsModal={setIsModal} setSelectedNode={setSelectedNode} />            </div>
            
                <ModalGraph isOpen={isModal}
                    onClose={() => setIsModal(false)}
                    nodeData={selectedNode} />
          
        </div>
    );
};

export default RoadmapCard;