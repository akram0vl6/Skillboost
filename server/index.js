const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const router = require("./Router/router");
const cors = require("cors");

const PORT = 4444;
const URL = "mongodb://localhost:27017/YeaHub02";
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // Разрешаем запросы только с твоего клиента
    credentials: true, // Позволяем передавать куки и заголовки авторизации
  })
);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(express.json());
app.use(express.urlencoded());
app.use("/api", router);

app.listen(PORT, async () => {
  await mongoose
    .connect(URL)
    .then(() => console.log("DB ok"))
    .catch((err) => console.log("DB error", err));
  console.log(`Server started in ${PORT}`);
});
