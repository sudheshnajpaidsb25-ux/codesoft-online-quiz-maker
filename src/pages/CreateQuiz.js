import { useState } from "react";

function CreateQuiz() {
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");

  const handleSave = () => {
  const quiz = {
    question,
    options: [option1, option2, option3, option4],
    correctAnswer,
  };

  const oldQuizzes =
    JSON.parse(localStorage.getItem("quizzes")) || [];

  oldQuizzes.push(quiz);

  localStorage.setItem(
    "quizzes",
    JSON.stringify(oldQuizzes)
  );

  alert("Quiz Saved Successfully!");
};

  return (
    <div>
      <h1>Create Quiz</h1>

      <input
        type="text"
        placeholder="Enter Question"
        onChange={(e) => setQuestion(e.target.value)}
      />
      <br /><br />

      <input
        type="text"
        placeholder="Option 1"
        onChange={(e) => setOption1(e.target.value)}
      />
      <br /><br />

      <input
        type="text"
        placeholder="Option 2"
        onChange={(e) => setOption2(e.target.value)}
      />
      <br /><br />

      <input
        type="text"
        placeholder="Option 3"
        onChange={(e) => setOption3(e.target.value)}
      />
      <br /><br />

      <input
        type="text"
        placeholder="Option 4"
        onChange={(e) => setOption4(e.target.value)}
      />
      <br /><br />

      <input
        type="text"
        placeholder="Correct Answer"
        onChange={(e) => setCorrectAnswer(e.target.value)}
      />
      <br /><br />

      <button onClick={handleSave}>Save Quiz</button>
    </div>
  );
}

export default CreateQuiz;