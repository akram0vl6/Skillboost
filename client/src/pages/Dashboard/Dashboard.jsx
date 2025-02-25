import "./Dashboard.css";

const Dashboard = () => {
  const storedData = JSON.parse(localStorage.getItem("data")) || {};
  const username = storedData.fullName || "Гость";

  return (
    <div className="dashboard">
      <h1>Привет, {username}!</h1>
      <p>
        Добро пожаловать в Skillboost — это платформа, которая объединяет
        IT-специалистов для обмена опытом, <br /> развития навыков и карьерного
        роста. Здесь вы можете управлять своими настройками, просматривать{" "}
        <br /> последние новости и готовиться к собеседованиям, чтобы успешно
        строить свою карьеру
      </p>
    </div>
  );
};

export default Dashboard;
