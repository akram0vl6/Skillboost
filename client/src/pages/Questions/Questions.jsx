import axios from "axios";
import React, { useEffect, useState } from "react";
import { questionsApi } from "../../shared/api/questions";
import { Link } from "react-router-dom";
import QuestionsSection from "../../widgets/QuestionsSection";


const Questions = () => {


  return (
    <div className="text-[var(--color-text)]">
      <div className="mb-5">
        <h1 className="lg:text-5xl text-4xl font-bold mb-5">
          База вопросов
        </h1>
        <h2 className="text-xl leading-7">
          Изучай нужные тебе технологии. Отвечай на вопросы и <br />
          отслеживай{" "}
          <Link to="/profile" className="text-[#09B87E]">
            свой прогресс
          </Link>
        </h2>
      </div>

      <QuestionsSection />
    </div>
  );
};

export default Questions;
