const Question = require("../Models/question-models");

class QuestionController {
  async getAllQuestions(req, res) {
    try {
      const questions = await Question.find();
      res.status(200).json(questions);
    } catch (error) {
      res.status(500).json({ message: "Ошибка получения вопросов", error });
      dsd;
      f;
    }
  }

  async createQuestion(req, res) {
    // try {
    //   const { title, question, answer, category, technologies, frameworks, level ,difficulty  } = req.body;
    //   const newQuestion = new Question({
    //     title,
    //     question,
    //     answer,
    //     category,
    //     technologies,
    //     frameworks,
    //     level,
    //     difficulty,
    //   });
    //   const savedQuestion = await newQuestion.save();
    //   res.status(201).json(savedQuestion);
    // } catch (error) {
    //   res.status(500).json({ message: "Ошибка создания вопроса", error });
    // }
    try {
      const questions = req.body;

      if (!Array.isArray(questions)) {
        return res.status(400).json({ message: "Должен быть массив вопросов" });
      }

      // Сопоставление числовых уровней сложности с текстом
      const difficultyMap = {
        1: "Стажёр",
        2: "Стажёр",
        3: "Junior",
        4: "Junior",
        5: "Middle",
        6: "Middle",
        7: "Middle",
        8: "Senior",
        9: "Senior",
      };

      // Преобразуем каждый вопрос
      const formattedQuestions = questions.map((q) => ({
        ...q,
        difficulty: difficultyMap[q.difficulty] || "Junior", // по умолчанию "Средняя"
      }));

      const savedQuestions = await Question.insertMany(formattedQuestions);

      soich = res.status(201).json({
        message: `✅ Добавлено ${savedQuestions.length} вопросов`,
        data: savedQuestions,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Ошибка при добавлении вопросов", error });
    }
  }

  async randamQuestion(req, res) {
    try {
      const count = await Question.countDocuments();
      const randomIndex = Math.floor(Math.random() * count);
      const question = await Question.findOne().skip(randomIndex);
      res.json(question);
    } catch (error) {
      res.status(500).json({ message: "Ошибка получения вопроса", error });
    }
  }

  async catigoryquestion(req, res) {
    try {
      const { count = 15, category, level } = req.query; // Убрал technologies, frameworks
      
      const filter = {};
  
      // Обработка категории
      if (category) {
        if (category.toLowerCase() === 'frontend' || category.toLowerCase() === "fullstack") {
          filter.category = {
            $in: [
              'Frontend', 'JavaScript', 'React', 'Vue', 'Angular', 
              'HTML', 'CSS', 'TypeScript', 'Next.js'
            ]
          };
        } else {
          // Для Backend и других
          filter.category = { $regex: `^${category}$`, $options: "i" };
        }
      }
  
      // УРОВЕНЬ СЛОЖНОСТИ
      if (level) {
        let mappedLevel = level;
        if (level === "Стажер") mappedLevel = "Junior";
        filter.difficulty = { $regex: `^${mappedLevel}$`, $options: "i" };
      }
  
      console.log("Фильтр для поиска:", filter);
  
      const questions = await Question.aggregate([
        { $match: filter },
        { $sample: { size: Number(count) } },
      ]);
  
      res.json(questions);
    } catch (error) {
      console.error("Ошибка загрузки вопросов", error);
      res.status(500).json({ message: "Ошибка загрузки вопросов", error });
    }
  }

  async getQuestion(req, res) {
    try {
      const { tech, difficulty } = req.query; // сразу берём оба
      const filter = { category: tech }; // фильтр по категории
      if (difficulty) filter.difficulty = difficulty; // добавляем сложность, если есть

      const questions = await Question.find(filter);
      res.status(200).json(questions);
    } catch (error) {
      res.status(500).json({ message: "Ошибка получения вопроса", error });
    }
  }
}

module.exports = new QuestionController();
