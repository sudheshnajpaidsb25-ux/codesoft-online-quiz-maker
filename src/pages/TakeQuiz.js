import { useState } from "react";
import { Link } from "react-router-dom";

function TakeQuiz() {
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const checkAnswer = (answer) => {
    if (submitted) return;

    if (answer === "Delhi") {
      setScore(1);
      alert("Correct Answer!");
    } else {
      alert("Wrong Answer!");
    }

    setSubmitted(true);
  };

  return (
    <div>
      <h1>Take Quiz</h1>

      <h3>What is the capital of India?</h3>

      <button onClick={() => checkAnswer("Delhi")}>
        Delhi
      </button>

      <br /><br />

      <button onClick={() => checkAnswer("Mumbai")}>
        Mumbai
      </button>

      <br /><br />

      <button onClick={() => checkAnswer("Chennai")}>
        Chennai
      </button>

      <br /><br />

      <button onClick={() => checkAnswer("Kolkata")}>
        Kolkata
      </button>

      {submitted && (
        <div>
          <h2>Score: {score}/1</h2>

          <Link to="/result">
            <button>View Result</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default TakeQuiz;