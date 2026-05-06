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
  
      // 1️⃣ ФИЛЬТРАЦИЯ ПО НАПРАВЛЕНИЮ (Frontend/Backend/Fullstack)
      if (category) {
        const categoryLower = category.toLowerCase();
        
        const categoryMap = {
          frontend: [
            'Frontend', 'JavaScript', 'React', 'Vue', 'Angular', 
            'HTML', 'CSS', 'TypeScript', 'Next.js', 'Redux',
            'Webpack', 'SASS', 'LESS', 'Bootstrap', 'Material-UI',
            'jQuery'
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
          ],
        };

        if (categoryMap[categoryLower]) {
          conditions.push({
            category: { 
              $in: categoryMap[categoryLower].map(cat => new RegExp(`^${cat}$`, 'i'))
            }
          });
        } else {
          // Если категория не в мапе, ищем как есть
          conditions.push({ category: new RegExp(`^${category}$`, 'i') });
        }
      }
  
      // 2️⃣ ФИЛЬТРАЦИЯ ПО ТЕХНОЛОГИИ/ЯЗЫКУ
      if (technologies && technologies !== 'all') {
        conditions.push({ 
          category: new RegExp(`^${technologies}$`, 'i')
        });
      }
  
      // 3️⃣ ФИЛЬТРАЦИЯ ПО ФРЕЙМВОРКУ
      if (frameworks && frameworks !== 'all') {
        conditions.push({
          $or: [
            { category: new RegExp(`^${frameworks}$`, 'i') },
            { answer: new RegExp(frameworks, 'i') },
            { title: new RegExp(frameworks, 'i') }
          ]
        });
      }
  
      // 4️⃣ ФИЛЬТРАЦИЯ ПО УРОВНЮ СЛОЖНОСТИ
      if (level) {
        const ratingMap = {
          'Стажёр': ['1', '2'],
          'Стажер': ['1', '2'],
          'Junior': ['1', '2'],
          'Middle': ['2', '3'],
          'Senior': ['3', '4'],
          'Lead': ['4', '5']
        };
        
        const ratings = ratingMap[level] || ['1', '2'];
        conditions.push({ 
          rating: { $in: ratings }
        });
      }
  
      // Объединяем все условия через $and
      if (conditions.length > 0) {
        filter.$and = conditions;
      }
  
      console.log("📊 Итоговый фильтр:", JSON.stringify(filter, null, 2));
  
      // Получаем вопросы
      let questions;
      const questionCount = Math.min(Number(count), 50);
      
      try {
        questions = await Question.aggregate([
          { $match: filter },
          { $sample: { size: questionCount } },
        ]);
        
        console.log(`✅ Aggregate вернул: ${questions.length} вопросов`);
      } catch (aggregateError) {
        console.log("⚠️ Aggregate failed, using find");
        
        questions = await Question.find(filter)
          .limit(questionCount)
          .lean();
        
        // Перемешиваем
        for (let i = questions.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [questions[i], questions[j]] = [questions[j], questions[i]];
        }
        
        questions = questions.slice(0, questionCount);
        console.log(`✅ Find вернул: ${questions.length} вопросов`);
      }
  
      // Показываем пример уровней найденных вопросов
      if (questions.length > 0) {
        const ratings = questions.map(q => q.rating);
        console.log("📈 Уровни вопросов:", ratings);
      } else {
        console.log("❌ Вопросы не найдены!");
      }
  
      res.json(questions);
      
    } catch (error) {
      console.error("❌ Ошибка загрузки вопросов:", error);
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