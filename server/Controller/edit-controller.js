const User = require("../Models/User-models");

class EditController {
  async edit(req, res) {
    try {
      const userId = req.userId; // Получаем ID пользователя (нужно добавить middleware для проверки авторизации)
      const { fullName } = req.body;
      let avatarUrl = req.file ? `/uploads/${req.file.filename}` : undefined;

      const updatedData = {};
      if (fullName) updatedData.fullName = fullName;
      if (avatarUrl) updatedData.avatarUrl = avatarUrl;

      // Обновляем данные пользователя
      const updatedUser = await User.findByIdAndUpdate(userId, updatedData, {
        new: true,
      });

      res.json(updatedUser);
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: "Ошибка при редактировании профиля" });
    }
  }
}

module.exports = new EditController();
