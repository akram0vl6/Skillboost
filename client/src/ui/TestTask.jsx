import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { testTasks } from '../data/testTaskData'

const TestTask = () => {
    const [data, setData] = useState()

    const { id } = useParams()

    console.log(id);

    useEffect(() => {
        for (let i = 0; i < testTasks.length; i++) {
            if (id == testTasks[i].id) {
                setData(testTasks[i])
            }
        }
        console.log(data);
    })

    return (
        <div className='text-[var(--color-text)]'>
            <Link to={"/test-tasks"} className="truncate">
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
                    Тестовые задания
                </button>
            </Link>
            <section className="flex flex-col gap-2">
                {data && data.description && (
                    <>
                        <h3 className="font-bold text-xl">Задача</h3>
                        <p>{data.company}</p>
                        <section className="overflow-auto">

                            <div className="text-xl">
                                {data.description.split('\n').map((line, idx) => (
                                    <p key={idx} className="mb-10">
                                        {line || <br />}
                                    </p>
                                ))}
                            </div>

                        </section>
                    </>
                )}
            </section>
        </div>
    )
}

export default TestTask