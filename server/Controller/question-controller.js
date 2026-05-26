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
      const { count = 15, category, technologies, frameworks, level } = req.query;
      
      console.log("🔍 Получены параметры:", { count, category, technologies, frameworks, level });
      
      const filter = {};
      const conditions = [];
  
      // 1️⃣ ФИЛЬТРАЦИЯ ПО НАПРАВЛЕНИЮ
      if (category && category !== 'all') {
        const categoryLower = category.toLowerCase();
        
        const categoryMap = {
          frontend: [
            'Frontend', 'JavaScript', 'React', 'Vue', 'Angular', 
            'HTML', 'CSS', 'TypeScript', 'Next.js', 'Redux',
            'Webpack', 'SASS', 'LESS', 'Bootstrap', 'Material-UI', 'jQuery'
          ],
          fullstack: [
            'Frontend', 'JavaScript', 'React', 'Vue', 'Angular', 
            'HTML', 'CSS', 'TypeScript', 'Next.js', 'Node.js',
            'Express', 'MongoDB', 'PostgreSQL', 'MySQL', 'Docker',
            'AWS', 'DevOps', 'Fullstack', 'GraphQL', 'REST API'
          ],
          backend: [
            'Backend', 'Node.js', 'Express', 'Python', 'Django',
            'Java', 'Spring', 'C#', '.NET', 'Go', 'Rust',
            'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'GraphQL',
            'REST API', 'Microservices', 'Docker', 'Kubernetes',
            'AWS', 'Azure', 'Linux', 'Nginx', 'Kafka', 'RabbitMQ',
            'PHP', 'Laravel', 'Ruby', 'Ruby on Rails'
          ]
        };
  
        if (categoryMap[categoryLower]) {
          // Ищем по category ИЛИ по полю technologies (строка!)
          conditions.push({
            $or: [
              { category: { $in: categoryMap[categoryLower] } },
              { technologies: { $in: categoryMap[categoryLower] } }
            ]
          });
        } else {
          // Конкретная технология
          conditions.push({
            $or: [
              { category: category },
              { technologies: category }
            ]
          });
        }
      }
  
      // 2️⃣ ФИЛЬТРАЦИЯ ПО ТЕХНОЛОГИЯМ
      if (technologies && technologies !== 'all') {
        // Разбиваем строку на массив
        const techArray = technologies.split(',').map(t => t.trim()).filter(Boolean);
        
        if (techArray.length > 0) {
          conditions.push({
            $or: [
              { technologies: { $in: techArray } },
              { category: { $in: techArray } },
              // Ищем в тексте вопроса и ответа
              { title: { $regex: techArray.join('|'), $options: 'i' } },
              { question: { $regex: techArray.join('|'), $options: 'i' } },
              { answer: { $regex: techArray.join('|'), $options: 'i' } }
            ]
          });
        }
      }
  
      // 3️⃣ ФИЛЬТРАЦИЯ ПО ФРЕЙМВОРКАМ
      if (frameworks && frameworks !== 'all') {
        const frameworkArray = frameworks.split(',').map(f => f.trim()).filter(Boolean);
        
        if (frameworkArray.length > 0) {
          conditions.push({
            $or: [
              { frameworks: { $in: frameworkArray } },
              { technologies: { $in: frameworkArray } },
              { category: { $in: frameworkArray } },
              { title: { $regex: frameworkArray.join('|'), $options: 'i' } },
              { answer: { $regex: frameworkArray.join('|'), $options: 'i' } }
            ]
          });
        }
      }
  
      // 4️⃣ ФИЛЬТРАЦИЯ ПО УРОВНЮ
      if (level && level !== 'all') {
        const ratingMap = {
          'Стажёр': ['1', '2'],
          'Стажер': ['1', '2'],
          'Junior': ['1', '2'],
          'Middle': ['2', '3'],
          'Senior': ['3', '4'],
          'Lead': ['4', '5']
        };
        
        const ratings = ratingMap[level] || ['1', '2'];
        conditions.push({ rating: { $in: ratings } });
      }
  
      // Объединяем условия
      if (conditions.length > 0) {
        filter.$and = conditions;
      }
  
      console.log("📊 Итоговый фильтр:", JSON.stringify(filter, null, 2));
  
      // Получаем вопросы
      const questionCount = Math.min(Number(count), 50);
      
      let questions;
      try {
        questions = await Question.aggregate([
          { $match: filter },
          { $sample: { size: questionCount } }
        ]);
      } catch (error) {
        console.log("⚠️ $sample не поддерживается, используем find");
        const allQuestions = await Question.find(filter).lean();
        
        // Перемешиваем
        for (let i = allQuestions.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
        }
        
        questions = allQuestions.slice(0, questionCount);
      }
  
      console.log(`✅ Найдено вопросов: ${questions.length}`);
      
      if (questions.length === 0) {
        console.log("❌ Вопросы не найдены!");
        
        // ДЕБАГ: Проверим, какие category и rating есть в БД
        const allCategories = await Question.distinct('category');
        const allRatings = await Question.distinct('rating');
        console.log("📋 Доступные категории:", allCategories);
        console.log("📋 Доступные рейтинги:", allRatings);
      }
  
      res.json(questions);
      
    } catch (error) {
      console.error("❌ Ошибка:", error);
      res.status(500).json({ message: "Ошибка загрузки вопросов", error });
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