const Question = require("../Models/question-models");

class QuestionController {
  async getAllQuestions(req, res) {
    try {
      const questions = await Question.find();
      res.status(200).json(questions);
    } catch (error) {
      res.status(500).json({ message: "Ошибка получения вопросов", error });
    }
  }

  async createQuestion(req, res) {
    try {
      const { title, question, answer, category, technologies, frameworks, level ,difficulty  } = req.body;
      const newQuestion = new Question({
        title,
        question,
        answer,
        category,
        technologies,
        frameworks,
        level,
        difficulty,
      });
      const savedQuestion = await newQuestion.save();
      res.status(201).json(savedQuestion);
    } catch (error) {
      res.status(500).json({ message: "Ошибка создания вопроса", error });
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
    const {
      count = 5,
      category,
      technologies,
      frameworks,
      level
    } = req.query;

    const filter = {};

    if (category) {
      filter.category = { $regex: `^${category}$`, $options: "i" };
    }

    if (technologies && frameworks) {
      filter.$or = [
        { technologies: { $regex: `^${technologies}$`, $options: "i" } },
        { frameworks: { $regex: `^${frameworks}$`, $options: "i" } }
      ];
    } else if (technologies) {
      filter.technologies = { $regex: `^${technologies}$`, $options: "i" };
    } else if (frameworks) {
      filter.frameworks = { $regex: `^${frameworks}$`, $options: "i" };
    }

    if (level) {
      filter.level = { $regex: `^${level}$`, $options: "i" };
    }

    console.log("Фильтр для поиска:", filter);

    const questions = await Question.aggregate([
      { $match: filter },
      { $sample: { size: Number(count) } }
    ]);

    res.json(questions);
  } catch (error) {
    console.error("Ошибка загрузки вопросов", error);
    res.status(500).json({ message: "Ошибка загрузки вопросов", error });
  }
}



}

module.exports = new QuestionController();
