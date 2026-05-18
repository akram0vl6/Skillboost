const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const router = require("./Router/router");
const cors = require("cors");

const PORT = 4444;
const URL = "mongodb+srv://akramovakramov32:5G8bBpKYGlvAl4I7@cluster1.u1mby92.mongodb.net/?appName=Cluster1";
const app = express();

app.use(cors({
  origin: '*', // Разрешает запросы с любого домена
  allowedHeaders: ['Content-Type', 'Authorization'], // Разрешаем заголовок токена
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'] // Разрешаем все основные методы
}));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api", router);

async function start() {
  try {
    await mongoose.connect(URL);
    console.log("DB ok");

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (err) {
    console.log("DB error", err);
  }
}

start();
