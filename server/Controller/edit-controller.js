const User = require("../Models/User-models");

class EditController {
  async edit(req, res) {
    try {
      const userId = req.userId;

      // Все поля, которые могут прийти
      const {
        fullName,
        username,
        location,
        email,
        bio,
        skills,
        grade,
        specialization,
      } = req.body;

      // Проверяем, если файл пришёл (через multer)
      let avatarUrl = req.file ? `/uploads/${req.file.filename}` : undefined;

      // Собираем только те данные, что реально есть
      const updatedData = {};

      if (fullName) updatedData.fullName = fullName;
      if (username) updatedData.username = username;
      if (location) updatedData.location = location;
      if (email) updatedData.email = email;
      if (bio) updatedData.bio = bio;
      if (skills) updatedData.skills = Array.isArray(skills) ? skills : [skills];
      if (grade) updatedData.grade = grade;
      if (specialization) updatedData.specialization = specialization;
      if (avatarUrl) updatedData.avatarUrl = avatarUrl;

      // Обновляем пользователя
      const updatedUser = await User.findByIdAndUpdate(userId, updatedData, {
        new: true, // вернуть обновлённого пользователя
      });

      res.json(updatedUser);
    } catch (e) {
      console.error("Ошибка при редактировании профиля:", e);
      res.status(500).json({ message: "Ошибка при редактировании профиля" });
    }
  }
}

module.exports = new EditController();
