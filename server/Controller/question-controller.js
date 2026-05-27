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
      const questions = req.body;

      if (!Array.isArray(questions)) {
        return res.status(400).json({ message: "Должен быть массив вопросов" });
      }

      // Маппинг rating в текстовую сложность
      const difficultyMap = {
        "1": "Junior",
        "2": "Junior",
        "3": "Middle",
        "4": "Senior",
      };

      const formattedQuestions = questions.map((q) => ({
        ...q,
        difficulty: difficultyMap[q.rating] || "Junior",
      }));

      const savedQuestions = await Question.insertMany(formattedQuestions);

      res.status(201).json({
        message: `✅ Добавлено ${savedQuestions.length} вопросов`,
        data: savedQuestions,
      });
    } catch (error) {
      res.status(500).json({ message: "Ошибка при добавлении вопросов", error });
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
      const { count = 15, direction, language, framework, level } = req.query;
      
      console.log("🔍 Параметры:", { direction, language, framework, level });
      
      const filter = {};
      
      // 1. Фильтр по направлению (category)
      if (direction && direction !== 'all') {
        filter.category = direction;
      }
      
      // 2. Фильтр по языку - ищем в technologies и frameworks
      if (language && language !== 'all') {
        filter.$or = [
          { technologies: { $regex: language, $options: 'i' } },
          { frameworks: { $regex: language, $options: 'i' } }
        ];
      }
      
      // 3. Фильтр по фреймворку - ищем в technologies и frameworks
      if (framework && framework !== 'all') {
        const frameworkFilter = {
          $or: [
            { technologies: { $regex: framework, $options: 'i' } },
            { frameworks: { $regex: framework, $options: 'i' } }
          ]
        };
        
        // Если уже есть $or от language, объединяем через $and
        if (filter.$or) {
          filter.$and = [
            { $or: filter.$or },
            frameworkFilter
          ];
          delete filter.$or;
        } else {
          filter.$or = frameworkFilter.$or;
        }
      }
      
      // 4. Фильтр по уровню - ищем в difficulty и level
      if (level && level !== 'all') {
        const levelSearch = level === 'Стажер' ? 'Стажёр' : level;
        
        if (filter.$and) {
          filter.$and.push({
            $or: [
              { difficulty: { $regex: levelSearch, $options: 'i' } },
              { level: { $regex: levelSearch, $options: 'i' } }
            ]
          });
        } else if (filter.$or) {
          filter.$and = [
            { $or: filter.$or },
            {
              $or: [
                { difficulty: { $regex: levelSearch, $options: 'i' } },
                { level: { $regex: levelSearch, $options: 'i' } }
              ]
            }
          ];
          delete filter.$or;
        } else {
          filter.$or = [
            { difficulty: { $regex: levelSearch, $options: 'i' } },
            { level: { $regex: levelSearch, $options: 'i' } }
          ];
        }
      }
      
      console.log("📊 Итоговый фильтр:", JSON.stringify(filter, null, 2));
      
      const questionCount = Math.min(Number(count), 50);
      
      // Получаем вопросы
      const allQuestions = await Question.find(filter).lean();
      
      // Перемешиваем
      for (let i = allQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
      }
      
      const questions = allQuestions.slice(0, questionCount);
      
      console.log(`✅ Найдено: ${questions.length} вопросов`);
      
      // Если ничего не найдено
      if (questions.length === 0) {
        const categories = await Question.distinct('category');
        const difficulties = await Question.distinct('difficulty');
        const levels = await Question.distinct('level');
        
        return res.json({
          questions: [],
          message: 'Нет вопросов по заданным фильтрам',
          available: {
            categories,
            difficulties,
            levels
          }
        });
      }
      
      res.json(questions);
      
    } catch (error) {
      console.error("❌ Ошибка:", error);
      res.status(500).json({ message: "Ошибка", error: error.message });
    }
  }

  async getQuestion(req, res) {
    try {
      const { tech, difficulty } = req.query;
      const filter = {};
      
      if (tech) filter.category = new RegExp(`^${tech}$`, 'i');
      if (difficulty) filter.difficulty = difficulty;

      const questions = await Question.find(filter);
      res.status(200).json(questions);
    } catch (error) {
      res.status(500).json({ message: "Ошибка получения вопроса", error });
    }
  }
}

module.exports = new QuestionController();