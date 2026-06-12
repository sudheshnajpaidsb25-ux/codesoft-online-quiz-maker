
import { BrowserRouter, Routes,Route,Link 
} from "react-router-dom";
import Jobs from "./jobs";
import Login from "./Login";
import Register from "./Register";
import './App.css';
function App() {
  return (
  <BrowserRouter>
  <nav>
  <Link to="/">Home</Link> |
  <Link to="/jobs"> Jobs</Link> |
  <Link to="/login"> Login</Link> |
  <Link to="/register"> Register</Link>
</nav>
    <Routes>
      <footer>
  <p>© 2026 Job Board. All Rights Reserved.</p>
</footer>
      <Route
        path="/"
        element={
          <div className="home">
            <h1>Job Board</h1>
            <h2>Find Your Dream Job</h2>
            <p> Search and apply for jobs from top companies.</p>
          </div>
        }
      />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
  );
}
export default App;