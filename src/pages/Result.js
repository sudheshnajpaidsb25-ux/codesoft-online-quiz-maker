import { Link } from "react-router-dom";

function Result() {
  return (
    <div>
      <h1>Quiz Result</h1>

      <h2>Your Score: 1/1</h2>

      <h3>Correct Answer:</h3>
      <p>Delhi</p>

      <Link to="/">
        <button>Go Home</button>
      </Link>
    </div>
  );
}

export default Result;