import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function QuizList() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const savedQuizzes =
      JSON.parse(localStorage.getItem("quizzes")) || [];

    setQuizzes(savedQuizzes);
  }, []);

  return (
    <div>
      <h1>Available Quizzes</h1>

      {quizzes.map((quiz, index) => (
        <div key={index}>
          <h3>{quiz.question}</h3>

          <ul>
            {quiz.options.map((option, i) => (
              <li key={i}>{option}</li>
            ))}
          </ul>

          <Link to="/quiz">
            <button>Take Quiz</button>
          </Link>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default QuizList;