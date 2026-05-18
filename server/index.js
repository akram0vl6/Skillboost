const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const router = require("./Router/router");
const cors = require("cors");

const URL = "mongodb+srv://akramovakramov32:5G8bBpKYGlvAl4I7@cluster1.u1mby92.mongodb.net/?appName=Cluster1";
const app = express();

// Настройка CORS
app.use(cors({
  origin: '*',
  allowedHeaders: ['Content-Type', 'Authorization'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware для надежного подключения к MongoDB в Serverless-среде
let isConnected = false;
app.use(async (req, res, next) => {
  if (isConnected) {
    return next();
  }
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("DB ok");
    next();
  } catch (err) {
    console.error("DB error", err);
    res.status(500).json({ error: "Database connection failed" });
  }
});

// Ваши роуты
app.use("/api", router);

// Для локальной разработки (чтобы работал npm run start / node index.js)
if (process.env.NODE_ENV !== 'production') {
  const PORT = 4444;
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}

// Обязательный экспорт для Vercel
module.exports = app;
