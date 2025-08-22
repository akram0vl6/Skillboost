import React from 'react';

const technologies = [
  { img: '../../public/img/tehnalogi/python.svg', href: '/baza_voprosov/python', name: 'Python' },
  { img: '../../public/img/tehnalogi/java.webp', href: '/baza_voprosov/java', name: 'Java' },
  { img: '../../public/img/tehnalogi/csharp.svg', href: '/baza_voprosov/csharp', name: 'C#' },
  { img: '../../public/img/tehnalogi/?.svg', href: '/baza_voprosov/cpp', name: 'C++' },
  { img: '../../public/img/tehnalogi/golang.webp', href: '/baza_voprosov/golang', name: 'Golang' },
  { img: '../../public/img/tehnalogi/javascript.webp', href: '/baza_voprosov/javascript', name: 'JavaScript' },
  { img: '../../public/img/tehnalogi/?.svg', href: '/baza_voprosov/html', name: 'HTML' },
  { img: '../../public/img/tehnalogi/?.svg', href: '/baza_voprosov/css', name: 'CSS' },
  { img: '../../public/img/tehnalogi/database.webp', href: '/baza_voprosov/sql', name: 'SQL' },
  { img: '../../public/img/tehnalogi/git.webp', href: '/baza_voprosov/git', name: 'Git' },
  { img: '../../public/img/tehnalogi/docker.webp', href: '/baza_voprosov/docker', name: 'Docker' },
  { img: '../../public/img/tehnalogi/computer_science.webp', href: '/baza_voprosov/computer_science', name: 'Computer Science' },
];

const TechnologyTopicsSection = () => {
  return (
    <section className=" sm:w-full mb-[50px] rounded-xl px-7 pt-10 pb-7 leading-10 bg-[linear-gradient(0deg,rgba(135,236,166,1)_0%,rgba(44,167,139,1)_100%)]">
      <h2 className="text-white font-bold text-2xl sm:text-[40px] mb-[52px]">
        Изучайте технологии в нашей базе вопросов
      </h2>
      <section className="flex gap-3 flex-wrap" aria-label="Список технологий">
        {technologies.map((tech, i) => (
          <a
            key={i}
            href={tech.href}
            className="click-effect hover:bg-gray-200 h-9 bg-white rounded-full text-sm px-2 pl-2 pr-3 flex items-center justify-between gap-3"
            aria-labelledby={`topic-title-${i}`}
          >
            <div className="bg-st-green-90 w-7 h-7 flex justify-center items-center rounded-full">
              <img src={tech.img} alt="" />
              <span className="text-white text-xs font-bold">{tech.name[0]}</span>
            </div>
            <span id={`topic-title-${i}`} className="text-black">
              {tech.name}
            </span>
          </a>
        ))}
      </section>
    </section>
  );
};

export default TechnologyTopicsSection;