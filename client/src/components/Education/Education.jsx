import "./Education.css";
import { Link } from 'react-router-dom'

const Education = () => {
  return (
    <div className="education">
      <div className="education-questions">
        <h1>Список вопросов</h1>
        <Link className="link" to="/home/questions">Изучить</Link>
      </div>
    </div>
  );
}

export default Education