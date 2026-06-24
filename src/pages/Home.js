import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Online Quiz Maker</h1>
<p>Create and take quizzes easily.</p>

      <Link to="/create-quiz">
        <button>Create Quiz</button>
      </Link>

      <br /><br />

      <Link to="/quizzes">
        <button>View Quizzes</button>
      </Link>

      <br /><br />

      <Link to="/login">
        <button>Login</button>
      </Link>

      <br /><br />

      <Link to="/register">
        <button>Register</button>
      </Link>
    </div>
  );
}

export default Home;