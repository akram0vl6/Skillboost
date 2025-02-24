const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  title: { type: String, required: true }, // краткое описание или заголовок вопроса
  question: { type: String, required: true }, // текст вопроса
  answer: { type: String, required: true }, // подробный ответ
  category: { type: String, default: "Frontend" }, // категория (можно расширить для разных тем)
  difficulty: {
    type: String,
    enum: ["Лёгкая", "Средняя", "Сложная"],
    default: "Средняя",
  }, // уровень сложности
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Question", QuestionSchema);
